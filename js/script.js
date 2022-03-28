// 자바스크립트 제어문
document.write("<h2>제어문</h2>");
document.write("<h3>조건문 - if문, else문, else if문</h3>");

// 만보기
/* var $walk = prompt("하루에 걷는 양은 얼마인가요?", "10000");
if($walk >= 10000){ //조건에 만족하면 {실행문}을 실행해라
    document.write("건강한 삶을 유지하고 있습니다.", "<br>");
}
else{ // if문의 조건에 부합하지 않으면 else문의 {실행문}을 실행해라
    document.write("조금 더 많이 걸어주세요", "<br>");
}
 */


// 구매자 등급 분류 : VIP(100,000원 이상 구매고객), GOLD(60,000원 이상 구매고객), SLIVER(10,000원 이상 구매고객)
/* var $cu_level = prompt("지난 달에 당신이 구매한 금액은?", "50000");
if($cu_level >= 100000){
    document.write("당신은 VIP 등급입니다. 메일로 40% 할인쿠폰을 발송하였습니다.", "<br>");
}else if($cu_level < 100000 && $cu_level >= 60000){
    document.write("당신은 GOLD 등급입니다. 메일로 30% 할인쿠폰을 발송하였습니다.", "<br>");
}else if($cu_level < 60000 && $cu_level >= 10000){
    document.write("당신은 SLIVER 등급입니다. 메일로 20% 할인쿠폰을 발송하였습니다.", "<br>");
}else if($cu_level < 10000){ // else {
    document.write("당신은 신규고객입니다. 메일로 5% 할인쿠폰을 발송하였습니다.", "<br>");
}
 */


// 현재 계절에 대한 정보값을 작성하여 계절별 텍스트 문장을 도출
/* var $season = parseInt(prompt("현재 월을 입력하세요", "6")); // 사용자가 소수를 가진 숫자값을 입력했을 경우 parseInt() : 소수점 이하를 절삭; parse(분석하다) + Int(integer;정수)

if($season >=1 && $season <=12){ // 입력받는 값을 1~12라는 값으로 제한(1차 관문)
    if($season >= 3 && $season <= 5){
        document.write("새싹이 돋아나는 봄입니다", "<br>");
    }else if($season >=6 && $season <=8){
        document.write("뜨거운 태양이 작렬하는 여름입니다", "<br>");
    }else if($season >=9 && $season <=11){
        document.write("낙엽이 떨어지는 가을입니다", "<br>");
    }else{
        document.write("흰 눈이 내리는 겨울입니다", "<br>");
    }
}else{
    alert("현재 입력값이 유효하지 않습니다."); // 1~12까지의 숫자를 입력하지 않았을 경우 경고메시지를 띄운다
    location.reload(); // 현재 url을 기준으로 새로고침을 하겠다는 명령
}
 */


// 중첩 if문
// 네자리수 이상의 숫자 입력값 중에서 3의 배수를 찾아라
/* var $multiple = parseInt(prompt("네자리수 이상의 숫자를 입력하세요.", "0000"));
if($multiple >= 1000){
    if($multiple % 3 == 0){
        document.write("입력하신 숫자는 3의 배수 숫자입니다.", "<br>");
    }else{
        document.write("입력하신 숫자는 3의 배수 숫자가 아닙니다.", "<br>");
    }
}else{
    alert("네자리수 이상의 숫자를 입력하세요.", "<br>");
    location.reload();
} */
/* var $num = parseInt(prompt("네자리수 이상을 입력하세요.", "0000"));
if($num >= 1000){
    if($num%3 == 0){
        document.write($num + "은(는) 3의 배수입니다.", "<br>");
    }else{
        document.write($num + "은(는) 3의 배수가 아닙니다.", "<br>");
    }
}
 */