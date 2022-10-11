const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#update-title').value;
    const text = document.querySelector('#update-text').value;
    const id = document.querySelector('.postForm').id;
  
    const response = await fetch (`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json'}
    })
      
    if (response.ok) {
        document.location.replace('/dash');
    } else {
        alert(response.statusText);
    }

};

function cancelBtn(e){
    e.preventDefault();

    document.location.replace('/dash');
}

document.getElementById('updatePost').addEventListener('submit', updateFormHandler);
document.getElementById('cancel').addEventListener('click', cancelBtn);