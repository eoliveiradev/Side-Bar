import './sideBar.css'

import { useState } from 'react'
import { List } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import grid from '../../assets/images/grid.svg'
import menu from  '../../assets/images/menu.svg'
import pet from '../../assets/images/pet.svg'
import search from '../../assets/images/search.svg'
import settings from '../../assets/images/settings.svg'
import user from '../../assets/images/user.svg'
import vet from '../../assets/images/vet.svg'

export function SideBar() {
    
    const [isSidebarActive, setSidebar] = useState(false)

    return (
        <aside className={isSidebarActive ? 'side__bar active' : 'side__bar'}>
            <header>
                <img
                    className={isSidebarActive ? '' : 'not__active'} 
                    src={logo}
                />
                <List className="toggle-icon" size={38} onClick={() => setSidebar(!isSidebarActive)} />
            </header>
            <div
                className={isSidebarActive ? 'search__bar active' : 'search__bar'}
                onClick={!isSidebarActive ? () => setSidebar(!isSidebarActive) : undefined}
            >
                <img src={search} />
                <input className={isSidebarActive ? '' : 'not__active'} type="text" placeholder="Buscar" />
            </div>
            <nav className="nav__bar">
                <Link className="nav__link" to={`/dashboard`}>
                    <span className="nav__items">
                        <img src={grid}/>
                        <p>Dashboard</p>
                    </span>
                </Link>
                <Link className="nav__link" to={`/pets`}>
                    <span className="nav__items">
                        <img src={pet}/>
                        <p>Pets</p>
                    </span>
                </Link>
                <Link className="nav__link" to={`/costumers`}>
                    <span className="nav__items">
                        <img src={user} />
                        <p>Clientes</p>
                    </span>
                </Link>
                <Link className="nav__link" to={`/vets`}>
                    <span className="nav__items">
                        <img src={vet} />
                        <p>Vets</p>
                    </span>
                </Link>
                <Link className="nav__link" to={`/settings`}>
                    <span className="nav__items">
                        <img src={settings} />
                        <p>Ajustes</p>
                    </span>
                </Link>
            </nav>
        </aside>
    )
}

