import { UsersList } from "../features/users-list/ui/UsersList.tsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <UsersList
              searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
