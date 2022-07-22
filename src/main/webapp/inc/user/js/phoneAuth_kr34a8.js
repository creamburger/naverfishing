var sendFlag = false;

function checkBrowser() {
    var Browser = {
        chk : navigator.userAgent.toLowerCase()
    };

    Browser = {
        ie7 : Browser.chk.indexOf('msie 7') != -1,
        ie8 : Browser.chk.indexOf('msie 8') != -1,
        ie9 : Browser.chk.indexOf('msie 9') != -1,
        ipad : Browser.chk.indexOf('ipad') != -1,
        iphone : Browser.chk.indexOf('iphone') != -1,
        firefox : Browser.chk.indexOf('firefox') != -1,
        android : Browser.chk.indexOf('android') != -1 || (navigator.userAgentData && navigator.userAgentData.platform.indexOf('Android') !== -1)
    };

    if (Browser.ie7) {
        document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className + " ie7";
    } else if (Browser.ie8) {
        document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className + " ie8";
    } else if (Browser.ie9) {
        document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className + " ie9";
    } else if (Browser.firefox) {
        document.documentElement.style.overflow='scroll';
    } else if (Browser.ipad || Browser.iphone || Browser.android || (navigator.userAgentData && navigator.userAgentData.mobile)) {
        document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className + " t";
        document.getElementsByTagName("link")[1].href = "";
    }

}

function showTerm(termcd){
    var url = "";
    if(termcd == "1"){
        url = "/user2/common/terms/terms?m=viewPersonalInfoTerms";
    }else if(termcd == "2"){
        url = "/user2/common/terms/terms?m=viewUniqInfoTerms";
    }else if(termcd == "3"){
        url = "/user2/common/terms/terms?m=viewCellPhoneCarriersTerms";
    }else if(termcd == "4"){
        url = "/user2/common/terms/terms?m=viewServiceTerms";
    }else if(termcd == "5"){
        url = "/user2/common/terms/terms?m=viewNaverTermsV2";
    }else if(termcd == "6"){
        url = "https://nid.naver.com/user2/common/terms/terms?m=viewNaverTermsForJuniver ";
    }
    window.open(url,"agree",'width=650, height=750, resizable=1, status=0, titlebar=0, toolbar=0');
}

function window_pop_resize(w,h) {
    document.body.style.overflow='auto';
    document.body.scroll = "auto";

    var clintAgent = navigator.userAgent;
    try{
        if ( clintAgent.indexOf("MSIE") != -1 ) {
            window.resizeTo(w+10,h+60);
        } else {
            window.resizeBy(w-window.innerWidth, h-window.innerHeight);
        }
    }catch (e) {
    }

}
function setMobileCd2(cd) {

    var mobileCd = document.getElementById("mobile_cd").value;

    if (mobileCd == "MVNO") {
        document.getElementById('mvno_div').className="join_row join_com";
        document.getElementById('mvno_div').style.display = 'block';
    } else {
        document.getElementById('mvno_div').className="join_row join_com blind";
        document.getElementById('mvno_div').style.display = 'none';
    }
}

function setMobileCd2Mobile(cd) {
    var mobileCd = document.getElementById("mobile_cd").value;

    if (mobileCd == "MVNO") {
        document.getElementById('mvno_div').className="join_row join_com";
        document.getElementById('mvno_div').style.display = 'block';
    } else {
        document.getElementById('mvno_div').className="join_row join_com blind";
        document.getElementById('mvno_div').style.display = 'none';
    }
}

function checkSex(event, doFlag) {
    var man = document.getElementById("man");
    var woman = document.getElementById("woman");
    var oMsg = document.getElementById("sex_msg");
    var sexDiv = document.getElementById("sexDiv");
    var mobileYn = document.getElementById("mobileYn");

    if (man.checked == false && woman.checked == false) {
        oMsg.style.display = "block";
        oMsg.className = "error";
        if(mobileYn.value == "Y"){
            oMsg.innerHTML = "필수 정보입니다.";
        }else{
            oMsg.innerHTML = "성별을 선택해 주세요.";
        }

        return false;
    }else{
        oMsg.style.display = "none";
        oMsg.innerHTML = "";
    }

    if (man.checked) {
        document.getElementById("manLb").className = "jender on";
        document.getElementById("womanLb").className = "jender";
        document.fm.sex_cd.value = "M";
    }
    if (woman.checked) {
        document.getElementById("manLb").className = "jender";
        document.getElementById("womanLb").className = "jender on";
        document.fm.sex_cd.value = "F";
    }

    return true;
}

