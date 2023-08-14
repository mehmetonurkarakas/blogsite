import styles from './page.module.css'
import Image from "next/image";
import { StrictMode } from "react";
import PopUp from "@/app/(blogsite)/blog/PopUp";



export default function HeadComponent() {
    return (
        <>

            <nav className={styles.topLinks}>
                <div className={styles.iconContainer}>
                    <StrictMode>
                        <PopUp/>
                    </StrictMode>

                    <a className={styles.linkedinIcon} href="https://www.linkedin.com/in/cihanyakar/" target="_blank">
                        <img  src = "/linkedin-in.svg" alt="My Happy SVG"/>
                    </a>
                </div>
            </nav>
            <div className={styles.container}>

            <header>

                <picture>
                    <Image
                        src="/foto.jpg"
                        alt="Profile Picture"
                        width={60}
                        height={60}>
                    </Image>
                </picture>
                <h1 className={styles.title}>Cihan Yakar Blog</h1>
                <p className={styles.underTitle}>developer</p>
            </header>
            </div>
        </>
    )
}