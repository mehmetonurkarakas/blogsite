import Image from 'next/image'
import styles from './page.module.css'
import {GetServerSideProps} from "next";
import {Post} from "@/app/models/type";

export default async function Home() {
    const data = await getData();
    console.log("Data: ", data);



    return (
        <div className={styles.container}>
            <header>
                <h1>Cihan Yakar Blog</h1>
            </header>
            <div>
                <h2>Posts</h2>
                <ul>
                    {data?.map((post: Post) => (
                        <li key={post.title}>
                            <h3>{post.title}</h3>
                            <p>{post.createdAt.toDateString()}</p>
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
