export type Post = {
    id : number,
    title : string,
    content : string,
    category : string,
    labels : string[],
    slug : string,
    createdAt : Date,
    publishedAt : Date,
    modifiedAt : Date,
}