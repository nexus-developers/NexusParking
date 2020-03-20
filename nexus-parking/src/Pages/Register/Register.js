import React from 'react';

import { 
  Container,
  ModalContainer,
  Title,
  AreaInputs1,
  AreaInputs2,
  AreaInputs3,
  Radios,
  RegisterButton
} from './styles';

export default function Register() {
  return (
    <Container>
      <ModalContainer className='shadow'>
        <Title>
          Assinar
        </Title>
        <AreaInputs1>
          <div>
            <h5>Nome:</h5>
            <input 
              className='form-control'
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
            />
          </div>
          <div className='secondInputRegister'>
            <h5>E-mail:</h5>
            <input 
              style={{width: '500px'}}
              className='form-control'
            />
          </div>
          <div className='secondInputRegister'>
            <h5>Telefone:</h5>
            <input 
              style={{width: '300px'}}
              className='form-control'
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

            <RegisterButton>
              Prosseguir
            </RegisterButton>
            </Radios>
        </AreaInputs3>
      </ModalContainer>
    </Container>
  );
}
