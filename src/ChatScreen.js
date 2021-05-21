import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./ChatScreen.css"

function ChatScreen() {

    const [input,setInput]=useState('');

    const [messages,setmessages]=useState([
        {
            name:"hi",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejyWxg3_4iE9iSY9SuGG4Yhy2Hm3Tk_rxHg&usqp=CAU",
            message:"What,s up"
        },
        {
            name:"hi",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejyWxg3_4iE9iSY9SuGG4Yhy2Hm3Tk_rxHg&usqp=CAU",
            message:"How are you"
        },
        {
            message:"What,s up?"
        }
    ])

    const handleSend = (e)=>{
        e.preventDefault();

        setmessages([...messages, {message:input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message)=>{
                return(
                    message.name?(
                        <div className="chatScreen__message">
                            <Avatar className="chatScreen__avatar" alt={message.name} src={message.image}/>
                            <p className="chatScreen__text">{message.message}</p>
                        </div>
                    ):(
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
                )
            })}
            <form className="chatScreen__input">
                <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                type="text" 
                placeholder="Type a message" 
                className="chatScreen__inputfield"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__button" >Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
