export class Navbar{
    public id:number;
    public text:string;
    public urllink:string;
    public isApp:boolean;
    constructor (newID:number, newText:string, newUrlLink:string = "/home", newIsApp:boolean = true){
        this.id = newID;
        this.text = newText;
        this.urllink = newUrlLink;
        this.isApp = newIsApp;
    }
}