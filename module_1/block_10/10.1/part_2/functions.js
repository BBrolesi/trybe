function isVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(character);
  }
  
  function isNumberCharacter(character) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return numbers.includes(character);
  }
  
  function swapVowelNumber(vowel) {
    const vowelNumberPair = {
      vowels: ['a', 'e', 'i', 'o', 'u'],
      numbers: ['1', '2', '3', '4', '5'],
    };
  
    for (let i in vowelNumberPair.vowels) {
      if (vowel === vowelNumberPair.vowels[i]) {
        return vowelNumberPair.numbers[i];
      }
    }
  }
  
  function swapNumberVowel(number) {
    const vowelNumberPair = {
      vowels: ['a', 'e', 'i', 'o', 'u'],
      numbers: ['1', '2', '3', '4', '5'],
    };
  
    for (let i in vowelNumberPair.numbers) {
      if (number === vowelNumberPair.numbers[i]) {
        return vowelNumberPair.vowels[i];
      }
    }
  }

  function encode(string) {
    string = string.split('');
  
    for (let i in string) {
      if (isVowel(string[i])) {
        string[i] = swapVowelNumber(string[i]);
      }
    }
    return string.join('');
  }
  
  function decode(string) {
    string = string.split('');
  
    for (let i in string) {
      if (isNumberCharacter(string[i])) {
        string[i] = swapNumberVowel(string[i]);
      }
    }
    return string.join('');
  }