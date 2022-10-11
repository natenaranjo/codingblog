console.log('Post js was successfully loaded!');

function commPost() {
    document.getElementById('commSection').classList.remove('hidden');
}

document.getElementById('addComm').addEventListener('click', commPost);

