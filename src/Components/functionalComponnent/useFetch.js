import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, []);

  return data;
}

export default useFetch;
