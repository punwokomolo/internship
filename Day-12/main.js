const myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
myHeading.textContent = "Hello world!";


const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    console.log("click");
    
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/nature.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
    console.log("clicked");
    setUserName();
});
