document.addEventListener('DOMContentLoaded', fetchCatImage);

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const img = document.getElementById('catImage');
            img.src = data[0].url;
            img.alt = '貓貓圖片';
        })
        .catch(error => console.error('Error fetching cat image:', error));
}
