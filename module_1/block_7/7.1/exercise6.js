const skills = ['C', 'C++', 'Python', 'Electronic', 'Tester'];

const replaceString = (string) => {
    const standardString = "Tryber x aqui!"
    let splitedStandardString = standardString.split(' ');

    for(let index in standardString){
        if(splitedStandardString[index] === 'x'){
            splitedStandardString[index] = string;
        }
    }
    return splitedStandardString.join(' ')
}

console.log(replaceString('Bruno'));