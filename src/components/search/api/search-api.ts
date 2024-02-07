import { instance } from "../../../commmon/api";
import { UsersDataType } from "../../../features/users-list/api/users-list-api-type.ts";

export const usersSearch = {
  getUsers(searchCountry: string): Promise<UsersDataType> {
    return instance.get(`users?search=${searchCountry}`);
  },
};
