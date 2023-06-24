import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TableComponent from "../Http/TableComponent";
//https://www.youtube.com/watch?v=YMSBRS83YZ8&t=1s
function PostComponent() {
  const [posts, setPosts] = useState([]);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, [fetch]);

  return (
    <div>
      <h2>Fetching data from api in useEffect</h2>
      <button onClick={() => setFetch(!fetch)}>Fetch Data</button>
      <TableComponent posts={posts} />
    </div>
  );
}

export default PostComponent;
