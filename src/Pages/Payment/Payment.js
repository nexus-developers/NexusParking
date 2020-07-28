import React, { Component } from 'react';

import { connect } from 'react-redux'

import moment from 'moment-timezone';

import { Container, InternContainer } from '../../Components/Container/Container';

import Api from '../../Services/Api';

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

    state = {
        pay: {},
        counter: true
    }

    componentDidMount(){
        this.requestPayment();
    }

    requestPayment = async () => {
        const { id } = this.props;

        const response = await Api.get(`/payment/${id}`);

        this.setState({ pay: response.data });
    }

    finishPayment = async () => {
        const { id } = this.props;

        try {
            await Api.put(`/payment/${id}`);

            this.closeModal()
        } catch (error) {
            console.log(error)
        }
    }

    closeModal = () => {
        const { dispatch } = this.props;
      
        dispatch({
          type: 'CLOSE_PAYMENT',
        })
    };

    wppNumber = async (phone, price) => {
        const message = `Valor pago no estacionamento ${price}`
        window.open(`https://api.whatsapp.com/send?phone=55${phone}&text=${encodeURI(message)}`);
        this.finishPayment();
    }
    
    render(){

        const { Payment } = this.props
        const { pay } = this.state

        return (
            <>
                {
                    Payment ? (
                        <Container>
                            <InternContainer>
                                <PaymentContainer 
                                    className='shadow'
                                >
                                        <CloseButton
                                            onClick={() => this.closeModal()}
                                        >
                                            <button>
                                                <MdClose 
                                                    color='#000'  
                                                    size={25} 
                                                    /> 
                                            </button>
                                        </CloseButton>
                                        <Title>{pay.model}</Title>
                                        <h1>Valor Total</h1>
                                        <h5>R$ {pay.value},00</h5>
                                        <p>Horário de entrada: {moment.tz(pay.start, "America/Sao_Paulo").format('HH:mm')}h</p>
                                        <p>Horário de saída: {moment.tz(pay.end, "America/Sao_Paulo").format('HH:mm')}h</p>
                
                                        <ValueHour>Valor por hora: R$ {pay.price}.00</ValueHour>

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
                                        <PaymentButton pago
                                            onClick={() => this.wppNumber(pay.phone, pay.value)}
                                        >
                                            Pagamento Processado!
                                        </PaymentButton>
                                    </PaymentButtonContainer>
                                </PaymentContainer>
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
    Payment: state.payment[0],
    id: state.payment[1]
  });
  
  export default connect(mapStateToProps)(Payment)