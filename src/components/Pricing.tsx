import React, { useState } from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12px;
  border-radius: 20px !important;
  padding: 5px;
  padding-bottom: 40px;
  min-width: 320px;
  width: 30vw;
  background-color: white;
  box-shadow: 0px 10px 10px #aaaaaa;
`
const ButtonGroup = styled.div`
  margin: 20px;
`

const Button = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  width: 120px;
  height: 55px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 1.25rem;
  cursor: pointer;
} 
`

const Slider = styled.input`
  width: 80%;
  cursor: pointer;
`
const FixedInput = styled.input`
  font-size: 20px;
  margin-left: 10px;
  width: 100px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: left;
  margin-left: 10%;
  margin-top: 20px;
`

const Desc = styled.div`
  font-size: 1rem;
  color: grey;
  text-align: left;
  margin-left: 10%;
  max-width: 75%;
  margin-top: 20px;
`

const SubText = styled.sub`
  font-size: 0.9rem;
  color: grey;
`

const Pricing = () => {
  const [mode, setMode] = useState('Hourly')
  const [sliderValue, setSliderValue] = useState(20)
  const min = 20
  const max = 300

  return (
    <Frame>
      <Title>Set up your pricing</Title>
      <Desc>Please set up your hourly or fixed rate so that the client is aware of your pricing.</Desc>
      <div>
        <ButtonGroup>
          <Button
            type="button"
            onClick={() => setMode('Hourly')}
            style={mode === 'Hourly' ? { backgroundColor: '#f2f5ff' } : { backgroundColor: 'white' }}>
            <i className="fa fa-clock-o" /> Hourly{' '}
          </Button>
          <Button
            type="button"
            onClick={() => setMode('Fixed')}
            style={mode === 'Fixed' ? { backgroundColor: '#f2f5ff' } : { backgroundColor: 'white' }}>
            <i className="fa fa-file-text-o" /> Fixed{' '}
          </Button>
        </ButtonGroup>
      </div>

      {mode === 'Hourly' ? (
        <div>
          <div style={{ marginLeft: '10%' }}>
            ${sliderValue} <SubText> / hour </SubText>{' '}
          </div>
          <div className="slidercontainer">
            <Slider
              type="range"
              min={min}
              max={max}
              defaultValue={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}></Slider>
            <div style={{ position: 'absolute', left: '10%' }}>
              $<strong>{min}</strong>
            </div>
            <div style={{ position: 'absolute', left: '85%' }}>
              $<strong>{max}</strong>
            </div>
          </div>
        </div>
      ) : (
        <div>
          $<FixedInput type="textbox" />
        </div>
      )}
    </Frame>
  )
}

export default Pricing
