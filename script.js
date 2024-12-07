function checkFirstAnswer() {
    const answers = document.getElementsByName('answer');
    let selectedAnswer;
    for (const answer of answers) {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    }

    const result = document.getElementById('result');
    if (selectedAnswer === '2') {
        result.textContent = 'Esatto! Ecco la prossima domanda.';
        document.getElementById('riddle-section').style.display = 'none'; // Nascondi il primo indovinello
        document.getElementById('second-question').style.display = 'block';
    } else {
        result.textContent = 'Risposta errata! Riprova.';
    }
}

function checkSecondAnswer() {
    const gifts = document.getElementsByName('gift');
    let selectedGift;
    for (const gift of gifts) {
        if (gift.checked) {
            selectedGift = gift.value;
        }
    }

    const result = document.getElementById('result');
    if (selectedGift === '1') {
        result.textContent = 'Corretto! Il regalo è sbloccato.';
        document.getElementById('regalo').style.display = 'block';
    } else {
        result.textContent = 'Non è questo il regalo giusto. Riprova.';
    }
}

function downloadGift() {
    // Percorso del file PDF da scaricare
    window.location.href = 'regalo.pdf';
}
