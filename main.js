let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let yesScale = 1;
function dodge(){   
    noBtn.style.position = 'absolute';
    noBtn.style.left = rand() + 'px';
    yesScale += 0.07;
    yesBtn.style.transform = `scale(${yesScale})`;
}
noBtn.addEventListener("mouseenter", dodge);


function rand(){
    return Math.random() * 300;
}

function rainHearts() {
    for (let i=0; i<500; i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        document.body.appendChild(heart);
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDelay = Math.random() * 2 + "s"
    }
}


let title = document.querySelector(".title");

yesBtn.onclick = () => {
    title.textContent = 'Yippeeee!';
    rainHearts();
}
