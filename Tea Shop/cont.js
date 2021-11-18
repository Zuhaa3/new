const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })

      const tl = gsap.timeline({ defaults: { ease: "power1.in" } });

tl.fromTo(".row", { opacity: 0 }, { opacity: 1, duration: 1.7 });
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=2");
tl.fromTo(".yeet", { opacity: 0 }, { opacity: 1, duration: 1.7 });
