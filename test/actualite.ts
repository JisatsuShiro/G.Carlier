export class actualites {
    public titre: string;
    public texte: string;
    public date: string;
    public images: string[];

    constructor(titre: string, texte: string, date: string, images: string[]){
        this.titre = titre;
        this.texte = texte;
        this.date = date;
        this.images = images
    }
}
