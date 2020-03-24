import React, { Component } from 'react';

import { connect } from 'react-redux'

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
                                                        <input className='form-control'/>
                                                    </div>
                                                    <div>
                                                        <h5>CPF:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                    <div>
                                                        <h5>E-mail:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                </Form1>
                                                <Form2>
                                                    <div>
                                                        <h5>Telefone:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                </Form2>

                                                <hr/>

                                                <Form1>
                                                    <div>
                                                        <h5>Modelo:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                    <div>
                                                        <h5>Placa:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                    <div>
                                                        <h5>Cor:</h5>
                                                        <input className='form-control'/>
                                                    </div>
                                                </Form1>
                                                <Form2>
                                                    <FormCheck>
                                                    <h5>Tipo:</h5>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="Radios" id="Radios1" value="option1"/>
                                                            <label class="form-check-label" for="Radios1">
                                                                Carro
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="option2"/>
                                                            <label class="form-check-label" for="Radios2">
                                                                Moto
                                                            </label>
                                                        </div>
                                                    </FormCheck>
                                                </Form2>
                                            </FormAddClient>

                                            <CreateClientButton>
                                                <button>
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