function checkMvno(telecom) {
    if (telecom == "SKT") {
        document.getElementById("mvno_sk").checked = true;
        document.fm.mobile_cd_mvno.value = "SKR";
        document.getElementById("mvno_s_sk").className = "jender on";
        document.getElementById("mvno_s_kt").className = "jender ";
        document.getElementById("mvno_s_lg").className = "jender ";

    } else if(telecom == "KTF") {
        document.getElementById("mvno_kt").checked = true;
        document.fm.mobile_cd_mvno.value = "KTR";
        document.getElementById("mvno_s_sk").className = "jender ";
        document.getElementById("mvno_s_kt").className = "jender on";
        document.getElementById("mvno_s_lg").className = "jender ";

    } else if(telecom == "LGT") {
        document.getElementById("mvno_lg").checked = true;
        document.fm.mobile_cd_mvno.value = "LGR";
        document.getElementById("mvno_s_sk").className = "jender ";
        document.getElementById("mvno_s_kt").className = "jender ";
        document.getElementById("mvno_s_lg").className = "jender on";
    } else if(telecom == "CLOSE") {
        return true;
    }else{
        document.getElementById("mvno_sk").checked = true;
        document.getElementById("mvno_s_sk").className = "jender on";
        document.getElementById("mvno_s_kt").className = "jender ";
        document.getElementById("mvno_s_lg").className = "jender ";
    }

    return true;
}

function showMvnoLayer(mvnoCd) {
    var flag = document.fm.mvnoLayerFlag.value;

    if (flag =="OFF") {
        document.getElementById('mvno_layer').style.display="block";
        document.fm.mvnoLayerFlag.value = "ON";
    } else {
        checkMvno(mvnoCd);
        //document.getElementById('mvno_sk').value = mvnoCd;
        document.getElementById('mvno_layer').style.display="none";
        document.fm.mvnoLayerFlag.value = "OFF";
    }
}

function checkAgree(agreeType){
    var oMsg = document.getElementById("chk_agree_msg");

    var agreeYn_1 = document.getElementById("chk_agree3_1");
    var agreeYn_2 = document.getElementById("chk_agree3_2");
    var agreeYn_3 = document.getElementById("chk_agree3_3");
    var agreeYn_4 = document.getElementById("chk_agree3_4");
    var agreeYn_5 = document.getElementById("chk_agree3_5");

    if (agreeYn_1.checked == false || agreeYn_2.checked == false || agreeYn_3.checked == false || agreeYn_4.checked == false || agreeYn_5.checked == false  ) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "고객님의 소중한 개인정보 처리에 대한 동의가 필요합니다.";

        return false;
    }else{
        oMsg.style.display = "none";
        return true;
    }

    return true;
}

function checkAgree1(){
    var agreeYn = document.getElementById("chk_agree1");
    var agreeYnLb = document.getElementById("chk_agree1Lb");

    if (agreeYn.checked) {
        agreeYnLb.className = "on";
        agreeYnLb.setAttribute("class", "on");
    }else{
        agreeYnLb.className = "";
        agreeYnLb.setAttribute("class", "");
    }

    return true;
}

function checkAgree2() {
    var agreeYn = document.getElementById("chk_agree2");
    var agreeYnLb = document.getElementById("chk_agree2Lb");

    if (agreeYn.checked) {
        agreeYnLb.className = "on";
        agreeYnLb.setAttribute("class", "on");
    }else{
        agreeYnLb.className = "";
        agreeYnLb.setAttribute("class", "");
    }

    return true;
}

function checkAgree3() {
    var agreeYn = document.getElementById("chk_agree3");
    var agreeYnLb = document.getElementById("chk_agree3Lb");

    var agreeYn_1 = document.getElementById("chk_agree3_1");
    var agreeYnLb_1 = document.getElementById("chk_agree3_1Lb");
    var agreeYn_2 = document.getElementById("chk_agree3_2");
    var agreeYnLb_2 = document.getElementById("chk_agree3_2Lb");
    var agreeYn_3 = document.getElementById("chk_agree3_3");
    var agreeYnLb_3 = document.getElementById("chk_agree3_3Lb");
    var agreeYn_4 = document.getElementById("chk_agree3_4");
    var agreeYnLb_4 = document.getElementById("chk_agree3_4Lb");
    var agreeYn_5 = document.getElementById("chk_agree3_5");
    var agreeYnLb_5 = document.getElementById("chk_agree3_5Lb");

    if (agreeYn.checked) {
        agreeYnLb.className = "on";
        agreeYnLb.setAttribute("class", "on");
        agreeYn_1.checked = true;
        agreeYnLb_1.className = "on";
        agreeYnLb_1.setAttribute("class", "on");
        agreeYn_2.checked = true;
        agreeYnLb_2.className = "on";
        agreeYnLb_2.setAttribute("class", "on");
        agreeYn_3.checked = true;
        agreeYnLb_3.className = "on";
        agreeYnLb_3.setAttribute("class", "on");
        agreeYn_4.checked = true;
        agreeYnLb_4.className = "on";
        agreeYnLb_4.setAttribute("class", "on");
        agreeYn_5.checked = true;
        agreeYnLb_5.className = "on";
        agreeYnLb_5.setAttribute("class", "on");


    }else{
        agreeYnLb.className = "";
        agreeYnLb.setAttribute("class", "");
        agreeYn_1.checked = false;
        agreeYnLb_1.className = "";
        agreeYnLb_1.setAttribute("class", "");
        agreeYn_2.checked = false;
        agreeYnLb_2.className = "";
        agreeYnLb_2.setAttribute("class", "");
        agreeYn_3.checked = false;
        agreeYnLb_3.className = "";
        agreeYnLb_3.setAttribute("class", "");
        agreeYn_4.checked = false;
        agreeYnLb_4.className = "";
        agreeYnLb_4.setAttribute("class", "");
        agreeYn_5.checked = false;
        agreeYnLb_5.className = "";
        agreeYnLb_5.setAttribute("class", "");
    }

    return true;
}

function checkAgree3Sub() {
    var agreeYn = document.getElementById("chk_agree3");
    var agreeYnLb = document.getElementById("chk_agree3Lb");

    var agreeYn_1 = document.getElementById("chk_agree3_1");
    var agreeYnLb_1 = document.getElementById("chk_agree3_1Lb");
    var agreeYn_2 = document.getElementById("chk_agree3_2");
    var agreeYnLb_2 = document.getElementById("chk_agree3_2Lb");
    var agreeYn_3 = document.getElementById("chk_agree3_3");
    var agreeYnLb_3 = document.getElementById("chk_agree3_3Lb");
    var agreeYn_4 = document.getElementById("chk_agree3_4");
    var agreeYnLb_4 = document.getElementById("chk_agree3_4Lb");
    var agreeYn_5 = document.getElementById("chk_agree3_5");
    var agreeYnLb_5 = document.getElementById("chk_agree3_5Lb");

    if (agreeYn_1.checked) {
        agreeYnLb_1.className = "on";
        agreeYnLb_1.setAttribute("class", "on");
    }else{
        agreeYnLb_1.className = "";
        agreeYnLb_1.setAttribute("class", "");
    }
    if (agreeYn_2.checked) {
        agreeYnLb_2.className = "on";
        agreeYnLb_2.setAttribute("class", "on");
    }else{
        agreeYnLb_2.className = "";
        agreeYnLb_2.setAttribute("class", "");
    }
    if (agreeYn_3.checked) {
        agreeYnLb_3.className = "on";
        agreeYnLb_3.setAttribute("class", "on");
    }else{
        agreeYnLb_3.className = "";
        agreeYnLb_3.setAttribute("class", "");
    }
    if (agreeYn_4.checked) {
        agreeYnLb_4.className = "on";
        agreeYnLb_4.setAttribute("class", "on");
    }else{
        agreeYnLb_4.className = "";
        agreeYnLb_4.setAttribute("class", "");
    }
    if (agreeYn_5.checked) {
        agreeYnLb_5.className = "on";
        agreeYnLb_5.setAttribute("class", "on");
    }else{
        agreeYnLb_5.className = "";
        agreeYnLb_5.setAttribute("class", "");
    }

    if (agreeYn_1.checked && agreeYn_2.checked && agreeYn_3.checked && agreeYn_4.checked && agreeYn_5.checked) {
        agreeYn.checked = true;
        agreeYnLb.className = "on";
        agreeYnLb.setAttribute("class", "on");

    }else if(!agreeYn_1.checked || !agreeYn_2.checked || !agreeYn_3.checked || !agreeYn_4.checked || !agreeYn_5.checked){
        agreeYn.checked = false;
        agreeYnLb.className = "";
        agreeYnLb.setAttribute("class", "");
    }

    return true;
}

