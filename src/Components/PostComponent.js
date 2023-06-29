import React, { useEffect } from "react";
import TableComponent from "./Http/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Actions/PostActions";
import { PostSelector } from "../Selectores/PostSelector";
import Loader from "./functionalComponnent/Loader";

function PostsComponent() {
  const { loading = false, posts = [], error = "" } = useSelector(PostSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>Fetching data from api using thunk middleware</h2>
      {loading ? <Loader /> : ""}
      {posts.length ? <TableComponent posts={posts} /> : ""}
      {error ? <h5 style={{ color: "red" }}>{error}</h5> : ""}
    </div>
  );
}

export default PostsComponent;
