// Timeline
    const ratio = 0.1;
    const option = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry){
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add("reveal-visible")
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, option)
    document.querySelectorAll(".box").forEach(function (r){
        observer.observe(r)
    })

