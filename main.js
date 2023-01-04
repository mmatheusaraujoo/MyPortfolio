const menuButton = document.querySelector('.navbar--list');

onInit();





function toggleMenu(){
    console.log(this.e)
    if (menuButton.classList.contains('navbar--list__active')){
        menuButton.classList.remove('navbar--list__active')
    }else{
        menuButton.classList.add('navbar--list__active')
    }
}

function toggleImage(e){
    let img = e.children[0];
    if(img.src.includes('__hover')){
        img.src = img.src.replace('__hover.png', '.png');
    }else{
        img.src = img.src.replace('.png', '__hover.png');
    }
}

function onInit(){
    document.querySelector('.navbar--button').addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.navbar--links__item').forEach(e=>{
        e.addEventListener("click", toggleMenu());
    });

    document.querySelectorAll('.skills-list--item').forEach(e=>{
        e.addEventListener('mouseover', function(){toggleImage(e)});
        e.addEventListener('mouseout', function(){toggleImage(e)});

    });
};
