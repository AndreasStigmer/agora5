import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout, PropsInterface } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [username, setUsername] = useState('')

  const props:PropsInterface = {
    rtcProps:{
        appId: '18ec1d2ef3ed4d7d9bfa4b91e21e43c9',
        channel: 'test',
        token: '007eJxTYMhXXvD37LNdL+9Z3F/8VkXU5P3HG957nm2UWCDjpcyt8oFdgcHQIjXZMMUoNc04NcUkxTzFMikt0STJ0jDVyDDVxDjZUnple3JDICPDJLNWRkYGCATxWRhKUotLGBgAD0ghYQ==', //add your token if using app in secured mode
        role: isHost ? 'host' : 'audience',
        layout: isPinned ? layout.pin : layout.grid
      },
      rtmProps:{username: username || 'user', displayUsername: true},
      callbacks:{
        EndCall: () =>  setVideocall(false),
      }

    }
  
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Chat App</h1>
        {videocall ? (<>
          <div style={styles.nav}>
            <p style={{ fontSize: 20, width: 200 }}>Youre {isHost ? 'a host' : 'an audience'}</p>
            <p style={styles.btn} onClick={() => setHost(!isHost)}>Change Role</p>
            <p style={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p>
          </div>
          <AgoraUIKit {...props} />
            </>
        ) : (
          <div style={styles.nav}>
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
  btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: '4px 8px', color: '#ffffff', fontSize: 20 },
  input: {display: 'flex', height: 24, alignSelf: 'center'} as CSSProperties
}

export default App