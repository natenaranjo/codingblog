async function editPost(clicked_id){
    const response = await fetch(`/dash/${clicked_id}`, {
        method: 'GET'
    })

    if (response.ok) {
        document.location.replace(`/dash/${clicked_id}`);
    } else {
        alert('something went wrong')
    }
}

async function deletePost(clicked_id){
    const response = await fetch(`/api/posts/${clicked_id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        window.location.reload();
    } else {
        alert('Delete was not successful!')
    }
}

async function createPost(){

    const response = await fetch('/dash/new', {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace('/dash/new');
    } else {
        alert('Something went wrong!');
    }

} 

document.getElementById('newPost').addEventListener('click', createPost);