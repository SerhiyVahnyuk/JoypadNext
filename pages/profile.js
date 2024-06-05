"use client"

import Image from "next/image";
import styles from "./profile.css";
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';    
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const token = Cookies.get("token")
    const [info,setInfo] = useState()
    useEffect(()=>{
        if(!token){
            window.location.href = "http://localhost:8000/user/auth"
        } else {
            if(!info){
                fetch("http://localhost:8000/user/auth",{
                    method:"GET",
                    headers:{
                        token:token
                    }
                }).then((response)=>{
                    return response.json()
                }).then((resp)=>{
                    setInfo(resp.info)
                    console.log(resp.info)
                })
            }
        }
    })
    return (
        <div>
            {info && 
                <div>
                    {info.name}
                    <Image loader={()=>info.avatar} src={info.avatar} width={300} height={300}/>
                </div>
            }
        </div>
    )
}