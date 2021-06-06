import '../app.css';
import {useEffect, useState} from 'react';
import TableRow from './tableRow';
import {useSelector, useDispatch} from 'react-redux';
import {getStockDetails} from '../actions/homeAction';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Home = () => {

  const [searchTerm, SetSearchTerm] = useState('')

    const dispatch = useDispatch()
    const home = useSelector((state) => state.home)
    const {stockDetails, loading, page} = home;

    useEffect(() => {
        dispatch(getStockDetails(page, "initial"))
    }, [])

  const onSearchHandler = () => {
    // dispatch()
  }
    return loading === null || loading === true ? (
      <h1>loading....</h1>
    ) : (
      <table>
        <thead>
          <tr>
            <th colSpan="5" style={{fontWeight: 'bold'}}>Stock Details Table</th>
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
          {stockDetails.map((item) => (
            <TableRow key={item.id} item={item} btnType="Save Data" />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td colSpan="2"  style={{textAlign: 'center'}}>
                <button onClick={() => dispatch(getStockDetails(page, "prev"))} className="prev-icon"><IoIosArrowBack  /></button>
                <span className="page-number">Page : {page}</span>
                <button onClick={() => dispatch(getStockDetails(page, "next"))} className="next-icon"><IoIosArrowForward /></button>
            </td>
          </tr>
        </tfoot>  
      </table>
    );
}

export default Home;

