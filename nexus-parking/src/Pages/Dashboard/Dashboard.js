import React, { useState } from 'react';

// Extern Components
import { Container } from '../../Components/Container/Container';

import { IoIosSearch } from 'react-icons/io'

import { AiOutlinePlus } from 'react-icons/ai'

// Modals
import InformationModalComponent from '../CarInformations/CarInformations'

import AddCarComponent from '../AddCar/AddCar'

import Payment from '../Payment/Payment'


// Intern Styles
import {
  InternContainer,
  Title,
  SticksEffect,
  DarkSticky,
  OrangeSticky,
  Menu,
  MenuTitleDiv,
  MenuTitle,
  MenuDescription,
  SearchCamp,
  SearchButton,
  CardsContainer,
  Cards,
  Card,
  BadgeElement,
  CarModel,
  Divisor,
  CarInformations,
  LicensePlate,
  CarColor,
  FinishButton,
  AreaDivisor,
  Hr,
  AreaDivisorText,
  ButtonContainer,
  AddButton
} from './styles'

export default function Dashboard() {
  const [ InformationModals, setInformationModals] = useState(false)
  const [ AddCar, setAddCar ] = useState(false)
  const [ payment, setPayment ] = useState(false)

  return (
    <Container>
      <InternContainer>
        <Title>Início</Title>
        <SticksEffect>
          <div>
            <DarkSticky/>
          </div>
          <div>
            <OrangeSticky/>
          </div>
        </SticksEffect>

        <Menu>
          <MenuTitleDiv>
              <MenuTitle>
                Carros Estacionados
              </MenuTitle>
              <MenuDescription>
                Exibindo todos os carros estacionados no momento
              </MenuDescription>
          </MenuTitleDiv>

          <SearchCamp>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <IoIosSearch/>
                </span>
              </div>
              <input type="text" placeholder='Digite a placa para buscar o carro...' class="form-control"/>
            </div>
            <SearchButton>
              Buscar
            </SearchButton>
          </SearchCamp>
        </Menu>

      <CardsContainer>
        <Cards className='row' >
            <Card className='shadow' onClick={() => setInformationModals(true)}>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton
                  onClick={() => setPayment(true)}
                >
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
  
            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>

   
            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
       
          <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
          
            <Card className='shadow'>
              <header>
                  <BadgeElement green/>
                  <span>Entrada: 14:00h</span>
              </header>
              <CarModel>
                Renault Sandero - Stepway
              </CarModel>
              <Divisor>
                <CarInformations>
                  <LicensePlate>Placa: PJE - 1234</LicensePlate>
                  <CarColor>Cor: Laranja</CarColor>
                </CarInformations>
                <FinishButton>
                    Finalizar
                </FinishButton>
              </Divisor>
            </Card>
        </Cards>
      </CardsContainer>

      <AreaDivisor>
        <Hr/>
        <AreaDivisorText>Isso é tudo</AreaDivisorText>
        <Hr/>
      </AreaDivisor>



      {/* Veiculos Retirados */}
      <MenuTitleDiv>
        <MenuTitle>
          Carros Recentes
        </MenuTitle>
        <MenuDescription>
          Exibindo todos que saíram recentimente
        </MenuDescription>
      </MenuTitleDiv>

      <CardsContainer>
        <Cards className='row'>
            <Card className='shadow'>
                <header>
                    <BadgeElement finalizado/>
                    <span>Saída: 18:00h</span>
                </header>
                <CarModel>
                  Renault Sandero - Stepway
                </CarModel>
                <Divisor>
                  <CarInformations>
                    <LicensePlate>Placa: PJE - 1234</LicensePlate>
                    <CarColor>Cor: Laranja</CarColor>
                  </CarInformations>
                  <FinishButton finalizado>
                      Finalizado
                  </FinishButton>
                </Divisor>
            </Card>
          </Cards>
        </CardsContainer>

      <ButtonContainer>
        <AddButton>
          <AiOutlinePlus color='#fff' size={40} onClick={() => setAddCar(true)}/>
        </AddButton>
      </ButtonContainer>
      
      {/* CarInformationsComponent */}
      {
        InformationModals ? (
          <InformationModalComponent/>
        ) : (
          null
        )
      }

      {
        AddCar ? (
          <AddCarComponent/> 
        ) : (
          null
        )
      }

      {
        payment ? (
          <Payment/>
        ) : (
          null
        )
      }
      </InternContainer>
    </Container>
  );
}
