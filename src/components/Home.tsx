import React from 'react'
import MyNavigate from './NavBar'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Auth0ProviderWithNavigate from './AuthProvider'


const Home = () => {
    return (
        <>
        <Auth0ProviderWithNavigate>
        <MyNavigate />
        <h1>Welcome to the task app!</h1>
        
          <LoginButton />
          <LogoutButton />
            
        </Auth0ProviderWithNavigate>
        </>
    )
}
export default Home