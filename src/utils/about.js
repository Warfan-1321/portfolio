// function aboutGSAP() {
    
//     const aboutTitle = document.querySelector('.about__title');
//     const aboutDescription = document.querySelector('.about__description');
//     const aboutUi = document.querySelector('.about__ul-container');
//     const aboutSub = document.querySelectorAll('.about__subtitle');
//     const aboutImg = document.querySelectorAll('.about__img');


//     gsap.from(aboutTitle, {
//         duration: 1,
//         opacity: 0,
//         y: 50,
//         scrollTrigger: {
//             trigger: aboutTitle,
//             start: 'top 90%',
//             end: 'top 20%',
//             scrub: true,
            
//         }
//     })
//     gsap.from(aboutDescription, {
//         duration: 1,
//         opacity: 0,
//         y: 50,
//         scrollTrigger: {
//             trigger: aboutDescription,
//             start: 'top 90%',
//             end: 'top 20%',
//             scrub: true,
           
//         }
//     })
//     gsap.from(aboutSub, {
//         duration: 1,
//         opacity: 0,
//         y: 50,
//         scrollTrigger: {
//             trigger: aboutSub,
//             start: 'top 90%',
//             end: 'top 20%',
//             scrub: true,
//             stragger: 0.2,
//             straggerChildren: 0.2,
//         }
//     })
//     gsap.from(aboutUi, {
//         duration: 1,
//         opacity: 0,
//         y: 50,
//         scrollTrigger: {
//             trigger: aboutUi,
//             start: 'top 90%',
//             end: 'top 20%',
//             scrub: true,
//             stragger: 0.2,
//             straggerChildren: 0.2,
//         }
//     })
//     gsap.from(aboutImg, {
//         duration: 1,
//         opacity: 0,
//         scale: 0.8,
//         scrollTrigger: {
//             trigger: aboutImg,
//             start: 'top 90%',
//             end: 'top 20%',
//             scrub: true,
//             stragger: 0.2,
//             straggerChildren: 0.2,
//         }
//     })
   
// }
// export default aboutGSAP;