import React, { createContext, FunctionComponent } from 'react'

import mastercardLogo from '../assets/mastercardLogo.jpg'
import me from '../assets/me.png'
import mistTree from '../assets/mistTree.jpg'
import sailboat from '../assets/sailboat.png'
import visaLogo from '../assets/visaLogo.png'

export const ProfileContext = createContext({})
interface IProps {}

const ProfileProvider: FunctionComponent<IProps> = ({ children }) => {
  const state = {
    plans: { type: 'Small Business', price: '8,350', time: 'year', planImage: sailboat },
    profile: {
      name: 'Filip Martin Jose',
      backgroundImage: mistTree,
      avatarImage: me,
      location: 'Los Angeles',
      level: 'Pro Level',
      followers: 980,
      projects: 142,
      rank: 129,
      paymentInfo: [
        {
          type: 'Credit card',
          logoImage: mastercardLogo,
          number: '2344 xxxx xxxx 8880',
          name: 'Mastercard',
        },
        {
          type: 'Credit card',
          logoImage: visaLogo,
          number: '8890 xxxx xxxx 1234',
          name: 'Visa',
        },
      ],
    },
  }
  return <ProfileContext.Provider value={state}>{children}</ProfileContext.Provider>
}

export default ProfileProvider
