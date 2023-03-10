import React from 'react';
import './NavBar.css'
import ButtonG from '../ButtonGeneral/ButtonG'
import logoEpicure from '../../../assets/icon/logoEpicure.svg'
import Search from '../../../assets/icon/Search.svg'
import Shop from '../../../assets/icon/Shop.svg'
import User from '../../../assets/icon/User.svg'
import { useNavigate } from 'react-router-dom';



const NavBar: React.FC = (props) => {
    const navigate = useNavigate();

    return (

        <div className='nav-bar'> 
            <div className='side left'>
                <ButtonG  anotherClass='logo' src={logoEpicure} alt="logo" onClick={()=> navigate("/")}/>
                <ButtonG  anotherClass='btn-with-line' title='Restaurants' onClick={()=> navigate("/restaurants")}/>
                <ButtonG  anotherClass='btn-with-line' title='Chefs' onClick={()=> navigate("/chefs")} />
            </div>

            <div className='side right'>
                <div className='search-bar'>
                    <input className='input-nav-bar' type='text' placeholder='  Search for restaurant cuisine, chef'/>
                    <ButtonG anotherClass='search-icon' src={Search} alt="search"/>
                </div>
                    <ButtonG src={User} alt="user" onClick={()=> navigate("/sign-in")}/>
                    <ButtonG src={Shop} alt="shop"/>
            </div>
        </div>

    )
}

export default NavBar;