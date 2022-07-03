import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Layout.css'


function Layout({ children }) {
    const user = useSelector(store => store.auth.user)
    return (
        <>
            <header className='header'>
                <h1 className='logo-name'>
                    <img src="./img/logo.png" alt="" />
                </h1>
                <nav className='navigation'>
                    <Link className='link' to={'/'}>Главная</Link>
                    <Link className='link' to={'/About'}>Каталог</Link>
                    <Link className='link' to={'/Contacts'}>Контакты</Link>
                    <Link className='link' to={'/News'}>О компании</Link>
                </nav>

                <div className='nomber'>
                    <img className='pon' src="./img/Vector.png" alt="" />
                    <h3 className='nom1'>+7 (495) 984-31-05</h3>

                    <button className='btn__ord'>
                        <Link className='link' to={'/Ordered'}> заказать</Link>
                    </button>
                </div>

            </header>
            <div className="content">
                <div>{children}</div>

                <footer className='fot'>

                    <div className='footer-conteiner1'>

                        <div className='foot1'>
                            <img className='foot3' src="../img/Frame 97.png" alt="" />

                            <div className='cont1'>
                                <img className='foto' src="../img/Rectangle 29.png" alt="" />
                                <h1 className='txt'>Выставка Текстильлегпром  сентябрь 2019</h1>
                            </div>
                            <button className='btn__ord3'>
                                <Link className='link' to={'/'}> Фотоотчёт</Link>
                            </button>

                            <div className='cont1'>
                                <img className='foto' src="../img/Rectangle 28.png" alt="" />
                                <h1 className='txt'>Текстильлегпром 2019г. февраль</h1>
                                <button className='btn__ord4'>
                                    <Link className='link' to={'/'}> Фотоотчёт</Link>
                                </button>
                            </div>

                            <div className='cont1'>
                                <img className='foto' src="../img/Rectangle 27.png" alt="" />
                                <h1 className='txt'>Текстильлегпром сентябрь 2018г.</h1>
                                <button className='btn__ord5'>
                                    <Link className='link' to={'/'}> Фотоотчёт</Link>
                                </button>
                            </div>

                            <button className='btn__ord6'>
                                <Link className='link' to={'/'}> Все выставки</Link>
                            </button>

                        </div>

                        <div className='foot1'>
                            <img className='foot4' src="../img/Frame 98.png" alt="" />
                            <h1 className='txt5' >MADIYO DEKNA: доверие – лучшая награда</h1>
                            <h1 className='txt5'>Трикотаж от MADIYO DEKNA: искусство,традиции, инновации</h1>
                            <h1 className='txt5'>MADIYO DEKNA: кризис – это возможность развития</h1>

                            <button className='btn__ord_6'>
                                <Link className='link' to={'/'}> Все статьи</Link>
                            </button>
                        </div>

                        <div className='foot1'>
                            <img className='foot5' src="../img/Frame 99.png" alt="" />

                            <div className='cont3'>
                                <img className='foto' src="../img/Rectangle 29.png" alt="" />
                                <h1 className='txt6'>Компания MADIYO ДЕКНА запустила цифровую печать на полотне</h1>
                            </div>

                            <div className='cont3'>
                                <img className='foto' src="../img/Rectangle 28.png" alt="" />
                                <h1 className='txt6'>Видеосюжет с выставки продукции ZELAL TEKSTILE</h1>
                            </div>

                            <div className='cont3'>
                                <img className='foto' src="../img/Rectangle 27.png" alt="" />
                                <h1 className='txt6'>Фабрика "ZELAL TEKSTIL"</h1>
                            </div>

                            <button className='btn__ord_7'>
                                <Link className='link' to={'/'}> Все новости</Link>
                            </button>

                        </div>

                    </div>

                    <div className='footer-conteiner2'>
                        <div className='foot2'>
                            <p>© 2002-2021 Мадио Декна.</p>
                            <p>Все права защищены</p>
                        </div>

                        <div className='foot2'>
                            <p>140090, Московская обл., Люберецкий р-н, г.</p>
                            <p>Дзержинский, ул. Энергетиков, д.20, стр.1, пом.2</p>
                        </div>

                        <div className='foot2'>
                            <p>Тел/факс:  +7 (495) 984-31-05 - многоканальный</p>
                            <p>E-mail: info@dekna.ru</p>
                        </div>
                    </div>

                </footer>

            </div>

        </>
    )
}

export default Layout