import React from 'react'
import { Link } from "react-router-dom";
import fork from './Images/fork.PNG';
import boots from './Images/boots.png';
import search from './Images/search.png';
import loupe from './Images/loupe.png'
import nav from './Images/nav.png';
import plus from './Images/plus.svg';


export default function Header(props) {
    return (
        <header>
            <div className="header-search">
                <div className="header-search-links">
                    <ul className="header-search-ul">
                        <li>
                            <img className="header-img" src={fork}/>
                        </li>
                        <li>
                            <Link>VILKA</Link>
                        </li>
                        <li>
                            <img className="header-img"src={boots}/>
                        </li>
                        <li>
                            <img className="header-img"src={search}/>
                        </li>
                    </ul>
                </div>
                <div className="header-search-input">
                    <img src={loupe}/>
                    <input type="text"  className="header-search-input-place" placeholder="Товар, услуга"/>
                </div>
                <div className="header-local">
                    <button>
                        <img className='header-img' src={nav}/>
                        <div>
                            <p>Вся Беларусь</p>
                        </div>
                    </button>
                </div>
                <div className="header-add">
                    <button>
                        <img className='header-img' src={plus}/>
                        <div>
                            <p>Добавить объявление</p>
                        </div>
                    </button>
                </div>
                <div className="header-login">
                    <button>
                        <p>Вход</p>
                    </button>
                </div>
            </div>
            <div className="header-categories">

            </div>
            <div className="header-advertisement">

            </div>
            <hr/>
        </header>
    )
}
