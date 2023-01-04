const menuButton = document.querySelector('.navbar__list');

onInit();





function toggleMenu(){
    if (menuButton.classList.contains('navbar__list--active')){
        menuButton.classList.remove('navbar__list--active')
    }else{
        menuButton.classList.add('navbar__list--active')
    }
}

function toggleImage(e){
    let img = e.children[0];
    if(img.src.includes('--hover')){
        img.src = img.src.replace('--hover.png', '.png');
    }else{
        img.src = img.src.replace('.png', '--hover.png');
    }
}

function onInit(){
    document.querySelector('.navbar__button').addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.navbar__links--item').forEach(e=>{
        console.log(e);
        e.addEventListener('click', function(){toggleMenu()});
    });

    document.querySelectorAll('.skills-list__item').forEach(e=>{
        e.addEventListener('mouseover', function(){toggleImage(e)});
        e.addEventListener('mouseout', function(){toggleImage(e)});

    });
};
