document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => {
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'happybirthday.html'; 
      }, 1000); 
    }, 7000); 
  });
  