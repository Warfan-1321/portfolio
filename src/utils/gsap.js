function initGSAP() { 
    gsap.from(".mobile-nav", {
        duration: 0.8,
        opacity: 0,
        y: -10,
        ease: "power2.out",
        delay: 0.2,
        // scrollTrigger: {
        //     trigger: ".mobile-nav__menu",
        //     start: "top 85%",
        //     end: "top 50%",
        //     scrub: true,
        // },
    })
    gsap.from(".hero__img", {
        duration: 0.7,
        scale: 0.4,
        opacity: 0,
        ease: "power2.out",
        delay: 0.2,
      })                                                                     
    gsap.from(".hero h1", {
        duration: 0.6,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 0.4,
        stagger: 0.2,
    })
    gsap.from(".hero h2", {
        duration: 0.6,
        opacity: 0,
        y: 100,
        ease: "power2.out",
        delay: 0.2
    })
    gsap.from(".hero p", {
        duration: 0.6,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 0.8,
    })
    gsap.from(".hero__btn ", {
        duration: 0.6,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 1  
    })

    gsap.from(".about__title", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 1.2,
        scrollTrigger: {
            trigger: ".about__title",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })

    gsap.from(".about__description", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 1.4,
        scrollTrigger: {
            trigger: ".about__description",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".about__img", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 1.6,
        scrollTrigger: {
            trigger: ".about__img",
            start: "top 95%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".about__list", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 1.8,
        scrollTrigger: {
            trigger: ".about__list",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".feature__title", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2,
        scrollTrigger: {
            trigger: ".feature__title",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    }) 
    gsap.from(".feature__subtitle", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.2,
        scrollTrigger: {
            trigger: ".feature__subtitle",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".feature__link", {
        duration: 0.3,
        opacity: 0,
        scale: 0.7,
        ease: "power2.out",
        delay: 2.4,
        scrollTrigger: {
            trigger: ".feature__link",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })

    gsap.from(".feature__discription", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.2,
        scrollTrigger: {
            trigger: ".feature__discription",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".feature__info", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.4,
        scrollTrigger: {
            trigger: ".feature__info",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".feature__label", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.6,
        scrollTrigger: {
            trigger: ".feature__label",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".feature__img-wrapper", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 2.4,
        scrollTrigger: {
            trigger: ".feature__img-wrapper",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })

    gsap.from(".work__title", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.6,
        scrollTrigger: {
            trigger: ".work__title",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__discription", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 2.8,
        scrollTrigger: {
            trigger: ".work__discription",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__project-title", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 3,
        scrollTrigger: {
            trigger: ".work__project-title",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__img-wrapper", {
        duration: 0.3,
        opacity: 0,
        scale: 0.7,
        ease: "power2.out",
        delay: 3.2,
        scrollTrigger: {
            trigger: ".work__img-wrapper",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__project-discription1", {
        duration: 0.3,
        y: 70,
        opacity: 0,
        ease: "power2.out",
        delay: 3.4,
        scrollTrigger: {
            trigger: ".work__project-discription1",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__project-discription2", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 3.6,
        scrollTrigger: {
            trigger: ".work__project-discription2",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".work__project-btn", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 3.8,
        scrollTrigger: {
            trigger: ".work__project-btn",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".contact__title", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 4,
        scrollTrigger: {
            trigger: ".contact__title",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".contact__discription", {
        duration: 0.3,
        opacity: 0,
        y: 70,
        ease: "power2.out",
        delay: 4.2,
        scrollTrigger: {
            trigger: ".contact__discription",
            start: "top 85%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".contact__btn", {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        ease: "power2.out",
        delay: 4.4,
        scrollTrigger: {
            trigger: ".contact__btn",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
    })
    gsap.from(".footer__title", {
        duration: 0.3,
        opacity: 0,
        scale: 0.3,
        ease: "power2.out",
        delay: 4.6,
        scrollTrigger: {
            trigger: ".footer__title",
            start: "top 95%",
            end: "top 50%",
            scrub: true,
        },
    })
    
}



export default initGSAP;
