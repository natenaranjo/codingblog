async function newPost(e){
    e.preventDefault();

    const title = document.querySelector('#new-title').value;
    const text = document.querySelector('#new-text').value;

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/dash/`);
    } else {
        alert('something went wrong')
    }
}

function cancelBtn(e){
    e.preventDefault();

    document.location.replace('/dash');
}

document.getElementById('newPost').addEventListener('submit', newPost);
document.getElementById('cancel').addEventListener('click', cancelBtn);