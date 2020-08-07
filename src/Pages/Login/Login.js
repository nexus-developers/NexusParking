import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform'
import { connect } from 'react-redux'
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

import Api from '../../Services/Api';

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

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('Campo de e-mail é obrigatório!'),
    password: Yup.string()
        .required('Campod de senha é obrigatório!')
})

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        this.userLogged();
    }

    userLogged = () => {
        const token = localStorage.getItem('token');

        if (token) {
            Api.defaults.headers.authorization = `Barrer ${token}`;
            const { history } = this.props
            return history.push(`/dashboard`);
        }
    }

    handleLogin = async e => {
        const { email, password } = this.state;
        // const email = this.refs.email.value;
        // const password = this.refs.password.value.toString();

        const info = { email, password }

        console.log(info)

        try {
            const response = await Api.post('/session', info);

            Api.defaults.headers.authorization = `Barrer ${response.data.token}`;

            const { history } = this.props
            history.push('/dashboard')

            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.log(error)
        }
    }

    openModal = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'MODAL'
        })
    }

    render() {
        const { modalOpen } = this.props
        // const { history } = this.props

        return (
            <Container className=''>
                <div className='row'>
                    <LoginContainer className='col-md-4'>
                        <LogoContainer>
                            <img src={Logo} alt='logo' />
                        </LogoContainer>
                        <Form schema={schema} onSubmit={this.handleLogin}>
                            <FormContainer>
                                <UserForm>
                                    <label>Usuário:</label>
                                    <small>Digite seu usuário ou e-mail</small>
                                    <Input
                                        onChange={e => this.setState({ email: e.target.value })}
                                        name='email'
                                        className='form-control'
                                        ref='email'
                                    />
                                    <Link>
                                        Esqueceu o usuário?
                                </Link>
                                </UserForm>
                                <PasswordForm>
                                    <label>Senha:</label>
                                    <Input
                                        onChange={e => this.setState({ password: e.target.value })}
                                        name='password'
                                        className='form-control'
                                        ref='password'
                                        type='password'
                                    />
                                    <Link>
                                        Oops, esqueci minha senha...
                                </Link>
                                </PasswordForm>

                            </FormContainer>


                            <SubmitButton
                                type="submit"
                            >
                                Fazer Login
                            </SubmitButton>


                            <h5>Assinar o Nexus Parking</h5>
                            <RegisterButton
                                onClick={() => this.openModal()}
                            >
                                Assinar
                            </RegisterButton>
                            <SmallText>Todos os direitos reservados há Nexus Developers!</SmallText>
                        </Form>
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
                                <CarouselComponent />
                            </div>
                        </Carousel>
                    </CarouselContainer>
                </div>
                {
                    modalOpen ? (
                        <Register />
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

