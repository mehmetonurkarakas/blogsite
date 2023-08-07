import styles from '../../page.module.css'

export default function Page({ params }: { params: { id:string } }) {
    const str = params.id;
    const newStr = str.replace(/-/g, ' ');
    const words = newStr.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const newSentence = capitalizedWords.join(" ");

    return(
        <>
    <div className={styles.content}>
            <p className={styles.contenttitle}>{newSentence}</p>
        <h6 className={styles.contexts}>Bir yazılım ürününün mühendislik, tasarımsal ve mimari niteliklerine baktığımızda erişilebilirlik, ölçeklenirlik, hata toleransı, performans, dayanıklılık, güvenlik, emniyet, esneklik, dağıtılabilirlik, test edilebilirlik, çeviklik, kurtarılabilirlik, öğrenilebilirlik, izlenebilirlik..., vb. bir çok en iyi hale getirmeye çalıştığı kavram bulunmaktadır. Bunların her birini daha iyi hale getirmek oldukça emek istediği gibi bazıları birbiriyle çelişmektedir. Karar sürecinde bunlardan sebepsizce (makul gerekçeler olmaksızın) sadece bir veya bir kaçının ön yargıyla "en önemli" olduğunu düşünmek ürünün toplam kalitesini düşürmektedir. Bu ön yargılardan en sık karşılaştığımız ise performans konusunda oluyor. Bunu iki ekmek almak için bakkala kamyon ile gitmeye benzetebilirsiniz. Bisiklete göre daha hızlı ve taşıma kapasitesi oldukça yüksek olmasına rağmen kullanım senaryosu için saçmadır.  </h6>
        <div className={styles.navLinks}>
            <div className={styles.prevNext}>
                <a className={styles.prevNext1} href="#">
                    Power Iteration – Eigenvector Centrality ve C# ile uygulanması
                </a>
                <span className={styles.span1}>
                        Previous
                    </span>
            </div>
            <div className={styles.prevNext} >
                <a className ={styles.prevNext} href="#"></a>
            </div>
        </div>
    </div>
        </>
    )
}

