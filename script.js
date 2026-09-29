const btn = document.getElementById("theme-btn");
const icon = btn.querySelector("i");

// Page khulte hi purani choice load karo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.15 });

document.querySelectorAll(".card, #contact-box").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {
    let current = "home";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
});