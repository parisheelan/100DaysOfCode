document.querySelector("button").addEventListener("click", function () {
    document.querySelector("button").classList.add("press");
    setTimeout(function () {
        document.querySelector("button").classList.remove("press");
    }, 100)
})



