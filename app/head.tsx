import styles from "@/app/page.module.css";
import Image from "next/image";

export default function HeadComponent() {
    return (
        <>
            <div className={styles.container}>
            <nav className={styles.topLinks}>

                <img className={styles.searchIcon} src = "/search.svg" alt="My Happy SVG"/>

                <a href="https://www.linkedin.com/in/cihanyakar/" target="_blank">
                    <img className={styles.linkedinIcon} src = "/linkedin-in.svg" alt="My Happy SVG"/>
                </a>
            </nav>
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