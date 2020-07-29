
import axios from 'axios'


export const FETCHING_HEROES_LIST = "FETCHING_HEROES_LIST";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_ERROR = "FETCHING_ERROR;"




export const fetchingHeroesList = () => dispatch =>{
    dispatch({ type: FETCHING_HEROES_LIST })
    axios
    .get("https://api.opendota.com/api/heroStats")
    .then(res => {
        dispatch({ type: FETCHING_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err.message })
    })
}


