import Image from 'next/image'
import styles from './page.module.css'
import {GetServerSideProps} from "next";
import {Post} from "@/app/models/type";
import Link from "next/link";

export default async function Home() {
    let sample = await getData();
    sample.reverse();
    let date = 0;

    return (
        <div className={styles.container}>
            <nav className={styles.topLinks}>




                <img className={styles.searchIcon} src = "search.svg" alt="My Happy SVG"/>

                <a href="https://www.linkedin.com/in/cihanyakar/" target="_blank">
                    <img className={styles.linkedinIcon} src = "linkedin-in.svg" alt="My Happy SVG"/>
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
                <h1>Cihan Yakar Blog</h1>
                <p>developer</p>
            </header>
            <div>
                <ul>
                    {
                        sample.map((post: Post) => {
                            if (date !== post.createdAt.getFullYear()) {
                                date = post.createdAt.getFullYear();
                                return (
                                    <li className={styles.list} key={post.title}>
                                        <h3 className={styles.customDate}>-{post.createdAt.getFullYear()}-</h3>
                                        <h4 className={styles.customDate}>{post.createdAt.getDay()}  {post.createdAt.getMonth()}
                                            <Link href="#"> {post.title}</Link>
                                        </h4>
                                    </li>
                                )
                            }
                            return (
                                <li className={styles.list} key={post.title}>
                                    <h4 className={styles.customDate}>{post.createdAt.getDay()} {post.createdAt.getMonth()}
                                        <Link href="#"> {post.title}</Link>
                                    </h4>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
            <footer>
                Footer
            </footer>
        </div>
    )
}

async function getData() {
    const sample: Post[] = [
        {
            createdAt: new Date("2021-11-08"),
            title: "Birinci yazım Birinci yazım Birinci yazım Birinci yazım Birinci yazım"
        },
        {
            createdAt: new Date("2021-12-06"),
            title: "İkinci yazım"
        },{
            createdAt: new Date("2021-12-06"),
            title: "3 yazım"
        },{
            createdAt: new Date("2022-12-06"),
            title: "4 yazım"
        },{
            createdAt: new Date("2022-12-06"),
            title: "5 yazım"
        },{
            createdAt: new Date("2023-12-06"),
            title: "6 yazım"
        },
    ];
    return sample;
}
