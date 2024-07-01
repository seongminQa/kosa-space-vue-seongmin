import axios from "axios";

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// AccessToken을 받고나서 다음 요청시 전달할 수 있도록 요청 헤더에 추가
// 로그인 성공 후 호출 됨.
function addAuthHeader(accessToken) {
    // common 객체에 동적 속성으로 Authorization 을 추가
    // accessToken은 헤더행의 속성이름 'Authorization'에 추가된다.
    axios.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
    console.log(axios.defaults.headers.common);
}

// 공통 요청 헤더에서 Authorization 헤더 삭제
// 로그아웃시 호출 됨.
function removeAuthHeader() {
    // common 객체의 Authorization 속성을 삭제 (속성을 삭제할 경우 delete를 사용)
    delete axios.defaults.headers.common["Authorization"];
    console.log(axios.defaults.headers.common);
}

export default {
    addAuthHeader,
    removeAuthHeader
}