const searchWord = document.querySelector('#searchWord');
const searchButton = document.querySelector('#searchButton');
const searchCount = document.querySelector('#searchCount');
const imageDiv= document.querySelector('#imageDiv');
const apiKey = 'S8WKPULrgpnM6GTyqIoRArXSpHrlgIgB';
function getGiphyData() {
    if(!searchWord.value) {
        alert('Please provide a giphy name');
    } else {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=${apiKey}&limit=${searchCount.value}`)
        .then((res) => res.json())
        .then((gifData) => {
            console.log(gifData.data);
            clearGifData();
            gifData.data.map((element) => {
                const img = document.createElement('img');
                img.setAttribute("src" ,`${element.images.fixed_height.url}`);  
                imageDiv.appendChild(img);
            })

        })
    }
}

searchButton.addEventListener('click', getGiphyData);
function clearGifData(){
    document.querySelectorAll("img").forEach(element =>{element.remove()
    });

}