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

const handleIntersectSkills = function (entries, observerRight) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("revealActiveSide")
            observerSkills.unobserve(entry.target)
        }
})
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".revealUp").forEach(function (revealContainer) {
    observer.observe(revealContainer)
})

const observerSkills = new IntersectionObserver(handleIntersectSkills, options)
document.querySelectorAll(".revealRight, .revealLeft").forEach(function (revealContainerSkills) {
    observer.observe(revealContainerSkills)
})
