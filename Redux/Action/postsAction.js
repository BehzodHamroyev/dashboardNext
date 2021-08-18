import getPosts from "../../api/Posts/Posts"
import { dispatch } from "../Store/store";
import { SET_POSTS } from "../type";

const setPosts = async () => {
    const res = await getPosts();
    const action = { type: SET_POSTS, payload: res.data }
    dispatch(action)
}

export default setPosts;