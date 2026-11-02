const form = document.getElementById('musicianForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    const telegram = document.getElementById('telegram').value;
    const experience = document.getElementById('experience').value;
    const city = document.getElementById('city').value;
    const nickname = document.getElementById('nickname').value;

    if(!age || !telegram || !experience || !city || !nickname) {
        message.textContent = 'Заполни все поля, пожалуйста!';
        message.style.color = 'red';
        return;
    }
    message.textContent = 'Анкета отправлена! Ник: ' + nickname + ' , город: ' + city;
    message.style.color = 'green';

    form.reset()
});          