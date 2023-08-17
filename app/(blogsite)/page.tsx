import styles from './page.module.css'
import {Post} from "@/app/dbData/dbData";
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
                            if (date !== post.publishedAt.getFullYear()) {
                                date = post.publishedAt.getFullYear();
                                return (
                                    <li className={styles.list} key={post.title}>
                                        <h3 className={styles.customYear}>- {post.publishedAt.getFullYear()} -</h3>
                                        <h4 className={styles.customDate}>{post.publishedAt.getDay()}  Mar
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
                                    <h4 className={styles.customDate}>{post.publishedAt.getDay()} Mar
                                        <Link className={styles.contentLink}
                                              as={`/blog/${slug(post.title)}`}
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
            id: 1,
            title: "Birinci yazım Birinci yazım Birinci yazım Birinci yazım Birinci yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            category: "deneme",
            labels: ["deneme1", "deneme2"],
            slug: "birinci-yazim",
            createdAt: new Date("2021-11-08"),
            publishedAt: new Date("2021-11-09"),
            modifiedAt: new Date("2021-11-10")
        },
        {
            id: 2,
            title: "İKinci yazım İKinci yazım İKinci yazım İKinci yazım İKinci yazım",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            category: "deneme",
            labels: ["deneme1", "deneme2"],
            slug: "birinci-yazim",
            createdAt: new Date("2021-11-08"),
            publishedAt: new Date("2022-11-09"),
            modifiedAt: new Date("2021-11-10"),
        },
        {
            id: 3,
            title: "Üçüncü yazım Üçüncü yazım Üçüncü yazım ",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            category: "deneme",
            labels: ["deneme1", "deneme2"],
            slug: "birinci-yazim",
            createdAt: new Date("2021-11-08"),
            publishedAt: new Date("2022-11-09"),
            modifiedAt: new Date("2021-11-10"),
        },
        {
            id: 4,
            title: "Dördüncü yazım Dördüncü yazım Dördüncü ",
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            category: "deneme",
            labels: ["deneme1", "deneme2"],
            slug: "birinci-yazim",
            createdAt: new Date("2021-11-08"),
            publishedAt: new Date("2023-11-09"),
            modifiedAt: new Date("2021-11-10"),
        }
    ];

    return sample;
}
