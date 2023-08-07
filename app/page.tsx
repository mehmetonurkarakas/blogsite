import Image from 'next/image'
import styles from './page.module.css'
import {GetServerSideProps} from "next";
import {Post} from "@/app/models/type";
import Link from "next/link";
import slug from "slug";

export default async function Home() {
    let sample = await getData();
    sample.reverse();
    let date = 0;

    return (
        <div className={styles.container}>
            <div>
                <ul>
                    {
                        sample.map((post: Post) => {
                            if (date !== post.createdAt.getFullYear()) {
                                date = post.createdAt.getFullYear();
                                return (
                                    <li className={styles.list} key={post.title}>
                                        <h3 className={styles.customYear}>- {post.createdAt.getFullYear()} -</h3>
                                        <h4 className={styles.customDate}>{post.createdAt.getDay()}  Mar
                                            <Link className={styles.contentLink}
                                                  href={`/blog/${post.title}`}
                                                  as = {`/blog/${slug(post.title)}/`}>
                                                {post.title}</Link>
                                        </h4>
                                    </li>
                                )
                            }
                            return (
                                <li className={styles.list} key={post.title}>
                                    <h4 className={styles.customDate}>{post.createdAt.getDay()} Mar
                                        <Link className={styles.contentLink}
                                              as={`/blog/${post.title}`}
                                              href = {`/blog/${slug(post.title)}-/`}>
                                            {post.title}</Link>
                                    </h4>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
            <footer>

            </footer>
        </div>
    )
}

async function getData() {
    const sample: Post[] = [
        {
            createdAt: new Date("2021-11-08"),
            title: "Birinci yazım Birinci yazım Birinci yazım Birinci yazım Birinci yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
            createdAt: new Date("2021-12-06"),
            title: "Ikinci yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },{
            createdAt: new Date("2021-12-06"),
            title: "3 yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },{
            createdAt: new Date("2022-12-06"),
            title: "4 yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },{
            createdAt: new Date("2022-12-06"),
            title: "5 yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },{
            createdAt: new Date("2023-12-06"),
            title: "Ilk yazim",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
    ];
    return sample;
}
