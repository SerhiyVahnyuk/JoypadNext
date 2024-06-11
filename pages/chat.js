import styles from "./chat.module.css";
import { socket } from "../socket";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import Image from "next/image";
import Router from "next/router";

export default function Chat() {
    const [message, setMessage] = useState()
    const [messages, setMessages] = useState([])
    const token = Cookies.get("token")
    const [info, setInfo] = useState()
    const [group, setGroup] = useState()
    const [groups, setGroups] = useState()
    const [groupSettigsModal, setGroupSettigsModal] = useState(false)
    const [groupIdSettigs, setGroupIdSettigs] = useState()
    const [groupInfo, setGroupInfo] = useState()
    const [code,setCode] = useState()
    const [error,setError] = useState()

    function updateMessages(groupId) {
        if(groupId){
            fetch(`http://localhost:8000/messages/group/${groupId}`, {
                method: "GET",
                headers: {
                    token: token
                }
            }).then((ressp) => {
                return ressp.json()
            }).then(async (mesgs) => {
                const msgs = []
                fetch(`http://localhost:8000/group/users/${groupId}`, {
                    method: "GET"
                }).then((avas) => {
                    return avas.json()
                }).then(async (avatars) => {
                    for await (let i of mesgs.messages) {
                        i["avatar"] = avatars.avatars[`${i.steamid}`]
                        msgs.push(i)
                    }
                    setMessages(msgs)
                })
            })
        }
    }

    useEffect(() => {
        if (!token) {
            window.location.href = "http://localhost:8000/user/auth"
        } else {
            if (!info) {
                fetch("http://localhost:8000/user/auth", {
                    method: "GET",
                    headers: {
                        token: token
                    }
                }).then((response) => {
                    return response.json()
                }).then((resp) => {
                    setInfo(resp.info)
                }).then(() => {
                    if (!groups) {
                        fetch('http://localhost:8000/user/groups/', {
                            method: "GET",
                            headers: {
                                token: token
                            } 
                        }).then((result) => {
                            return result.json()
                        }).then((reslt) => {
                            if (reslt.groups != null) {
                                setGroups(reslt.groups)
                                setGroup(reslt.groups[0].id)
                                updateMessages(reslt.groups[0].id)
                            }
                        })
                    }
                })
            }
        }
        if (group) {
            console.log(group)
            socket.on(`message:${group}`, async (args) => {
                const msgs = [...messages]
                if (!msgs.find(val => val.id == args.id)) {
                    msgs.push(args)
                    setMessages(msgs)
                }
            })
        }
    })

    function sendMessage() {
        if (`${Number(group)}` != "Nan") {
            if (message) {
                if(message.length > 0){
                    setMessage("")
                    socket.emit("send", {
                        message: message,
                        group: group,
                        token: token
                    })
                }
            }
        }
    }

    function joinGroup(){
        if(code){
            fetch(`http://localhost:8000/group/user/?code=${code}`,{
                method:"POST",
                headers:{
                    token:token
                }
            }).then((response)=>{
                return response.json()
            }).then((resp)=>{
                if(resp.code != 200){
                    setError(resp.error)
                } else {
                    Router.reload()
                }
            })
        }
    }

    function deleteMessage(e){
        socket.emit("delete",{
            token:token,
            id:Number(e.target.value)
        })
        const msgs = [...messages]
        msgs.splice(msgs.findIndex((elem)=>Number(elem.id)==Number(e.target.value)),1)
        setMessages(msgs)
    }

    function openSettingsOfGroup(groupId) {
        setGroupSettigsModal(true)
        setGroupIdSettigs(groupId)
    }

    function closeSettingsOfGroup() {
        setGroupSettigsModal(false)
        setGroupIdSettigs(undefined)
    }

    function closeErrorModal(){
        setError(undefined)
    }

    return (
        <div className={styles.page}>
            <header>
                <div className={styles.headerLogo}>
                    <Image loader={() => `http://localhost:8000/image/logo.png`} src={"http://localhost:8000/image/logo.png"} alt="Logo" width={47} height={47} />
                    <span className={styles.logo}>Joypad</span>
                </div>
                <div className={styles.headerButtons}>
                    <button className={styles.transperentButton}>Home</button>
                    <button className={styles.transperentButton}>Chat</button>
                </div>
            </header>
            <main className={styles.main1}>
                <div className={styles.sideBar}>
                    <div className={styles.sideBarAll}>
                        <div className={styles.enterCodeButton}>
                            <input className={styles.enterCodeInput} placeholder="Enter code" onChange={(e)=>{setCode(e.target.value)}}/>
                            <button className={styles.imageEnter} onClick={joinGroup}>
                                <Image loader={() => `http://localhost:8000/image/Vector.png`} src={"http://localhost:8000/image/Vector.png"} alt="Logo" width={22} height={22} />
                            </button>
                        </div>
                        <button className={styles.createGroupButton}>
                            Create group
                        </button>
                        
                        <div className={styles.menuSelector}>
                            {groups && 
                                groups.map((grp,idx)=>{
                                    return (
                                        <button key={idx} className={Number(grp.id) == Number(group) ? styles.sideBarButtonsSelected:styles.sideBarButtons } value={grp.id} onClick={(e)=>{setGroup(Number(e.target.value));updateMessages(Number(e.target.value))}} >
                                            <div className={styles.nameButton}>{grp.name}</div>
                                            <button className={styles.dotsButton}>
                                                <Image loader={() => `http://localhost:8000/image/dots1.png`} src={"http://localhost:8000/image/dots1.png"} width={36} height={36} />
                                            </button>
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.footerButtons}>
                            {info && 
                                <strong>{info.name.toUpperCase()}</strong>
                            }
                            <Image loader={() => `http://localhost:8000/image/settings1.png`} src={"http://localhost:8000/image/settings1.png"} width={36} height={36} />
                        </div>
                    </div>
                </div>
                <div className={styles.messages}>
                    {messages.length > 0 && 
                    <div className={styles.messageArea}>
                        {messages.map((mess,idx)=>{
                            console.log(info)
                            return (
                                <div className={mess.steamid == info.steamID ? styles.yourMessage:styles.receiverMessage} key={idx}>
                                    <div className={mess.steamid == info.steamID ? styles.messageSender:styles.messageReceiver}>
                                        <img className={styles.avatar} src={mess.avatar}/>
                                        <div className={mess.steamid == info.steamID ? styles.messageSenderInfo:styles.messageResiverInfo}>
                                            <h3 className={styles.messageName}>{mess.name}</h3>
                                            <h6 className={styles.messageTime}>{mess.createdAt}</h6>
                                        </div>
                                        {mess.steamid == info.steamID &&
                                                <button className={styles.deleteButton} value={mess.id} onClick={deleteMessage}>
                                                    delete message
                                                </button>
                                            }
                                    </div>
                                    {/* <h1 className={styles.LOOOOOOOOOOOOOOH}>LOOOOOOOOOOOOOOH</h1> */}


                                    {mess.value.split("\n").map((ms,idx)=>{
                                        return (
                                            <p key={idx} className={mess.steamid == info.steamID ? styles.senderText:styles.receiverText}>{ms}</p>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    }
                    <div className={styles.enterMessage}>
                        <textarea className={styles.sendInput} onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
                        {/* <input  id="sendInput" /> */}
                        <button className={styles.sendButton} onClick={sendMessage}>
                            <Image loader={() => `http://localhost:8000/image/send1.png`} src={"http://localhost:8000/image/send1.png"} width={39} height={39} />
                        </button>
                    </div>
                </div>
            </main>
            {groupSettigsModal || error && 
                <div className={styles.modalWrapper} onClick={()=>{setGroupSettigsModal(false);setError(undefined)}}>
                    <div className={styles.modalBox}>
                        {error}
                    </div>
                </div>
            }
        </div>
    )
}