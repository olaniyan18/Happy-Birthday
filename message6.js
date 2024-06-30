
document.querySelector(".next").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'message7.html'; 
        }, 1000); 
    }); 

});

document.querySelector(".back").addEventListener("click", function(){
    setTimeout(() => {
        document.body.classList.add('fade-in');
        setTimeout(() => {
        window.location.href = 'message5.html'; 
        }, 1000); 
    }); 

});
