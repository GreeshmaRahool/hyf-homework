const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWord = "";

function getShortestWord(danishWords)
{
    let wordToCompare = danishWords[0].length;
    for(let i = 0; i < danishWords.length; i ++)
    {
        if(wordToCompare >= danishWords[i].length)
        {
            wordToCompare = danishWords[i].length;
            shortestWord =   danishWords[i];
        }
    }
    return shortestWord;
        
}
const result = getShortestWord(danishWords);
console.log(result);