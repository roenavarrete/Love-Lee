const cuteTeddyBearMoreInfoButton = document.querySelector('#CuteTeddyBearMoreInfo');
const cuteTeddyBear = document.querySelector('#CuteTeddyBearImage');
cuteTeddyBearMoreInfoButton.addEventListener('click', displayCuteTeddyBearInfo);

function displayCuteTeddyBearInfo() {
    const imageOrText = cuteTeddyBearMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img"); 
        image.src = "teddybear.jpg"; 
        cuteTeddyBear.textContent = "";
        cuteTeddyBear.appendChild(image); 
        cuteTeddyBearMoreInfoButton.textContent = 'More Info:';
    } else {
        cuteTeddyBear.textContent = 'A very cute teddy bear that is looking for a home! Made with real cub love, this bear is sure to brighten anyone\'s day.';
        cuteTeddyBearMoreInfoButton.textContent = 'Show Image:';
    }
}

const flowerArrangementMoreInfoButton = document.querySelector('#FlowerArrangementMoreInfo');
const flowerArrangement = document.querySelector('#FlowerArrangementImage');
flowerArrangementMoreInfoButton.addEventListener('click', displayFlowerArrangementInfo);

function displayFlowerArrangementInfo() {
    const imageOrText = flowerArrangementMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img"); 
        image.src = "flowerarrangement.jpg"; 
        flowerArrangement.textContent = "";
        flowerArrangement.appendChild(image); 
        flowerArrangementMoreInfoButton.textContent = 'More Info:';
    } else {
        flowerArrangement.textContent = 'Handpicked beautiful flowers with a vibrant blue glow. Blue roses, white gardenias, lush greenery, and more is present in this lovely flower arrangement.';
        flowerArrangementMoreInfoButton.textContent = 'Show Image:';
    }
}

const personalizedLoveSongMoreInfoButton = document.querySelector('#PersonalizedLoveSongMoreInfo');
const personalizedLoveSong = document.querySelector('#PersonalizedLoveSongImage');
personalizedLoveSongMoreInfoButton.addEventListener('click', displayPersonalizedLoveSongInfo);

function displayPersonalizedLoveSongInfo() {
    const imageOrText = personalizedLoveSongMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img"); 
        image.src = "guitar.jpg"; 
        personalizedLoveSong.textContent = "";
        personalizedLoveSong.appendChild(image); 
        personalizedLoveSongMoreInfoButton.textContent = 'More Info:';
    } else {
        personalizedLoveSong.textContent = 'A personalized love song for you or your loved one! Written by the very special Roel, you will have a beautiful and virtuistic song meant for only one very special person.';
        personalizedLoveSongMoreInfoButton.textContent = 'Show Image:';
    }
}

const matchingPajamasCremeMoreInfoButton = document.querySelector('#MatchingPajamasCremeMoreInfo');
const matchingPajamasCreme = document.querySelector('#MatchingPajamasCremeImage');
matchingPajamasCremeMoreInfoButton.addEventListener('click', displayMatchingPajamaCremeInfo);

function displayMatchingPajamaCremeInfo() {
    const imageOrText = matchingPajamasCremeMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img");
        image.src = "matchingpajamas-creme.jpg";
        matchingPajamasCreme.textContent = "";
        matchingPajamasCreme.appendChild(image);
        matchingPajamasCremeMoreInfoButton.textContent = "More Info:";
    } else {
        matchingPajamasCreme.textContent = "A cute pajama set for two! Perfect for watching movies, home dinner dates, or snuggles!"
        matchingPajamasCremeMoreInfoButton.textContent = "Show Image:";
    }
}

const cocoaAndMarshmallowMoreInfoButton = document.querySelector('#CocoaAndMarshmallowMoreInfo');
const cocoaAndMarshmallow = document.querySelector('#CocoaAndMarshmallowImage');
cocoaAndMarshmallowMoreInfoButton.addEventListener('click', displayCocoaAndMarshmallowInfo);

function displayCocoaAndMarshmallowInfo() {
    const imageOrText = cocoaAndMarshmallowMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img");
        image.src = "cocoaandmarshmallow.jpg";
        cocoaAndMarshmallow.textContent = "";
        cocoaAndMarshmallow.appendChild(image);
        cocoaAndMarshmallowMoreInfoButton.textContent = "More Info:";
    } else {
        cocoaAndMarshmallow.textContent = "A warm hot cocoa and their fluffy marshmallow friend make a cute plush duo! With a magnet on their sides, they stick together and make the perfect combination!"
        cocoaAndMarshmallowMoreInfoButton.textContent = "Show Image:";
    }
}

const dateNightDinnersMoreInfoButton = document.querySelector('#DateNightDinnersMoreInfo');
const dateNightDinners = document.querySelector('#DateNightDinnersImage');
dateNightDinnersMoreInfoButton.addEventListener('click', displayDateNightDinnersInfo);

function displayDateNightDinnersInfo() {
    const imageOrText = dateNightDinnersMoreInfoButton.textContent;
    if (imageOrText === 'Show Image:') {
        var image = document.createElement("img");
        image.src = "datenightdinners.jpg";
        dateNightDinners.textContent = "";
        dateNightDinners.appendChild(image);
        dateNightDinnersMoreInfoButton.textContent = "More Info:";
    } else {
        dateNightDinners.textContent = "A cookbook filled with perfect dinners for you and your loved one to make at home! Containing fancy dishes for classy couples, simple and heartwarming dishes for cozy couples, and everything inbetween."
        dateNightDinnersMoreInfoButton.textContent = "Show Image:";
    }
}
