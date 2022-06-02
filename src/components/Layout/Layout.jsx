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



                </footer>

            </div>

        </>
    )
}

export default Layout