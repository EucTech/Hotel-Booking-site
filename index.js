const menuListEl = document.querySelector(".menulist");
const barEl = document.querySelector(".fa-bars");

menuListEl.style.maxHeight = "0px";

barEl.addEventListener("click", () => {
    menutoggle()
})

function menutoggle() {
if (menuListEl.style.maxHeight == "0px") {
    menuListEl.style.maxHeight = "100vh";

} else {
    menuListEl.style.maxHeight = "0px";
}

}

//owl carousel Jquery for home

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     dots: false,
//     navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })


//owl carousel Jquery for Rooms

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 40,
//     nav: true,
//     dots: false,
//     navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:2,
//             margin: 10,
//         },
//         1000:{
//             items:3
//         }
//     }
// })
