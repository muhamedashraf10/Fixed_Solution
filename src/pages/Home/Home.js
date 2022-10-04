import React, { useState } from "react";
import Cards from "../../components/Cards/Cards";
import Styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchNotFound from "../../components/SearchNotFound/SearchNotFound";
import { useQuery } from "react-query";
import { INSTANCE } from "../../InstanceAxios";
import Spinner from "../../components/Spinner/Spinner";
import ErrorNetwork from "../../components/ErrorNetwork/ErrorNetwork";

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

  async function fetchUsers() {
    const { data } = await INSTANCE.get("/users");
    setSearch(data);
    setUsers(data);
    return data;
  }

  const { isLoading, isError, error } = useQuery("users", fetchUsers);

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
            {users.map((user) => (
              <Cards users={user} key={user.id} />
            ))}
          </div>
        )}
      </>
    </section>
  );
};

export default Home;
