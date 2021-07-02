
function getLetterCount(danishString)
{
    
    const stringToCheck = danishString.toLowerCase();
   
    let letterArray = [];
    let countOfØ = 0;
    let countOfå = 0;
    let countOfæ = 0;

    console.log(danishString);
    for (let i = 0; i < stringToCheck.length ; i++)
    {
        let danishChar = stringToCheck[i];
        switch(danishChar)
        {
            case 'ø' :
                letterArray.push('ø');
                countOfØ++;
                break;
                
            case 'å' :
                letterArray.push('å');
                countOfå++;
                break;

            case 'æ' :
                letterArray.push('æ');
                countOfæ++;
                break;                  
        }
    }
    
    const totalLetters = letterArray.length;
    if(totalLetters)
    {
        console.log(`{Total: ${totalLetters} ${(countOfØ > 0) ? (', ø:'+' '+ countOfØ):''}${(countOfå > 0)?(', å:'+' '+countOfå):''}${(countOfæ > 0)?(', æ:'+' '+countOfæ):''}}`);
    }
    else
    {
        console.log('No danish letters in the given string')
    }
}

const danishString = "Jeg har en blå bil"; // returns {total: 1, å: 1}
getLetterCount(danishString);

const danishString2 = "Blå grød med røde bær"; 
getLetterCount(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}