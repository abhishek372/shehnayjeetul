$('.slick-js').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at	any time.
        // {
        //     breakpoint: 320,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
});



// Modal script

// Get the modal
// var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var userModal = document.getElementById("userModal");
// var userImg = document.getElementById("userImg");
// var modaluserImg = document.getElementById("img02");
// var usercaptionText = document.getElementById("usercaption");
// userImg.onclick = function(){
//     userModal.style.display = "block";
//     modaluserImg.src = this.src;
//     usercaptionText.innerHTML = this.alt;   
// }


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }


// Mobileview navbar
document.querySelector ("#menu").addEventListener ("click", function (event) {
    document.querySelector ("#mobileview").style.left = "0";
    event.preventDefault();
})

document.querySelector ("#mobileview i").addEventListener ("click", function () {
    document.querySelector ("#mobileview").style.left = "-100%";
})


// msg-popup
document.querySelector ("#right-js .chat-div").addEventListener ("click", function() {
    document.querySelector ("#msg-popup").style.right = "0";
})
document.querySelector ("#msg-heading #rgt #close").addEventListener ("click", function() {
    document.querySelector ("#msg-popup").style.right = "-130%";
})
document.querySelector ("#back").style.display = "none";
document.querySelector ("#back").addEventListener ("click", function(){
    document.querySelector ("#sec-2 #sec-2-rgt").style.display = "none";
    document.querySelector ("#sec-2-rgt #rgt-top").style.display = "none";
    document.querySelector ("#sec-2 #sec-2-lft").style.display = "flex";
    document.querySelector ("#sec-2 #sec-2-lft").style.flexDirection = "column";
})

if (document.documentElement.clientWidth < 450) {
    const userss= document.querySelectorAll(".lft-users");
    userss.forEach (function (elem) {
        elem.addEventListener ("click", function () {
            document.querySelector ("#sec-2 #sec-2-rgt").style.display = "initial";
            document.querySelector ("#sec-2-rgt #rgt-top").style.display = "flex";
            document.querySelector ("#sec-2 #sec-2-lft").style.display = "none";
            document.querySelector ("#back").style.display = "initial";
        })
    })
}
