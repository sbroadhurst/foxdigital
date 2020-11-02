import React from 'react'
import styled from 'styled-components'
import { UserProfile } from '../contexts/interfaces'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12px;
  border-radius: 20px !important;
  padding: 5px;
  min-width: 320px;
  width: 30vw;
  background-color: white;
  box-shadow: 0px 10px 10px #aaaaaa;
`

const Title = styled.div`
  font-size: 2rem;
  color: black;
`
const SubText = styled.div`
  font-size: 1rem;
  color: grey;
`

const NumberText = styled.div`
  font-size: 2.2rem;
  color: black;
`
const LevelArea = styled.div`
  font-size: 1rem;
  color: white;
  background-color: #2657ff;
  text-align: center;
  padding: 10px;
  border-radius: 10%;
  margin: 20px;
`
const AvatarArea = styled.div`
  height: 25%;
  width: 25%;
  border: 5px solid white;
  position: absolute;
  border-radius: 50%;
  min-width: 125px;
  min-height: 125px;
`
const CenterBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 15%;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
const StatsArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

const Profile = ({ name, backgroundImage, avatarImage, location, level, followers, projects, rank }: UserProfile) => {
  return (
    <Frame>
      <div style={{ height: 150 }}>
        <img
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
          width="100%"
          height="100%"
          src={backgroundImage}
          alt="background"
        />
      </div>
      <CenterBottom>
        <AvatarArea>
          <img width="100%" height="100%" src={avatarImage} alt="avatarImage" />
        </AvatarArea>
      </CenterBottom>
      <Center>
        <Title>{name}</Title>
        <SubText>{location}</SubText>
        <LevelArea>{level}</LevelArea>
      </Center>

      <StatsArea>
        <Info>
          <SubText>Followers</SubText>
          <NumberText>{followers}</NumberText>
        </Info>
        <Info>
          <SubText>Projects</SubText>
          <NumberText>{projects}</NumberText>
        </Info>
        <Info>
          <SubText>Rank</SubText>
          <NumberText>{rank}</NumberText>
        </Info>
      </StatsArea>
    </Frame>
  )
}

export default Profile
