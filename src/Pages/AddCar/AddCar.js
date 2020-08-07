import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { connect } from 'react-redux'
import * as Yup from 'yup';
import Api from '../../Services/Api';

// Extern Components
import { Container, InternContainer } from '../../Components/Container/Container';

//importar masks
import { plateMask, cleanMask, phoneMask, cpfMask } from '../../Utils/Mask';

// Intern Styles Components
import {
    ModalContainer,
    CloseButton,
    InternModalContainer,
    FormAddClient,
    Title,
    Form1,
    Form2,
    FormCheck,
    CreateClientButton
} from './styles'

import { MdClose } from 'react-icons/md'

const schema = Yup.object().shape({
    owner_name: Yup.string()
        .required('Campo de nome do proprietário é obrigatório!'),
    cpf: Yup.string()
        .required('Campo de cpf é obrigatório!'),
    owner_email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('Campo de e-mail é obrigatório!'),
    owner_phone: Yup.string()
        .required('Campo de telefone é obrigatório!'),
    model: Yup.string()
        .required('Campo modelo é obrigatório!'),
    plate: Yup.string()
        .required('Campo de placa é obrigatório!'),
    color: Yup.string()
        .required('Campo de cor é obrigatório!')
});

class AddCar extends Component {

    state = {
        car: false,
        moto: false,
        plate: '',
        phone: '',
        cpf: '',
        counter: true,
        owner_email: '',
        owner_name: '',
        model: '',
        color: ''
    }

    handleVehicleRegister = async () => {
        const { car, moto, plate, phone, cpf, color, model, owner_name, owner_email } = this.state;
        const plateClean = cleanMask(plate);
        const owner_cpf = cleanMask(cpf);
        const owner_ddd = '081';
        const owner_phone = cleanMask(phone);
        let info = {}

        if (car) {
            info = {
                car,
                color,
                model,
                plate: plateClean,
                owner_name,
                owner_cpf,
                owner_ddd,
                owner_phone,
                owner_email
            }
        }
        else {
            info = {
                moto,
                color,
                model,
                plate: plateClean,
                owner_name,
                owner_cpf,
                owner_ddd,
                owner_phone,
                owner_email
            }
        }

        try {
            await Api.post('/parking', info);

            this.closeModal();
        } catch (error) {
            console.log(error);
        }
    }

    closeModal = () => {
        const { dispatch } = this.props;

        dispatch({
            type: 'CLOSE_CAR_MODAL'
        })
    };

    counterModal = () => {
        const { dispatch } = this.props;
        const { counter } = this.state;

        dispatch({
            type: 'COUNTER',
            counter
        })
    }

    render() {
        const { AddCar } = this.props
        const { plate, phone, cpf } = this.state;

        return (
            <>
                {
                    AddCar ? (
                        <Container>
                            <InternContainer>
                                <ModalContainer className='shadow'>
                                    <InternModalContainer>
                                        <Form schema={schema} onSubmit={this.handleVehicleRegister}>
                                            <CloseButton>
                                                <button
                                                    onClick={() => this.closeModal()}
                                                >
                                                    <MdClose color='#000' size={25} />
                                                </button>
                                            </CloseButton>
                                            <Title>Cadastro de Veículos</Title>
                                            <FormAddClient>
                                                <Form1>
                                                    <div>
                                                        <h5>Nome do Proprietário:</h5>
                                                        <Input
                                                            name='owner_name'
                                                            onChange={e => this.setState({ owner_name: e.target.value })}
                                                            className='form-control'
                                                            ref='owner_name'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>CPF:</h5>
                                                        <Input
                                                            name='cpf'
                                                            value={cpf}
                                                            onChange={e => this.setState({ cpf: cpfMask(e.target.value) })}
                                                            className='form-control'
                                                            ref='owner_cpf'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>E-mail:</h5>
                                                        <Input
                                                            name='owner_email'
                                                            onChange={e => this.setState({ owner_email: e.target.value })}
                                                            className='form-control'
                                                            ref='owner_email'
                                                        />
                                                    </div>
                                                </Form1>
                                                <Form2>
                                                    <div>
                                                        <h5>Telefone:</h5>
                                                        <Input
                                                            name='owner_phone'
                                                            value={phone}
                                                            onChange={e => this.setState({ phone: phoneMask(e.target.value) })}
                                                            maxLength='15'
                                                            className='form-control'
                                                        />
                                                    </div>
                                                </Form2>

                                                <hr />

                                                <Form1>
                                                    <div>
                                                        <h5>Modelo:</h5>
                                                        <Input
                                                            name='model'
                                                            onChange={e => this.setState({ model: e.target.value })}
                                                            className='form-control'
                                                            ref='model'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>Placa:</h5>
                                                        <Input
                                                            name='plate'
                                                            value={plate}
                                                            onChange={e => this.setState({ plate: plateMask(e.target.value) })}
                                                            maxLength='8'
                                                            className='form-control'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>Cor:</h5>
                                                        <Input
                                                            name='color'
                                                            onChange={e => this.setState({ color: e.target.value })}
                                                            className='form-control'
                                                            ref='color'
                                                        />
                                                    </div>
                                                </Form1>
                                                <Form2>
                                                    <FormCheck>
                                                        <h5>Tipo:</h5>
                                                        <div class="form-check">
                                                            <input
                                                                class="form-check-input"
                                                                type="radio" name="Radios"
                                                                id="Radios1"
                                                                value="option1"
                                                                onChange={() => this.setState({ car: true, moto: false })}
                                                            />
                                                            <label class="form-check-label" for="Radios1">
                                                                Carro
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="Radios"
                                                                id="Radios2"
                                                                value="option2"
                                                                onChange={() => this.setState({ moto: true, car: false })}
                                                            />
                                                            <label class="form-check-label" for="Radios2">
                                                                Moto
                                                            </label>
                                                        </div>
                                                    </FormCheck>
                                                </Form2>
                                            </FormAddClient>

                                            <CreateClientButton>
                                                <button
                                                    type="submit"
                                                >
                                                    Cadastrar
                                                </button>
                                            </CreateClientButton>
                                        </Form>
                                    </InternModalContainer>
                                </ModalContainer>
                            </InternContainer>
                        </Container>
                    ) : (
                            null
                        )
                }
            </>
        );
    }
}


const mapStateToProps = state => ({
    AddCar: state.modal
});

export default connect(mapStateToProps)(AddCar)
