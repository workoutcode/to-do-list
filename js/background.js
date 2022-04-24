const images = [
    "alex.jpg",
    "beckham.jpg",
    "cantona.jpg",
    "gigs.jpg",
    "kean.jpg",
    "neville.jpg",
    "parkjisung.jpg",
    "ronaldo.jpg",
    "rooney.jpg",
    "scholes.jpg",
    "vandesar.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


