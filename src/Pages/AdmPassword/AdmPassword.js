import React, { useState } from 'react';

import { connect, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import Api from '../../Services/Api';

import {
    Container,
    InternContainer
} from '../../Components/Container/Container';

import {
    AdmContainer,
    CloseButton,
    Form,
    Error
} from './styles';

import { MdClose } from 'react-icons/md';

function AdmPassword(props){
    const history = useHistory();
    const dispatch = useDispatch();
    const [admPass, setAdmPass] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const closeModal = () => {
        dispatch({
            type: 'CLOSE_ADMINISTRADOR'
        });
    }

    const loginAdm = () => {

        const info = {
            passwordAdm: admPass
        };

        Api.post('/verify', info).then(resp => {
            Api.defaults.headers.role = resp.data.token;
            localStorage.setItem('token-adm', resp.data.token);

            const id = (Math.random() * (1000 - 99 + 1) + 99);
            dispatch({
                type: 'ID',
                id
            });
            history.push(`/${id}/adm`);
            
            closeModal();
        }).catch(err => {
            setErrorMessage(err.response.data.error);
        })
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
                                <Form>
                                    <label>Senha Administrativa</label>
                                    <input
                                        onChange={e => setAdmPass(e.target.value)}
                                    />
                                    <Error>{errorMessage}</Error>

                                    <button
                                        onClick={() => loginAdm()}
                                    >
                                        Entrar
                                    </button>
                                </Form>
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
    Adm: state.administrador,
    Id: state.id
  });

export default connect(mapStateToProps)(AdmPassword)