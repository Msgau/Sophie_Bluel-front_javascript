const reponse = await fetch('http://localhost:5678/api/works'); // On va chercher le Json
const objets = await reponse.json(); // On crée une const objets qu'on asssocie au résultat renvoyé par le json. Equivalent à "1ere ligne".then.pieces => pieces.json();
if (reponse.ok) {
    console.log(objets)
  }
// pour tous les objets, on utilise un for of. On utilise aussi une fonction gernererPieces comme ça on purra la rappeler plusieurs fois pour mettre à jour la page web
function genererObjets(objets) {
  for (let i = 0; i < objets.length; i++){

    const article = objets[i];
    // Récupération de l'élément du DOM qui accueillera les objets
    const sectionGallery = document.querySelector(".gallery");
            // Création de la balise figure qui englobe image et titre
    const objetElement = document.createElement("figure")
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    console.log(article.imageUrl)
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = article.title;

    sectionGallery.appendChild(objetElement);
    objetElement.appendChild(imageElement);
    objetElement.appendChild(titreElement);
  }
}

genererObjets(objets);









// fetch("http://localhost:5678/api/works")
//   .then(function (response) {
//     if (response.ok) {
//       console.log(response.json())
//       let element = document.getElementById('portfolio').getElementsByClassName('gallery');
//       console.log(element)
//       let figure = document.createElement('figure');
//       let img =document.createElement('img');
//       let figcaption =document.createElement('figcaption');
      
//       img.src = "assets/images/abajour-tahina.png"
//       figcaption.textContent = "res[0].title"

//       figure.appendChild(img)
//       figure.appendChild(figcaption)
//       element[0].appendChild(figure)

//     }
//     else {
//       console.log("mauvaise réponse")
//     }
//   })
//   .catch(error => { // Attrape l'erreur
//     console.log("error : " + error) // Affiche error + la nature de l'erreur
//   })




// fetch("http://localhost:5678/api/works")
//   .then(res => res.json()) // Permet de lire le json de la réponse
//   .then(res => document.getElementById('gallery').innerHTML = res[0].title)
//   .catch(error => { // Attrape l'erreur
//     console.log("error : " + error) // Affiche error + la nature de l'erreur
//   })


  // .then(jsonLisArticle => {
  //   for (let jsonArticle of jsonLisArticle) {
  //     let article = new Article(jsonArticle);
  //     document.querySelector(".gallery").innerHTML += `<figure>
  //     <img src="${article.imageUrl}" class= "card-img">
  //     <figcaption class="titre">${article.title}</figcaption>
  //   </figure>`
  //   }
  // })



  // .catch(error => { // Attrape l'erreur
  //   console.log("error : " + error) // Affiche error + la nature de l'erreur
  // })
    // if (res.ok) {
    //   document
    //     .getElementById('gallery')
    //     .innerHTML = "ça fonctionne";
    // }
    // else {
    //   console.log("erreur")
    //   document
        // .getElementById('gallery')
        // .innerHTML = "erreur";
    // }


  // .then(reponse => return reponse.json())
  // .then(donnees => console.log(donnees))




// function askWorkElements() {
//     fetch("http://localhost:5678/api/works") // permet d'envoyer une requête HTTP de type GET au service web se trouvant cette adresse
//     .then(res => res.json())
//     .then(list => {
//         console.log(list);
//     });}
//     document
//     .getElementById("work")
//     .addEventListener("click", askWorkElements);




      // if (res.ok) { // Permet de vérifier 
      //   console.log(res);
      //   return res.json(); // que la requête s'est bien passée
      // }
      // .catch(function(err) {
      //   console.log("erreur de la fonction askWorkElements"); // Une erreur est survenue
      // });
    // }
    // document
    // .getElementById("work")
    // .addEventListener("click", askWorkElements);