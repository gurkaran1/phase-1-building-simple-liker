// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal')
const errorMessage = document.querySelector('#modal-message')
const hearts = document.querySelectorAll('.like-glyph')

errorModal.classList.add('hidden')

function toggleModal() {
  errorModal.classList.toggle('hidden')
}

function toggleHeart(event) {
  const heart = event.target
  mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart')
      if (heart.classList.contains('activated-heart')) {
        heart.innerText = FULL_HEART
      } else {
        heart.innerText = EMPTY_HEART
      }
    })
    .catch((error) => {
      errorMessage.innerText = error
      toggleModal();
      setTimeout(toggleModal, 3000)
    });
}

for (let heart of hearts) {
  heart.addEventListener('click', toggleHeart)
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
