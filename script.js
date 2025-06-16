const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("navigation");

if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        toggleBtn.classList.toggle("open");
    });
} else {
    console.warn("Menu toggle button or navigation element not found.");
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 3000; 

    if (!counters.length) {
        console.warn("No counter elements found.");
    }

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"), 10);

        if (isNaN(target) || target < 0) {
            console.warn(`Invalid or missing data-target for counter: ${counter.innerText}`);
            return;
        }

        const updateCount = () => {
            const count = parseInt(counter.innerText.replace(/,/g, ''), 10);
            const increment = target / (speed / 16);

            if (count < target) {
                const newCount = Math.min(Math.ceil(count + increment), target);
                counter.innerText = newCount.toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });

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
});

document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    const progress = entry.target.querySelector(".progress");
                    const percent = progress.getAttribute("data-percent");
                    progress.style.setProperty('--percent', `${percent}%`);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.5
        });

        skillItems.forEach(item => {
            observer.observe(item);
        });
    } else {
        
        skillItems.forEach(item => {
            item.classList.add("active");
            const progress = item.querySelector(".progress");
            const percent = progress.getAttribute("data-percent");
            progress.style.setProperty('--percent', `${percent}%`);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!'); // Replace with actual submission logic
            form.reset();
        });
    }
});