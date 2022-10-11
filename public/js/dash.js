console.log('Dash js was successfully loaded!');

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