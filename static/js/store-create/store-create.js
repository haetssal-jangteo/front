// 1. class=user-input 의 변수들
const marketInputs = document.querySelectorAll(".user-input");
// form-wrap 은(인풋감싼 눈에보이는거, border변화 줄거임)
const marketInputForm = document.querySelectorAll(".form-wrap");
// p태그(박스밑에 메세지뜨는거)
const marketInputMessage = document.querySelectorAll(".input-guide-message");
// 0/20 이런거 표시됨
const marketInputLength = document.querySelectorAll(".input-count-length");

// 2. 지역드롭다운 이벤트 변수들
const regionBoxes = document.querySelectorAll(".region-select-box");
const regionDdBoxes = document.querySelectorAll(".region-select-dropdown");

const firstRegionItems = document.querySelectorAll(".item-a");
const secondRegionItems = document.querySelectorAll(".item-b");

const regionSpans = document.querySelectorAll(".region-input-wrapper");

// 3. 주판매 카테고리 드롭다운 이벤트
const categoryBox = document.querySelector(".category-select-box");
const categoryItems = document.querySelectorAll(".item-category");

const categorySpan = document.querySelector(".category-input-wrapper");

// 4. 이미지(제품썸네일) 업로드 버튼 
const uploadBtn = document.querySelector(".upload-btn");

// 5. 등록버튼 눌렀을때 이벤트
const registrationButtons = document.querySelectorAll(".registration-button");

// 6. 사진등록하는 이벤트
const input = document.getElementById("imageUpload");
const thumbnail = document.querySelector(".profile-image-uploaded");




function giveRightStyle(inputForm, inputMmessage, inputLength) {
    inputForm.style.border = "1px solid rgb(13, 13, 13)";
    inputMmessage.style.display = "none";
    inputLength.style.color = "rgb(84, 84, 84)";
}

function giveWrongStyle(inputForm, inputMmessage, inputLength) {
    inputForm.style.border = "1px solid rgb(229, 60, 65)";
    inputMmessage.style.display = "block";
    inputLength.style.color = "rgb(229, 60, 65)";
}

marketInputs.forEach((marketInput, i) => {
    // 1-1. 상점명 입력/소개 입력 이벤트
    // 값 있으면: border도 검정으로, 메시지 숨기고 span 검정으로 n/20
    marketInput.addEventListener("input", (e) => {
        if(i === 0) {
            marketInputLength[i].textContent = `${marketInput.value.length}/20`;
        } else {
            marketInputLength[i].textContent = `${marketInput.value.length}/300`;
        }

        if(i === 0) {
            if (e.target.value) {
                giveRightStyle(marketInputForm[i], marketInputMessage[i], marketInputLength[i]);
            } else {
                giveWrongStyle(marketInputForm[i], marketInputMessage[i], marketInputLength[i]);
            }
        } else {
            if(e.target.value.length >= 10){
                giveRightStyle(marketInputForm[i], marketInputMessage[i], marketInputLength[i]);
            } else {
                giveWrongStyle(marketInputForm[i], marketInputMessage[i], marketInputLength[i]);
            }
        }
    });
    // 1-2. 상점명 입력/소개 입력 이벤트
    // 인풋태그 벗어나면 테두리 변화
    marketInput.addEventListener("blur", (e) => {
        if (i === 0) {
            if(e.target.value) {
                marketInputForm[i].style.border = "1px solid rgb(228, 228, 228)";
            } else {
                marketInputForm[i].style.border = "1px solid rgb(229, 60, 65)";
            }
        } else {
            if(e.target.value.length >= 10) {
                marketInputForm[i].style.border = "1px solid rgb(228, 228, 228)";
            } else {
                marketInputForm[i].style.border = "1px solid rgb(229, 60, 65)";
            }
        }
    });
});


