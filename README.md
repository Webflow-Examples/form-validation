# form-validation

Add validation to Webflow forms.

Example site below:

https://wf-form-validation.webflow.io/

# How it works

We can push a function to the global Webflow object. Our function will include a reference to a form to which we will add the submit event. To prevent the form from submitting, we need to return false in the handler function we pass into the submit event.

For example, we can run custom code to validate our inputs. If the conditions we outline in our code are not met, return false.

# The Javascript

The example below includes some extra code to get an input and check it's length. If the length is less than 3, we stop the form from submitting. Optionally, we can show an error message to the user.

```js
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
```
