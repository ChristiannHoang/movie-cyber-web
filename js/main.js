function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.header__fixed').style.top = '0';         
    } else {
        document.querySelector('.header__fixed').style.top = '-120px';    
    }
}
window.onscroll = function() {scrollFunction()};


// VENOBOX 
new VenoBox({
    selector: ".my-video"
});
