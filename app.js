
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            slides.forEach((slide) => {
                slide.classList.remove('active')
            })

            slide.classList.add('active')
        })
    }
}
slidesPlugin(0)


function slidesPlugin(activeSlide=1) {
    const slides = document.querySelectorAll ('.slide')
    slides[activeSlide].add("active")

    for (const slide of slides){
        slide.addEventListener('click', () => {
            slides.forEach((slide) => {
            slide.classList.remove("active")
            })
            slide.classList.add("active")
        })
    }
}

























