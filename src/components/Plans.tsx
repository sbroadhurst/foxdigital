import React from 'react'
import styled from 'styled-components'
import { Plan, Payment } from '../contexts/interfaces'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12px;
  border-radius: 20px !important;
  padding: 5px;
  padding-bottom: 40px;
  width: 50%;
  min-width: 320px;
  height: 100vw-12px;
  background-color: white;
  box-shadow: 0px 10px 10px #aaaaaa;
  @media (max-width: 775px) {
    width: 100%;
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;
  margin-left: 10%;
  margin-top: 20px;
`
const SubText = styled.div`
  font-size: 0.85rem;
  color: grey;
`
const PlanArea = styled.div`
  background-color: lightblue;
  border-radius: 5px;
  margin-left: 10%;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border 1px solid blue;
`

const PlanImage = styled.img`
  background-color: #2657ff;
  border-radius: 5px;
  width: 55px;
  height: 55px;
} 
`
const Desc = styled.div`
  font-size: 1rem;
  color: grey;
  text-align: left;
  margin-left: 10%;
  max-width: 350px;
  margin-top: 20px;
`
const LinkText = styled.div`
  font-size: 1rem;
  color: blue;
  text-align: left;
  margin-left: 10%;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
`
const Email = styled.input`
  font-size: 14px;
  height: 30px;
  margin-left: 10%;
  padding-left: 12px;
  width: 40vw;
  max-width: 415px;
  min-width: 270px;
`
const ProceedButton = styled.div`
  background-color: #2657ff;
  border-radius: 5px;
  width: 60%;
  height: 35%;
  max-height:30px;
  padding: 20px;
  margin-left: 10%;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 400px;
  cursor: pointer;

  color: white;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
} 
`
const MoneyText = styled.var`
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: 350px) {
    font-size: 1.6rem;
  }
`

type PaymentInfo = Array<Payment>

interface Props {
  paymentInfo: PaymentInfo
  plans: Plan
}

const Plans = ({ paymentInfo, plans }: Props) => {
  return (
    <Frame>
      <Title>Upgrade your plan </Title>
      <Desc>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</Desc>
      <PlanArea>
        <PlanImage src={plans.planImage} alt={plans.type} />
        <div style={{ display: 'block', width: '40%' }}>
          <Title style={{ fontSize: '1.1rem' }}>{plans.type}</Title>
          <LinkText>CHANGE PLAN</LinkText>
        </div>
        <div>
          <sup style={{ fontSize: '0.85rem', color: 'grey' }}>$</sup>
          <MoneyText> {plans.price} </MoneyText>
          <sub style={{ fontSize: '0.85rem', color: 'grey' }}>/ {plans.time}</sub>
        </div>
      </PlanArea>
      <Title style={{ fontSize: '1.1rem' }}>Payment details</Title>

      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '10%' }}>
        {paymentInfo.map((payment, index) => {
          return (
            <div key={index} style={{ paddingTop: 15, paddingBottom: 15 }}>
              <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 432 }}>
                <img src={payment.logoImage} alt={payment.name} width={70} height={35} style={{ marginRight: 15 }} />
                <div style={{ display: 'flex', flexDirection: 'column', marginRight: 'auto' }}>
                  <div style={{ fontSize: '.95rem', fontWeight: 500 }}>{payment.type}</div>
                  <SubText>{payment.number}</SubText>
                </div>
                <input
                  type="textbox"
                  maxLength={3}
                  placeholder="CVC"
                  style={{ width: 50, fontSize: 14, textAlign: 'center', height: 30 }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <LinkText>ADD PAYMENT METHOD</LinkText>
      <Email type="email" placeholder="Email address" />
      <ProceedButton>Proceed to payment {`->`}</ProceedButton>
    </Frame>
  )
}

export default Plans
