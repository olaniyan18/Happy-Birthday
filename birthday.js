var p = document.querySelector(".text");
var text = "Hi BIBI,\n Happy Birthday! \n Some of your friends decided to make your day better by sending you lovely messages.\n Let's get started";


function textTypingEffect(element, text, i = 0){
    if (i === 0){
        element.textContent = "";
    }

    element.textContent += text[i];

    if(i === text.length - 1){
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'message.html'; 
          }, 1000); 
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 100);
}

textTypingEffect(p, text);
