function changeAboutMeText(){
    const aboutMeTexts = ["BCA Student.", "Tech Enthusiast."];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1200;
    const aboutMeElement = document.querySelector(".about-me");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type(){
        const currentText = aboutMeTexts[textIndex];
        // typing
        if(!isDeleting && charIndex < currentText.length){
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed); 
        }

        // erasing
        else if (isDeleting && charIndex > 0){
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type,eraseSpeed);
        }

        // switching the deleting and typing process
        else{
            isDeleting = !isDeleting;
            if(!isDeleting){
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type,pauseTime);
        }
    }

    type();
}


// dark / light mode

document.addEventListener('DOMContentLoaded',function(){
    const darkModeToogle = document.getElementById('dark-mode-toogle');
    const body = document.body;

    darkModeToogle.addEventListener('click', ()=>{
        // document.querySelector('i').classList.remove('ri-moon-fill');
        // document.querySelector('i').classList.add('ri-sun-fill');
        if(document.querySelector('i').classList.contains('ri-moon-fill')){
            document.querySelector('i').classList.add('ri-sun-fill');
            document.querySelector('i').classList.remove('ri-moon-fill');
            document.querySelector('body').classList.add('dark-mode');
            document.querySelector('body').classList.remove('light-mode');
            
        }
        else if(document.querySelector('i').classList.contains('ri-sun-fill')){
            document.querySelector('i').classList.remove('ri-sun-fill');
            document.querySelector('i').classList.add('ri-moon-fill');
            document.querySelector('body').classList.add('light-mode');
            document.querySelector('body').classList.remove('dark-mode');

        }
        
    });
});
changeAboutMeText();


function sendtowhtsap(){
    let number = "+919914303532";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url= "https://wa.me/"+number+"?text="+"Name : "+name+ "%0a"+ email+ "%0a"+message+ "%0a%0a";

    window.open(url,'_blank').focus();
}
function send_mail(){
    let mailId="dheerajmk2611@gmail.com";
    
}



