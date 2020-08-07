import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { connect } from 'react-redux';
import * as Yup from 'yup';

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

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('Campo de nome é obrigatorio!'),
  nomeEmpresa: Yup.string()
    .required('Campo de nome da empresa é obrigatorio!'),
  cnpj: Yup.string()
    .required('Campo de cpf/cnpj é obrigatorio!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('Campo de email é obrigatorio!'),
  telefone: Yup.string()
    .required('Campo de telefone é obrigatorio!')
});

class Register extends Component {
  state = {
    cpf: '',
    phone: '',
    name: '',
    cnpj: '',
    email: '',
    companie_name: ''
  }

  handleRegister = async e => {
    const { cpf, phone, name, companie_name, email } = this.state;

    const cnpj = cleanMask(cpf)
    const cleanPhone = cleanMask(phone);

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

  render() {

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
                <Form schema={schema} onSubmit={this.handleRegister}>
                  <AreaInputs1>
                    <div>
                      <h5>Nome:</h5>
                      <Input
                        name="nome"
                        className='form-control'
                        ref='name'
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>Nome da Empresa:</h5>
                      <Input
                        name="nomeEmpresa"
                        className='form-control'
                        ref='companie'
                        onChange={e => this.setState({ companie_name: e.target.value })}
                      />
                    </div>
                  </AreaInputs1>
                  <AreaInputs2>
                    <div>
                      <h5>CPF/CNPJ:</h5>
                      <Input
                        name='cnpj'
                        value={cpf}
                        onChange={e => this.setState({ cpf: cpfMask(e.target.value) })}
                        style={{ width: '100%' }}
                        className='form-control'
                        ref='cnpj'
                        maxLength='18'
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>E-mail:</h5>
                      <Input
                        name='email'
                        style={{ width: '100%' }}
                        className='form-control'
                        ref='email'
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div className='secondInputRegister'>
                      <h5>Telefone:</h5>
                      <Input
                        name='telefone'
                        value={phone}
                        onChange={e => this.setState({ phone: phoneMask(e.target.value) })}
                        style={{ width: '100%' }}
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
                        <input class="form-check-input" type="radio" name="Radios" id="Radios1" value="option1" />
                        <label class="form-check-label" for="Radios1">
                          Cartão de Crédito
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="option2" />
                        <label class="form-check-label" for="Radios2">
                          Cartão de Débito
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="option2" />
                        <label class="form-check-label" for="Radios2">
                          Transferência Bancária
                        </label>
                      </div>
                      <RegisterButton
                        type='submit'
                      >
                        Prosseguir
                      </RegisterButton>
                    </Radios>
                  </AreaInputs3>
                </Form>
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