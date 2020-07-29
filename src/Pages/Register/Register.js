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

import { cpfMask, phoneMask, cleanMask } from '../../Utils/Mask';

import { MdClose } from 'react-icons/md'

class Register extends Component {
  state = {
    cpf: '',
    phone: ''
  }

  handleRegister = async e => {
    const { cpf, phone } = this.state;

    const name = this.refs.name.value;
    const cnpj = cleanMask(cpf)
    const email = this.refs.email.value;
    const cleanPhone = cleanMask(phone);
    const companie_name = this.refs.companie.value;

    const info = { name, cnpj, email, phone: cleanPhone, companie_name }
    
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
      const { cpf, phone } = this.state;

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
                        ref='companie'
                      />
                    </div>
                  </AreaInputs1>
                  <AreaInputs2>
                  <div>
                      <h5>CPF/CNPJ:</h5>
                      <input
                        value={cpf}
                        onChange={e => this.setState({ cpf: cpfMask(e.target.value) })}
                        style={{width: '100%'}}
                        className='form-control'
                        ref='cnpj'
                        maxLength='18'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>E-mail:</h5>
                      <input 
                        style={{width: '100%'}}
                        className='form-control'
                        ref='email'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>Telefone:</h5>
                      <input 
                        value={ phone }
                        onChange={e => this.setState({ phone: phoneMask(e.target.value) })}
                        style={{width: '100%'}}
                        className='form-control'
                        ref='phone'
                        maxLength='15'
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