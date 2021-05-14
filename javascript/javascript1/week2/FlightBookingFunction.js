function getFullname (firstName,surName,useFormalName,gender)
{
    if(firstName === " " || surName=== " ")
    {
        console.log('Provide valid name!');
    }
    else if(typeof(firstName) != "string" || typeof(surName) != "string")
    {
        console.log('Provide valid name!');
    }
    else if(useFormalName==true&&gender==='male')
    {
        return `Lord ${firstName}${surName}`;
    }
   
    else if(useFormalName==true&&gender==='female')
    {
        return `Lady ${firstName}${surName}`;
    }
    else if(useFormalName==false&&(gender==='male'||gender==='female'))
    {
        return `${firstName}${surName}`;
    }   
   
}
const fullName=getFullname("Benjamin", " Hughes",true,'male');
const fullName1=getFullname("Maria", " Joseph",false,'female');
const fullName2=getFullname("Freja", " Nielson",true,'female');
console.log(`Here is the travellers list: \n${fullName}\n${fullName1}\n${fullName2}`);