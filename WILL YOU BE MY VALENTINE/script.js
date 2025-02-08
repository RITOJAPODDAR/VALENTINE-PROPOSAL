const messages = [
    "Pukkaaa Sure?😟",
    "Ekdommm to???😢",
    "PLEEEAAASSEEE HUH!!😫",
    "Dekheneee kintuu huh!! TUI POTTYY KOR BESII😏",
    "Abaar na select kore lojja nei?!!!😤",
    "Eirokom korlii to?? 😧",
    "KNOOO erom korchiss whyyy 😭",
    "DOYAA DEKHIYE YES BOLEDE 💩",
    "THIKKK ACHE AR KORBO NA JIGGES BAAAD DE HUHH 🥺👿",
    "EMNI MOJAA KORCHILAM HEHE!! PLEAASEEE YES TA CLICK KOR!!🤭💖"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
function handleYesClick(){
    window.location.href = "yes_page.html";
}
