
document.querySelector(".next").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'message4.html'; 
        }, 1000); 
    }); 

});

document.querySelector(".back").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'message2.html'; 
        }, 1000); 
    }); 

});
