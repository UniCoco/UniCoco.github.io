var pics = ["http://vignette3.wikia.nocookie.net/villains/images/a/a4/Church.png/revision/latest?cb=20131218204305",
           "https://33.media.tumblr.com/39e9e806628f6d7f04b74c4a4005d0ea/tumblr_nbfa1lA7h81t3yu0bo1_500.gif",
            "http://www.cartoonbucket.com/wp-content/uploads/2015/10/Azrael-Attacking-On-Smurf-kil805.jpg",
           "http://vignette2.wikia.nocookie.net/fairytail/images/b/b2/Carla_fairy_tail_anime.jpg/revision/latest?cb=20110625022939",
           "http://s3.narvii.com/image/zmbabyyo5rr72l7ew45is5khgg3wg5qe_hq.jpg"];

var location = 0;

function goLeft(){
  document.getElementById("pic").src=pics[location];
  
}

function goRight(){
  location = location - 1;
  document.getElementById("pic").src=pics[location];
}