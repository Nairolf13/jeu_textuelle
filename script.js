const prompt = require("prompt-sync")()

let response_p = "1"

let response_n = "2"
console.log("Thomas va boire un coup dans un bar avec l'équipe RI7: oui [1] non [2]")
let proposition = prompt("Quelle est votre choix (1) ou (2) ? ")

while (proposition != response_n && proposition != response_p) {
    proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
}

if (proposition == response_p) {
    console.log("Est ce qu'il doit boire de l'alcool ? ")
    console.log("1:Oui soyont fou !.");
    console.log("2:Non soyont raisonable.")
    proposition = prompt("Quelle est votre choix oui (1) ou non (2) ? ")
    while (proposition != response_n && proposition != response_p) {
        proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
    }

    if (proposition == response_p) {
        console.log("Thomas à pris un verre de rhum et commence à profiter de la soirée ");
        console.log("Est ce qu'il doit boire un deuxième verre ? ")
        console.log("1:Ok envoi un deuxiiéme")
        console.log("2:Je commence à tanguer")
        proposition = prompt("Quelle est votre choix oui (1) ou non (2) ? ")
        while (proposition != response_n && proposition != response_p) {
            proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
        }

        if (proposition == response_p) {
            console.log("Thomas commence à brancher Brendan ! ")
            console.log("Est ce qu'il doit boire un troisième verre ? ")
            console.log("1:Aller on continue à boire ! ")
            console.log("2:Je commence à voir flou j'arrete")
            proposition = prompt("Quelle est votre choix oui (1) ou non (2) ? ")
            while (proposition != response_n && proposition != response_p) {
                proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
            }

            if (proposition == response_p) {
                console.log("Thomas commence à brancher Serge , il n'a plus rien à perdre")
                console.log("Est ce qu'il doit boire un quatrième verre ? ")
                console.log("1:L'alcool c'est de l'eau let's gooooo");
                console.log("2:Ou sont les toilettes")
                proposition = prompt("Quelle est votre choix oui (1) ou non (2) ? ")

                while (proposition != response_n && proposition != response_p) {
                    proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
                }

                if (proposition == response_p) {
                    console.log(" Il est aller trop loin il est viré !!!! ")
                    while (proposition != response_n && proposition != response_p) {
                        proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
                    }
                }

            } else if (proposition == response_n)
                console.log("Il est K.O est rentre chez lui")
            proposition = prompt("Est ce que tu veux un taxi oui 1 non 2? ")

            if (proposition == response_p) {
                console.log("Ok ca va te couté chere ! ")
            } else console.log("Heureusement que t'as mere t'a fait des jambes !!! ")


        } else if (proposition == response_n) {
            console.log("Il commence à chercher les toilettes")
            proposition = prompt("Quels sont les toilettes que tu cherches hommes 1 femme 2? ")

            if (proposition == response_p) {
                console.log("Allé vomi partout")
            }
            else console.log("Espece de petit coquin vas au bon endroit")
        }

    } else if (proposition == response_n) {
        console.log("Il commence a avoir mal au ventre! ")
        proposition = prompt("Est ce que tu veux un gaviscon oui 1 non 2?")

        if (proposition == response_p) {
            console.log("Tu as raison tu vas pouvoir enchainer ")
        }
        else console.log("Dommage pour toi tu vas douiller !!! ")

    }

} else if (proposition == response_n) {
    console.log("Petit joueur .")
    proposition = prompt("Est ce que tu prend soins de ton foie oui (1) non (2)? ")


    if (proposition == response_p) {
        console.log("C'est dommage on a qu'une seule vie")
        proposition = prompt("J'espere que tu vas apprendre à coder toute la soirée au moins oui 1 non 2 ? ")
        while (proposition != response_n && proposition != response_p) {
            proposition = prompt("Ooops!!!!! Tu dois choisir (1) ou (2) ? ")
        }

        if (proposition == response_p) {
            console.log("Au moins ca ")
        } else if (proposition == response_n)
            console.log("Tu es vraiment une brelle !!! ")

    } else if (proposition == response_n) {
        console.log("eh bah ! je t'envoie l'adresse et bouge toi")
    }
}

