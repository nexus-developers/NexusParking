import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Api from '../../Services/Api';

import {
    Container
} from '../../Components/Container/Container';

import {
    InternContainer,
    Title,
    SticksEffect,
    DarkSticky,
    OrangeSticky,
    Menu,
    MenuTitle,
    Hr,
    AttPerfil,
    Form
} from './styles';

export default function Administrator(){
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [oldAdmPassword, setOldAdmPassword] = useState();
    const [admPassword, setAdmPassword] = useState();
    const [confirmAdmPassword, setConfirmAdmPassword] = useState();
    const [price, setPrice] = useState();
    const [priceHour, setPriceHour] = useState();
    const [numCar, setNumCar] = useState();
    const [numMoto, setNumMoto] = useState();

    const attUser = async () => {
        const token = localStorage.getItem('token');

        if(token){
            Api.defaults.headers.authorization = `Barrer ${token}`;
        }

        const admToken = localStorage.getItem('token-adm');

        if(admToken){
            Api.defaults.headers.role = admToken;
        }

        const info = {
            oldPassword,
            password,
            confirmPassword,
            oldAdmPassword,
            admPassword,
            confirmAdmPassword,
            price,
            price_hour: priceHour,
            num_car: numCar,
            num_moto: numMoto
        }

        await Api.put('/user', info).then(resp => {
            alert('Dados atualizado com sucesso!');
        }).catch(err => {
            console.log(err.response);
        });
    }

    return(
        <Container>
            <InternContainer>
                <Title>Administrativo</Title>
                <SticksEffect>
                    <div>
                        <DarkSticky/>
                    </div>
                    <div>
                        <OrangeSticky/>
                    </div>
                </SticksEffect>

                <Menu>
                    <MenuTitle>Relatorios</MenuTitle>
                </Menu>

                <Hr/>

                <Menu>
                    <MenuTitle>Atualização Perfil</MenuTitle>
                </Menu>

                <AttPerfil>
                    <Form>
                        <div>
                            <input
                                placeholder='Senha atual'
                                onChange={e => setOldPassword(e.target.value)}
                            />
                            <input
                                placeholder='Nova Senha'
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input
                                placeholder='Confirmar nova senha'
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Senha administrativa atual'
                                onChange={e => setOldAdmPassword(e.target.value)}
                            />
                            <input
                                placeholder='Nova senha administrativa'
                                onChange={e => setAdmPassword(e.target.value)}
                            />
                            <input
                                placeholder='Confirmar senha administrativa'
                                onChange={e => setConfirmAdmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Preço entrada'
                                onChange={e => setPrice(e.target.value)}
                                value={price}
                            />
                            <input
                                placeholder='Preço por hora'
                                onChange={e => setPriceHour(e.target.value)}
                                value={priceHour}
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Vagas para carros'
                                onChange={e => setNumCar(e.target.value)}
                                value={numCar}
                            />
                            <input
                                placeholder='Vagas para motos'
                                onChange={e => setNumMoto(e.target.value)}
                                value={numMoto}
                            />
                        </div>

                        <button onClick={() => attUser()}>Atualizar</button>
                    </Form>
                </AttPerfil>
            </InternContainer>
        </Container>
    )
}