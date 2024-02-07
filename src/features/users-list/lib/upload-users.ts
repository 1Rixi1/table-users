import { instance } from "../../../commmon/api";
import { UsersDataType, UsersListType } from "../api/users-list-api-type.ts";

const MAX_USERS = 100;
const TOTAL_USERS = 1000;

let users: UsersListType[] = [];
let offset = 0;

export const uploadUsers = async () => {
  while (users.length < TOTAL_USERS) {
    const limit = Math.min(MAX_USERS, TOTAL_USERS - users.length);
    const response = await instance.get<UsersDataType>(
      `users?offset=${offset}&limit=${limit}`
    );

    users = users.concat(response.data.users);

    if (response.data.users.length < limit) {
      break;
    }
    offset += limit;
  }

  return users;
};
