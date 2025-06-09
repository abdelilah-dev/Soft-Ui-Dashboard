import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/css/style.css';
import Chart from 'chart.js/auto';
import { readUsedSize } from 'chart.js/helpers';

let offcanvas;
let showOffcanvasBtn;

window.addEventListener('resize', () => {
    offcanvas = document.querySelector('.offcanvas');
    showOffcanvasBtn = document.querySelector(".show-offcanvas-btn");
    if (window.innerWidth < 1200) {
        offcanvas.classList.remove('show');
        offcanvas.classList.remove('hiding');
    } else {
        offcanvas.classList.add('show');
        offcanvas.classList.remove('hiding');
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver((mutations, obs) => {
        const tabActive = document.getElementById(`${location.pathname.slice(1) ? location.pathname.slice(1) : "dashboard"}`);
        const allTabs = document.querySelectorAll(".offcanvas-body .navbar .nav-item");
        const offcanvas = document.querySelector('.offcanvas');
        if (allTabs) {
            allTabs.forEach(ele => ele.classList.remove("active"));
            tabActive.classList.add("active");
        }
        if (offcanvas) {
            if (window.innerWidth < 1200) {
                offcanvas.classList.remove("show")
            } else offcanvas.classList.add("show");
        }

        const userAvatar = document.querySelectorAll(".avatar-group .avatar");
        if (userAvatar) {
            userAvatar.forEach(ele => {
                ele.addEventListener("mouseenter", event => {
                    console.log("is don")
                    console.log(ele.dataset.title)
                })
            })
        }
        const chartBars = document.querySelector("#chart-bars");
        if (chartBars) {
            const ctx = chartBars.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: 'Sales',
                        data: [400, 200, 100, 250, 500, 120, 380, 470],
                        backgroundColor: 'white',
                        borderRadius: 10,
                        barThickness: 8,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: 'white', display: false },
                            grid: { display: true }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: { color: 'white' },
                            grid: {
                                display: false,
                                color: 'rgba(255,255,255,0.1)' // خطوط ناعمة جدًا
                            }
                        }
                    }
                }
            });
        }
        const chartLine = document.querySelector("#chart-line");
        if (chartLine) {
            const ctx = chartLine.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    datasets: [{
                        label: 'Mobile Apps',
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                        backgroundColor: 'white',
                        borderColor: '#cb0c9f',
                        borderRadius: 2,
                        borderWidth: 5,
                        barThickness: 8,
                        lineTension: 0.4,
                        borderWidth: 4,
                    }, {
                        label: 'WebSites',
                        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                        backgroundColor: 'white',
                        borderColor: '#453e76',
                        borderRadius: 0,
                        borderWidth: 5,
                        barThickness: 8,
                        lineTension: 0.4,
                        borderWidth: 4,
                    }]
                },
                options: {
                    hover: true,
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#71717a', display: true },
                            grid: { display: true }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#71717a' },
                            grid: {
                                display: false,
                                color: 'rgba(255,255,255,0.1)' // خطوط ناعمة جدًا
                            }
                        }
                    }
                }
            });
        }

        // disconnect observer
        if (tabActive && allTabs && offcanvas && chartLine && chartBars) obs.disconnect();
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
    const obsForSettingBar = new MutationObserver((mutations, obs) => {
        const settingBar = document.querySelector(".setting-bar");
        if (settingBar) {
            settingBar.addEventListener("click", event => {
                if (event.target.classList.contains("settingBar-open-btn") || event.target.parentElement.classList.contains("settingBar-open-btn")) {
                    settingBar.lastElementChild.classList.add("show");
                } else if (event.target.classList.contains("settingBar-close-btn") || event.target.parentElement.classList.contains("settingBar-close-btn")) {
                    settingBar.lastElementChild.classList.remove("show");
                }
            })
            obs.disconnect();
        }
    });
    obsForSettingBar.observe(document.body, {
        childList: true,
        subtree: true
    })
})
