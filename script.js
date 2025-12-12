const btn = document.getElementById("btnCalc");
const erreur = document.getElementById("erreur");
const liste = document.getElementById("listeHistorique");

let historique = []; 

btn.addEventListener("click", () => {

    erreur.textContent = "";

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("op").value;

    
    if (a === "" || b === "") {
        erreur.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        erreur.textContent = "Division par zéro interdite.";
        return;
    }

   
    let resultat;
    switch (op) {
        case "+": resultat = a + b; break;
        case "-": resultat = a - b; break;
        case "*": resultat = a * b; break;
        case "/": resultat = a / b; break;
    }

  
    let ligne = `${a} ${op} ${b} = ${resultat}`;
    historique.push(ligne);

    
    liste.innerHTML = "";
    historique.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        liste.appendChild(li);
    });
});


