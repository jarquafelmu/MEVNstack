import jwt from 'jsonwebtoken'

export function generateJWT(user) {
  const tokenData = { username: user.username, id: user._id }
  return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET)
}

export function requireLogin(req, res, next) {
  const token = decodeToken(req);
  if (!token) return res.status(401).json({ message: `you have to be logged in` });
  next();
}

export function decodeToken(req) {
  const token = req.headers.authorization || req.headers[`authorization`];
  if (!token)
    return null

  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) { return null }
}

export function getUserName(req) {
  const token = decodeToken(req);
  if (!token) return null;
  return token.user.username;
}

export function getUserId(req) {
  const token = decodeToken(req);
  if (!token) return null;
  return token.user.id;
}
