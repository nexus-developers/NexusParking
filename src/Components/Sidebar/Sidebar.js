import React from 'react';

import { connect, useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom'

import { 
  Container,
  LogoContainer,
  MenuContainer
} from './styles';

import { FaHome } from 'react-icons/fa'
import { GiExitDoor } from 'react-icons/gi'
import { AiFillCalendar } from 'react-icons/ai';

import Logo from './assets/Logo.png'

import Report from '../../Pages/Reports/Report';

function Sidebar(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const singOut = () => {
    localStorage.removeItem('token');
    
    history.push('/')
  }

  const openModal = () => {
    // const { dispatch } = this.props

    dispatch({
        type: 'REPORT'
    })
  }

  return (
    <>
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
            <li onClick={() => openModal()}>
              <AiFillCalendar color='#424242' size={20}/>
              Relatório
            </li>
            <li onClick={() => singOut()}>
            <GiExitDoor color='#424242' size={20}/>
            Sair
            </li>
         </Link>
       </MenuContainer>
      
   </Container>

  {
    props.modalOpen ? (
      <Report/>
    ) : (
      null
    )
  }
  </>
  );
}

const mapStateToProps = state => ({
  modalOpen: state.reports
});

export default connect(mapStateToProps)(Sidebar)