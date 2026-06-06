let centerText = document.querySelector(".center");
let textArray = ["We Look Forward To Seeing You Again Soon!", "Say Hey Nuru!"];
let i = 0;

function textAlternate(){
    centerText.classList.add("hidden");
    setTimeout(() => {
        centerText.innerHTML = `
            <h2>${textArray[i]}</h2>
        `;

        centerText.classList.remove("hidden");
        (i == 0) ? i=1 : i=0;

    }, 500);

}

textAlternate();
setInterval(textAlternate, 5000);