import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AmbilJson} from '../action';


const Posts = () => {

    const api = useSelector(state => state.AmbilJson.data);
    console.log(api);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(AmbilJson());
    },[AmbilJson])

    function renderList() {

        if(!api){
            return <div>Loading...</div>
        }

        return api.map(post=> {
            console.log("post", post)
            return (
                <div key={post.id}>
                    <p>{post.userId}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )
        })
    }

    return (
        <div>
            {/* API Post Jsonplaceholder */}
            {renderList()}
        </div>
    )
}

export default Posts;