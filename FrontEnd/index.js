
// C'est connecté

// function askWorkElements() {
//     fetch("http://localhost:5678/api/works") // permet d'envoyer une requête HTTP de type GET au service web se trouvant cette adresse
//     .then(function(res) { // Permet de récupérer le résultat de la requête au format json
//       if (res.ok) { // Permet de vérifier 
//         console.log(res);
//         return res.json(); // que la requête s'est bien passée
//       }
//     })
//     .then(function(value) { // Permet de récupérer "sa vraie valeur"
//         document
//             .getElementById("wresult") // On se place dans l'ID "2"
//             .innerText = value.name; // On écrit la valeur de ce qu'on a récupéré
//       })
//       .catch(function(err) {
//         console.log("erreur de la fonction askWorkElements"); // Une erreur est survenue
//       });
//     }
//     document
//     .getElementById("work")
//     .addEventListener("click", askWorkElements);


fetch("http://localhost:5678/api/works")
  .then(res => res.json()) // Permet de lire le json de la réponse
  .then(res => document.getElementById('gallery').innerHTML = res[0].title)
  .catch(error => { // Attrape l'erreur
    console.log("error : " + error) // Affiche error + la nature de l'erreur

  })
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