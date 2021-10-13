import React from "react";
import {Link} from "react-router-dom";

export default function Catalog() {
    return (
        <section className="catalog">
            <Link>Все категории</Link>
            <ul>
                <li>
                    <Link>Товары с Куфар с доставкой</Link>
                </li>
                <li>
                    <Link>Недвижимость</Link>
                </li>
                <li>
                    <Link>Авто и транспорт</Link>
                </li>
                <li>
                    <Link>Бытовая техника</Link>
                </li>
                <li>
                    <Link>Компьютерная техника</Link>
                </li>
                <li>
                    <Link>Электроника</Link>
                </li>
            </ul>
        </section>
    )
}