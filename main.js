// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const errorModal = document.getElementById("modal");

// Your JavaScript code goes here!
document.getElementById("modal").classList.add("hidden");
const allLikes = document.querySelectorAll(".like-glyph");
allLikes.forEach(like => {
  like.addEventListener("click", event => {
    console.log(event.target.innerHTML);
    mimicServerCall()
    .then(data => {
      console.log(data);
      if (event.target.innerHTML === EMPTY_HEART) {
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      } else {
        event.target.innerText = EMPTY_HEART;
        event.target.classList.remove("activated-heart");
      };
    }) 

    .catch((event) => {
      console.log(event);
      errorModal.classList.remove("hidden");
      errorModal.innerText = event;
      setTimeout(() => errorModal.classList.add("hidden"), 3000);
    });

  })
});


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
