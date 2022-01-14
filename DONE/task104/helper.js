// Implement the function createSamples that takes a string and returns two samples of it, one in the lowercase and another one in the uppercase.

// Samples should be combined, i.e. createSamples('HeLLo') should return the string 'helloHELLO'

// You must use functions toLowerCase and toUpperCase from the file helper.js

const toLowerCase = (s) => {
  return s.toLowerCase();
}

const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
let k = toLowerCase(s)
let j=  toUpperCase(s)
return k + j ;
}



