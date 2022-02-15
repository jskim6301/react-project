import React,{useState} from 'react'

// 부모의 props setIsOpen는 어떻게 처리?
// 이벤트 버블링으로 처리
export default function Dialog(props) {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div>
        <button onClick={() => setIsOpen(true)}>Open</button>
        {isOpen && <div
            style={{
                position: "absolute",
                zIndex: 99,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "1px solid black",
                padding: 24,
                backgroundColor: "white",
            }}
        >
            { typeof props.title === "string" ? (
                <h1>{props.title}</h1>
             ) : props.title }
            
            { typeof props.description === "string" ? (
                <h1>{props.description}</h1>
             ) : props.description }

            { typeof props.button === "string" ? (
                <button style={{backgroundColor:"red", color: "white"}} onClick={() => setIsOpen(false)}>{props.button}</button>
             ) : (
                 <div onClick={() => setIsOpen(false)}>{props.button}</div>
                 ) 
                 /* 이벤트 버블링으로 처리 */} 

            </div>}
            {isOpen && <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "lightgray"
            }}/>} 
    </div>
  )
}
