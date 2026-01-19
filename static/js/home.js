const bannerWrapper = document.querySelector(".Banner-Slider-Wrapper");
const banners = document.querySelectorAll(".Banner-Content-Link");
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const arrows = document.querySelectorAll(".Slider-Button");
const pagination = document.querySelector(".Banner-Slider-Pagination");
const curruntPage = pagination.firstElementChild;

let count = 1;

firstBanner.innerHTML = `
<a href="" class="Banner-Content-Link">
    1
    <img src="../../static/images/haetsal-jangteo-logo.svg" alt="">
</a>`;
lastBanner.innerHTML = `
<a href="" class="Banner-Content-Link">
    4
    <img src="../../static/images/haetsal-jangteo-logo.svg" alt="">
</a>`;
bannerWrapper.appendChild(firstBanner);
bannerWrapper.prepend(lastBanner);

bannerWrapper.style.transform = `translate(-766px)`;
curruntPage.innerHTML = `${count} `;

const autoSlide = () => {
    count++;
    bannerWrapper.style.transform = `translate(-${766 * count}px)`;
    bannerWrapper.style.transition = `transform 0.5s`;

    if (count === 5) {
        setTimeout(() => {
            bannerWrapper.style.transform = `translate(-766px)`;
            bannerWrapper.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }

    curruntPage.innerHTML = `${count} `;
};

let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = false;

arrows.forEach((arrow) => {
    const svg = arrow.firstElementChild;
    svg.addEventListener("click", (e) => {
        // 너무 많은 클릭 방지.
        if (arrowCheck) {
            return;
        }
        arrowCheck = true;
        clearInterval(autoSlideInterval);

        const arrowType = arrow.classList[1];
        if (arrowType === "Left") {
            count--;
            bannerWrapper.style.transform = `translate(-${766 * count}px)`;
            bannerWrapper.style.transition = `transform 0.5s`;

            if (count === 0) {
                setTimeout(() => {
                    bannerWrapper.style.transform = `translate(-3,064px)`;
                    bannerWrapper.style.transition = `transform 0s`;
                }, 500);
                count = 4;
            }

            curruntPage.innerHTML = `${count} `;
        } else {
            count++;
            bannerWrapper.style.transform = `translate(-${766 * count}px)`;
            bannerWrapper.style.transition = `transform 0.5s`;

            if (count === 5) {
                setTimeout(() => {
                    bannerWrapper.style.transform = `translate(-766px)`;
                    bannerWrapper.style.transition = `transform 0s`;
                }, 500);
                count = 1;
            }

            curruntPage.innerHTML = `${count} `;
        }

        autoSlideInterval = setInterval(autoSlide, 3000);
        setTimeout(() => {
            arrowCheck = false;
        }, 500);
    });
});
