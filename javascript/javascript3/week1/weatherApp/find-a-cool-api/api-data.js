
fetch('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port').then(res => 
    res.json()).then((data) => {
        console.log(data); 
})