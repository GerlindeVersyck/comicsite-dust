import { users } from "../data/users.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { createToken } from "../utils/jwt.js";

export const registerUser = async ({ name, email, password }) => {
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    const error = new Error("User already exists");
    error.status = 400;
    throw error;
  }
  const hashedPassword = await hashPassword(password);

  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password: hashedPassword,
    role: "user",
  };
  users.push(newUser);

  return {
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    token: createToken(newUser),
  };
};

export const loginUser = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    const error = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: createToken(user),
  };
};
