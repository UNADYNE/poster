export class USComment {
  date: Date;
  fromName: string;
  commentText: string;

  constructor(date: Date, fromName: string, commentText: string) {
    this.date = date;
    this.fromName = fromName;
    this.commentText = commentText;
  }

}
