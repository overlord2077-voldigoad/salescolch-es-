function showDetails(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Fecha o popup se o usuário clicar fora dele
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
}
