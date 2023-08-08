import styles from '../../page.module.css'
import {Post} from "@/app/dbModel/dbData";

export default async function Page({params}: { params: { id: string } }) {
    const str = params.id;
    const newStr = str.replace(/-/g, ' ');
    const words = newStr.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const newSentence = capitalizedWords.join(" ");

    let sample = await getData();
    sample.reverse();

    return (
        <>
            <div className={styles.content}>
                <p className={styles.contenttitle}>{newSentence}</p>
                <h6 className={styles.contexts}>Bir yazılım ürününün mühendislik, tasarımsal ve mimari niteliklerine
                    baktığımızda erişilebilirlik, ölçeklenirlik, hata toleransı, performans, dayanıklılık, güvenlik,
                    emniyet, esneklik, dağıtılabilirlik, test edilebilirlik, çeviklik, kurtarılabilirlik,
                    öğrenilebilirlik, izlenebilirlik..., vb. bir çok en iyi hale getirmeye çalıştığı kavram
                    bulunmaktadır. Bunların her birini daha iyi hale getirmek oldukça emek istediği gibi bazıları
                    birbiriyle çelişmektedir. Karar sürecinde bunlardan sebepsizce (makul gerekçeler olmaksızın) sadece
                    bir veya bir kaçının ön yargıyla "en önemli" olduğunu düşünmek ürünün toplam kalitesini
                    düşürmektedir. Bu ön yargılardan en sık karşılaştığımız ise performans konusunda oluyor. Bunu iki
                    ekmek almak için bakkala kamyon ile gitmeye benzetebilirsiniz. Bisiklete göre daha hızlı ve taşıma
                    kapasitesi oldukça yüksek olmasına rağmen kullanım senaryosu için saçmadır. </h6>
                <div className={styles.navLinks}>
                    <div className={styles.navprev}>
                        <p className={styles.prevnext}>PREVIOUS</p>
                        <a>Power Iteration – Eigenvector Centrality ve C# ile uygulanması</a>
                    </div>
                    <div className={styles.navnext}>
                        <p className={styles.prevnext}>NEXT</p>
                        <a>Vectorization / SIMD kullanarak C# ile Power Iteration algoritmasını hızlandıralım</a>
                    </div>

                </div>
            </div>
        </>
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

