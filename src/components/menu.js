import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active name' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className='my-link'>
                        {label}
                    </Link>
                </li>
            )
        }}>
        </Route>
    )
}
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
]
class Menu extends Component {

    render() {
        return (
            <nav className='navbar navbar-default'>
                <ul className='nav navbar-nav'>
                    {this.showMenus(menus)}
                </ul>
            </nav>
        )
    };

    showMenus = (menus) => {
        var re = null;
        if (menus.length > 0) {
            re = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}>
                    </MenuLink>
                )

            })
        }
        return re;
    }
}
export default Menu;