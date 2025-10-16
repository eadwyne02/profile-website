const bars = document.getElementById("bars")
const times = document.getElementById("times")
const navStorage = document.getElementById("nav-storage")
if (bars){
  bars.addEventListener("click", function(){
    bars.style.display = "none"
    times.style.display = "inline"
    const home = document.createElement("a")
    home.innerText="Home";
    home.href = "index.html"
    const about = document.createElement("a")
    about.innerText="About";
    about.href = "about.html"
    const project = document.createElement("a")
    project.innerText="Project";
    project.href = "project.html"
    const contact = document.createElement("a")
    contact.innerText="Contact";
    contact.href = "contact.html"
    navStorage.classList.add("nav-storage")
    navStorage.appendChild(contact)
    navStorage.appendChild(project)
    navStorage.appendChild(about)
    navStorage.appendChild(home)
})
}
if (times){
  times.addEventListener("click", function(){
    bars.style.display = "inline"
    times.style.display = "none"
    navStorage.innerHTML = ""
})
}
const fadeElements = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            root: null,
            threshold: 0.1 
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        
        fadeElements.forEach(element => {
            element.classList.add("visible");
        });
}
const text = "A frontend developer specialized in building high-quality websites.";
const speed = 70;
let i = 0;
function typeWriter() {
  const target = document.getElementById("typewriter");
  if (!target) return; // stop if the element doesn't exist on this page

  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
if (document.getElementById("typewriter")) {
  typeWriter();
}
const icons = document.querySelectorAll(".about-icons div i");
let index = 0;

function spinNext() {
  if (icons.length === 0) return;

  icons.forEach(icon => icon.classList.remove("spin"));
  icons[index].classList.add("spin");
  index = (index + 1) % icons.length;
  setTimeout(spinNext, 1500);
}

if (icons.length > 0) {
  spinNext();
}

let lastScroll = 0;
const header = document.querySelector("header");
const scrollThreshold = 5;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("hide");
    header.classList.add("show");
    return;
  }
  if (currentScroll - lastScroll > scrollThreshold) {
    header.classList.add("hide");
    header.classList.remove("show");
  } else if (lastScroll - currentScroll > scrollThreshold) {
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScroll = currentScroll;
});
const recentText = "Some of my works";
let x = 0;
const recentSpeed = 80;

function recentType() {
  const target = document.getElementById("recentWork");
  
  if (!target) return;

  if (x < recentText.length) {
    target.innerHTML += recentText.charAt(x);
    x++;
    setTimeout(recentType, recentSpeed);
  }
}
if (document.getElementById("recentWork")) {
  recentType();
}

const isTouch = window.matchMedia("(hover:none)").matches;

if (isTouch) {
  const cards = document.querySelectorAll('.screenshot');

  function updateActiveCard() {
    let middleY = window.innerHeight / 2;
    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(middleY - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });
    cards.forEach(card => {
      card.style.animationPlayState = 'paused';
    });
    if (closestCard) {
      closestCard.style.animationPlayState = 'running';
    }
  }
  window.addEventListener('scroll', updateActiveCard);
  window.addEventListener('resize', updateActiveCard);
  updateActiveCard();
}

const name = document.getElementById("name")
const mail = document.getElementById("mail")
const message = document.getElementById("message")
const nameErr = document.getElementById("nameErr")
const messageErr = document.getElementById("messageErr")
const mailErr = document.getElementById("mailErr")
const sendMessage = document.getElementById("sendMessage")
let isNameValid = false;
let isMailValid = false;
let isMessageValid = false;
if (name){
  function validateName() {
    name.addEventListener("blur", () =>{
    if (name.value==="" ) {
      nameErr.innerText = "Name field is empty"
      isNameValid = false;
      return;
    }
    else{
    nameErr.innerText = ""
    isNameValid = true;
  }
    })
}
validateName()
}
if (mail){
  function validateMail() {
    mail.addEventListener("blur", () =>{
    if (mail.value==="" ) {
      mailErr.innerText = "Name field is empty"
      isMailValid = false;
      return;
    }
    else if(!mail.value.trim().includes("@") || !mail.value.trim().endsWith(".com")){
      mailErr.innerText = "Invalid mail"
      isMailValid = false;
      return;
    }
    else{
    mailErr.innerText = ""
    isMailValid = true;
  }
    })
}
validateMail()
}
if(message){
  function validateMessage() {
  message.addEventListener("blur", ()=> {
    if (message.value === ""){
      messageErr.innerText = "Message is empty"
      isMessageValid = false;
      return;
    }
    else{
      messageErr.innerText = ""
      isMessageValid = true;
    }
  })
}
validateMessage()
}
if (sendMessage){
  sendMessage.addEventListener("click", function(e){
  e.preventDefault()
  if(isNameValid && isMailValid &isMessageValid){
    const phoneNumber = "2349052870113";
    const whatsappMessage = `Hello, my name is ${name.value}. My email is ${mail.value}. Here is my message: ${message.value}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank");
  }
  else{
    alert("Please check the fields")
    return;
  }
})
}
const Edwin = document.getElementById("Edwin")
if (Edwin){
  Edwin.addEventListener("click", function(){
  window.location.href = "index.html"
})
}
const Edwin1 = document.getElementById("Edwin1")
if (Edwin1){
  Edwin1.addEventListener("click", function(){
  window.location.href = "index.html"
})
}
const contactBtn =  document.getElementById("contact-btn")
if (contactBtn){
  contactBtn.addEventListener("click", function(){
  const phoneNumber = "2349052870113"
  const whatsappMessage = "Hello, my name is ___. "
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, "_blank");
})
}