const main = document.querySelector('.main');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const DownBtn = document.querySelector('.dnbtn')
const UpwnBtn = document.querySelector('.upbtn')

const images = document.querySelectorAll('.image');
const SlidesLength = document.querySelectorAll('.slide').length;
const slidegray = document.querySelector('.slidegray');

console.log(SlidesLength);

let activeSlideIndex = 0;

left.style.top = `-${(SlidesLength - 1) * 100}vh`;

UpwnBtn.addEventListener('click', () => {
    activeSlideIndex++
    const sliderHeight = right.clientHeight;
    const SlidesLength = document.querySelectorAll('.slide').length;
    if (activeSlideIndex > SlidesLength - 1) {
        activeSlideIndex = 0;
    }
    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

});
DownBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = right.clientHeight;
    console.log(sliderHeight)
    if (direction === 'down') {
        activeSlideIndex++
        const SlidesLength = document.querySelectorAll('.slide').length;
        if (activeSlideIndex > SlidesLength - 1) {
            activeSlideIndex = 0;
        }
    }
    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}