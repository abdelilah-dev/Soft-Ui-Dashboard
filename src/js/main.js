import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/css/style.css'

let offcanvas;
let showOffcanvasBtn;

window.addEventListener('resize', () => {
    offcanvas = document.querySelector('.offcanvas');
    showOffcanvasBtn = document.querySelector(".show-offcanvas-btn");
    if (window.innerWidth < 992) {
        offcanvas.classList.remove('show');
        offcanvas.classList.remove('hiding');
    } else {
        offcanvas.classList.add('show');
        offcanvas.classList.remove('hiding');
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver((mutations, obs) => {
        const tabActive = document.getElementById(`${location.pathname.slice(1)}`);
        const allTabs = document.querySelectorAll(".offcanvas-body .navbar .nav-item");
        offcanvas = document.querySelector('.offcanvas');
        if (tabActive && allTabs.length && offcanvas) {
            allTabs.forEach(ele => ele.classList.remove("active"));
            tabActive.classList.add("active");
            if (window.innerWidth < 992) {
                offcanvas.classList.remove("show")
            } else offcanvas.classList.add("show");
            obs.disconnect();
        }

    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
})
