import React from 'react'
import DialogTwo from './Dialog2';
import DialogThree from './Dialog3';
export default function ThankyouDialog() {
  return (
    <>
    <DialogTwo 
        title="Thanks"
        description="It is honor to meet you!"
        button="close"
    />
    <DialogThree
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
