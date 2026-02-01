// input들
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const passChkInput = document.getElementById("passwordChk");
const phoneInput = document.getElementById("phone");
const nicknameInput = document.getElementById("nickname");

// 이메일 인증코드 버튼
const confirmBtn = document.querySelector(".JoinPage-EmailCheck");

// 이메일 인증코드 입력란
const confirmCodeInput = document.querySelector("div[name=emailChk]");

// 가입하기 버튼
const joinBtn = document.querySelector(".JoinPage-JoinButton");

// 회원가입 정보 담는 변수
let joinInfo = {
    email: "",
    password: "",
    phone: "",
    nickname: "",
};

// 확인용 값
let emailChk = false;
let passChk = false;

// 이메일 정규식
const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 이메일(아이디) 입력란
emailInput.addEventListener("keyup", (e) => {
    // 이메일 입력란 경고문
    const errorSpan = emailInput.nextElementSibling;

    if (regEmail.test(e.target.value)) {
        errorSpan.style.color = "rgb(99, 156, 99)";
        errorSpan.innerHTML = "올바른 이메일 형식입니다";

        confirmBtn.classList.remove("off");
    } else {
        emailInput.style.border = "1px solid rgb(255, 87, 87)";
        errorSpan.style.color = "rgb(255, 87, 87)";
        errorSpan.innerHTML = "올바르지 않은 이메일 형식입니다";
        return;
    }
});

confirmBtn.addEventListener("click", (e) => {
    // 여기에 인증코드 요청 관련 로직 작성

    // 성공하면 인증 코드 입력란 활성화
    confirmCodeInput.classList.remove("off");
    confirmBtn.innerHTML = "인증번호 재요청";
});

// 여기에 제한시간 안에 인증코드 넣는 로직 해야함
confirmCodeInput.addEventListener("click", (e) => {
    // 인증 코드 span
    const confrimSpan = confirmCodeInput.nextElementSibling;

    // 받아온 인증번호 값과 비교하고, 맞으면 span 변화
    emailInput.style.border = "1px solid rgb(99, 156, 99)";
    errorSpan.style.color = "rgb(99, 156, 99)";
    confrimSpan.innerHTML = "인증이 완료되었습니다.";

    joinInfo.email = emailInput.value;
});

// 비밀번호 정규식
const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,15}$/;

// 비밀번호 입력란
const passVisible = passInput.nextElementSibling.nextElementSibling;
let isPassVisible = false;

// 비밀번호 보이기 on/off
passVisible.addEventListener("click", () => {
    isPassVisible = !isPassVisible;
    passInput.type = isPassVisible ? "text" : "password";
    passVisible.firstElementChild.classList.toggle("off");
    passVisible.lastElementChild.classList.toggle("off");
});

passInput.addEventListener("keyup", (e) => {
    const errorSpan = passInput.nextElementSibling;
    const passChkDiv = document.querySelector("div[name=passwordChk]");

    if (e.target.value) passVisible.classList.remove("off");

    if (regPassword.test(e.target.value)) {
        passInput.style.border = "1px solid rgb(99, 156, 99)";
        errorSpan.style.color = "rgb(99, 156, 99)";
        errorSpan.innerHTML = "올바른 비밀번호 형식입니다.";
        passChkDiv.classList.remove("off");
    } else {
        passInput.style.border = "1px solid rgb(255, 87, 87)";
        errorSpan.style.color = "rgb(255, 87, 87)";
        errorSpan.innerHTML = "올바르지 않은 비밀번호 형식입니다.";
        passChkDiv.classList.add("off");
    }
});

// 비밀번호 확인 입력란
const passChkVisible = passChkInput.nextElementSibling.nextElementSibling;
let isPassChkVisible = false;

// 비밀번호 보이기 on/off
passChkVisible.addEventListener("click", () => {
    isPassChkVisible = !isPassChkVisible;
    passChkInput.type = isPassChkVisible ? "text" : "password";
    passChkVisible.firstElementChild.classList.toggle("off");
    passChkVisible.lastElementChild.classList.toggle("off");
});

passChkInput.addEventListener("keyup", (e) => {
    const errorSpan = passChkInput.nextElementSibling;
    const currentVal = e.target.value;

    if (currentVal) passChkVisible.classList.remove("off");

    if (regPassword.test(currentVal)) {
        if (passInput.value === currentVal) {
            passChkInput.style.border = "1px solid rgb(99, 156, 99)";
            errorSpan.style.color = "rgb(99, 156, 99)";
            errorSpan.innerHTML = "비밀번호가 일치합니다.";

            joinInfo.password = currentVal;
        } else {
            passChkInput.style.border = "1px solid rgb(255, 87, 87)";
            errorSpan.style.color = "rgb(255, 87, 87)";
            errorSpan.innerHTML = "비밀번호가 다릅니다.";
        }
    } else {
        passChkInput.style.border = "1px solid rgb(255, 87, 87)";
        errorSpan.style.color = "rgb(255, 87, 87)";
        errorSpan.innerHTML = "올바르지 않은 비밀번호 형식입니다.";
    }
});

// 각 입력란에 값이 없으면 눈이 사라짐
passInput.addEventListener("blur", (e) => {
    if (!e.target.value) passVisible.classList.add("off");
});
passChkInput.addEventListener("blur", (e) => {
    if (!e.target.value) passChkVisible.classList.add("off");
});

// 전화번호 정규식
const regPhone = /^0\d{1,2}\d{3,4}\d{4}$/;

// 연락처 입력란
phoneInput.addEventListener("keyup", (e) => {
    // 연락처 경고문
    const errorSpan = phoneInput.nextElementSibling;

    if (regPhone.test(e.target.value)) {
        phoneInput.style.border = "1px solid rgb(99, 156, 99)";
        errorSpan.style.color = "rgb(99, 156, 99)";
        errorSpan.innerHTML = "올바른 전화번호 형식입니다.";
    } else {
        phoneInput.style.border = "1px solid rgb(255, 87, 87)";
        errorSpan.style.color = "rgb(255, 87, 87)";
        errorSpan.innerHTML = "올바르지 않은 전회번호 형식입니다";
        return;
    }
});

// 이름 입력란
nicknameInput.addEventListener("keyup", (e) => {
    joinInfo.nickname = e.target.value;
});

// 가입하기 버튼 기능
joinBtn.addEventListener("click", (e) => {
    // 값이 모두 입력되었는지 검증하기
    const isInvalid = Object.keys(joinInfo).some((key) => {
        if (joinInfo[key] === "") {
            const fieldNames = {
                email: "이메일",
                password: "비밀번호",
                phone: "전화번호",
                nickname: "닉네임",
            };
            alert(`${fieldNames[key]} 항목이 완료되지 않았습니다.`);
            return true;
        }
        return false;
    });

    if (isInvalid) return;

    // 여기에 가입 요청 로직 만들어야함.

    // 성공하면 alert후 홈으로
    alert("회원가입에 성공했습니다.");
});
