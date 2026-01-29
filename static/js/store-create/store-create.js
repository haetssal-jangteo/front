// 1. #marketNameContainer의 변수들
const marketInput = document.querySelector("input[name=marketName]");
// form-wrap 은(인풋감싼 눈에보이는거, border변화 줄거임)
const marketInputForm = document.querySelector(".form-wrap");
// p태그(박스밑에 메세지뜨는거)
const marketInputMessage = document.querySelector("p.input-guide-message");
// 0/20 이런거 표시됨
const marketInputLength = document.querySelector("span.input-count-length");

// 2. #introContainer의 변수들
const marketIntro = document.querySelector("textarea[name=marketIntro");
const introForm = document.querySelector("#introContainer .intro-form-wrap");
const introMessage = document.querySelector("#introContainer p");
const introLength = document.querySelector("#introContainer .input-count-length");

// 1-1. 상점명 입력 이벤트
// 값 있으면: border도 검정으로, 메시지 숨기고 span 검정으로 n/20
marketInput.addEventListener("input", (e) => {
    marketInputLength.textContent = `${marketName.value.length}/20`;

    if (e.target.value) {
        marketInputForm.style.border = "1px solid rgb(13, 13, 13)";
        marketInputMessage.style.display = "none";
        marketInputLength.style.color = "rgb(84, 84, 84)";
    } else {
        marketInputForm.style.border = "1px solid rgb(229, 60, 65)";
        marketInputMessage.style.display = "block";
        marketInputLength.style.color = "rgb(229, 60, 65)";
    }
});
// 1-2. 상점명 입력 이벤트
// 인풋태그 벗어나면 테두리 변화
marketInput.addEventListener("blur", (e) => {
    if (e.target.value) {
        marketInputForm.style.border = "1px solid rgb(228, 228, 228)";
    }
});

// 2. 상점소개 입력 이벤트
