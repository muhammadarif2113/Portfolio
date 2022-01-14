// import '../scss/main.css'
// import barba from '@barba/core';
// import barbaCss from '@barba/css'; 

// Barba.Pjax.start();


const navBar = document.querySelector('.menu-icon'); 
const home = document.querySelector('.home'); 

navBar.addEventListener('click', ()=> {
    if(home.classList.contains('menu-active')){
        home.classList.remove('menu-active')
    } else {
        home.classList.add('menu-active')
    }
})



// barba.hooks.beforeEnter((datas) => {

// })

// const delay = (n) => {
//     n = n || 2000; 
//     return new Promise(done => {
//         setTimeout(() => {
//             done(); 
//         }, n);
//     });
// }

// const animationEnter =(container) => {
//     return gsap.from(container, { autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'})
// }

// const animationLeave =(container) => {
//     return gsap.to(container, { autoAlpha: 0, duration: 1, clearProps: 'all', ease: 'none'})
// }

// const loadingLeave = () => {
//     let timeline = gsap.timeline(); 
//     timeline.fromTo('.loading-bg', {
//         y: "100%"
//     }, {
//         y: 0, 
//         duration: 1, 
//     })
// }


// const loadingEnter = () => {
//     let timeline = gsap.timeline(); 
//     timeline.fromTo(
//         '.loading-bg', 
//         {
//             y: 0
//         },
//         {
//             y: "100%", 
//             duration: 1, 
//         }
//     )
// }


// barba.init({
//     sync: true, 
//     transitions: [
//         {
//             name: 'page-wipe', 
//             from: {
//                 namespace: ['home']
//             }, 
//             // to: {
//             //     namespace: ['resume']
//             // },
//             once({next}){
//                 animationEnter(next.container)
//             }, 
//             async leave({current}){
//                 console.log('leaving'); 
//                 const done = this.async(); 
//                 loadingLeave(); 
//                 animationLeave(current.container)
//                 await delay(800); 
//                 done(); 
//             }, 
//             async enter({next}){
//                 console.log('entering'); 
//                 animationEnter(next.container); 
//             }, 


















//             // to: {
//             //     namespace: ['resume', 'contact', 'photography', 'projects']
//             // },
//             //  leave(data){
//             //     console.log('leaving animation')
//             //     // const done = this.async(); 
//             //     loadingLeave(); 
//             //     // await delay(2000); 
//             //     // done(); 
//             // }, 
//             //  enter(data){
//             //     //data.next.container.style.backgroundColor = 'deepskyblue';
//             //     loadingEnter(); 
//             //     console.log('entering page animation');
//             // }, 
//             // async once(data){
//             //     initialPageAnimation()
//             // }
//         }
//     ],
//     // views: [
//     //     {
//     //         namespace: 'resume',
//     //         beforeEnter({next}){
//     //             if (typeof window.createMap === 'function') {
//     //                 window.createMap();
//     //               } else {
//     //                 window.createMap = () => {
//     //                   // create your map here using the Map API
//     //                   // Map, LatLng, InfoWindow, etc.
//     //                 };
            
//     //                 // load the Google Map API script
//     //                 let link = document.createElement('script');
//     //                 link.src = './scss/_resume.css'
                    
//     //                 next.container.appendChild(link);
//     //         }
//     //     }
//     // }]
// })

// // var cssId = 'myCss';  // you could encode the css path itself to generate id..
// // if (!document.getElementById(cssId))
// // {
// //     var head  = document.getElementsByTagName('head')[0];
// //     var link  = document.createElement('link');
// //     link.id   = cssId;
// //     link.rel  = 'stylesheet';
// //     link.type = 'text/css';
// //     link.href = 'http://website.com/css/stylesheet.css';
// //     link.media = 'all';
// //     head.appendChild(link);
// // }






