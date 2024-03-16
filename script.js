
//parent ou afficher frontend
let afficherElement = document.getElementById('nom-langages')



//button à récuperer pour l'action click
let frontEnd = document.getElementById('frontend')
let backEnd = document.getElementById('backend')
let basesDonnees = document.getElementById('bases-de-donnees')


async function AfficherLangage (contexte) {
    const reponse = await fetch('https://raw.githubusercontent.com/AurelieMous/Portfolio/Main/langages.json')
    const langages = await reponse.json();

    const classes =  langages.filter(element => element.classe === contexte);
    console.log(classes)


    for (let index = 0 ; index < classes.length; index++){
        switch (classes[index].classe) {
            case "frontend" :
                const frontEndAffiche = document.createElement("h6");
                frontEndAffiche.innerText = classes[index].nom;
                afficherElement.appendChild(frontEndAffiche);
                break;

            case "backend" :
                const backEndAffiche = document.createElement("h6");
                backEndAffiche.innerText = classes[index].nom;
                afficherElement.appendChild(backEndAffiche);
                break;
            
            case "BDD" :
                const basesDonneesAffiche = document.createElement("h6");
                basesDonneesAffiche.innerText = classes[index].nom;
                afficherElement.appendChild(basesDonneesAffiche);
                break;
        }
    }
}
frontEnd.addEventListener('click', () => {
    afficherElement.innerHTML= "";
    AfficherLangage("frontend");
})

backEnd.addEventListener('click', () => {
    afficherElement.innerHTML= "";
    AfficherLangage("backend");
})

basesDonnees.addEventListener('click', () => {
    afficherElement.innerHTML= "";
    AfficherLangage("BDD");
})
