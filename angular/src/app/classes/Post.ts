export class Post {
  _id: string;
  postedBy: string;
  date: Date;
  title: string;
  body: string;

  constructor(_id: string, postedBy: string, date: Date, title: string, body: string) {
    this._id = _id;
    this.postedBy = postedBy;
    this.date = date;
    this.title = title;
    this.body = body;
  }

}
