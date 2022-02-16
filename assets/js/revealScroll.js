const ratio = .35

const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("revealActiveUp")
            observer.unobserve(entry.target)
        }
})
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".revealUp").forEach(function (revealContainer) {
    observer.observe(revealContainer)
})



