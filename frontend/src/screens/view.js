import '../app.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSavedStockDetails} from '../actions/viewAction';
import TableRow from './tableRow';

const View = () => {
    const dispatch = useDispatch()
    const view = useSelector((state) => state.view)
    const {loading, allstockData} = view;
    useEffect(() => {
        dispatch(getSavedStockDetails())
    }, [])

    return loading === null || loading === true ? (
      <h1>loading....</h1>
    ) : (
      <table>
        <thead>
          <tr>
            <th colSpan="5">Saved Stock Data Table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>market Cap</th>
            <th>Btn</th>
            <th>Current price</th>
          </tr>
          {allstockData.map((item) => (
            <TableRow key={item.id} item={item} btnType={"DELETE"}/>
          ))}
        </tbody>
      </table>
    );

}

export default View;