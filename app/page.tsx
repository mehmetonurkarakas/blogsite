import Image from 'next/image'
import styles from './page.module.css'
import {GetServerSideProps} from "next";
import {Post} from "@/app/models/type";
import Link from "next/link";

export default async function Home() {
    const data = await getData();
    console.log("Data: ", data);

    return (
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
                <h1>Cihan Yakar Blog</h1>
                <p>developer</p>
            </header>
            <div>
                <h2>Posts</h2>
                <ul>
                    {data?.map((post: Post) => (
                        <li className={styles.list} key={post.title}>
                            <Link href="#">{post.title}</Link>
                            <h3>-{post.createdAt.getFullYear()}-</h3>
                            <h4>{post.createdAt.getMonth()}</h4>
                        </li>
                    ))}
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
            createdAt: new Date("2021-01-01"),
            title: "İlk yazım"
        },
        {
            createdAt: new Date("2021-01-02"),
            title: "İkinci yazım"
        },
    ];

    return sample;
}
