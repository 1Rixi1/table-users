import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { Column } from "primereact/column";

import s from "./users.module.css";
import { UsersListType } from "../api/users-list-api-type.ts";
import { useCallback, useState } from "react";
import { useFetchUsers } from "../model/fetchUsers.ts";
import { IsLoading } from "../../../components/isLoading/isLoading.tsx";
import { Search } from "../../../components/search/ui/Search.tsx";

type Props = {
  searchCountry: string;
  setSearchCountry: (value: string) => void;
};

export const UsersList = ({ searchCountry, setSearchCountry }: Props) => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const { data, isLoading, isError } = useFetchUsers(searchCountry, page, rows);

  if (isError) {
    return <h1>ERROR !!!</h1>;
  }

  const onChangeHandler = (e: DataTableStateEvent) => {
    setPage(e.page as number);
    setRows(e.rows);
  };

  const profileImg = (rowData: UsersListType) => {
    return (
      <img
        src={`${rowData.profile_picture}`}
        alt="Profile"
        style={{ width: "50px", height: "50px" }}
      />
    );
  };

  return isLoading ? (
    <IsLoading />
  ) : (
    <div>
      <Search setSearchCountry={setSearchCountry} />

      <div className={s.userList}>
        <DataTable
          className={s.dataTable}
          tableStyle={{ minWidth: "50rem" }}
          value={data?.users}
          paginator
          rows={rows}
          rowsPerPageOptions={[5, 10]}
          onPage={onChangeHandler}
          first={page * rows}
        >
          <Column
            className={`${s.column} ${s.img}`}
            body={profileImg}
            header="Photo"
          />
          <Column className={s.column} field="first_name" header="firstName" />
          <Column className={s.column} field="last_name" header="lastName" />
          <Column className={s.column} field="phone" header="Phone" />
          <Column className={s.column} field="city" header="City" />
          <Column className={s.column} field="gender" header="Gender" />
        </DataTable>
      </div>
    </div>
  );
};
