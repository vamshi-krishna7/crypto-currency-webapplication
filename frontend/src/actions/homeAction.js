import axios from 'axios';
import {GET_STOCK_DETAILS_REQUEST, GET_STOCK_DETAILS_SUCCESS, SAVE_STOCK_DETAILS_REQUEST, SAVE_STOCK_DETAILS_SUCCESS} from '../types';

export const getStockDetails = (page, pagination) => async(dispatch) => {
    dispatch({
        type: GET_STOCK_DETAILS_REQUEST
    })
    if(pagination === "initial"){
        var res = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=46b88be604f5dc444c98a8208b1f29347a61a0b5&per-page=7&page=${page}`)
    }else if (pagination === "prev") {
        page = page - 1
        if( page <= 0) page = 1;
        var res = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=46b88be604f5dc444c98a8208b1f29347a61a0b5&per-page=7&page=${page}`)
    }else if (pagination === "next") {
        page = page + 1
        var res= await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=46b88be604f5dc444c98a8208b1f29347a61a0b5&per-page=7&page=${page}`)
    }
    const {data} = res;
    dispatch({
        type: GET_STOCK_DETAILS_SUCCESS,
        payload: {data, page}
    })
}


export const saveStockDetails = (item) => async(dispatch) => {
    const config = {
        headers: {
           'Content-Type': 'application/json'
        }
    }
    const res = await axios.post('/saveCryptoData', item, config)  
    dispatch({
        type: SAVE_STOCK_DETAILS_SUCCESS,
        payload: res.data
    })
}

