import BlogComment from "./blogCommentModel"
import BlogTags from "./BlogTags"

export default class blogCardModel {
    title : string
    description : string
    text : string
    date : string
    image : string
    imageCredit : string
    url : string
    comments : BlogComment[]
    tags : BlogTags[]

    constructor(title : string, desc : string, date : string, image : string, imageCredit : string, url : string, text : string, comments : BlogComment[], tags : BlogTags[]) {
        this.title = title
        this.description = desc
        this.date = date
        this.image = image
        this.imageCredit = imageCredit
        this.url = url
        this.text = text
        this.comments = comments
        this.tags = tags
    }
}