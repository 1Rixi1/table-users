import { useQuery } from "react-query";
import { usersSearch } from "../../../components/search/api/search-api.ts";
import { usersListApi } from "../api/users-list-api.ts";

export const useFetchUsers = (
  searchCountry: string,
  page: number,
  rows: number
) => {

  const { data, isLoading, isError } = useQuery(
    ["usersList", page, rows, searchCountry],
    async () => {
      return searchCountry
        ? usersSearch.getUsers(searchCountry)
        : usersListApi.getUsers();
    },
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};
