function alphabetType(alphabet) {
    const vowels = "aeiouAEIOU";
    if (vowels.indexOf(alphabet) !== -1) {
      return "VOWEL";
    } else {
      return "CONSONANT";
    }
  }
  
    let result = alphabetType('EB')
    console.log(result)