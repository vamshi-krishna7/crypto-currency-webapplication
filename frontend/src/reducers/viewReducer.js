import {GET_SAVED_STOCK_DETAILS_REQUEST, GET_SAVED_STOCK_DETAILS_SUCCESS, GET_SAVED_STOCK_DETAILS_BY_ID_REQUEST, GET_SAVED_STOCK_DETAILS_BY_ID_SUCCESS, DELETE_SAVED_STOCK_DETAILS_BY_ID_REQUEST, DELETE_SAVED_STOCK_DETAILS_BY_ID_SUCCESS} from '../types';

const intialState = {
  loading: null
}

export default (state=intialState, action) => {

    switch (action.type) {
     case GET_SAVED_STOCK_DETAILS_REQUEST:
     case GET_SAVED_STOCK_DETAILS_BY_ID_REQUEST:
        return {
            ...state,
            loading: true,
        }
        case GET_SAVED_STOCK_DETAILS_SUCCESS: 
        return {
            ...state,
            loading: false,
            allstockData: action.payload
        }
        case GET_SAVED_STOCK_DETAILS_BY_ID_SUCCESS:
        return {
            ...state,
            loading: false,
            stockDataById: action.payload
        }
        case DELETE_SAVED_STOCK_DETAILS_BY_ID_SUCCESS:
        const filterdArr = state.allstockData.filter((item) => {
            return item.id !== action.payload
        })
            return {
                ...state,
                allstockData:filterdArr
            }
      default:
        return {
          ...state,
        };
    }
}



// case DELETE_SAVED_STOCK_DETAILS_BY_ID_REQUEST: