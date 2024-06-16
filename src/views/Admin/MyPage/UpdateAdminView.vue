<template>
    <div class="p-3 p-md-4 p-xl-5 vh-100">
        <div class="">마이페이지 (운영진 / 강사진 / 교육생 ==> v-if로 조절)</div>
        <br>
        <div class="mb-5">
            <h1><b>회원정보 수정</b></h1>
            <br><br>
        </div>
        <div class="">
            <div class="row d-flex mb-3" style="border-bottom:4px solid #dcdcdc;">
                <div class="col">
                    <h2><b>회원정보</b></h2>
                </div>
                <div class="col text-end align-bottom">
                    <p style="font-size: 0.6em"><b style="color:red">*</b>필수입력사항</p>
                </div>
            </div>
            <!-- 회원정보수정 테이블 -->
            <table class="table">
                <tbody class="align-middle">
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center" style="width: 300px; ">아이디</th>
                        <td class="p-3">
                            <input type="text" class="form-control p-3" name="mid" id="mid" value="kosa12345"
                                style="width: 300px;" readonly />
                        </td>
                    </tr>
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center">이름
                        </th>
                        <td class="p-3">
                            <input type="text" class="form-control p-3" name="mid" id="mid" value="김성민"
                                style="width: 300px;" readonly />
                        </td>
                    </tr>
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center">비밀번호
                        </th>
                        <td class="p-3">
                            <div class="form-floating mb-1">
                                <input type="password" class="form-control" name="mpassword" id="mpassword" value=""
                                    placeholder="비밀번호" style="width: 300px;">
                                <label for="password" class="form-label">Password</label>
                            </div>
                            <p style="font-size: 0.7em">※ 비밀번호는 6~12자리의 영문자와 숫자조합으로만 작성하실 수 있습니다.</p>
                        </td>
                    </tr>
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center">비밀번호 확인
                        </th>
                        <td class="p-3">
                            <div class="form-floating mb-1">
                                <input type="password" class="form-control" name="mpassword" id="mpassword" value=""
                                    placeholder="비밀번호 확인" style="width: 300px;">
                                <label for="password" class="form-label">Password Check</label>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center">이메일</th>
                        <td class="p-3">
                            <div class="d-flex align-items-center mb-1">
                                <input type="text" class="form-control p-3 me-2" name="emailFront" id="emailFront"
                                    value="kosaspace" style="width: 150px;" />
                                <span> @ </span>
                                <input type="text" class="form-control p-3 ms-2" name="emailBack" id="emailBack"
                                    value="gmail.com" style="width: 150px;" />
                            </div>
                        </td>
                    </tr>
                    <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                        <th class="text-center">휴대폰번호
                        </th>
                        <td class="p-3">
                            <div class="d-flex align-items-center mb-1">
                                <!-- 휴대폰 앞 번호 -->
                                <input type="text" class="form-control p-3" name="mphonenumber1" id="mphonenumber1"
                                    value="010" style="width: 80px;" readonly>
                                <span class="ms-2 me-2">-</span>
                                <!-- 휴대폰 중간 번호 -->
                                <input type="text" class="form-control p-3" name="mphonenumber2" id="mphonenumber2"
                                    value="1234" style="width: 100px;" placeholder="Mid Number">
                                <span class="ms-2 me-2">-</span>
                                <!-- 휴대폰 뒷 번호 -->
                                <input type="text" class="form-control p-3" name="mphonenumber3" id="mphonenumber3"
                                    value="1234" style="width: 100px;" placeholder="End Number" required>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row mb-5">
                <div class="d-flex justify-content-center mb-2">
                    <button class="btn btn-outline-danger me-4">취소</button>
                    <button class="btn btn-outline-secondary">정보수정</button>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-outline-dark me-4">회원탈퇴</button>
                </div>
            </div>

            <!-- <div class="row" style="width: 80%;">
                <div class="col-3" style="border: 1px solid">
                    <p>아이디 : </p>
                </div>
                <div class="col-9">
                    znznfltm
                </div>

            </div> -->
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>