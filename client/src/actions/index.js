import axios from 'axios';
import { FETCH_USER } from "./types";


// action creator:
// we will use redux-thunk will aspect what is the value that will be
// returned from this action creator - if redux-thunk will see that we
// are returnning a function instead of a normal action
// redux-think will automaticlly will call this function with the dispatch  varaiable

export const fetchUser = () =>
    async (dispatch) => {
            const res = await axios.get('/api/current_user');
            dispatch({ type: FETCH_USER,  payload: res.data })
            };