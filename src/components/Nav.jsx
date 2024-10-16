import { Link } from 'react-router-dom'
import {NavStyle}  from '../css/NavStyle'
import logo from '../../src/assets/logoss.png'
import F1 from '../../src/assets/Formula_E1.png'

const Nav = () => {
    return (
        <NavStyle>
            <header className="nav">
                <a href="/"><img src={F1} alt="" className='logo' /></a>

                <div className="container">
                    <ul>
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/Atividades" className="navLink">Atividades</Link>
                        <Link to='/login' className="navLink">Login</Link>
                    </ul>
                </div>

                <div className='logoc'>
                    <img src={logo} alt="" className='logo2' />
                </div>

            </header>
        </NavStyle>
    )
}
export default Nav