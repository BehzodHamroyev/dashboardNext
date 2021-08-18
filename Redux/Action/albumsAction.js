import getAlbums from "../../api/Albums/getAlbums"
import { dispatch } from "../Store/store";
import { SET_ALBUMS } from "../type"

const setAlbums = async () => {
    const res = await getAlbums();
    const action = { type: SET_ALBUMS, payload: res.data }
    dispatch(action)
}
export default setAlbums;