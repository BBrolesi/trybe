const longestWord = (string) => {
    const splitedString = string.split(' ');
    let longestWord = '';

    for(let word of splitedString){
        if(longestWord.length < word.length)
        {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));