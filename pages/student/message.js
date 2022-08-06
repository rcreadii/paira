import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent";
import MessageMain from "../../components/MessageMain";
import styles from "../../styles/Login.module.css";

export default function Message() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <HeaderStudent />
        <main className={styles.main}>
          <MessageMain />
        </main>
        <Footer />
      </div>
    </div>
  );
}