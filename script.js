async function fetchSnakeImages(snakeName) {
    try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(snakeName)}&prop=pageimages&format=json&pithumbsize=300&origin=*`);
        const data = await response.json();
        const pages = data.query.pages;
        const imageUrl = Object.values(pages)[0].thumbnail.source;

        return imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

async function displaySnakeImages() {
    const snakeNames = ['Cobra', 'Python', 'Viper'];  // 你可以替换成任何蛇的名称
    const snakeImagesDiv = document.getElementById('snake-images');

    for (const name of snakeNames) {
        const imageUrl = await fetchSnakeImages(name);

        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = name;
            snakeImagesDiv.appendChild(img);
        }
    }
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    alert('Language changed to: ' + language);
    // Here you would implement the actual language change logic
}

function searchFeature() {
    const feature = document.getElementById('feature-input').value;
    const results = document.getElementById('search-results');
    results.innerHTML = `<p>Searching for snakes with feature: ${feature}</p>`;
    // Here you would implement the actual search logic and update the results
}

// 在页面加载后显示蛇的图片
window.onload = displaySnakeImages;