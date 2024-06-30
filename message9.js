
document.querySelector(".next").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'theend.html'; 
        }, 1000); 
    }); 

});

document.querySelector(".back").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'message8.html'; 
        }, 1000); 
    }); 

});
