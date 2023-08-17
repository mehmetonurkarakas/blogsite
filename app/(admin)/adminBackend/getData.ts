import dummyData from "../../../test.json";
import { Post } from "@/app/dbData/dbData";

export function getAdminData() {
    try {
        const jsonData = JSON.parse(JSON.stringify(dummyData));

        const posts: Post[] = jsonData.title.map((item) => ({
            id: item.id,
            title: item.title,
            content: item.content,
            category: item.category,
            labels: item.labels,
            slug: item.slug,
            createdAt: new Date(item.createdAt),
            publishedAt: new Date(item.publishedAt),
            modifiedAt: new Date(item.modifiedAt),
        }));
        return posts;
    } catch (error) {
        console.error("JSON verileri dönüştürülürken bir hata oluştu.", error);
        return [];
    }
}