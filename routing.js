let routes = {
    "/dashboard": {
        path: "/html/dashboard.html",
        title: "Soft Ui Dashboard | dashboard",
        description: "Soft Ui Dashboard | dashboard",
        keywords: "Soft Ui Dashboard | dashboard",
    },
    "/tables": {
        path: "/html/tables.html",
        title: "Soft Ui Dashboard | tables",
        description: "Soft Ui Dashboard | tables",
        keywords: "Soft Ui Dashboard | tables",
    },
    "/billing": {
        path: "/html/billing.html",
        title: "Soft Ui Dashboard | billing",
        description: "Soft Ui Dashboard | billing",
        keywords: "Soft Ui Dashboard | billing",
    },
    "/profile": {
        path: "/html/profile.html",
        title: "Soft Ui Dashboard | profile",
        description: "Soft Ui Dashboard | profile",
        keywords: "Soft Ui Dashboard | profile",
    },
    "/rtl": {
        path: "/html/rtl.html",
        title: "Soft Ui Dashboard | rtl",
        description: "Soft Ui Dashboard | rtl",
        keywords: "Soft Ui Dashboard | rtl",
    },
    "/sign-in": {
        path: "/html/sign-in.html",
        title: "Soft Ui Dashboard | sign-in",
        description: "Soft Ui Dashboard | sign-in",
        keywords: "Soft Ui Dashboard | sign-in",
    },
    "/log-in": {
        path: "/html/log-in.html",
        title: "Soft Ui Dashboard | log-in",
        description: "Soft Ui Dashboard | log-in",
        keywords: "Soft Ui Dashboard | log-in",
    }
};

let app = document.getElementById("app");

async function loadPage(page) {
    let route = routes[page] || routes["/dashboard"];
    let response = await fetch(route.path);
    let html = await response.text();
    let tabs = await fetch("/html/tabs.html");
    if (response.ok) {
        if (page !== "/log-in" && page !== "/sign-in") {
            let tabsHtml = await tabs.text();
            document.querySelector("#app").innerHTML = tabsHtml;
            document.querySelector("#content").innerHTML = html;
        } else {
            console.log(html);
            document.querySelector("#app").innerHTML = html;
        }
    }
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", route.keywords);

}
function onNavClick(event) {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const path = event.target.getAttribute("href");
        history.pushState({}, "", path);
        loadPage(path);
    }
}

window.addEventListener("popstate", () => loadPage(location.pathname));
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", onNavClick);
    loadPage(location.pathname);
});
