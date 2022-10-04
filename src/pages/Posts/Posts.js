import React from "react";
import { useParams } from "react-router-dom";
import CardsOfPostsUser from "../../components/CardsOfPostsUser/CardsOfPostsUser";
import ErrorNetwork from "../../components/ErrorNetwork/ErrorNetwork";
import Spinner from "../../components/Spinner/Spinner";
import { useGetPosts } from "../../hooks/useGetPosts";
import { useGetSingleUser } from "../../hooks/useGetSingleUser";

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
            <CardsOfPostsUser posts={post} key={post.id} />
          ))}
      </div>
    </section>
  );
};

export default Posts;
