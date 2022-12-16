import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Channel } from '../src/types'

import styles from '../styles/Home.module.css'


const VideoCall=dynamic(() => import('../components/VideoCall'), { ssr: false })

interface Props {
  channels:Array<Channel>
}

export const getServerSideProps:GetServerSideProps = async (context) => {
/*  const channels:Array<Channel>= [
    {id:1,name:'General',token:'12345'},
    {id:2,name:'Education',token:'12345'},
    {id:3,name:'Test',token:'12345'}
  ]*/

  const res = await fetch('http://localhost:3000/api/channels')
  if(!res.ok){
    throw new Error('Failed to fetch channels')
  }
  const channels=await res.json() as Array<Channel>

  return {
    props: {
      channels
    }
  }
}

const Home: NextPage<Props> = ({channels}) => {

  const [channel, setChannel] = useState('')
  const [token, setToken] = useState('')
  
  return (
    <div className={styles.container}>
      <select onChange={(e)=>{ setChannel(e.target.options[e.target.selectedIndex].text);setToken(e.target.value)}}>
        <option value=''>---Select Channel---</option>
        {channels.map((item)=>(
          <option key={item.id} value={item.token}>{item.name}</option>
        ))}
      </select>
      {channel!='' &&
        <VideoCall channel={channel} token={token}></VideoCall>
      }
    </div>
  )
}

export default Home
