const bannerWrapper = document.querySelector(".Banner-Slider-Wrapper");
const banners = document.querySelectorAll(".Banner-Content-Link");
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const arrows = document.querySelectorAll(".Slider-Button");
const pagination = document.querySelector(".Banner-Slider-Pagination");
const curruntPage = pagination.firstElementChild;

// 찜 버튼
const likeButtons = document.querySelectorAll(".like-Button");

// ---------- 배너 부분 ----------
// 배너 순서용 값
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
curruntPage.style.marginRight = "3px";

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
                    bannerWrapper.style.transform = `translate(-3064px)`;
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
// ------------------------------------------

// ----- 찜 버튼 부분 -----------------------
// 찜 버튼 누르기 기능
likeButtons.forEach((like) => {
    like.addEventListener("click", (e) => {
        e.preventDefault();

        e.currentTarget.classList.toggle("is-active");

        // DB에서 찜 관련 값 받아와야 함.
        const isLiked = e.currentTarget.classList.contains("is-active");

        // 찜 추가 / 해제 로직
        if (!isLiked) {
            // 찜 추가 로직 넣어야 함
        } else {
            // 찜 해제 로직 넣어야 함
        }
    });
});
// -----------------------------------------

// 상품 받아오기
const getItems = async () => {};

// 상품 뿌리기
const fetchItems = (items) => {};

// 인기 카테고리 상품 뿌리기
const fetchBestCateItems = (items) => {};
