document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menuBar');
    const links = document.getElementById('links');

    menuBar.addEventListener('click', function() {
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
        }
    });
});


document.querySelector('#menuBar').addEventListener('click', function() {
    let who = document.querySelector('.who');
    if (who.style.marginTop === '200px') {
        who.style.marginTop = '50px';
    } else {
        who.style.marginTop = '200px';
    }
});





