import styles from "./chat.module.css";
import { socket } from "../socket";
import { useEffect, useState } from 'react';    

export default function Chat() {

    useEffect(()=>{
        if(socket.connected){
            console.log("CONNECTED")
        }
    })

    return (
        <div>
            <header></header>
            <main>
                <div className={styles.main-block} >
                    <div className={styles.small-block} >
                        <div className={styles.buttons} >
                            <div className={styles.code} ></div>
                            <div className={styles.creating} ></div>
                            <div className={styles.news} ></div>
                            <div className={styles.gaming} ></div>
                            <div className={styles.tournaments} ></div>
                        </div>
                        <div className={styles.settings} ></div>

                    </div>
                    <div className={styles.chat} ></div>
                </div>
            </main>
        </div>
    )
}