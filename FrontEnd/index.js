// Couleur des filtres

function changerCouleurVert(){
  document.querySelector(".btnTous").style.color= "#1D6154";
  document.querySelector(".btnTous").style.backgroundColor= "white"}
function changerCouleurBlanc(){
    document.querySelector(".btnTous").style.color= "white";
    document.querySelector(".btnTous").style.backgroundColor= "#1D6154"}
    
document.querySelector('.btnItems,.btnAppartements,.btnHotels').addEventListener("click", changerCouleurVert)
document.querySelector(".btnTous").addEventListener("click", changerCouleurBlanc)

// Affichage admin
if (localStorage.getItem("token") != null){
  const top = document.querySelector("header");
  const BlackString = document.createElement("div");
  BlackString.id = "blackString";
  BlackString.innerHTML = `<p><a href="#" class="edition"><i class="fa-regular fa-pen-to-square"></i>   Mode édition</a></p>
  <p class="changement"><a href="#" class="Achangement">publier les changements</a></p>`
  const Boutonlogout = document.querySelector("nav ul li a");
  Boutonlogout.href="index.html";
  Boutonlogout.id="sortie";
  Boutonlogout.innerHTML = "logout";
  top.appendChild(BlackString);

  function logout(){
    localStorage.removeItem("token");
  }

  Boutonlogout.addEventListener("click", logout)



//   const boutonSortie = document.querySelector("#sortie")
//   boutonSortie.addEventListener("Click", function(){
//     function(sortie());
//   })

}

// Affichage classique

const reponse = await fetch('http://localhost:5678/api/works'); // On va chercher le Json
// const reponse = await fetch('flemme.json'); // On va chercher le Json
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
    imageElement.alt = article.title;
    imageElement.crossOrigin = "anonymous";
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = article.title;

    sectionGallery.appendChild(objetElement);
    objetElement.appendChild(imageElement);
    objetElement.appendChild(titreElement);
  }
}

genererObjets(objets);

// Filtres 

// Revenir à tous
const boutonTous = document.querySelector(".btnTous");
boutonTous.addEventListener("click", function(){
  document.querySelector(".gallery").innerHTML="";
  genererObjets(objets);
})

// Filtrer les objets

const boutonItems = document.querySelector(".btnItems");

boutonItems.addEventListener("click", function(){
  const itemsFiltres = objets.filter(function(item){
    return item.categoryId === 1; // On retourne l'élément seulement si categoryId est 1 (ce qui correspond aux objets)
  });
  // Autre façon de faire
  // const result = objets.filter(nom => nom.categoryId===1); 

  // Effacement de l'écran et régénération de la page
  document.querySelector(".gallery").innerHTML="";
  genererObjets(itemsFiltres);
})

// Filtrer les appartements

const boutonAppartements = document.querySelector(".btnAppartements");

boutonAppartements.addEventListener("click", function(){
  const itemsFiltres = objets.filter(function(item){
    return item.categoryId === 2; 
  });
  document.querySelector(".gallery").innerHTML="";
  genererObjets(itemsFiltres);
})

  // Filtrer les Hôtels et restaurants

const boutonHotels = document.querySelector(".btnHotels");

boutonHotels.addEventListener("click", function(){
  const itemsFiltres = objets.filter(function(item){
    return item.categoryId === 3; 
  });
  document.querySelector(".gallery").innerHTML="";
  genererObjets(itemsFiltres);
})


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