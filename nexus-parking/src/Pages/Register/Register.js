import React, { Component } from 'react';

import { connect } from 'react-redux';

import Api from '../../Services/Api';

import { 
  Container,
  ModalContainer,
  CloseButton,
  Title,
  AreaInputs1,
  AreaInputs2,
  AreaInputs3,
  Radios,
  RegisterButton
} from './styles';

import { MdClose } from 'react-icons/md'

class Register extends Component {

  handleRegister = async e => {
    // e.preventDefault();

    const name = this.refs.name.value;
    const cnpj = parseInt(this.refs.cnpj.value);
    const email = this.refs.email.value;
    const phone = parseInt(this.refs.phone.value);

    const info = { name, cnpj, email, phone }
    
    try {
      await Api.post('/register', info);
      
      this.closeModal();
    } catch (error) {
      console.log(error)
    }
  }

  closeModal = () => {
    const { dispatch } = this.props;
  
    dispatch({
      type: 'MODAL_CLOSE',
    })
  };

    render(){

      const { modalClose } = this.props 

      return (
        <>
          {
            modalClose ? (
              <Container>
                <ModalContainer className='shadow'>
                  <CloseButton>
                      <button
                        onClick={() => this.closeModal()}
                      >
                        <MdClose 
                          color='#000'  
                          size={25} 
                        /> 
                      </button>
                    </CloseButton>
                  <Title>
                    Assinar
                  </Title>
                  <AreaInputs1>
                    <div>
                      <h5>Nome:</h5>
                      <input 
                        className='form-control'
                        ref='name'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>Nome da Empresa:</h5>
                      <input 
                        className='form-control'
                      />
                    </div>
                  </AreaInputs1>
                  <AreaInputs2>
                  <div>
                      <h5>CPF/CNPJ:</h5>
                      <input
                        style={{width: '300px'}}
                        className='form-control'
                        ref='cnpj'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>E-mail:</h5>
                      <input 
                        style={{width: '500px'}}
                        className='form-control'
                        ref='email'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>Telefone:</h5>
                      <input 
                        style={{width: '300px'}}
                        className='form-control'
                        ref='phone'
                      />
                    </div>
                  </AreaInputs2>
                  <AreaInputs3>
                      <h5>
                        Método de Pagamento:
                      </h5>
                      <Radios className="form-check">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="Radios1" value="option1"/>
                        <label class="form-check-label" for="Radios1">
                          Cartão de Crédito
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="option2"/>
                        <label class="form-check-label" for="Radios2">
                          Cartão de Débito
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="option2"/>
                        <label class="form-check-label" for="Radios2">
                          Transferência Bancária
                        </label>
                      </div>
                      <RegisterButton 
                        onClick={() => this.handleRegister()}
                      >
                        Prosseguir
                      </RegisterButton>
                    </Radios>
                  </AreaInputs3>
                </ModalContainer>
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
  modalClose: state.modal
});

export default connect(mapStateToProps)(Register)