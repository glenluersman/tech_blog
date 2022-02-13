async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const post_content = document.querySelector('textarea[name="post-centent"]').value.trim();
  
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response);

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.create-post').addEventListener('submit', newFormHandler)