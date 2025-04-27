//profile.js
//upload pic for the profile
document.addEventListener("DOMContentLoaded", function () {
  const uploadPicInput = document.getElementById("upload-pic");
  const profilePic = document.getElementById("profile-pic");

  // Check if a profile picture is saved in localStorage
  const savedProfilePic = localStorage.getItem("profilePic");
  if (savedProfilePic) {
    profilePic.src = savedProfilePic; // Set the saved profile picture
  }

  // Handle file upload
  uploadPicInput.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;
        profilePic.src = imageUrl; // Update profile picture with the selected image
        localStorage.setItem("profilePic", imageUrl); // Save the image URL in localStorage
      };

      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  });
});


//sech box
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const searchIcon = searchBox.querySelector("img");

    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("active");
    });
});
// expandabel tatle bar
document.body.addEventListener("click", (ev) => {
    const expandableTitleBar = ev.target.closest(".expandable_title_bar");
    if (!expandableTitleBar) {
        return;
    }

    const expandable = expandableTitleBar.closest(".expandable");
    if (expandable) {
        expandable.classList.toggle("expandable--open");
    }
});








