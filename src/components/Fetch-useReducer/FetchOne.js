import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchOne(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something blooped.. My bad')
        })

    }, [])
    return(
        <div>
            <p>This one does the loading thingy</p>
            {loading ? 'Loading..' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchOne;