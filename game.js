function gane1(){
    let answer=document.getElementById('answer').value;

    if(answer==1){
        alert("คำตอบถูกต้องเกมจบเเล้ว")
    }else{
        alert("คำตอบคุณตอบไม่ถูกลองไหม่เด้อ")
    }
    document.getElementById('answer').value="";

}