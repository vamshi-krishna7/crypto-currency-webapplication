import {GET_STOCK_DETAILS_REQUEST, GET_STOCK_DETAILS_SUCCESS, SAVE_STOCK_DETAILS_REQUEST, SAVE_STOCK_DETAILS_SUCCESS} from '../types';

const intialState = {
  loading: null,
  page: 1
}

export default (state=intialState, action) => {

    switch (action.type) {
      case GET_STOCK_DETAILS_REQUEST: 
      return {
        ...state,
        loading: true
      }
      case GET_STOCK_DETAILS_SUCCESS: 
      return {
        ...state,
        loading: false,
        stockDetails: action.payload.data,
        page: action.payload.page
      }
      case SAVE_STOCK_DETAILS_SUCCESS: 
      return {
        ...state,
        loading: false,
        savedStockDetails: action.payload
      }
      default:
        return {
          ...state,
        };
    }
}


// case SAVE_STOCK_DETAILS_REQUEST: