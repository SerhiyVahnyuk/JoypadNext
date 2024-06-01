"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.black_main}>
        <div className={styles.header_main}>
          <div className={styles.frame3}>
            <Image loader={() => `http://localhost:3001/image/logo.png`} src={"http://localhost:3001/image/logo.png"} alt="Logo" width={47} height={47} />
            <div className={styles.joypad}>Joypad</div>
          </div>
          <div className={styles.frame4}>
            <a href="/" className={styles.home}>Home</a>
            <a href="/chat" className={styles.chat}>Chat</a>
            <button className={styles.startButton}>Start</button>
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.frame7}>
            <h1 className={styles.heading}>Unlock the Future of Gaming</h1>
            <p className={styles.subheading}>Відкрийте для себе найкращу ігрову платформу</p>
            <div className={styles.buttonContainer}>
              <button className={styles.joinButton}>Приєднуйся зараз</button>
            </div>
          </div>
          <div className={styles.frame8}>
            <div className={styles.frame10}>
              <button className={styles.getStartedButton}>Get Started</button>
            </div>
            <div className={styles.frame11}></div>
            <div className={styles.frame12}></div>
            <div className={styles.imageContainer}>
              <Image loader={() => `http://localhost:3001/image/Illustration_main.png`} src={"http://localhost:3001/image/Illustration_main.png"} alt="Gaming Illustration" width={590} height={707} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
