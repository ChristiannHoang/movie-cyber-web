function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.header__fixed').style.top = '0';     
        document.querySelector('.header__fixed').style.display = 'block';
    } else {
        document.querySelector('.header__fixed').style.top = '-120px';
        document.querySelector('.header__fixed').style.display = 'none';
    }
}
window.onscroll = function() {scrollFunction()};


// VENOBOX 
new VenoBox();
new VenoBox({
    selector: ".vbox-item"
});
