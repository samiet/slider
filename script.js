var carousel = document.querySelector('.carousel');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var interval;
(window.innerWidth>1920)?interval=1000:(window.innerWidth>1280)?interval=500:interval=400;

prevButton.onclick=function(){
    prevButton.setAttribute('disabled','disabled');
    nextButton.setAttribute('disabled','disabled');
    var prev = document.querySelector('.carousel li:first-of-type');
    var new_after = prev.cloneNode(true);
    var list=document.getElementsByTagName('li');
    prev.classList.add('fade-prev');    
    for(var i=1;i<list.length;i++){
        list[i].classList.add('move-left');
    }
    setTimeout(function(){
        carousel.appendChild(new_after);
        new_after.classList.add('show-prev');
    },interval);
    setTimeout(function(){
        prev.remove();
        prevButton.removeAttribute('disabled');
        nextButton.removeAttribute('disabled');
        list[2].classList.remove('show-prev');
        for(var i=0;i<list.length-1;i++){
            list[i].classList.remove('move-left');
        }
    },interval*3.5);
}
nextButton.onclick=function(){
    prevButton.setAttribute('disabled','disabled');
    nextButton.setAttribute('disabled','disabled');
    var next = document.querySelector('.carousel li:last-of-type');
    var new_before = next.cloneNode(true);
    next.classList.add('fade-next');
    var list=document.getElementsByTagName('li');
    for(var i=0;i<list.length-1;i++){
        list[i].classList.add('move-right');
    }
    setTimeout(function(){
        carousel.insertBefore(new_before,carousel.firstChild);
        new_before.classList.add("show-next");
    },interval);
    setTimeout(function(){
        next.remove();
        prevButton.removeAttribute('disabled');
        nextButton.removeAttribute('disabled');
        list[0].classList.remove("show-next");
        for(var i=1;i<list.length;i++){
            list[i].classList.remove('move-right');
        }
    },interval*3.5);
}