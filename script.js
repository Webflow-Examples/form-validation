Webflow.push(function () {
  $("form").submit(function () {
    // get DOM elements
    const nameInput = document.getElementById("name");
    const formErrorMsg = document.getElementById("formErrorMsg");

    // return false if a condition is not met
    // optionally, show an error message
    if (nameInput.value.length < 3) {
      formErrorMsg.textContent = "Name must be 3 characters or longer";
      formErrorMsg.style.display = "block";
      return false;
    }
  });
});
