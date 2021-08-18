import getPhotos from "../../api/Photos/getPhotos"
import { dispatch } from "../Store/store";
import { SET_PHOTOS } from "../type";

const setPhotos =async () => {
    const res = await getPhotos();
    const action = { type: SET_PHOTOS, payload: res.data };
    dispatch(action)
}
export default setPhotos;