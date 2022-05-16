import { NextPage } from 'next'
import React from 'react'
import Map from '../components/Map'

const Confirm: NextPage = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Map></Map>
        <div className='flex-1'></div>
    </div>
  )
}

export default Confirm