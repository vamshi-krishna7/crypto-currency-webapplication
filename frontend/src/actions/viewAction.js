import axios from 'axios';
import {GET_SAVED_STOCK_DETAILS_REQUEST, GET_SAVED_STOCK_DETAILS_SUCCESS, GET_SAVED_STOCK_DETAILS_BY_ID_REQUEST, GET_SAVED_STOCK_DETAILS_BY_ID_SUCCESS, DELETE_SAVED_STOCK_DETAILS_BY_ID_REQUEST, DELETE_SAVED_STOCK_DETAILS_BY_ID_SUCCESS} from '../types';

export const getSavedStockDetails = () => async(dispatch) => {
    dispatch({
        type: GET_SAVED_STOCK_DETAILS_REQUEST
    })
    const res = await axios.get('/saveCryptoData/')    
    dispatch({
        type: GET_SAVED_STOCK_DETAILS_SUCCESS,
        payload: res.data
    })
}

export const getSavedStockDetailsById = (id) => async(dispatch) => {
    dispatch({
        type: GET_SAVED_STOCK_DETAILS_BY_ID_REQUEST
    })
    const res = await axios.get(`/saveCryptoData/${id}`)    
    dispatch({
        type: GET_SAVED_STOCK_DETAILS_BY_ID_SUCCESS,
        payload: res.data
    })
}

export const deleteSavedStockDetailsById = (id) => async(dispatch) => {
    // dispatch({
    //     type: DELETE_SAVED_STOCK_DETAILS_BY_ID_REQUEST
    // })
    const config = {
        headers: {
           'Content-Type': 'application/json'
        },
        data : {
            id: id
        }
    }
    await axios.delete(`/saveCryptoData/`, config)    
    dispatch({
        type: DELETE_SAVED_STOCK_DETAILS_BY_ID_SUCCESS,
        payload: id
    })
}


