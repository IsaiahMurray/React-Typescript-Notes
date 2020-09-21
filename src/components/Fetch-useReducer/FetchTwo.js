import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FECTH-SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      }

    case "FECTH-ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      }
      
    default:
      return state;
  }
};

function FetchTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
           dispatch({type: 'FETCH-SUCCESS', payload: res.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH-ERROR'})
        })

    }, [])

  return(
      <div>
          {state.loading ? 'Loading..' : state.post.title}
            {state.error ? state.error : null}
      </div>
  )
}

export default FetchTwo;
