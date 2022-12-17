import React,{useState} from 'react';
import {NavLink,} from 'react-router-dom';
import {FiAlignRight,FiXCircle } from "react-icons/fi";
import Logos from '../../img/Logos.png';

const Navbarmenu = () => {
        const [isMenu, setisMenu] = useState(false);
        const [isResponsiveclose, setResponsiveclose] = useState(false);
        const toggleClass = () => {
          setisMenu(isMenu === false ? true : false);
          setResponsiveclose(isResponsiveclose === false ? true : false);
      };
    
        let boxClass = ["main-menu menu-right menuq1"];
        if(isMenu) {
            boxClass.push('menuq2');
        }else{
            boxClass.push('');
        }
    
       /* const [isMenuSubMenu, setMenuSubMenu] = useState(false);
          
        const toggleSubmenu = () => {
          setMenuSubMenu(isMenuSubMenu === false ? true : false);
        };
        
        let boxClassSubMenu = ["sub__menus"];
        if(isMenuSubMenu) {
            boxClassSubMenu.push('sub__menus__Active');
        }else {
            boxClassSubMenu.push('');
        }*/
return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img  src={Logos} alt="Logo" style={{margin:"-18px 0px -60px -100px",padding:"75px"}}/>
                        <br/><h3 style={{margin:"-15px 0px 30px 0px",fontSize:"7px",color:"#051925",fontFamily:"initial",}}><b>AJP</b></h3><br/><p style={{margin:"-50px 0px 0px -38px",fontSize:"7px",color:"#051925"}}><b><em>......in your best interest</em>          </b></p>
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink></li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Services`}> Services</NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Portfolio`}>Portfolio</NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
 </ul>
 </nav>     
</div>   
 </div>
	    </div>
    </header>
    )
} 

export default Navbarmenu
