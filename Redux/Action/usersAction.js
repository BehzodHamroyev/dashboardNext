import getUsers from '../../api/Users/getUsers'
import { dispatch } from '../Store/store';
import {  SET_USERS } from '../type';


const setUsers = async () => {
    const res = await getUsers();
    console.log(res);
    const action = { type: SET_USERS, payload: res.data }
    dispatch(action)

}
export  default setUsers;
