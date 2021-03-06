import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as ChevronIcon} from './icons/chevron.svg';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as BoltIcon} from './icons/bolt.svg';

import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'

function App() {
  return (
    <Navbar>
        <NavItem icon={<PlusIcon />} /> 
        <NavItem icon={<BellIcon />} /> 
        <NavItem icon={<MessengerIcon />} /> 


        <NavItem icon={<CaretIcon />} >
          <DropDownMenu/>
        </NavItem>


    </Navbar>
  );
}

const DropDownMenu = () =>{

  const [activeMenu,setActiveMenu] = useState('main')

  const DropDownItem = (props) =>{
return(
  <a href="#" className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
  { props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}
    {props.children}
  {props.rightIcon &&  <span className="icon-button">{props.rightIcon}</span> }
  </a>
);
  }

  return (
    <div className="dropdown">
    <CSSTransition in={activeMenu=== 'main'}
      unmountOnExit
      timeout={500}
      className="menu-primary"
      >
      <div className="menu">
        <DropDownItem>My profile</DropDownItem>
        <DropDownItem leftIcon = {<CogIcon />} rightIcon = {<ChevronIcon />} goToMenu="settings">Settings</DropDownItem>
      </div>
    </CSSTransition>


    <CSSTransition in={activeMenu=== 'settings'}
      unmountOnExit
      timeout={500}
      className="menu-secondary"
      >
      <div className="menu">
      <DropDownItem leftIcon={<ArrowIcon/>} goToMenu="main"/>
        <DropDownItem>Settings</DropDownItem>
      </div>
    </CSSTransition>



    </div>
  );
}

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>
    </nav>
  );
}

const NavItem = ({icon,children}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href="#" className='icon-button' onClick={()=> setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

export default App;
