import { User } from "@/types/resource";

export function findUserWithPassword(
  users: User[],
  usernameOrEmail: string,
  password: string
) {
  const user = users.find(
    (user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password
  );

  return user;
}

export function findUser(users: User[], usernameOrEmail: string) {
  const user = users.find(
    (user) =>
      user.username === usernameOrEmail || user.email === usernameOrEmail
  );

  return user;
}
