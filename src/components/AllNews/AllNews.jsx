import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFetch } from '../../store/reducers/orders.reducer';
import News from '../News/News';
import './AllNews.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function AllNews() {
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(orderFetch(6));
  }, [dispatch]);
  return (
    <div className="wrapper">

    </div>
  )
}

export default AllNews