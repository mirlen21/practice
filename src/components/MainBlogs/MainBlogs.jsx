import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFetch } from '../../store/reducers/orders.reducer';
import { Link } from 'react-router-dom';
import News from '../News/News';
import './MainBlogs.css';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function MainBlogs() {
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch(1)
  useEffect(() => {
    dispatch(orderFetch(1));
  }, [dispatch]);

  return (
    <div className="wrapper">

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation
      >

        <SwiperSlide><img src="img/Rectangle 11.png" alt="" className='swiper1' /></SwiperSlide>
        <SwiperSlide><img src="img/Rectangle 14.png" alt="" className='swiper2' /></SwiperSlide>

      </Swiper>

      <div className='card'>

        <h1 className='txt1' >Примеры продукции</h1>

        <div className='card1'>

          <div className='group1'>
            <img className='img1' src="img/image 10 (6).png" alt="" />
            <h3 className='grtxt'>Рибана</h3>
          </div>

          <div className='group2'>
            <img className='img1' src="img/image 10 (1).png" alt="" />
            <h3 className='grtxt'>Футер</h3>
          </div>

        </div>

        <div className='card2'>

          <div className='group1'>
            <img className='img1' src="img/image 10 (2).png" alt="" />
            <h3 className='grtxt'>Велюр</h3>
          </div>

          <div className='group2'>
            <img className='img1' src="img/image 10 (3).png" alt="" />
            <h3 className='grtxt'>Кашкорсе</h3>
          </div>

        </div>

        <div className='card3'>

          <div className='group1'>
            <img className='img1' src="img/image 10 (4).png" alt="" />
            <h3 className='grtxt'>кулирка</h3>
          </div>

          <div className='group2'>
            <img className='img1' src="img/image 10 (5).png" alt="" />
            <h3 className='grtxt'>Интерлок</h3>
          </div>

        </div>


      </div>

      <div className='Production'>

        <h1 className='txt2' >Наша продукция</h1>

        <div className='fram'>

          <div className='frame1'>
            <p>Вискоза набивная рулон</p>
            <p>Набивка на сером меланже</p>
            <p>Кулирка набивная боксеры пачка</p>
            <p>Кулирка набивная женская пачка</p>
            <p>Кулирка набивная детская пачка</p>
            <p>Кулирка набивная детская рулон</p>
            <p>Футер 30/20 с начесом набивной женский рулон </p>
            <p>Футер 30/20 с начесом набивной детский рулон </p>
            <p>Софт- велюр рулон</p>
            <p>Футер 30/30 с лайкрой пенье набивной рулон</p>
            <p>Корейский велюр рулон</p>
            <p>Футер 30/20 с начесом набивной детский пачка</p>
            <p>Вискоза гладкокрашеная рулон</p>
            <p>Кулирка набивная боксеры пачка</p>
            <p>Велюр корейский жакард рулон</p>
            <p>Кулирка полоса вязаная рулон (ш. 180 см)</p>
            <p>Вискоза двойное крашение набивная</p>
            <p>Кашкорсе с начесом полоса вязаная</p>
            <p>20/20 Футер с начесом полоса вязаная пачка</p>
            <p>Велюр детский дв. крашение пачка</p>
            <p>Камуфлированное полотно (кулирка, футер, интерлок, термополотно)</p>
            <p>20/20 Футер с начесом камуфляж пачка</p>
          </div>

          <div className='frame2'>
            <p>Дизайны MADIYO DEKNA, ДОСТУПНЫЕ ПОД ЗАКАЗ</p>
            <p>НОВЫЕ ПОСТУПЛЕНИЯ</p>
            <p>Карта цветов MADIYO TEKSTIL</p>
            <p>Велюр однотонный</p>
            <p>Велюр набивной женский рулон</p>
            <p>Велюр набивной детский рулон</p>
            <p>Велюр полоса вязанная рулон</p>
            <p>Велюр жаккард</p>
            <p>Футер 3-х нитка</p>
            <p>Велсофт </p>
            <p>Полар флис</p>
            <p>Интерлок</p>
            <p>Интерлок набивной рулон </p>
            <p>Интерлок набивной (детский) пачка</p>
            <p>Интерлок полоса вязаная рулон</p>
            <p>Кулирка c лайкрой набивная рулон</p>
            <p>Кашкорсе 20/1</p>
            <p>Кашкорсе 30/1</p>
            <p>Кашкорсе 30/1 набивной</p>
            <p>Рибана без лайкры</p>
            <p>Рибана с лайкрой</p>
            <p>Рибана без лайкры набивная </p>
            <p>Рибана полоса вязаная пачка</p>
          </div>

        </div>

      </div>

      <div className='Prod2'>

        <h1 className='txt3' >Наше производство</h1>

        <div className='fram'>

          <div className='content__laft'>
            <h3>Текстильная компания MADIYO работает на российском рынке уже 16 лет.</h3>
            <h3>Её производственную политику отличает оптимальное сочетание цены и качества, широкий ассортимент трикотажного полотна, постоянное обновление дизайна. Это позволило компании занять прочное место в списке лидеров рынка тестильной продукции.</h3>
          </div>

          <div className='content__right'>
            <img className='im_or' src="img/Rectangle 24 (1).png" alt="" />

            <button className='btn__ord2'>
              <Link className='link' to={'/'}> Узнать больше</Link>
            </button>

          </div>



        </div>



      </div>

    </div>
  )
}

export default MainBlogs