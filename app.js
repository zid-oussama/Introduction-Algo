let sentence=prompt('give me your sentence(ends with a point)');
let words=sentence.split(' ');
let sentence_length=0;
let number_words=0;
let number_vowels=0;
for (const key of words) {
    
    sentence_length+=key.length;
    number_words+=1;
    for (const j of key) {
        if (["A","E","I","O","U"].includes(j.toUpperCase())) {
            number_vowels+=1    
        }
        
    }
}
console.log("sentence_length= ",sentence_length)
console.log("number_words= ",number_words)
console.log("number_vowels= ",number_vowels)