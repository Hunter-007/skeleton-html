//function that adds 7 to each number
function add7(a){
    let sol = a + 7;
    return sol;
}

//function that returns the product of 2 numbers
function multiply(b,c){

    let sol2 = b * c;
    return sol2;

}

//function that returns a capitalized first letter for any string
function capitalize(fullWord = 'strings'){
    let remainingWord = fullWord.slice(1).toLowerCase();
    let capLetter = fullWord[0].toUpperCase();
    let newWord = `${capLetter}${remainingWord}`;
    return newWord;

}

//function that returns the last letter for every string
function lastLetter(word='strings'){

    let capLetter2 = word.length;
    let lastLet = capLetter2 - 1;
    return (word[lastLet]);

}