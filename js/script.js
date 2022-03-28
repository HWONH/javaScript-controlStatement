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

document.write("<h3>반복문 - do ~ while</h3>");
// 1) 초기값 => 2) 실행문(do) => 3) 증감식 => 4) 조건식 검사 진행
var $k = 1;
do{
    document.write($k, "<br>");
    $k++;
}while($k <= 10)

var $img = 1;
do{
    document.write("<img class='img_png' src='img/img_0"+$img+".png'>");
    $img++;
}while($img <= 3)

document.write("<h3>반복문 - for</h3>");
// 1) 초기값 => 2) 조건식 => 3) 실행문 => 4) 증감식
for($i = 1;$i <= 10;$i++){ // var i = 1;라고 선언해도 됨
    document.write($i, "<br>");
}

// css문서에서 배경이미지 처리
for(k = 1;k <=9;k++){
    document.write("<div class='view"+k+"'></div>");
}
document.write("<hr>"); // 블록 엘리먼트;한줄 긋기 위한 구분선(가로라인)
// 스크립트에서 이미지 처리
for(j = 1;j <= 9;j++){
    document.write("<img class='view_img' src='img/view"+j+".jpg' alt='이미지"+j+"'>");
}

document.write("<h4>반복문 - for - break</h4>");
// 반복문을 종료할 때 사용

for(i=1;i<=10;i++){
    if(i>6){ // i값이 7,8,9,10 일 때
        break; // 조건에 부합할 경우 반복문 탈출(강제종료)
    }
    document.write(i, "<br>"); // 1,2,3,4,5,6
}

document.write("<h4>반복문 - for - continue</h4>");
// 반복을 중단시켰다가 증감식으로 이동하여 연속적으로 반복을 재실행

for(i=1;i<=10;i++){
    if(i==6){ // i값이 6 일 때
        continue; // 조건에 부합할 경우 반복문 일시중단
    }
    document.write(i, "<br>"); // 1,2,3,4,5,7,8,9,10
}

document.write("<h4>반복문 - 중첩 for</h4>");
// 1차 for문이 실행되는 동안 내부의 2차 for문이 반복적으로 실행
// 중첩 for문을 활용한 구구단 만들기
for(i=2;i<=9;i++){
    document.write("<h4>"+i+"단</h4>");
    for(j=1;j<=9;j++){
        document.write(i+"×"+j+"="+(i*j), "<br>");
    }
}

document.write("<h4>실습 응용</h4>");
// 사용자가 입력한 값의 구구단 작성하기
/* var i=prompt("단을 표현할 수를 입력하세요.", "");
document.write("내가 선택한 단은 : "+i+"단", "<br>");
for(k=1;k<=9;k++){
document.write(i+"x"+k+"="+(i*k), "<br>");
}
 */

// 사용자가 입력한 값부터 구구단 작성하기
/* var n=prompt("시작할 단의 수를 입력하세요.", "");
for(h=n;h<=9;h++){
    document.write("<h4>"+h+"단</h4>");
    for(m=1;m<=9;m++){
        document.write(h+"×"+m+"="+(h*m), "<br>");
    }
}
 */

// 아래의 방식보다 위의 방식을 현장에선 더 선호(cuz. 수정용이)
/* var h=prompt("시작할 단의 수를 입력하세요.", "");
for(h;h<=9;h++){
    document.write("<h4>"+h+"단</h4>");
    for(m=1;m<=9;m++){
        document.write(h+"×"+m+"="+(h*m), "<br>");
    }
}
 */

// Ex_02
var $num01 = 36;
var $num02 = 12;
var sum = $num01 + $num02;
document.write("sum = "+sum, "<br>");
var substract = $num01 - $num02;
document.write("substract = "+substract, "<br>");
var multiply = $num01 * $num02;
document.write("multiply = "+multiply, "<br>");
var divide = $num01 / $num02;
document.write("divide = "+divide, "<br>");
var reminder = $num01 % $num02;
document.write("reminder = "+reminder, "<br>");

// Ex_03
var $num03 = 36;
var $num04 = 12;
var $result = $num03+=$num04;
document.write("$result(+=) = "+$result, "<br>");
var $result = $num03-=$num04;
document.write("$result(-=) = "+$result, "<br>");
var $result = $num03*=$num04;
document.write("$result(*=) = "+$result, "<br>");
var $result = $num03/=$num04;
document.write("$result(/=) = "+$result, "<br>");
var $result = $num03%=$num04;
document.write("$result(%=) = "+$result, "<br>");

var $num03 = 36;
var $num04 = 12;
$num03+=$num04;
document.write("$result(+=) = "+$num03, "<br>");
$num03-=$num04;
document.write("$result(-=) = "+$num03, "<br>");
$num03*=$num04;
document.write("$result(*=) = "+$num03, "<br>");
$num03/=$num04;
document.write("$result(/=) = "+$num03, "<br>");
$num03%=$num04;
document.write("$result(%=) = "+$num03, "<br>");

// Ex_04
/* var $width = prompt("브라우저의 가로 값(px)", "0");
var $height = prompt("브라우저의 세로 값(px)", "0");
document.write("브라우저의 총 면적(px) : "+($width * $height), "<br>");
 */

