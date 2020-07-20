import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import { 
  Container,
  LogoContainer,
  MenuContainer
} from './styles';

import { FaHome } from 'react-icons/fa'
import { GiExitDoor } from 'react-icons/gi'

import Logo from './assets/Logo.png'

export default function Sidebar() {
  const history = useHistory();

  const singOut = () => {
    localStorage.removeItem('token');
    
    history.push('/')
  }

  return (
   <Container className='shadow'>
       <LogoContainer>
          <img src={Logo} alt='Logo'/>
       </LogoContainer>

       <MenuContainer>
         <Link>
            <li>
              <FaHome color='#424242' size={20}/>
              Home
            </li>
            <li onClick={() => singOut()}>
            <GiExitDoor color='#424242' size={20}/>
            Sair
            </li>
         </Link>
       </MenuContainer>
   </Container>
  );
}
