// 메뉴바 페이지네이션 기능
document.addEventListener("DOMContentLoaded", (e) => {
    const menus = document.querySelectorAll(".Navigation-Span");
    const underbar = document.querySelector(".menu-bar");
    const currnetSpan = document.querySelector(".Navigation-Span.current");

    // 각 페이지의 div 들
    const profileDiv = document.getElementById("profile");
    const reviewDiv = document.getElementById("reviews");
    const likeItemDiv = document.getElementById("likeItems");
    const pendingItemDiv = document.getElementById("pending");
    const completeItemDiv = document.getElementById("complete");
    // 빈 컨탠츠 div
    const emptyContentDiv = document.getElementById("empty");

    // 후기 페이지 관련
    const reviewPagination = document.querySelector(".ReviewItem-Pagination");
    const reviewLinkButton = document.querySelector(".ReviewItem-LinkWrapper");
    const reviewCurrentPage = document.querySelectorAll(".Pagination-Current");

    const allSection = [
        profileDiv,
        reviewDiv,
        likeItemDiv,
        pendingItemDiv,
        completeItemDiv,
        reviewPagination,
        reviewLinkButton,
        emptyContentDiv,
    ];

    // 받아온 리뷰 값
    let reviews = true;
    let likeItems = true;
    let pendingItems = true;
    let completeItems = true;

    const moveUnderBar = (element) => {
        const left = element.offsetLeft;
        const width = element.offsetWidth;
        underbar.style.left = `${left}px`;
        underbar.style.width = `${width}px`;
    };

    if (currnetSpan) {
        moveUnderBar(currnetSpan);
    }

    // 메뉴를 누를 시, 해당 페이지를 표시.
    menus.forEach((menu, i) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();

            // 각 페이지 누를 때마다 표시되는 div 변경
            let spanName = menu.getAttribute("name");
            allSection.forEach((section) => section.classList.add("off"));

            switch (spanName) {
                case "profile":
                    profileDiv.classList.remove("off");
                    reviewDiv.classList.remove("off");
                    reviewLinkButton.classList.remove("off");
                    break;
                case "review":
                    if (reviews) {
                        reviewDiv.classList.remove("off");
                        reviewPagination.classList.remove("off");
                    } else {
                        emptyContentDiv.classList.remove("off");
                    }
                    break;
                case "likeItem":
                    if (likeItems) {
                        likeItemDiv.classList.remove("off");
                    } else {
                        emptyContentDiv.classList.remove("off");
                    }
                    break;
                case "pending":
                    if (pendingItems) {
                        pendingItemDiv.classList.remove("off");
                    } else {
                        emptyContentDiv.classList.remove("off");
                    }
                    break;
                case "complete":
                    if (completeItems) {
                        completeItemDiv.classList.remove("off");
                    } else {
                        emptyContentDiv.classList.remove("off");
                    }
                    break;
            }

            menus.forEach((m) => m.classList.remove("current"));
            menu.classList.add("current");

            moveUnderBar(menu);
        });
    });

    const prevBtn = reviewPagination.firstElementChild;
    const nextBtn = reviewPagination.lastElementChild;

    // 페이지 버튼을 누르면 해당 페이지로 스타일 변경
    reviewCurrentPage.forEach((current) => {
        current.addEventListener("click", (e) => {
            e.preventDefault();

            reviewCurrentPage.forEach((r) => r.classList.remove("active"));
            current.classList.add("active");
        });
    });

    // 찜한 상품의 찜 버튼 누르면 해제시키기
    const likeItemList = document.querySelectorAll(
        ".LikeItems-ItemCardWrapper",
    );
    const likeItemButtons = document.querySelectorAll(".like-Button");
    const modal = document.querySelector(".Modal-Container");

    likeItemButtons.forEach((like, i) => {
        like.addEventListener("click", (e) => {
            e.preventDefault();
            likeItemList[i].remove();

            modal.innerHTML = "해당 상품의 찜을 해제했습니다.";
            modal.classList.add("show");

            // 2. 3초 후에 서서히 사라지게 하기
            setTimeout(() => {
                modal.classList.remove("show");
            }, 3000); // 3000ms = 3초
        });
    });

    reviewLinkButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('.Navigation-Span[name="review"]')?.click();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // 로딩되면 프로필을 표시
    document.querySelector('.Navigation-Span[name="profile"]')?.click();
});

// 마이페이지 결제 중 상품 결제 취소 모달
// TODO

// 리뷰 가져와서 뿌리기
const fetchReivews = (reviews) => {};

// 유저 정보 가져오기
const getUser = async () => {};

// 해당 유저 리뷰들 가져오기
const getReivew = async () => {};

// 프로필 편집 버튼 누르면 페이지 이동
const modifyBtn = document.querySelector(".ModifyBtn-Button");
modifyBtn.addEventListener("click", (e) => {});
