export class Navbar{
    public id:number;
    public text:string;
    public urllink:string;
    constructor (newID:number, newText:string, newUrlLink:string = "/Home"){
        this.id = newID;
        this.text = newText;
        this.urllink = newUrlLink;
    }
}