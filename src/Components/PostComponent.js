import React, { useEffect, useState } from "react";
import TableComponent from "./Http/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Actions/PostActions";
import { PostSelector } from "../Selectores/PostSelector";
import Loader from "./functionalComponnent/Loader";
import Button from "react-bootstrap/Button";
import axios from "axios";

function PostsComponent() {
  const { loading = false, posts = [], error = "" } = useSelector(PostSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    //Api url: http://localhost:5000/users
    dispatch(fetchPosts());
  }, []);

  const styleObj = { width: "90%", margin: "0 auto", padding: "30px" };
  return (
    <div style={styleObj}>
      <h2>Fetching data from api using thunk middleware</h2>
      {loading ? <Loader /> : ""}
      {posts.length ? <TableComponent posts={posts} /> : ""}
      {error ? <h5 style={{ color: "red" }}>{error}</h5> : ""}
    </div>
  );
}

export default PostsComponent;
