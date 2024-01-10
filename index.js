const button1 = document.getElementById("seek");
const button2 = document.querySelector(".mor");
const para = document.querySelector(".sect1 div p");
const img = document.querySelector(".sect1 img");
const li2 = document.querySelector("li:nth-child(2)");
const li3 = document.querySelector("li:nth-child(3)");
const bu = document.querySelector("#seek");

button1.addEventListener("click", () => {
    alert("Seek More");
})

button2.addEventListener("click", () => {
    button2.innerText = "Great";
})

document.querySelector("li:nth-child(1)").addEventListener("click", () => {
        alert("The navigation menu just got clicked");
        img.src = "./images/fut.webp";
        bu.style.backgroundColor = "#BFCCB5";
        para.innerHTML = "Creative Designs <br /> For Your <br /> Viewing Pleasure";
    })

li2.addEventListener("click", () => {
    para.innerHTML = "Detailed blogs <br /> with <br /> great reviews."
    para.style.color = "#820300";
    img.src = "./images/brik.webp";
    bu.style.backgroundColor = "#DFCCFB";
})
li3.addEventListener("click", () => {
    para.innerHTML = "You can contact us <br /> for more <br /> via our handles";
    para.style.color = "#004225";
    img.src = "./images/back1.webp";
    bu.style.backgroundColor = "#8DDFCB";
})


