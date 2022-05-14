export class references {
    public titre: string;
    public texte: string;
    public images: string[];

    constructor(titre: string, texte: string, images: string[]){
        this.titre = titre;
        this.texte = texte;
        this.images = images
    }
}
