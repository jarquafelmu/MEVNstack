<template>
  <div>
    <h1>Create Task</h1>
    <form class="custom-form" @submit.prevent="onSubmit">
      <div class="mb-3 form-group">
        <label for="title">Title</label>
        <input
          v-model="task.title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="title"
          placeholder="title"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="body">Body</label>
        <textarea
          v-model="task.body"
          class="form-control"
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder="Body"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="due-date">Due Date</label>
        <input
          v-model="task.dueDate"
          type="date"
          class="form-control"
          id="due-date"
          aria-describedby="due-date"
          placeholder="Due Date"
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-secondary">Create</button>
      </div>
    </form>
  </div>
</template>
<script>
import * as taskService from "../../services/TaskService";
export default {
  name: "task-create",
  data: function () {
    return {
      task: {
        title: ``,
        body: ``,
        dueDate: ``,
      },
    };
  },
  methods: {
    onSubmit: async function () {
      const task = {
        task: this.task,
      };
      await taskService.createTask(task);
      this.$router.push({ name: `tasks-all` });
    },
  },
};
</script>