function toggleLabel(labelId, inputId, mode) {
    var oLabel = document.getElementById(labelId);
    var oInput = document.getElementById(inputId);
    if (mode == "in") {
        oLabel.className = "lbl focus";
    } else {
        if (oInput.value != "") {
            oLabel.className = "lbl focus";
        } else {
            oLabel.className = "lbl";
        }
    }
}

function checkName(event) {
    toggleLabel('nm_lbl', 'nm', 'out');

    var nm = document.getElementById("nm").value;
    var oMsg = document.getElementById("nm_msg");

    if (nm == "") {
        oMsg.style.display = "block";
        oMsg.innerHTML = "필수 정보입니다.";
        return false;
    }

    var nonchar = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\- ]/gi;
    if (nonchar.test(nm)) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "한글과 영문 대/소문자를 사용해 주세요. (특수기호 사용 불가)";
        return false;
    }

    if (true) {
        oMsg.style.display = "none";
        return true;
    }

    return true;
}

function checkBirthday(event) {
    toggleLabel('birth_year_lbl', 'birth_year', 'out');
    toggleLabel('birth_day_lbl', 'birth_day', 'out');

    var birthday = document.getElementById("birth_date").value;
    var yy = document.getElementById("birth_year").value;
    var s = document.getElementById("birth_month");
    var mm = s.options[s.selectedIndex].value;

    var dd = document.getElementById("birth_day").value;
    var oMsg = document.getElementById("birth_day_msg");

    if (yy == "" && mm == "" && dd == "") {
        oMsg.style.display = "block";
        oMsg.innerHTML = "필수 정보입니다.";
        return false;
    }

    if (yy == "" || mm == "" || dd == "") {
        oMsg.style.display = "block";
        oMsg.innerHTML = "생년월일을 정확히 입력해주세요.";
        return false;
    }

    if (mm.length == 1) {
        mm = "0" + mm;
    }
    if (dd.length == 1) {
        dd = "0" + dd;
    }
    birthday = yy + mm + dd;


    if (!isValidDate(birthday) || birthday.indexOf('e') != -1 || birthday.indexOf('E') != -1) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "생년월일을 다시 확인해주세요.";
        return false;
    }
    document.getElementById("birth_date").value = birthday;

    var age = calcAge(birthday);
    if (age < 0) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "미래에서 오셨군요. ^^";
        return false;
    } else if (age >= 100) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "정말이세요?";
        return false;
    } else {
        oMsg.style.display = "none";
        return true;
    }

    return true;
}

function trimStr(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function checkBirthday(event, doFlag) {
    toggleLabel('birth_year_lbl', 'birth_year', 'out');
    toggleLabel('birth_day_lbl', 'birth_day', 'out');

    document.getElementById("birth_year").value = trimStr(document.getElementById("birth_year").value);
    document.getElementById("birth_day").value = trimStr(document.getElementById("birth_day").value);

    var birthday = document.getElementById("birth_date").value;
    var yy = document.getElementById("birth_year").value;
    var s = document.getElementById("birth_month");
    var mm = s.options[s.selectedIndex].value;
    var dd = document.getElementById("birth_day").value;
    var oMsg = document.getElementById("birth_day_msg");

    if (yy == "" && mm == "" && dd == "") {
        oMsg.style.display = "block";
        oMsg.innerHTML = "필수 정보입니다.";
        return false;
    }

    if (yy.length != 4) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        return false;
    }

    if (s.selectedIndex == 0) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "태어난 월을 선택하세요.";
        return false;
    }

    if (dd.length == 0) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "태어난 날짜를 정확하게 입력하세요.";
        return false;
    }

    if (yy == "" || mm == "" || dd == "") {
        oMsg.style.display = "block";
        oMsg.innerHTML = "생년월일을 정확히 입력해주세요.";
        return false;
    }

    if (mm.length == 1) {
        mm = "0" + mm;
    }
    if (dd.length == 1) {
        dd = "0" + dd;
    }
    birthday = yy + mm + dd;


    if (!isValidDate(birthday) || birthday.indexOf('e') != -1 || birthday.indexOf('E') != -1) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "생년월일을 다시 확인해주세요.";
        return false;
    }
    document.getElementById("birth_date").value = birthday;

    var age = calcAge(birthday);
    if (age < 0) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "미래에서 오셨군요. ^^";
        return false;
    } else if (age >= 100) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "정말이세요?";
        return false;
    } else {
        oMsg.style.display = "none";
        return true;
    }

    return true;
}



function isValidDate(param) {
    try {
        param = param.replace(/-/g, '');

        // 자리수가 맞지않을때
        if (isNaN(param) || param.length != 8) {
            return false;
        }

        var year = Number(param.substring(0, 4));
        var month = Number(param.substring(4, 6));
        var day = Number(param.substring(6, 8));

        if (month < 1 || month > 12) {
            return false;
        }

        var maxDaysInMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        var maxDay = maxDaysInMonth[month - 1];

        // 윤년 체크
        if (month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
            maxDay = 29;
        }

        if (day <= 0 || day > maxDay) {
            return false;
        }
        return true;

    } catch (err) {
        return false;
    }
    ;
}

function calcAge(birth) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    if (month < 10){
        month = '0' + month;
    }
    if (day < 10){
        day = '0' + day;
    }
    var monthDay = month + day;

    birth = birth.replace('-', '').replace('-', '');
    var birthdayy = birth.substr(0, 4);
    var birthdaymd = birth.substr(4, 4);

    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    return age;
}

function checkPhoneNo(event) {
    toggleLabel('phone_no_lbl', 'phone_no', 'out');

    var phone_no = document.getElementById("phone_no").value;
    var oMsg = document.getElementById("phone_no_msg");
    var old_phone_no = document.fm.old_phone_no.value;

    if (phone_no == "") {
        oMsg.style.display = "block";
        oMsg.className = "error";
        oMsg.innerHTML = "필수 정보입니다.";
        return false;
    }

    if (phone_no.length > 12 || phone_no.length < 10) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "전화번호를 확인하세요!";
        return false;
    }


    if( old_phone_no != "" && old_phone_no != phone_no) {
        oMsg.style.display = "block";
        oMsg.innerHTML = "인증을 다시 수행해 주세요.";

        document.getElementById("auth_no").value = "";
        document.fm.old_phone_no.value = "";
        document.fm.old_auth_no.value = "";
        document.fm.authFlag.value = "N";

        toggleLabel('auth_no_lbl','auth_no','out');
        checkAuthno('check');
        return false;
    }


    if (true) {
        oMsg.style.display = "none";
        return true;
    }

    return true;
}

function checkAuthno(event) {
    toggleLabel('auth_no_lbl','auth_no','out');

    var auth_no = document.getElementById("auth_no").value;
    var oMsg = document.getElementById("auth_no_msg");
    var old_auth_no = document.fm.old_auth_no.value;

    if(document.fm.authFlag.value != "F"){
        if (auth_no == "" && document.fm.authFlag.value == "Y") {
            oMsg.style.display = "block";
            oMsg.className = "error";
            oMsg.innerHTML = "인증번호를 입력해 주세요.";
            return false;
        }

        if (auth_no == "" || document.fm.authFlag.value != "Y") {
            oMsg.style.display = "block";
            oMsg.className = "error";
            oMsg.innerHTML = "인증이 필요합니다.";
            return false;
        }

        if( old_auth_no != "" && document.fm.authFlag.value == "Y" ) {
            oMsg.style.display = "block";
            oMsg.className = "error gm";
            oMsg.innerHTML = "인증된 상태입니다.";
            return true;
        }
    }

    if (true) {
        oMsg.style.display = "none";
        return true;
    }

    return true;
}

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function sendSmsButton(checkTp) {

    var mobno = document.getElementById("phone_no").value;
    var key = document.fm.token.value;
    var keyName = document.fm.token_name.value;
    var oMsg = document.getElementById("phone_no_msg");

    var nm = document.fm.nm.value;
    var sex = document.fm.sex_cd.value ;
    var mobile_cd = document.fm.mobile_cd.value ;
    var birth_date = document.fm.birth_date.value;
    var foreignYn = document.fm.foreignYn.value;
    if(checkTp == 'undefined' || checkTp == null){
        checkTp = "";
    }

    //알뜰폰 처리
    if(mobile_cd =="MVNO"){
        mobile_cd = document.fm.mobile_cd_mvno.value;
    }

    mobno = mobno.split("-").join("");
    document.fm.authFlag.value = "N";

    //입력값 확인
    var res = true;
    if (checkName('check') != true) {
        res = false;
    }

    if (checkSex('check') != true) {
        res = false;
    }

    if (checkBirthday('check') != true) {
        res = false;
    }
    if (checkPhoneNo('check') != true) {
        res = false;
    }
    if (checkAgree('') != true) {
        res = false;
    }
    if (res == false) {
        return;
    }

    if(sendFlag == true){
        return false;
    }else{
        sendFlag = true;
    }

    try {
        var xmlhttp = getXmlHttp();
        xmlhttp.open("GET", document.fm.authUrl.value + "/checkMemberPhoneAuth?m=send" + checkTp + "&phone_no=" + mobno + "&mobile_cd=" + mobile_cd + "&" + keyName +"=" + key + "&sex=" + sex + "&birth_date=" + birth_date + "&foreignYn=" + foreignYn + "&nm=" + escape(encodeURIComponent(nm)));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                var result = xmlhttp.responseText;
                oMsg.style.display = "block";
                sendFlag = false;

                if (result == "success") {
                    oMsg.className = "error gm";
                    oMsg.innerHTML = "인증번호를 발송했습니다. 인증 문자가 오지 않으면 이름/생년월일/통신사/전화번호 등이 정확한지 또는 스팸문자함을 확인해 주세요.";
                    document.fm.authFlag.value = "Y";
                    document.getElementById("auth_no").value = "";
                    document.getElementById("auth_no_msg").style.display = "none";

                    return true;
                } else if (result == "error") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증오류, 창을 닫고 처음부터 다시 시작해 주세요.";
                    return false;
                } else if (result == "countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "이용 횟수가 초과되었습니다. 잠시 후에 다시  이용해 주세요.";
                }  else if (result == "soyu_countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증 가능 횟수가 초과되었습니다.";
                } else if (result == "restart") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증만료, 창을 닫고 처음부터 다시 시작해 주세요.";
                } else if (result == "Dur") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "동일한 인증수단은 계속해서 사용할 수 없습니다.";
                    return false;
                } else if (result == "systemCheck") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "통신사의 시스템작업으로 본인인증이 실패하였습니다. 잠시 후 다시 시도해 주세요.";
                    return false;
                } else {
                    oMsg.className = "error";
                    oMsg.innerHTML = "전화번호를 다시 확인해주세요." ;
                    return false;
                }

            }
        };
        xmlhttp.send(null);
    } catch (e) {
        sendFlag = false;
        if (window.bridgeGotTime) {
            throw e;
        }
    }

    return false;
}

