document.addEventListener('DOMContentLoaded', function () {
  const askButton = document.getElementById('ask-button')
  const userInput = document.getElementById('user-input')
  const responseContainer = document.getElementById('response-container')

  askButton.addEventListener('click', function () {
    const message = userInput.value.trim()
    if (message) {
      fetch('/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((data) => {
          responseContainer.textContent =
            data.response || 'No response from AI.'
          userInput.value = '' // Clear the input after getting the response
        })
        .catch((error) => {
          console.error('Error:', error)
          responseContainer.textContent =
            'An error occurred while processing your request.'
        })
    }
  })
})
