import React, { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import Profile from './Profile'
import Pricing from './Pricing'
import Plans from './Plans'

const Layout = () => {
  const assets: any = useContext(ProfileContext)
  const { profile, plans }: any = assets

  const { name, backgroundImage, avatarImage, location, level, followers, projects, rank, paymentInfo } = profile
  return (
    <div className="App">
      <Plans paymentInfo={paymentInfo} plans={plans} />
      <div className="profile">
        <Profile
          name={name}
          backgroundImage={backgroundImage}
          avatarImage={avatarImage}
          location={location}
          level={level}
          followers={followers}
          projects={projects}
          rank={rank}
        />
        <div className="payment">
          <Pricing />
        </div>
      </div>
    </div>
  )
}

export default Layout