function checkAuthnoButton(checkTp) {
    var authno = document.getElementById("auth_no").value;
    var oMsg = document.getElementById("auth_no_msg");
    var mobno = document.getElementById("phone_no").value;
    var key = document.fm.token.value;
    var keyName = document.fm.token_name.value;
    var nm = document.fm.nm.value;
    var sex = document.fm.sex_cd.value ;
    var mobile_cd = document.fm.mobile_cd.value ;
    var birth_date = document.fm.birth_date.value;
    var foreignYn = document.fm.foreignYn.value;
    //var authno = document.fm.auth_no.value;
    var authFlag = document.fm.authFlag.value;
    if(checkTp == 'undefined' || checkTp == null){
        checkTp = "";
    }
    mobno = mobno.split("-").join("");

    //알뜰폰 처리
    if(mobile_cd =="MVNO"){
        mobile_cd = document.fm.mobile_cd_mvno.value;
    }

    if (authFlag != "Y"){
        oMsg.style.display = "block";
        oMsg.className = "error";
        oMsg.innerHTML = "먼저 인증을 진행해주세요.";
        return false;
    }

    if( document.getElementById("chk_agree2") == null || typeof(document.getElementById("chk_agree2")) == "undefined" ) {

        var chkAgree2 = "";
    }else{
        var agreeYn = document.getElementById("chk_agree2");
        if (agreeYn.checked) {
            var chkAgree2 = "on";
        }else{
            var chkAgree2 = "";
        }
    }

    try {
        var xmlhttp = getXmlHttp();
        xmlhttp.open("GET", document.fm.authUrl.value + "/checkMemberPhoneAuth?m=check" + checkTp + "&phone_no=" + mobno + "&mobile_cd=" + mobile_cd + "&" + keyName +"=" + key + "&sex=" + sex + "&birth_date=" + birth_date + "&foreignYn=" + foreignYn + "&authno=" + authno + "&chkAgree2=" + chkAgree2 + "&nm=" + escape(encodeURIComponent(nm)));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                var result = xmlhttp.responseText;

                oMsg.style.display = "block";
                if (result == "success") {
                    oMsg.className = "error gm";
                    oMsg.innerHTML = "인증이 성공했습니다.";
                    document.fm.authFlag.value = "F";
                    var oMsg2 = document.getElementById("chk_agree_msg");
                    oMsg2.style.display = "none";
                    oMsg2.innerHTML = "";

                    document.fm.submit();
                    return true;
                } else if (result == "countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "횟수초과, 인증창을 닫고 처음부터 다시 진행해주세요.";
                    return false;
                } else if (result == "soyu_countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증 가능 횟수가 초과되었습니다.";
                } else if (result == "dimismatch") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "회원님 본인 명의의 휴대폰을 통해서만 인증이 가능합니다.";
                    return false;
                } else if (result == "error_other") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증오류, 인증창을 닫고 처음부터 다시 진행해주세요.";
                    return false;
                } else if (result == "error_age") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "보호자(법정대리인) 동의자 기준에 맞지 않습니다. 보호자 나이를 확인해 주세요. 지속적인 문제가 발생할 경우 고객센터로 문의주세요.";
                    return false;
                } else if (result == "systemCheck") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "통신사의 시스템작업으로 본인인증이 실패하였습니다. 잠시 후 다시 시도해 주세요.";
                    return false;
                } else {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증번호를 다시 확인해주세요.";
                    return false;
                }
            }
        };
        xmlhttp.send(null);
    } catch (e) {
        if (window.bridgeGotTime) {
            throw e;
        }
    }

    return true;
}

function mainSubmit(checkTp) {
    var res = true;
    if(checkTp == 'undefined' || checkTp == null){
        checkTp = "";
    }
    if (checkName('check') != true) {
        res = false;
    }
    if (checkSex('check') != true) {
        res = false;
    }

    if (checkBirthday('check') != true) {
        res = false;
    }

    if (checkPhoneNo('check') != true) {
        res = false;
    }

    if (checkAuthno('check') != true) {
        res = false;
    }

    if (checkAgree('') != true) {
        res = false;
    }



    if (res == true) {
        checkAuthnoButton(checkTp);
    }
}

function mainSubmit2020(checkTp) {
    var res = true;
    if(checkTp == 'undefined' || checkTp == null){
        checkTp = "";
    }
    if (checkName('check') != true) {
        res = false;
    }
    if (checkSex('check') != true) {
        res = false;
    }

    if (checkEightNumberBirthday('check') != true) {
        res = false;
    }

    if (checkPhoneNo('check') != true) {
        res = false;
    }

    if (checkAuthno('check') != true) {
        res = false;
    }

    if (checkAgree('') != true) {
        res = false;
    }



    if (res == true) {
        checkAuthnoButton(checkTp);
    }
}

