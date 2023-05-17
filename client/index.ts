const root = document.querySelector("#root");
const loader = document.querySelector("#loader");

document.addEventListener("readystatechange", (event) => {
    if (document.readyState == "complete") {
        loader?.classList.remove("show");
        loader?.classList.add("hidden");
        root?.classList.remove("hidden");
        root?.classList.add("show");
    }
});
