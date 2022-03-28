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

document.write("<h3>선택문 - switch case - break</h3>");
// 지하철호선에 따른 선택
/* var $my_subway = prompt("당신이 타게될 지하철 호선 번호를 입력하세요.\n(1~4까지 입력)", "2");
switch($my_subway){
    case "1" : document.write("빨간색 1호선을 선택했습니다.", "<br>");
    break;
    case "2" : document.write("녹색 2호선을 선택했습니다.", "<br>");
    break;
    case "3" : document.write("주황색 3호선을 선택했습니다.", "<br>");
    break;
    case "4" : document.write("파란색 4호선을 선택했습니다.", "<br>");
    break;
    default : alert("유효값이 아닙니다. 다시 작성해주세요.");
    location.reload();
    // default : document.write("유효값이 아닙니다.", "<br>");
}
// case - break에서 break의 역할은 정확하게 일치하는 경우의 수를 끊어서 탈출하도록 사용
 */

document.write("<h3>반복문 - while</h3>");
// 1) 초기값 => 2) 조건식 검사 진행 => 3) 실행문 => 4) 증감식 
var $i = 1; // 초기값
while($i<=10){ // 조건식
    document.write($i, "<br>"); // 실행문
    $i++;
}

// 브라우저 화면상에 이미지를 반복하여 뿌려주기 view1_jpg ~ view9_jpg
var $j = 1;
while($j <= 9){
    document.write("<img class='view_img' src='img/view"+$j+".jpg'>");
    $j++;
}
document.write("<div></div>")

// 캘린더 반복문을 활용하여 브라우저에 뿌려주기
var $calendar = 1;
while($calendar <= 12){
    document.write("<img class='m_img' src='img/m_" + $calendar + ".png'>");
    $calendar++;
}