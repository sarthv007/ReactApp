import axios from "axios";
import React, { useEffect, useState } from "react";
import TableComponent from "../Http/TableComponent";

function FetchComponent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/pos")
        .then((response) => {
          setLoading(false);
          setPosts(response.data);
          setError("");
        })
        .catch((error) => {
          setLoading(false);
          setPosts([]);
          setError(error.message);
        });
    }, 5000);
  }, []);

  return (
    <div>
      {loading && <h2>Data fetching from api...</h2>}
      {posts && <TableComponent posts={posts} />}
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default FetchComponent;
