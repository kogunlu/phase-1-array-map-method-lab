const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let words = tutorials.map(item => item.split(" "))
  //We divided elements of tutorials into words as new arrays

  function makeItBigger (words){
      let newArr = []

    for(const element of words){
      newArr.push(element.charAt(0).toUpperCase() + element.slice(1))
      //We capitilazed each word here
    }
    return newArr.join(' ')
    //we joined these words and made them as they were
  }
 return words.map(item => makeItBigger(item))
}
