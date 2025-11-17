import React from 'react'
import ClientProfilePage from '../ClientProfilePage'
import { useLocation } from 'react-router-dom'

const PreferenceWithClient = () => {
    const location = useLocation()
    const details = location.state

    console.log( "profile",details)
  return (
    <div>
    <ClientProfilePage details={details}/>
    {/* dvdvd */}
    </div>
  )
}

export default PreferenceWithClient