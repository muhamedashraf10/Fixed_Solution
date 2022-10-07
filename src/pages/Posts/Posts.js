import React from "react";

// react router dom
import { useParams } from "react-router-dom";

// react query
import { useGetPosts } from "../../hooks/useGetPosts";
import { useGetSingleUser } from "../../hooks/useGetSingleUser";

// component
import CardsOfPostsUser from "../../components/CardsOfPostsUser/CardsOfPostsUser";
import ErrorNetwork from "../../components/ErrorNetwork/ErrorNetwork";
import Spinner from "../../components/Spinner/Spinner";

const Posts = () => {
  const { id } = useParams();

  const {
    data: posts,
    isError: isErrorPosts,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useGetPosts();

  const {
    data: user,
    isError: isErrorUser,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useGetSingleUser(id);

  if (isLoadingPosts || isLoadingUser) {
    return (
      <section>
        <Spinner />
      </section>
    );
  }

  if (isErrorPosts || isErrorUser) {
    return (
      <section>
        <ErrorNetwork
          errorUser={errorUser?.message}
          errorPost={errorPosts?.message}
        />
      </section>
    );
  }

  return (
    <section>
      <h5>Posts Of</h5>
      <h2>{user.name}</h2>
      <div className="container">
        {posts
          ?.filter((el) => el.userId === +id)
          .map((post) => (
            <CardsOfPostsUser posts={post} key={post.id} user={user} />
          ))}
      </div>
    </section>
  );
};

export default Posts;
