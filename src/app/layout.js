import { Inter } from "next/font/google";
// import "./globals.css";
import styles from "../styles/Layout.module.css";
import Header from "../component/Header";
import Nav from "../component/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arsenal",
  description: "Best football club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
