import React, { useEffect, useState } from "react";

// react query
import { useGetAllUsers } from "../../hooks/useGetAllUsers";

// css module
import Styles from "./Home.module.css";

// components
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchNotFound from "../../components/SearchNotFound/SearchNotFound";
import Spinner from "../../components/Spinner/Spinner";
import ErrorNetwork from "../../components/ErrorNetwork/ErrorNetwork";
import CardsOfUsers from "../../components/CardsOfUsers/CardsOfUsers";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);

  function searchFilter(value) {
    const filterUsers = search.filter((p) => {
      let itemLowerCase = p.name.toLowerCase();
      let searchTermLowerCase = value.toLowerCase();
      return itemLowerCase.indexOf(searchTermLowerCase) > -1;
    });
    setUsers(filterUsers);
  }

  const { data, isLoading, isError, error } = useGetAllUsers();

  useEffect(() => {
    if (data) {
      setSearch(data);
      setUsers(data);
    }
  }, [data]);

  return (
    <section className={Styles.Home}>
      {isLoading ? (
        <div className={Styles.Loading}>
          <Spinner />
        </div>
      ) : isError ? (
        <div className={Styles.Error}>
          <ErrorNetwork error={error?.message} />
        </div>
      ) : data ? (
        <>
          <div className={Styles.searchBar}>
            <SearchBar searchFilter={searchFilter} />
          </div>
          <h5>Task Of</h5>
          <h2>Get Users</h2>

          <>
            {users.length === 0 ? (
              <div className="container">
                <SearchNotFound />
              </div>
            ) : (
              <div className={`${Styles.Users} container`}>
                {users.map((user) => (
                  <CardsOfUsers users={user} key={user.id} />
                ))}
              </div>
            )}
          </>
        </>
      ) : null}
    </section>
  );
};

export default Home;
