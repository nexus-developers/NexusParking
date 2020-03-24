import React, { Component } from 'react';

import { connect } from 'react-redux'

import { Container, InternContainer } from '../../Components/Container/Container';

import { 
    PaymentContainer,
    CloseButton,
    Title,
    ValueHour,
    PaymentForm,
    Radio,
    PaymentButtonContainer,
    PaymentButton
} from './styles'

import { MdClose } from 'react-icons/md'

class Payment extends Component {

    closeModal = () => {
        const { dispatch } = this.props;
      
        dispatch({
          type: 'MODAL_CLOSE',
        })
      };

    render(){

        // const { payment } = this.props

        return (
            // <>
            //     {
            //         payment ? (
                        <Container>
                            <InternContainer>
                                <PaymentContainer 
                                    className='shadow'
                                >
                                        <CloseButton>
                                            <button>
                                                <MdClose 
                                                    color='#000'  
                                                    size={25} 
                                                    /> 
                                            </button>
                                        </CloseButton>
                                    <Title>Renault Sandero - Stepway</Title>
                                    <h1>Valor Total</h1>
                                    <h5>R$ 40,00</h5>
                                    <p>Horário de entrada: 13:00h</p>
                                    <p>Horário de saída: 18:00h</p>

                                    <ValueHour>Valor por hora: R$ 6.00</ValueHour>

                                    <PaymentForm>
                                        <h3>Formas de Pagamento:</h3>
                                        <Radio>
                                            <input type="radio" value="0" name="campo-radio" id="campo-radio1" />
                                            <label for="campo-radio1">Cartão de Crédito</label>

                                            <input type="radio" value="0" name="campo-radio" id="campo-radio2" />
                                            <label for="campo-radio2">Dinheiro</label>
                                        </Radio>
                                    </PaymentForm>

                                    <PaymentButtonContainer>
                                        <PaymentButton pago>
                                            Pagamento Processado!
                                        </PaymentButton>
                                    </PaymentButtonContainer>
                                </PaymentContainer>
                            </InternContainer>
                        </Container>
            //         ) : (
            //             null
            //         )
            //     }
            // </>
        );
    }
}

// const mapStateToProps = state => ({
//     payment: state.modal
//   });
  
//   export default connect(mapStateToProps)(Pay)