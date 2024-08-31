let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

//menu.onclick = () => {
  //  menu.classList.toggle('bx-x');
    //navbar.classList.toggle('active');
//}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//type text code

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', ' Fat Lose', 'Weight Lifting '],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });

  // Get the modal
var modal = document.getElementById('login-modal');

// Get the button that opens the modal
var btn = document.getElementById('login-btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


window.onload = function() {
    const videoElement = document.getElementById('myVideo');
    
    if (videoElement) {
        // Set autoplay and loop
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.load(); // This ensures the settings take effect

        // Handle the onclick event
        videoElement.onclick = function() {
            console.log("Video clicked");
            // Additional actions can be added here
        };
    } else {
    
    }
};

