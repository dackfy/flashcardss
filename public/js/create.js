const form = document.getElementById('form');

const container = document.getElementById('blogs-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { name } = form;

  const data = {
    name: name.value,
  };

  try {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();

      const { html } = result;
      console.log(html);

      container.insertAdjacentHTML('beforeend', html);

      form.reset();
    }
  } catch (error) {
    console.log(error);
  }
});
