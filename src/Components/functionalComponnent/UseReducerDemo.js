import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import TableComponent from "../Http/TableComponent";
import Loader from "./Loader";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

//reducer function
const reducerFn = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
        error: "",
        posts: [],
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function UseReducerDemo() {
  //   const [posts, setPosts] = useState([]);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    //setLoading(true);
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          //   setLoading(false);
          //   setPosts(response.data);
          //   setError("");
          dispatch({ type: "FETCH", payload: response.data });
        })
        .catch((error) => {
          //   setLoading(false);
          //   setPosts([]);
          //   setError(error.message);
          dispatch({ type: "ERROR", payload: error.message });
        });
    }, 1000);
  }, []);

  return (
    <div>
      {state.loading && (
        <>
          <h2>Data fetching from api...</h2> <Loader />
        </>
      )}
      {state.posts && <TableComponent posts={state.posts} />}
      {state.error && <h3>{state.error}</h3>}
    </div>
  );
}

export default UseReducerDemo;