// Ex_05
var $t = "<table border='1'>";
$t+="<tr>";
$t+="<td>1</td>";
$t+="<td>2</td>";
$t+="<td>3</td>";
$t+="</tr>";
$t+="<tr>";
$t+="<td>4</td>";
$t+="<td>5</td>";
$t+="<td>6</td>";
$t+="</tr>";
$t+="</table>";
document.write($t);

// Ex_06
/* var $num_in = prompt("네 자리 이상의 수를 입력하세요.", "");
if($num_in>=1000){
    if($num_in%7==0){
        document.write("입력한 "+$num_in+"은(는) 7의 배수입니다.", "<br>");
    }else{
        document.write("입력한 "+$num_in+"은(는) 7의 배수가 아닙니다.", "<br>");
    }
}
 */

// Ex_07
var $bx_num = 1;
while($bx_num<=10){
    document.write("<div class='bx_num1'></div>");
    $bx_num++;
}
document.write("<hr>");
var $bx_num = 1;
do{
    document.write("<div class='bx_num1'></div>");
    $bx_num++;
}while($bx_num<=10)
document.write("<hr>");
for($bx_num=1;$bx_num<=10;$bx_num++){
    document.write("<div class='bx_num1'></div>");
}

// Ex_05 중첩 for문을 이용한 테이블 구성(2행 3열)
var td_num=1; // 1,2,3,4,5,6   td_num++
var $t="<table border='1'>";
for(i=1;i<=2;i++){
    $t+="<tr>";
    for(j=1;j<=3;j++){
        $t+="<td>"+td_num+"</td>";
        td_num++;
    }
    $t+="</tr>";
}
$t+="</table>";
document.write($t);

// 형 변환
// 명시적 형변환(문자형 데이터를 숫자형 데이터로 변환, 숫자형 데이터를 문자형 데이터로 변환)

// String() : 일반적으로 숫자형 데이터를 문자형 데이터로 변환시키라는 명령, 대소문자 주의
document.write("<h3>명시적 형변환 : 숫자를 문자로 변경</h3>");
var $numToStr=10000;
document.write("$numToStr의 원본 데이터 형태 : "+typeof $numToStr, "<br>"); // number
var $ch_numToStr=String($numToStr);
document.write("$numToStr의 변환 데이터 형태 : "+typeof $ch_numToStr, "<br>"); // string

// Number() : 일반적으로 문자형 데이터를 숫자형 데이터로 변환시키라는 명령, 대소문자 주의
document.write("<h3>명시적 형변환 : 문자를 숫자로 변경</h3>");
var $strToNum="1234.5678";
document.write("$strToNum의 원본 데이터 형태 : "+typeof $strToNum, "<br>"); // string
var $ch_strToNum=Number($strToNum);
document.write($ch_strToNum, "<br>");
document.write("$strToNum의 변환 데이터 형태 : "+typeof $ch_strToNum, "<br>"); // number

// parseInt() : 문자형 데이터를 숫자형 데이터로 변환시키되 정수값만 반환(저장)시키라는 명령;반올림 안됨, 소수점 이하는 절삭 처리;parse(분석하다)+integer(정수)
var $chInt_strToNum=parseInt($strToNum);
document.write($chInt_strToNum, "<br>"); // 1234
document.write("$strToNum의 변환(Integer) 데이터 형태 : "+typeof $chInt_strToNum, "<br>"); // number

// parseFloat() : 문자형 데이터를 숫자형 데이터로 변환시키되 소수점 이하의 모든 실수 영역을 반환시키라는 명령
var $chFloat_strToNum = parseFloat($strToNum);
document.write($chFloat_strToNum, "<br>"); // 1234.5678
document.write("$strToNum의 변환(Float) 데이터 형태 : "+typeof $chFloat_strToNum, "<br>"); // number

// 덧셈, 뺄셈 구하기
/* var number1=Number(prompt("첫 번째 숫자를 입력하세요.","")); // prompt()의 값은 문자형 데이터 혹은 숫자형 데이터 모두 될 수 있으므로 Number()로 감싸주자!
var number2=Number(prompt("두 번째 숫자를 입력하세요.",""));
var sum=number1+number2;
var substract=number1-number2;
alert("입력받은 수 : "+number1+", "+number2+"\n\n"+"SUM : "+sum+"\n"+"SUBSTRACT : "+substract);
 */

//Ex_08
document.write("<hr>");
var $bx_limit=prompt("보여줄 박스의 개수를 입력하세요.","");
var $m=1;
while($m<=$bx_limit){
    document.write("<div class='bx_num2'></div>");
    $m++;
}

document.write("<hr>");
var $bx_limit=prompt("보여줄 박스의 개수를 입력하세요.","");
var $m=1;
do{
    document.write("<div class='bx_num2'></div>");
    $m++;
}while($m<=$bx_limit)

document.write("<hr>");
var $bx_limit=prompt("보여줄 박스의 개수를 입력하세요.","");
for($m=1;$m<=$bx_limit;$m++){
    document.write("<div class='bx_num2'></div>");
}