import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.css';
import styles2 from "./achievements.module.css";
import styles from "../app/page.module.scss";

export default function Achievements() {
  return (
    <main  >
        
        <div className={styles.header_main}>
          <div className={styles.frame3}>
            <Image loader={() => `http://localhost:3001/image/logo.png`} src={"http://localhost:3001/image/logo.png"} alt="Logo" width={47} height={47} />
            <div className={styles.joypad}>Joypad</div>
          </div>
          <div className={styles.frame4}>
            <a href="/" className={styles.home}>Home</a>
            <a href="/chat" className={styles.chat}>Chat</a>
          </div>
        </div>
        <div className={styles2.main} >
            <div className={styles2.main} >
                <div className={styles2.main}>
                  <div className={styles2.frame31} >
                    <h1 className={styles2.text} >achievement name</h1>
                    <img className={styles2.image} src="../api-db/api/routes/imgs/achivements.png" />
                    <div className={styles2.frame33} >
                      <div className={styles2.frame32} ></div>
                      <h1 className={styles2.text} >progress</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>
            
    </main>
  );
}