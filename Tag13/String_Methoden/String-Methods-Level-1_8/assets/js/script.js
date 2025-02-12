


const text = "Sam is going to codingschool"

console.log(text.replace("codingschool","school").toUpperCase())
console.log(text.replace("codingschool","school").toLowerCase())
console.log(text.substring(0,4).toLocaleUpperCase() + text.substring(4,16) + text.substring(22).toUpperCase()) // - SAM is going to SCHOOL

console.log(text.slice(0,4)+text.slice(4,16).toUpperCase() + text.slice(22)) // - Sam IS GOING TO school



