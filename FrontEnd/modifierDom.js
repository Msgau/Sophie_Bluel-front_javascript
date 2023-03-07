function supprimerDom(trashId){

  const cadres = `cadre_${trashId}`
  const selectionCadre = document.getElementById(cadres)
  selectionCadre.setAttribute("class", "hidden")
  setTimeout(vanish, 500)
  function vanish(){
    selectionCadre.style.display = "none";
  }
}

export function deleteOne(){
    const imagesElements = document.querySelectorAll(".trash");
    const bearerToken = localStorage.getItem("token")
    for (let i = 0; i < imagesElements.length; i++){
      const findId = imagesElements[i].id
      imagesElements[i].addEventListener("click", function(event){
        event.preventDefault();
        const trashId = findId.substring(10);
        console.log(trashId)
        fetch(`http://localhost:5678/api/works/${trashId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`
          }})
          supprimerDom(trashId);
      })
    }}

  export function deleteAll() {
      const bearerToken = localStorage.getItem("token")
      // Le machin qui supprime
      fetch(`http://localhost:5678/api/works/${article.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
      });
    }



    function EnvoiImage(formData) {
  try {
    const getToken = localStorage.getItem("token")
    fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        'accept':'application/json',
        "Authorization": `Bearer ${getToken}`
      },
      body: formData
    })
  } catch (err) {
    console.log('Une erreur est survenue', err)
  }
}

export function ajouterImage() {
    const formImageUp = document.getElementById("connexion");

    
    formImageUp.addEventListener('submit', function (event) {
      event.preventDefault();
      const inputFile = document.querySelector("#imageUp")
      if (inputFile.files[0].size < 4000000) {
        const formData = new FormData(formImageUp);
        console.log(formData)
        EnvoiImage(formData)
      }
    });
}