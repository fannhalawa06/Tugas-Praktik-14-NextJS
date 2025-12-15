import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Selamat Datang di Next JS</h1>
          <p>Aplikasi React dengan SSR dan Routing otomatis.</p>
        </div>
      </main>
    </div>
  );
}
