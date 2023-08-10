import styles from '../../page.module.css'
import {getPostView} from "@/bll/post";

export default async function Page({params}: { params: { id: string } }) {
    const str = params.id;
    const newStr = str.replace(/-/g, ' ');
    const words = newStr.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const newSentence = capitalizedWords.join(" ");


    let sample = await getData();


    return (
        <>
            <div className={styles.content}>
                <p className={styles.contenttitle}>{newSentence}</p>
                <div className={styles.contentitle}
                dangerouslySetInnerHTML={{__html: sample.htmlContent}}
                />

                <div className={styles.navLinks}>
                    <div className={styles.navprev}>
                        <p className={styles.prevnext}>PREVIOUS</p>
                        <a className={styles.buttons} href={sample.previousPostUri}>prev page</a>
                    </div>
                    <div className={styles.navnext}>
                        <p className={styles.prevnext}>NEXT</p>
                        <a className={styles.buttons} href={sample.nextPostUri}>next page</a>
                    </div>
                </div>
            </div>
        </>
    )
}

async function getData() {

    return getPostView();

    // const sample: Post[] = [
    //     {
    //         title: "Birinci yazım Birinci yazım Birinci yazım ",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         createdAt: new Date("2021-11-08"),
    //         slug: "birinci-yazim",
    //         publishedAt: new Date("2021-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     },
    //     {
    //         title: "İKinci yazım İKinci yazım İKinci yazım",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         createdAt: new Date("2021-11-08"),
    //         slug: "birinci-yazim",
    //         publishedAt: new Date("2022-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     },
    //     {
    //         title: "Üçüncü yazım Üçüncü yazım Üçüncü yazım",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         createdAt: new Date("2021-11-08"),
    //         slug: "birinci-yazim",
    //         publishedAt: new Date("2022-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     },
    //     {
    //         title: "Dördüncü yazım Dördüncü yazım Dördüncü yazım",
    //         content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    //         category: "deneme",
    //         labels: ["deneme1", "deneme2"],
    //         createdAt: new Date("2021-11-08"),
    //         slug: "birinci-yazim",
    //         publishedAt: new Date("2023-11-09"),
    //         modifiedAt: new Date("2021-11-10"),
    //     }
    // ];
    // return sample;
}

