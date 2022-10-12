// Opens to new comment box when add comment is clicked.
function commPost() {
    document.getElementById('commSection').classList.remove('hidden');
}

document.getElementById('addComm').addEventListener('click', commPost);

// Post the new comment
async function newComment(e){
    e.preventDefault();

    const post_id = document.getElementById('newComment').name;
    const text = document.querySelector('#comment-text').value;

    const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ text, post_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('something went wrong')
    }
}

document.getElementById('newComment').addEventListener('submit', newComment);

function updateCom(e){
    e.preventDefault();

    let commentId = document.querySelector('.updateCom').id;
    let previousText = document.querySelector('.updateCom').name;

    document.getElementById('editComm').classList.remove('hidden');
    document.getElementById('commEdit').value = previousText;
    document.querySelector('.subEdit').setAttribute('id', commentId);
}

document.querySelector('.updateCom').addEventListener('click', updateCom);



async function updateComment(clicked_id){
   
    let post_id = document.querySelector('.editComment').id;
    let comm_id = document.querySelector('.subEdit').id;
    let text = document.getElementById('commEdit').value;

    const response = await fetch(`/api/comments/${clicked_id}`, {
        method: 'PUT',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
        document.location.reload();
    } else {
        alert('Comment update failed!')
    }
}


async function delComment(clicked_id){

    const response = await fetch(`/api/comments/${clicked_id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Delete of comment was not successful');
    }
}


