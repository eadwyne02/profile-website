const hamburger = document.getElementById('icon-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');


let isOpen = false;

function openMenu() {
  isOpen = true;
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  bar1.classList.add('rotate-45', 'translate-y-[6px]');
  bar2.classList.add('opacity-0', 'scale-x-0');
  bar3.classList.add('-rotate-45', '-translate-y-[6px]');
}

function closeMenu() {
  isOpen = false;
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  bar1.classList.remove('rotate-45', 'translate-y-[6px]');
  bar2.classList.remove('opacity-0', 'scale-x-0');
  bar3.classList.remove('-rotate-45', '-translate-y-[6px]');
}

hamburger.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

if (mobileMenu){
  mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});
function animateCount(id, target, duration = 1500, suffix = '') {
  const el = document.getElementById(id);

  if (!el) return;

  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    el.textContent = Math.floor(ease * target) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}
    setTimeout(() => {
      animateCount('projects-count', 24, 1800, '+');
      animateCount('exp-count',      3,  1200, '+');
      animateCount('clients-count', 12,  1600, '+');
    }, 800);

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
  const cards = document.querySelectorAll('.project-card');
  const observe = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove('opacity-0', 'translate-y-7');
        }, i * 100);
        observe.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => observe.observe(c));

  // Image scroll-on-hover
 document.querySelectorAll('.img-viewport').forEach(vp => {
  const img = vp.querySelector('.screenshot-img');
  let timer, isHovering = false;

  function getMaxScroll() {
    const naturalRatio = img.naturalHeight / img.naturalWidth;
    const renderedHeight = img.offsetWidth * naturalRatio;
    return renderedHeight - vp.offsetHeight;
  }

  function startScroll() {
    isHovering = true;
    const max = getMaxScroll();
    if (max <= 0) return;
    const dur = Math.max(70000, max * 5);
    img.classList.add('scrolling');
    img.style.transitionDuration = dur + 'ms';
    img.style.transform = `translateY(-${max}px)`;
    timer = setTimeout(() => {
      if (!isHovering) return;
      img.classList.remove('scrolling');
      img.style.transform = 'translateY(0)';
      void img.offsetHeight;
      setTimeout(() => { if (isHovering) startScroll(); }, 2000);
    }, dur);
  }

  function stopScroll() {
    isHovering = false;
    clearTimeout(timer);
    img.classList.remove('scrolling');
    img.style.transform = 'translateY(0)';
  }

  vp.addEventListener('mouseenter', startScroll);
  vp.addEventListener('mouseleave', stopScroll);
});

const sendBtn = document.getElementById("sendMessage");

if (sendBtn){
  sendBtn.addEventListener("click", function () {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("mail").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameErr = document.getElementById("nameErr");
  const mailErr = document.getElementById("mailErr");
  const messageErr = document.getElementById("messageErr");

  // Reset errors
  nameErr.textContent = "";
  mailErr.textContent = "";
  messageErr.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameErr.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    mailErr.textContent = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    mailErr.textContent = "Enter a valid email";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageErr.textContent = "Message cannot be empty";
    isValid = false;
  }

  // If valid → send to WhatsApp
  if (isValid) {

    const phoneNumber = "2349052870113"; // REMOVE 0, use country code

    const whatsappMessage = 
`Hello Edwin, 
My name is ${name}.

Email: ${email}

Message:
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

});
}

let lastScrollY = window.scrollY;
const contactBtn = document.getElementById("contactBtn");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY) > 10) {

    if (currentScrollY > lastScrollY) {
      contactBtn.classList.add("hide");
      contactBtn.classList.remove("show");
    } else {
      contactBtn.classList.add("show");
      contactBtn.classList.remove("hide");
    }

    // ✅ Now allowed
    lastScrollY = currentScrollY;
  }
});