import {PostViewData} from "@/app/clientModel/postViewData";
import {Post} from "@/app/dbData/dbData";

export async function getPostView(): Promise<PostViewData> {


  const post:Partial<Post> ={
    title: "Birinci yazım Birinci yazım Birinci yazım ",
    content: "<b>Lorem ipsum </b>",
    category: "deneme",
    publishedAt: new Date("2021-11-09"),
  };

  return {
    publishedDate: post.publishedAt,
    title: post.title,
    htmlContent: post.content||"",
    previousPostUri: "#",
    nextPostUri: "#",
  };
}