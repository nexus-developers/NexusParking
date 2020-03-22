import React from 'react';

import { Link } from 'react-router-dom'

import { 
  Container,
  LogoContainer,
  MenuContainer
} from './styles';

import { FaHome } from 'react-icons/fa'

import Logo from './assets/Logo.png'

export default function Sidebar() {
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
         </Link>
       </MenuContainer>
   </Container>
  );
}