// 2-1. 펼치고 닫고, 
// a를 펼치려고 클릭했을때, b가 펼쳐져있는걸 닫아버림
regionBoxes.forEach((regionBox) => {
    regionBox.addEventListener("click", (e) => {
        // 자식과 부모에 둘다 이벤트가 주어졌을때, 자식을 눌렀을때, 부모의 이벤트가 발생하는걸 방지
        if(e.target.closest(".region-select-dropdown")) {
            e.stopPropagation(); 
            return;
        }
        let condition = regionBox.classList.contains("clicked");
        regionBoxes.forEach((box) => {
            box.classList.remove("clicked");
        });
        regionBox.classList.toggle("clicked", !condition);
        // regionBox.classList.toggle("clicked");
    });
});

// 2-2. 첫번째 지역 드롭다운에서 요소 선택했을때
firstRegionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // 사용자가 선택한 요소내용 담기
        const inputBox = regionBoxes[0].querySelector("input");
        const text = item.textContent;
        inputBox.value = text;

        // 박스닫아야하니까 clicked 떼고
        regionBoxes[0].classList.remove("clicked");
        // 첫번째 dd 선택했으면 2차지역 선택가능하게 disabled 떼버리고
        regionBoxes[1].classList.remove("disabled");
        // 요소클릭(선택)했으면 selected줘서 테두리 스타일 변경되게끔 하고
        regionSpans[0].classList.add("selected");
    });
});

// 2-3. 두번째 지역 드롭다운에서 요소 선택했을때
secondRegionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // 사용자가 선택한 요소내용 담기
        const inputBox = regionBoxes[1].querySelector("input");
        const text = item.textContent;
        inputBox.value = text;

        // 박스닫아야하니까 clicked 떼고
        regionBoxes[1].classList.remove("clicked");
        // 요소클릭(선택)했으면 selected줘서 테두리 스타일 변경되게끔 하고
        regionSpans[1].classList.add("selected");
    });
});

// 3-1. 주판매 카테고리 드롭다운 이벤트
categoryBox.addEventListener("click", (e) => {
    if(e.target.closest(".category-select-dropdown")) {
        e.stopPropagation(); 
        return;
    }
    let condition = categoryBox.classList.contains("clicked");
        
    categoryBox.classList.toggle("clicked", !condition);
});

// 3-2. 주판매 드롭다운에서 요소 선택했을때
categoryItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // 사용자가 선택한 요소내용 담기
        const inputBox = categoryBox.querySelector("input");
        const text = item.textContent;
        inputBox.value = text;

        // 박스닫아야하니까 clicked 떼고
        categoryBox.classList.remove("clicked");
        // 요소클릭(선택)했으면 selected줘서 테두리 스타일 변경되게끔 하고
        categorySpan.classList.add("selected");
    }); 
});

// 4. 바깥쪽 클릭했을때 펼쳐진거 닫는 이벤트
document.addEventListener("click", (e) => {
    if(!e.target.closest(".category-select-dropdown") && !e.target.closest(".category-select-box")) {
        categoryBox.classList.remove("clicked");
    }
    if(!e.target.closest(".region-select-dropdown") && !e.target.closest(".region-select-box")) {
        regionBoxes.forEach((regionBox) => {
            regionBox.classList.remove("clicked");
        });
    }
});

// 5. 등록버튼들
registrationButtons.forEach((eachButton) => {
    clickChangeColor(eachButton);
});

function clickChangeColor(button) {
    button.addEventListener("mousedown", (e) => {
        button.style.background = "rgb(244, 244, 244)";
    });

    button.addEventListener("mouseup", (e) => {
        button.style.background = "white";
    });

    button.addEventListener("mouseleave", (e) => {
        button.style.background = "white";
    });
}

// 6. 사진 등록하기
input.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(file);
        reader.addEventListener("load", (e) => {
            const path = e.target.result;
            
            if(path.includes("image")) {
                thumbnail.style.backgroundImage = `url(${path})`;
            }
        });
});