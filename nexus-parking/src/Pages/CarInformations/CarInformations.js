import React from 'react';

// Extern Container
import { Container, InternContainer } from '../../Components/Container/Container';

// Intern Styles Component
import { 
    ModalContainer,
    CloseButton,
    ModalInternContainer,
    ModalTitle,
    ModalInformations1,
    ModalInformations2,
    Title,
    Description,
    BadgeContainer,
    BadgeElement
} from './styles'

import { MdClose } from 'react-icons/md'


export default function CarInformations() {
  return (
    <Container>
        <InternContainer>
            <ModalContainer className='shadow'>
                <CloseButton>
                    <button>
                        <MdClose color='#000'  size={25} /> 
                    </button>
                </CloseButton>
                <ModalInternContainer>
                    
                    <ModalTitle>Renault Sandero - Stepway</ModalTitle>
                    <ModalInformations1>
                        <div>
                            <Title>Proprietário:</Title>
                            <Description>
                                Geraldo Domingos
                            </Description>
                        </div>
                        <div>
                            <Title>CPF</Title>
                            <Description>
                                123.123.123-12
                            </Description>
                        </div>
                        <div>
                            <Title>E-mail</Title>
                            <Description>
                                geraldo@gmail.com
                            </Description>
                        </div>
                        <div>
                            <Title>Telefone</Title>
                            <Description>
                                (81)98765-4321
                            </Description>
                        </div>
                    </ModalInformations1>
                    <ModalInformations2>
                        <div>
                            <Title>Placa do Veículo:</Title>
                            <Description>
                                PCK - 1234
                            </Description>
                        </div>
                        <div>
                            <Title>Cor:</Title>
                            <Description>
                                Laranja
                            </Description>
                        </div>
                        
                    </ModalInformations2>
                    <BadgeContainer>
                        <BadgeElement green/>
                        <span>Entrada: 14:00h</span>
                    </BadgeContainer>
                </ModalInternContainer>
            </ModalContainer>
        </InternContainer>
    </Container>
  );
}
