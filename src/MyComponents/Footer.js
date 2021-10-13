import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/graf.png';
import world from './Images/world.png';

export const Footer = () => {
    return (
        <footer>
            <hr/>
            <div className="footer-div">
                <ul>
                    <li>
                        <img className="footer-image" src={logo}/>
                    </li>
                    <li>
                        <Link>Реклама</Link>
                    </li>
                    <li>
                        <Link>Доставка</Link>
                    </li>
                    <li>
                        <Link>Рассрочка</Link>
                    </li>
                    <li>
                        <Link>Правила</Link>
                    </li>
                    <li>
                        <Link>Помощь</Link>
                    </li>
                </ul>
                <button>
                    <img className="footer-image" src={world}/>
                    <div>
                        <p className="footer-p">Беларусская</p>
                    </div>
                </button>
            </div>
            <hr/>
            <div className="footer-inf">
                <h4 className="footer-h4">*Оплата производится в белорусских рублях по курсу НБ РБ.</h4>
                <p>*Оплата производится в белорусских рублях по курсу НБ РБ.
                    © Kufar — крупнейшая площадка объявлений Беларуси по данным gemiusAudience, июнь 2020.
                    Использование ресурса Kufar означает согласие с Пользовательским соглашением и Политикой
                    конфиденциальности. ООО «Адевинта», УНП 191767445, 220030, г. Минск, ул. Немига, 5,
                    помещение 77. Режим работы: 10.00 - 18.00, Пн-Пт.</p>
            </div>
        </footer>
    )
}
