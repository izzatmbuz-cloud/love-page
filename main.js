let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let yesScale = 1;
function dodge(){   
    noBtn.style.position = 'absolute';
    noBtn.style.left = rand() + 'rem';
    yesScale += 0.07;
    yesBtn.style.transform = `scale(${yesScale})`;
}
const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        dodge();
    });
} else {
    noBtn.addEventListener("mouseenter", dodge);
}

function rand(){
    return Math.random() * 30;
}

function rainHearts() {
    for (let i=0; i<500; i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        document.body.appendChild(heart);
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDelay = Math.random() * 2 + 2 + "s";
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}


let title = document.querySelector(".title");

yesBtn.onclick = () => {
    title.textContent = 'Yaaappyyy!';
    rainHearts();
}
