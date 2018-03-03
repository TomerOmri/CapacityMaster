import { FETCH_TEAM_MEMBERS } from "../actions/types";


export default function (state = null, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_TEAM_MEMBERS:
            return action.payload || false;
        default:
            return state;
    }
}
