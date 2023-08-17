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
}

