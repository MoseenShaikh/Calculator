import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
     <Head>
        <title>My Responsive Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-primary text-white text-center p-4">
        <h1>Welcome to My Website</h1>
      </header>

      <main className="container mt-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="p-3 bg-light border rounded">Column 1</div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="p-3 bg-light border rounded">Column 2</div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center p-3 mt-4">
        &copy; 2025 My Website
      </footer>

    </>
  );
}
