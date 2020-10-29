<template>
  <div class="d-flex flex-column">
    <div class="mb-4">
      <h1>Tasks</h1>
      <router-link to="/tasks/new" class="btn btn-success ml-2"
        >Create Task</router-link
      >
    </div>
    <div
      v-if="tasks && tasks.length > 0"
      class="d-flex flex-wrap justify-content-start"
    >
      <div
        v-for="task in tasks"
        :key="task._id"
        class="card mb-2 ml-2 text-white bg-dark"
        style="width: 18rem"
      >
        <div class="card-body">
          <div>
            <h5 class="card-title">{{ task.title }}</h5>
            <span class="small" :class="{ late: taskIsLate(task.dueDate) }">{{
              task.dueDate
            }}</span>
          </div>
          <h6 class="card-subtitle mb-2 text-muted">
            Created by {{ task.author.username }}
          </h6>
          <p class="card-text">
            {{ task.body }}
          </p>
          <div
            v-if="task.author._id === $store.state.userId"
            class="form-group form-check"
          >
            <input
              type="checkbox"
              id="completed"
              class="form-check-input"
              :disabled="task.completed"
              v-model="task.completed"
              @click="markAsCompleted(task)"
            />
            <label for="completed" class="form-check-label">Completed</label>
          </div>
          <div class="d-flex justify-content-between">
            <router-link
              type="button"
              tag="button"
              class="card-link btn btn-primary"
              to="{ name: 'tasks-edit', params: { id: task._id } }"
              v-if="task.author._id === $store.state.userId"
              >Edit</router-link
            >
          </div>
          <a
            href="#"
            @click.prevent="currentTaskId = task._id"
            class="card-link btn btn-danger"
            @click="modal.show()"
          >
            <!-- Create a model here #model1 using b5 -->
            Delete</a
          >
        </div>
      </div>
    </div>

    <div>
      <div id="modal1" class="modal" ref="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title">Delete Confirmation</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="my-4">
                Are you sure you would like to delete this task?
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="mr-1 btn btn-danger"
                @click="deleteTask"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="cancelModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="tasks && tasks.length === 0" class="ml-2">
      <div class="alert alert-info">No tasks found.</div>
    </div>
  </div>
</template>
<script>
import * as taskService from "../../services/TaskService";
import moment from "moment";
import { Modal } from "bootstrap";

export default {
  name: "tasks-all",
  data: function () {
    return {
      tasks: null,
      currentTaskId: null,
      modal: null,
    };
  },
  mounted() {
    // BUG: When modal appears it's below the overlay and is not interactable
    this.modal = new Modal(this.$refs.modal);
  },
  beforeRouteEnter(to, from, next) {
    taskService.getAllTasks().then((res) => {
      next((vm) => (vm.tasks = res.data.tasks));
    });
  },
  methods: {
    taskIsLate: function (date) {
      return moment(date).isBefore();
    },
    cancelModal: function () {
      this.modal.hide();
      this.currentTaskId = null;
    },
    deleteTask: async function () {
      this.modal.hide();
      await taskService.deleteTask(this.currentTaskId);
      const index = this.tasks.findIndex(
        (task) => task._id === this.currentTaskId
      );
      this.tasks.splice(index, 1);
      this.currentTaskId = null;
    },
    markAsCompleted: function (task) {
      task.completed = true;
      const request = {
        task: task,
      };
      taskService.updateTask(request);
    },
  },
};
</script>
