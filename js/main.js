  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (form.checkValidity()) {
          event.preventDefault()
          
          window.location.href = "shahid-all.html";
        }
        
        form.classList.add('was-validated')
      }, false)
    })
  })()
  //
  var $mood = document.getElementById("mode");
  // $mood.style.backgroundImage="black";
  function changemode(){
    $mood.style.backgroundColor="#023047";
    $mood.style.color="white";
  }