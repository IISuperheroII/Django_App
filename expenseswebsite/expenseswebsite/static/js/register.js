const usernameField = document.querySelector('#usernameField');
const feedbackFieldArea = document.querySelector('.invalid_feedback');
usernameField.addEventListener('keyup', (e)=>{
    console.log('7777777', 77777);
    const usernameVal = e.target.value;
    
    if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
          body: JSON.stringify({ username: usernameVal }),
          method: "POST",
        })
          .then((res) => res.json())
          .then((data) => {
            usernameSuccessOutput.style.display = "none";
            if (data.username_error) {
              usernameField.classList.add("is-invalid");
              feedBackArea.style.display = "block";
              feedBackArea.innerHTML = `<p>${data.username_error}</p>`;
              submitBtn.disabled = true;
            } else {
              submitBtn.removeAttribute("disabled");
            }
          });
      }
    });