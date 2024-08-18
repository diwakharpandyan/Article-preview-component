const shareButton = document.querySelector('.before-click');
const share = document.querySelector('.share');
const shareButtonIcon = document.querySelector('.share-button-icon');

shareButton.addEventListener('click',()=>{
    
    if(window.matchMedia("(max-width: 1020px").matches){
        share.style.height = "5.5rem";
        share.style.opacity = "1";
        shareButton.classList.add('after-click');
        shareButtonIcon.src = "./images/icon-share1.svg"
    } else{
        share.style.height = "3.5rem";
        share.style.opacity = "1";
        shareButton.classList.add('after-click');
        shareButtonIcon.src = "./images/icon-share1.svg" 
    }
   
});
