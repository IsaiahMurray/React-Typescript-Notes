import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]); //This empty array keeps it from fetching data infinitely
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>{post.title}</div>
      {/* <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
    </div>
  );
}

export default DataFetching;
