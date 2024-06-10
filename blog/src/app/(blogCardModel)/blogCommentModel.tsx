export default class BlogCommentModel {
    name: string;
    body: string;
    date : string;
    replies: BlogCommentModel[];

    constructor(name: string, body: string, date : string, replies : BlogCommentModel[]) {
        this.name = name;
        this.body = body;
        this.date = date;
        this.replies = replies;
    }
}
    