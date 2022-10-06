import React, { useState } from "react";

// instance axios
import { INSTANCE } from "../../InstanceAxios";

// react query
import { useQuery } from "react-query";

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

  console.log(users);

  function searchFilter(value) {
    const filterUsers = search.filter((p) => {
      let itemLowerCase = p.name.toLowerCase();
      let searchTermLowerCase = value.toLowerCase();
      return itemLowerCase.indexOf(searchTermLowerCase) > -1;
    });
    setUsers(filterUsers);
  }

  async function fetchUsers() {
    const { data } = await INSTANCE.get("/users");
    console.log(data);
    setSearch(data);
    setUsers(data);
    return data;
  }

  const { data, isLoading, isError, error, status } = useQuery(
    "users",
    fetchUsers
  );

  if (isLoading) {
    return (
      <section>
        <Spinner />
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <ErrorNetwork error={error?.message} />
      </section>
    );
  }

  return (
    <section className={Styles.Home}>
      <div className={Styles.searchBar}>
        <SearchBar searchFilter={searchFilter} />
      </div>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <>
        {users.length === 0 ? (
          <div className="container">
            <SearchNotFound />
          </div>
        ) : (
          <div className={`${Styles.Users} container`}>
            {data.map((user) => (
              <CardsOfUsers users={user} key={user.id} />
            ))}
          </div>
        )}
      </>
    </section>
  );
};

export default Home;
