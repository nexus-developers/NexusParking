import React, { Component } from 'react';

import { connect } from 'react-redux';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

// Extern Components
import { Container, InternContainer } from '../../Components/Container/Container';

import {
    ModalContainer,
    CloseButton,
    InternModalContainer,
    Title,
    ContainerCalendar,
    Create
} from './styles';

import { MdClose } from 'react-icons/md'

import Api from '../../Services/Api';

class Reports extends Component {

    state = {
        start: '',
        end: '',
        link: ''
    }

    closeModal = () => {
        const { dispatch } = this.props;

        dispatch({
            type: 'REPORT_CLOSE',
        })
    };

    handleReport = async () => {
        const { start, end } = this.state;

        const info = { start, end };

        try {
            const response = await Api.post('/report', info);

            window.open(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { Report } = this.props
        const { link } = this.state;
        console.log(link)

        return (
            <>
                {
                    Report ? (

                        <InternContainer>
                            <ModalContainer className='shadow'>
                                <InternModalContainer>
                                    <CloseButton>
                                        <button
                                            onClick={() => this.closeModal()}
                                        >
                                            <MdClose color='#000' size={25} />
                                        </button>
                                    </CloseButton>
                                    <Title>Relatórios</Title>
                                    <ContainerCalendar>
                                        <Calendar
                                            onChange={start => this.setState({ start })}
                                        />
                                        <Calendar
                                            onChange={end => this.setState({ end })}
                                        />
                                    </ContainerCalendar>
                                    <Create>
                                        <button
                                            onClick={() => this.handleReport()}
                                        >Gerar</button>
                                    </Create>
                                </InternModalContainer>
                            </ModalContainer>
                        </InternContainer>

                    ) : (
                            null
                        )
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    Report: state.reports
});

export default connect(mapStateToProps)(Reports)