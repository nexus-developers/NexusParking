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
import Adm from '../../Pages/AdmPassword/AdmPassword';

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

  const openAdm = () => {
    dispatch({
      type: 'ADMINISTRADOR'
    });
  }

  return (
    <>
      <Container className='shadow'>
        <LogoContainer>
          <img src={Logo} alt='Logo' />
        </LogoContainer>

        <MenuContainer>
          <Link>
            <li onClick={() => history.push('/dashboard')}>
              <FaHome color='#424242' size={20} />
              Home
            </li>
            <li onClick={() => openModal()}>
              <AiFillCalendar color='#424242' size={20} />
              Relatório
            </li>
            <li onClick={() => openAdm()}>
              Administrativo
            </li>
            <li onClick={() => singOut()}>
              <GiExitDoor color='#424242' size={20} />
            Sair
            </li>
          </Link>
        </MenuContainer>

      </Container>

      {
        props.modalOpen ? (
          <Report />
        ) : (
            null
          )
      }
      {
        props.Adm ? (
          <Adm />
        ) : (
            null
          )

      }
    </>
  );
}

const mapStateToProps = state => ({
  modalOpen: state.reports,
  Adm: state.administrador
});

export default connect(mapStateToProps)(Sidebar)