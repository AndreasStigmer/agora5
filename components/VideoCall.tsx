import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout, PropsInterface } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import config from '../src/config'

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(config.initial_layout==="pinned")
  const [username, setUsername] = useState('')

  const props:PropsInterface = {
    rtcProps:{
        appId: config.agora_app_id,
        channel: config.agora_channel,
        token: config.agora_app_token,
        role: isHost ? 'host' : 'audience',
        layout: isPinned ? layout.pin : layout.grid
      },
      styleProps:{
        localBtnContainer:{backgroundColor:'#333333'}
      },
      rtmProps:{username: username || 'user', displayUsername: true},
      callbacks:{
        EndCall: () =>  setVideocall(false),
      }

    }
  
  return (
    <div className="flex m-auto flex-1 h-screen lg:w-full">
      <div className="flex bg-slate-400 p-5 rounded-xl mt-5 flex-col flex-auto">
        <h1 className='text-center font-semibold text-zinc-900  mb-6 text-5xl'>Chat App</h1>
        {videocall ? (<>
          <div className='mb-3' style={styles.nav}>
            <p className='rounded-lg text-xl text-slate-100' >Youre {isHost ? 'a host' : 'an audience'}</p>
            <p className='bg-slate-600 p-3 text-lg text-center shadow-md hover:bg-slate-500 rounded-lg text-slate-100 cursor-pointer' onClick={() => setHost(!isHost)}>Change Role</p>
            <p className='bg-slate-600 p-3 text-lg text-center shadow-md hover:bg-slate-500 rounded-lg text-slate-100 cursor-pointer' onClick={() => setPinned(!isPinned)}>Change Layout</p>
          </div>
          <AgoraUIKit {...props} />
            </>
        ) : (
          <div  style={styles.nav}>
              <input style={styles.input} placeholder='nickname' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>Start Call</h3>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
  heading: { textAlign: 'center' as const, marginBottom: 0 },
  videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 } as CSSProperties,
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: { cursor: 'pointer', borderRadius: 5, padding: '4px 8px', color: '#ffffff', fontSize: 20 },
  input: {display: 'flex', height: 24, alignSelf: 'center'} as CSSProperties
}

export default App