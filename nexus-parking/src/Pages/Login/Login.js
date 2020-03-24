import React, { Component } from 'react';

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { 
    Container,
    LoginContainer,
    CarouselContainer,
    LogoContainer,
    FormContainer,
    UserForm,
    PasswordForm,
    SubmitButton,
    RegisterButton,
    Title1,
    Title2,
    Carousel,
    CarouselTextSmall,
    CarouselTextLarge,
    SmallText
} from './styles';

// Modal
import Register from '../Register/Register'

import Logo from './assets/Logo.png'

import CarouselComponent from '../../Components/Carousel/Carousel'


class Login extends Component {
    
    openModal = () => {
        const { dispatch } = this.props
    
        dispatch({
            type: 'MODAL'
        })
    }

    render(){
    const { modalOpen } = this.props
    
        return (
            <Container className=''>
                <div className='row'>
                    <LoginContainer className='col-md-4'>
                        <LogoContainer>
                            <img src={Logo} alt='logo'/>
                        </LogoContainer>
                        <FormContainer>
                            <UserForm>
                                <label>Usuário:</label>
                                <small>Digite seu usuário ou e-mail</small>
                                <input className='form-control'/>
                                <Link>
                                    Esqueceu o usuário?
                                </Link>
                            </UserForm>
                            <PasswordForm>
                                <label>Senha:</label>
                                <input className='form-control'/>
                                <Link>
                                    Oops, esqueci minha senha...
                                </Link>
                            </PasswordForm>

                        </FormContainer>

                        <Link to='/dashboard'>
                            <SubmitButton>
                                Fazer Login
                            </SubmitButton>
                        </Link>

                        <h5>Assinar o Nexus Parking</h5>
                        <RegisterButton
                            onClick={() => this.openModal()}
                            >
                        Assinar
                        </RegisterButton>
                            <SmallText>Todos os direitos reservados há Nexus Developers!</SmallText>
                    </LoginContainer>
                    <CarouselContainer className='col-md-8'>
                        <Title1>
                            PAGUE MENOS COM O
                        </Title1>
                        <Title2>
                            NEXUS PARKING
                        </Title2>

                        <Carousel className='row'>
                            <div className='col-md-4'>
                                <CarouselTextSmall>
                                    Assinatura a partir de:
                                </CarouselTextSmall>
                                <CarouselTextLarge>
                                    R$ 30.00
                                    <span>por mês</span>
                                </CarouselTextLarge>

                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                            </div>
                            <div className='col-md-8'>
                                <CarouselComponent/>
                            </div>
                        </Carousel>
                    </CarouselContainer>
                </div>
                {
                    modalOpen ? (
                        <Register/>
                    ) : (
                        null
                    )
                }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
  modalOpen: state.modal
});

export default connect(mapStateToProps)(Login)

