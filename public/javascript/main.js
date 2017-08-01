$(function() {

    var rotateMarquee = function(index, curMarquee, deleteTime) {
        const masterWordList = ["Adventure", " Hiking", "Stargazing", "to a Drive-In", "Explore", "to a Museum", "Volunteer", "Nowhere"]
        var wordSpelling = masterWordList[index];

        if (!deleteTime) {
            $('#marquee').html(curMarquee);
            if (curMarquee.length === wordSpelling.length) {
                deleteTime = true;
                setTimeout(function() { rotateMarquee(index, curMarquee, deleteTime) }, 700);
            }
            if (curMarquee.length < wordSpelling.length) {
                curMarquee = curMarquee + wordSpelling.charAt(curMarquee.length);
                setTimeout(function() { rotateMarquee(index, curMarquee, deleteTime) }, 300);
            }
        } else {
            $('#marquee').html(curMarquee);
            if (curMarquee.length === 0) {
                deleteTime = false;
                if (index < masterWordList.length - 1) {
                    index += 1;
                } else {
                    index = 0;
                }
                setTimeout(function() {
                    rotateMarquee(index, curMarquee, deleteTime)
                }, 300);
            }
            if (curMarquee.length > 0) {
                curMarquee = curMarquee.substring(0, curMarquee.length - 1);
                setTimeout(function() {
                    rotateMarquee(index, curMarquee, deleteTime)
                }, 150);
            }
        }
    }

    var slideshowImages = function() {
        return ["/images/cityguy.jpg", "/images/camguy.jpg", "/images/mustang.jpg", "/images/twoGirls.jpg", "/images/coffee.jpg", "/images/hatgirl.jpg", "/images/hikers.jpg", "/images/flowers.jpg", "/images/coffee.jpg", "/images/museum.jpg"];
    };

    var slideshow = function() {
        var slideshowList = slideshowImages();
        var randomImage = Math.floor(Math.random() * slideshowList.length);
        console.log(randomImage);
        console.log(slideshowList[randomImage]);
        $('body').css("background", 'url(' + slideshowList[randomImage] + ')');
        $('body').css("background-size", "100vw");
        $('body').css("transition", "background-image 1s ease-out");
        setTimeout(function() {
            slideshow();
        }, 4000);
    }
    rotateMarquee(0, "", false);
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