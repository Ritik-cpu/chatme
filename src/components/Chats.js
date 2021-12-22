import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from "../contexts/AuthContexts"

import { auth } from "../firebase"
import { AppBar, Avatar, Button, Toolbar,Typography } from "@material-ui/core"

export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const  {user}  = useAuth()
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        history.push("/")
        return
      }
      
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": 'a89e0748-474c-4f6f-87b5-b577ef61da8b',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": '013eab24-8b67-46a1-ad0e-56d2b43d8f45' }}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
    }
  }, [user, history])
  

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <AppBar position="static" >
          <Toolbar style={{justifyContent:'space-between'}}>
            <Typography variant="h6" style={{display:'flex',alignItems:'center'}}>
              <Avatar src={user.photoURL}/>
              Chatme
            </Typography>
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          </Toolbar>
      </AppBar>
      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='a89e0748-474c-4f6f-87b5-b577ef61da8b'
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}
