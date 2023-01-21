const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/bus.jpg') {
        myImage.setAttribute('src', 'img/mountain.jpg');
    } else {
        myImage.setAttribute('src', 'img/bus.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
}