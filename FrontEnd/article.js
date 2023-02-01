

// Représentation du format d'un article et formatage des dates pour l'affichage


class Article{
    constructor(jsonArticle){
        jsonArticle && Object.assign(this, jsonArticle);
    }
    
    getFormatDate(article){
        let timestamp = Date.parse(this.publicationDate);
        let date = new Date(timestamp);
        return date.toLocaleDateString();
    }
}