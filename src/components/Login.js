import React from "react"

import { GoogleOutlined,  } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"
import { Button, Card, CardContent, Typography } from "@material-ui/core"

export default function Login() {
  return (
    <div id='login-page'>
      {/* <div id='login-card'>
        <h2>Welcome in chatme!</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
         <GoogleOutlined/>Sign In with Google
        </div>
      </div> */}
      <Card id='login-card'>
          <CardContent>
            <Typography variant="h5" style={{background:'#2979ff',color:'white',padding:'16px'}} color="initial">
              WELCOME IN CHATME
            </Typography>
            <Button style={{background:'#ff1744',marginTop:'40px',color:'white'}} onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                <GoogleOutlined style={{marginRight:'10px'}}/> Sign in with Google
            </Button>
          </CardContent>
      </Card>
      
    </div>
  )
}
