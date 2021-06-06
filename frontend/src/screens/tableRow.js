import {useDispatch} from 'react-redux';
import {saveStockDetails} from '../actions/homeAction';
import {deleteSavedStockDetailsById} from '../actions/viewAction';

const TableRow = (props) => {
  const dispatch = useDispatch()
    const {item, btnType} = props;

    const saveCryto = (item, btnType) => {
      if(btnType === "Save Data") {
        dispatch(saveStockDetails(item))
      }else if (btnType === "DELETE") {
        dispatch(deleteSavedStockDetailsById(item.id))
      }
    }

    return(
        <tr>
          <td >{item.name}</td>
          <td>{item.symbol}</td>
          <td>$ {item.market_cap}</td>
          <td><button onClick={() => saveCryto(item, btnType)} className={`btn ${btnType}`}>{btnType}</button></td>
          <td>$ {parseInt(item.price).toFixed(2)} USD</td>
        </tr>
    )
}

export default TableRow;