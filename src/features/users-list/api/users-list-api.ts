import { UsersListType } from "./users-list-api-type.ts";
import { uploadUsers } from "../lib/upload-users.ts";

export const usersListApi = {
  async getUsers(): Promise<{ users: UsersListType[] }> {
    const users = await uploadUsers();
    return { users };
  },
};
