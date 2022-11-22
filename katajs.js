const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        document.getElementById("hmenudiv").style.display="flex";
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        document.getElementById("hmenudiv").style.display="none";
        menuOpen = false;
    }
});