function checkEightNumberBirthday(doFlag) {
    if(doFlag == "check" || $("#input_birth_day").val().length == 8) {
        var birthDay = $("#input_birth_day").val();

        if ($("#input_birth_day").val().length != 8) {
            $("#birth_day_msg").show();
            $("#birth_day_msg").text('생년월일을 다시 확인해 주세요.');
            return false;
        }

        if (!isValidDate(birthDay)) {
            $("#birth_day_msg").show();
            $("#birth_day_msg").text('생년월일을 다시 확인해 주세요.');
            return false;
        }

        var age = calcAge(birthDay);
        if (age < 0 || age >= 100) {
            $("#birth_day_msg").show();
            $("#birth_day_msg").text('생년월일을 다시 확인해 주세요.');
            return false;
        } else {
            $("#birth_day_msg").hide();
            $("#birth_date").val(birthDay);
            return true;
        }
    }
}

function showBirthDayClearButton(){
    if($("#input_birth_day").val().length == 0){
        $("#btn_clear_birth_day").hide();
    }else{
        $("#btn_clear_birth_day").show();
    }
}

function sendSmsButton2020(checkTp) {

    var mobno = document.getElementById("phone_no").value;
    var key = document.fm.token.value;
    var keyName = document.fm.token_name.value;
    var oMsg = document.getElementById("phone_no_msg");

    var nm = document.fm.nm.value;
    var sex = document.fm.sex_cd.value ;
    var mobile_cd = document.fm.mobile_cd.value ;
    var birth_date = document.fm.birth_date.value;
    var foreignYn = document.fm.foreignYn.value;
    if(checkTp == 'undefined' || checkTp == null){
        checkTp = "";
    }

    //알뜰폰 처리
    if(mobile_cd =="MVNO"){
        mobile_cd = document.fm.mobile_cd_mvno.value;
    }

    mobno = mobno.split("-").join("");
    document.fm.authFlag.value = "N";

    //입력값 확인
    var res = true;
    if (checkName('check') != true) {
        res = false;
    }

    if (checkSex('check') != true) {
        res = false;
    }

    if (checkEightNumberBirthday('check') != true) {
        res = false;
    }
    if (checkPhoneNo('check') != true) {
        res = false;
    }
    if (checkAgree('') != true) {
        res = false;
    }
    if (res == false) {
        return;
    }

    if(sendFlag == true){
        return false;
    }else{
        sendFlag = true;
    }

    try {
        var xmlhttp = getXmlHttp();
        xmlhttp.open("GET", document.fm.authUrl.value + "/checkMemberPhoneAuth?m=send" + checkTp + "&phone_no=" + mobno + "&mobile_cd=" + mobile_cd + "&" + keyName +"=" + key + "&sex=" + sex + "&birth_date=" + birth_date + "&foreignYn=" + foreignYn + "&nm=" + escape(encodeURIComponent(nm)));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                var result = xmlhttp.responseText;
                oMsg.style.display = "block";
                sendFlag = false;

                if (result == "success") {
                    oMsg.className = "error gm";
                    oMsg.innerHTML = "인증번호를 발송했습니다. 인증 문자가 오지 않으면 이름/생년월일/통신사/전화번호 등이 정확한지 또는 스팸문자함을 확인해 주세요.";
                    document.fm.authFlag.value = "Y";
                    document.getElementById("auth_no").value = "";
                    document.getElementById("auth_no_msg").style.display = "none";

                    return true;
                } else if (result == "error") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증오류, 창을 닫고 처음부터 다시 시작해 주세요.";
                    return false;
                } else if (result == "countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "이용 횟수가 초과되었습니다. 잠시 후에 다시  이용해 주세요.";
                }  else if (result == "soyu_countover") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증 가능 횟수가 초과되었습니다.";
                } else if (result == "restart") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "인증만료, 창을 닫고 처음부터 다시 시작해 주세요.";
                } else if (result == "Dur") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "동일한 인증수단은 계속해서 사용할 수 없습니다.";
                    return false;
                } else if (result == "systemCheck") {
                    oMsg.className = "error";
                    oMsg.innerHTML = "통신사의 시스템작업으로 본인인증이 실패하였습니다. 잠시 후 다시 시도해 주세요.";
                    return false;
                } else {
                    oMsg.className = "error";
                    oMsg.innerHTML = "전화번호를 다시 확인해주세요." ;
                    return false;
                }

            }
        };
        xmlhttp.send(null);
    } catch (e) {
        sendFlag = false;
        if (window.bridgeGotTime) {
            throw e;
        }
    }

    return false;
};