import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'


const VideoCall=dynamic(() => import('../components/VideoCall'), { ssr: false })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <VideoCall></VideoCall>
    </div>
  )
}

export default Home
