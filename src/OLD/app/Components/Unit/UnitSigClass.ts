export class UnitSig{
    public id:number;
    public sigText:string;
    public sigRank:string;
    constructor (newID:number, newSigText:string, newSigRank:string){
        this.id = newID;
        this.sigText = newSigText;
        this.sigRank = newSigRank;
    }
}