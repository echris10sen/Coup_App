function addListeners() {
    document.getElementsByClassName('cyber-button')[0].addEventListener('click', () => {
        window.location.href="../pages/offline.html"
    })
    document.getElementsByClassName('cyber-button')[1].addEventListener('click', () => {
        window.location.href="../../pages/instructions.html";
    });
}

addListeners();