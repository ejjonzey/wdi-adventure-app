$(function() {

var rotateMarquee = function (index, curMarquee, deleteTime){
    const masterWordList = ["adventure", "eat food", "have a picnic", "play a game", "hiking"]
    var wordSpelling = masterWordList[index];
    
    if(!deleteTime){
        $('#marquee').html(curMarquee);
        if(curMarquee.length === wordSpelling.length){
            deleteTime = true;
            setTimeout(function(){rotateMarquee(index, curMarquee, deleteTime)}, 800);
        }
        if(curMarquee.length < wordSpelling.length){
            curMarquee = curMarquee + wordSpelling.charAt(curMarquee.length);
            setTimeout(function(){rotateMarquee(index, curMarquee, deleteTime)}, 300);
        }
    } else {
        $('#marquee').html(curMarquee);
        if(curMarquee.length === 0){
            deleteTime = false;
            if(index < masterWordList.length-1){
                index += 1;
            } else {
                index = 0;
            }
            setTimeout(function(){
                rotateMarquee(index, curMarquee, deleteTime)}, 300);
        }
        if(curMarquee.length > 0){
            curMarquee = curMarquee.substring(0, curMarquee.length - 1);
            setTimeout(function(){
                rotateMarquee(index, curMarquee, deleteTime)}, 150);
        }
    }
}

var  slideshowImages = function(){
    return  ["/images/wasteland.jpg", "/images/lightbulbs.jpeg", "/images/tower.jpeg", "/images/hiking.jpeg", "/images/edgar.jpg", "/images/dining.jpg", "images/white.jpg", "images/pines.jpeg"];
}

var slideshow = function (){
    var slideshowList = slideshowImages();
    var randomImage = Math.floor(Math.random()*slideshowList.length);
    console.log(randomImage);
    console.log(slideshowList[randomImage]);
    $('body').css("background", 'url('+slideshowList[randomImage]+')');
    $('body').css("background-size", "100vw");
    $('body').css("transition", "background-image 1s ease-out");
    setTimeout(function(){
        slideshow();
    }, 7000);
}
rotateMarquee(0,"", false);
slideshow();
preload();


function preload() {
    var imgs = slideshowImages();
    for (var i = 0, len = imgs.length; i < len; ++i) {
        img = new Image();
        img.src = imgs[i];
    }
}

});