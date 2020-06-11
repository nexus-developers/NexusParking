import React, { Component } from 'react';

import { connect } from 'react-redux'

import Api from '../../Services/Api';

// Extern Components
import { Container, InternContainer } from '../../Components/Container/Container';

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

class AddCar extends Component {

    state = {
        car: false,
        moto: false
    }

    handleVehicleRegister = async () => {
        const { car, moto } = this.state;
        const color = this.refs.color.value;
        const model = this.refs.model.value;
        const plate = this.refs.plate.value;
        const owner_name = this.refs.owner_name.value;
        const owner_cpf = this.refs.owner_cpf.value;
        const owner_ddd = '081';
        const owner_phone = this.refs.owner_phone.value;
        const owner_email = this.refs.owner_email.value;
        let info = {}

        if(car){
            info = { 
                car, 
                color, 
                model, 
                plate, 
                owner_name, 
                owner_cpf,
                owner_ddd,
                owner_phone,
                owner_email
            }
        }
        else{
            info = { 
                moto, 
                color, 
                model, 
                plate, 
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
          type: 'CLOSE_CAR_MODAL',
        })
      };

      render(){
        const { AddCar } = this.props

        return (
            <>
                {
                  AddCar ? (
                        <Container>
                            <InternContainer>
                                    <ModalContainer className='shadow'>
                                        <InternModalContainer>
                                            <CloseButton>
                                                <button
                                                    onClick={() => this.closeModal()}
                                                >
                                                    <MdClose color='#000'  size={25} /> 
                                                </button>
                                            </CloseButton>
                                                <Title>Cadastro de Veículos</Title> 
                                            <FormAddClient>
                                                <Form1>
                                                    <div>
                                                        <h5>Nome do Proprietário:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='owner_name'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>CPF:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='owner_cpf'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>E-mail:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='owner_email'
                                                        />
                                                    </div>
                                                </Form1>
                                                <Form2>
                                                    <div>
                                                        <h5>Telefone:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='owner_phone'
                                                        />
                                                    </div>
                                                </Form2>

                                                <hr/>

                                                <Form1>
                                                    <div>
                                                        <h5>Modelo:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='model'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>Placa:</h5>
                                                        <input 
                                                            className='form-control'
                                                            ref='plate'
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5>Cor:</h5>
                                                        <input 
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
                                                                onChange={() => this.setState({car: true, moto: false})}
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
                                                                onChange={() => this.setState({moto: true, car: false})}
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
                                                    onClick={() => this.handleVehicleRegister()}
                                                >
                                                    Cadastrar
                                                </button>
                                            </CreateClientButton>
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
