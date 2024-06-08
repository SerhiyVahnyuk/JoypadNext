import styles from "./chat.module.css";
import Image from "next/image";
import { socket } from "../socket";
import { useEffect, useState } from 'react';    

export default function Chat() {

    useEffect(()=>{
        if(socket.connected){
            console.log("CONNECTED")
        }
    })

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
            <main>
            <div className={styles.sideBar}>
                    <div className={styles.backAndImage}>
                        <button className={styles.enterCodeButton}>
                            Enter code
                            <div className={styles.imageEnter}>
                                <Image loader={() => `http://localhost:8000/image/Vector.png`} src={"http://localhost:8000/image/Vector.png"} alt="Logo" width={22} height={22} />
                            </div>
                        </button>
                        <button className={styles.createGroupButton}>
                            Create group
                        </button>
                    </div>
                    <div className={styles.sideBarAll}>
                        <div className={styles.menuSelector}>
                            <div>
                                <div className={styles.sideBarButtons}>
                                    <button className={styles.nameButton}>
                                    DotaNews
                                    </button>
                                    <button className={styles.dotsButton}>
                                    <Image loader={() => `http://localhost:8000/image/dots1.png`} src={"http://localhost:8000/image/dots1.png"} width={36} height={36} />  
                                    </button>
                                </div>
                                <div className={styles.sideBarButtons}>
                                    <button className={styles.nameButton}>
                                    DotaNews
                                    </button>
                                    <button className={styles.dotsButton}>
                                    <Image loader={() => `http://localhost:8000/image/dots1.png`} src={"http://localhost:8000/image/dots1.png"} width={36} height={36} />  
                                    </button>
                                </div>
                                <div className={styles.sideBarButtons}>
                                    <button className={styles.nameButton}>
                                    DotaNews
                                    </button>
                                    <button className={styles.dotsButton}>
                                    <Image loader={() => `http://localhost:8000/image/dots1.png`} src={"http://localhost:8000/image/dots1.png"} width={36} height={36} />  
                                    </button>
                                </div>
                                <div className={styles.sideBarButtons}>
                                    <button className={styles.nameButton}>
                                    DotaNews
                                    </button>
                                    <button className={styles.dotsButton}>
                                    <Image loader={() => `http://localhost:8000/image/dots1.png`} src={"http://localhost:8000/image/dots1.png"} width={36} height={36} />  
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footerButtons}>
                                Darlene Roberston
                                <Image loader={() => `http://localhost:8000/image/settings1.png`} src={"http://localhost:8000/image/settings1.png"} width={36} height={36} />  
                            </div>
                    </div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.messageArea}>
                        <div className={styles.yourMessage}>
                            <div className={styles.messageSender}>
                                <h3 className={styles.messageName}> Darlene Robertson </h3>
                                <h6 className={styles.messageTime}> 20:31 </h6>
                            </div>
                            <div>
                                Hey, what do you think about new update?
                            </div>
                        </div>
                        <div className={styles.receiverMessage}>
                            <div className={styles.messageReceiver}>
                                <h3 className={styles.messageName}> Eleanor Pena </h3>
                                <h6 className={styles.messageTime}> 20:31 </h6>
                            </div>
                            <div>
                                Hey, what do you think about new update?
                            </div>
                        </div>
                    </div>
                    <div className={styles.messageField}>
                        <div className={styles.enterMessage}>
                            <h5>
                                Hello guys, how to level up faster?
                            </h5>
                            <Image loader={() => `http://localhost:8000/image/send1.png`} src={"http://localhost:8000/image/send1.png"} width={39} height={39} />  
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}