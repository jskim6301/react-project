import React from 'react'
import Dialog from './Dialog_2';
export default function ThankyouDialog() {
  return (
    <>
    <Dialog 
        title="Thanks"
        description="It is honor to meet you!"
        button="close"
    />
    <Dialog
        title={<h1 style={{color: 'purple'}}>Thanks</h1>}
        description="It is honor to meet you!"
        button={
            <button style={{backgroundColor:"red", color: "white"}}>
                close
            </button>
        }
    />
    </>
  )
}
