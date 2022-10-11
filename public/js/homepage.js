async function singlePost(clicked_id) {
    const response = await fetch (`/post/${clicked_id}`, {
        method:'GET',
    })
       
    if (response.ok) {
        document.location.replace(`/post/${clicked_id}`);
    } else {
        alert('Failed to send requrest');
    }
};
