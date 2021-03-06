
// exporte l'objet Phrase
module.exports = Phrase
// Reverses a string

/*function reverse(string) {
    //return string.split("").reverse().join("");
    return Array.from(string).reverse().join("");
} */



/*function emailParts(string) {
    tab = string.split("@");
    let userName = tab[0].toLowerCase();
    let domainName = tab[1].toLowerCase();
    return `user name : ${userName}, domain name : ${domainName}`;
}*/

// Ajoute la fonction reverse() à toutes les chaînes :
String.prototype.reverse = function reverse() {
    return  Array.from(this).reverse().join("");
}




// Définition de l'objet Phrase :
function Phrase(content){
    this.content = content;


    // retourne les lettres du contenu
    this.letters = function letters(){
	return (this.content.match(/[a-z]/ig) || []).join("");
/*	return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");*/
/*	let theLetters = [];
	const letterRegexp = /[a-z]/i;
	Array.from(this.content).forEach(function (character){
	    if(character.match(letterRegexp)){
		theLetters.push(character);
	    }
	});
	return theLetters.join ("");*/
    }
	
    
    //Exercice : retourne une version en maj du contenu
    this.louder = function () {
        return this.content.toUpperCase();
    }

      /* Exercice : fonction processor 
    this.processor = function processor(string) {
        return string.toLowerCase();
    }*/ 

     /* et on refactorise */

    // Retourne le contenu formalisé pour le test palindrome
    this.processedContent  = function processedContent() {
        return this.letters().toLowerCase();
    }
    
    // retourne vraie si la Phrase est un palindrome
    
    this.palindrome = function palindrome() {
	/*let processedContent = this.content.toLowerCase();*/
	return this.processedContent() === this.processedContent().reverse();
    }
}

/*
// solution perso pour retourner seulement les lettres de content
letters = /[A-Za-z]/;

function lettres(chaine){
    return Array.from(chaine).filter(elements => elements.match(letters));
};
*/


/* function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Retourne la TRADUCTION formatée pour le test
    this.processedContent = function processedContent() {
        return this.processor(translation);
    }

}


TranslatedPhrase.prototype = new Phrase();

let frase = new TranslatedPhrase("recognize", "reconocer");

console.log(frase.palindrome());

let napoleonsLament = new Phrase("Able was I ere I saw Elba");
console.log(napoleonsLament);
console.log(napoleonsLament.palindrome());

*/

/* Exercice ajouter la fonction blank à la classe String qui signale une chaîne vide

function testEmpty(string) {
    if(string.match(/^$/) || string.match(/^\s+$/))
	return "chaine vide !";
    else
	return "chaine non vide !";
}

String.prototype.blank = function() {
 if(this.match(/^$/) || this.match(/^\s+$/))
	return true;
    else
	return false;
}
*/
