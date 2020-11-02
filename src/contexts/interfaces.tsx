export interface Plan {
  type: string
  price: string
  time: string
  planImage: string
}

export interface Payment {
  type: string
  logoImage: string
  number: string
  name: string
}

export interface UserProfile {
  name: string
  backgroundImage: string
  avatarImage: string
  location: string
  level: string
  followers: number
  projects: number
  rank: number
}
