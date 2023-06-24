import axios from "axios";
import React, { useEffect, useState } from "react";

function PostDetails() {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setPost(response.data));
  }, []);

  return (
    <div>
      <h3>Fetching a single record from api using useEffect hook</h3>
      <h2>{post && post.id}</h2>
      <h2>{post && post.title}</h2>
      <h2>{post && post.body}</h2>
    </div>
  );
}

export default PostDetails;
