

document.querySelector(".next").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
        window.location.href = 'message2.html'; 
        }, 1000); 
    }); 

});