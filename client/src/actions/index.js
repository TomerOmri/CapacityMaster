import axios from 'axios';
import { FETCH_USER } from "./types";
import { FETCH_TEAM_MEMBERS } from "./types";


// action creator:
// we will use redux-thunk will aspect what is the value that will be
// returned from this action creator - if redux-thunk will see that we
// are returnning a function instead of a normal action
// redux-think will automaticlly will call this function with the dispatch  varaiable

export function fetchUser(){
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER,  payload: res.data })
    };
}


export function fetchTeamMembers(id){
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/team/getTeamMembers/${id}`);
            dispatch({ type: FETCH_TEAM_MEMBERS,  payload: res.data })
        }
        catch(e){
            console.log(e);
        }
    };
}


