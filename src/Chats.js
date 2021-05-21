import React from 'react'
import "./Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Ayush"
            message="Hey! how are you"
            timestamp="35 minutes ago"
            profilePics="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejyWxg3_4iE9iSY9SuGG4Yhy2Hm3Tk_rxHg&usqp=CAU"
            />
            <Chat
            name="Elon"
            message="Wanna work at Spacex"
            timestamp="1hr ago"
            profilePics="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
            />
            <Chat
            name="Jeff"
            message="Got a job for you at Amazon"
            timestamp="3hrs ago"
            profilePics="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
            />
            <Chat
            name="Mark Zukerberg"
            message="I am founder of Facebook"
            timestamp="1 day ago"
            profilePics="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
            />
            <Chat
            name="Shyam"
            message="Hi kya kar rahe"
            timestamp="5 days ago"
            profilePics="https://pbs.twimg.com/profile_images/524143079381401600/fRDNNVHs.jpeg"
            />

        </div>
    )
}

export default Chats
