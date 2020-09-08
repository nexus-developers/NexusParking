import React from 'react';

import { connect, useDispatch } from 'react-redux';

import {
    Container,
    InternContainer
} from '../../Components/Container/Container';

import {
    AdmContainer,
    CloseButton
} from './styles';

import { MdClose } from 'react-icons/md';

function AdmPassword(props){
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: 'CLOSE_ADMINISTRADOR'
        });
    }

    return(
        <>
            {
                props.Adm ? (
                    <Container>
                        <InternContainer>
                            <AdmContainer>
                                <CloseButton>
                                    <button
                                        onClick={() => closeModal()}
                                    >
                                        <MdClose
                                            color='#000'  
                                            size={25} 
                                        />
                                    </button>
                                </CloseButton>

                                <h1>Administrativo</h1>
                                <form>
                                    <label>Senha Administrativa</label>
                                    <input/>

                                    <button>Entrar</button>
                                </form>
                            </AdmContainer>
                        </InternContainer>
                    </Container>
                ) : (
                    null
                )
            }
        </>
    )
};

const mapStateToProps = state => ({
    Adm: state.administrador
  });

export default connect(mapStateToProps)(AdmPassword)