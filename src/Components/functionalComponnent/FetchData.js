import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

function FetchData() {
  const data = useFetch("https://jsonplaceholder.typicode.com/users/1/albums");

  return (
    <div>
      <h2>Fetching posts from api</h2>
      <ul>
        {data.length > 0 ? data.map((post) => <li>{post.title}</li>) : ""}
      </ul>
    </div>
  );
}

export default FetchData;
