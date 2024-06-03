"use client"

import Image from "next/image";
import styles from "./page.module.scss";

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
        <div className={styles.bg_frame_main}>
          <div className={styles.frame73}>
            <div className={styles.rectangle}></div>
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.first_list}>
            <div className={styles.frame89}>
              <div className={styles.text1}>Elevate Your Gaming Experience with Our Comprehensive Statistics Tracking and Management Tools</div>
            </div>
            <div className={styles.frame71}>
              <div className={styles.frame72}>
                <div className={styles.text3}>Best Experiences</div>
                <div className={styles.text2}>get more emotions in a group with friends</div>
              </div>
            </div>
          </div>
          <div className={styles.second_list}>
            <div className={styles.frame59}>
              <div className={styles.discoverText}>Discover the Seamless Integration of Steam</div>
            </div>
          </div>
          <div>
            <div className={styles.frame73}>
              <div className={styles.rectangle}></div>
            </div>
            <div className={styles.first_list}>
              <div className={styles.frame89}>
                <div className={styles.text1}>Elevate Your Gaming Experience with Our Comprehensive Statistics Tracking and Management Tools</div>
              </div>
              <div className={styles.imageContainer2}>
                <Image loader={() => `http://localhost:3001/image/achivemens.png`} src={"http://localhost:3001/image/achivemens.png"} alt="Gaming Illustration" width={461} height={337} />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.frame91}>
              <div className={styles.first_list}>
                <div className={styles.frame79}>
                  <div className={styles.msedgeImage}><Image loader={() => `http://localhost:3001/image/main_message.png`} src={"http://localhost:3001/image/main_message.png"} alt="Gaming Illustration" width={717} height={247} /></div>
                </div>
                <div className={styles.tre_layer}>
                  <div className={styles.frame77}>
                      <div className={styles.frame60}>
                        <div className={styles.joinNow}>Join now</div>
                      </div>
                      <div className={styles.unlockPotential}>Unlock the Full Potential</div>
                  </div>
                </div>
              </div>
              <div className={styles.frame90}>
                <div className={styles.frame62}>
                  <div className={styles.elevateGaming}>Elevate Your Gaming Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
