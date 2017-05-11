$(document).ready(function(){
    var testNumLength = function(number) {
        totaldiv.text("0");
        var numStr = number.toString
        var StrLen = numStr.Length
        if (isNaN(number) || number.length >= 9) {
                number = "";
                totaldiv.text("Err");
            }else if (!isNaN(number)){
                if (StrLen >= 9){
                    console.log("entered");
                    totaldiv.text("Err");
                }else{
                    console.log("bypassed" + StrLen);
                    totaldiv.text(number);        
            }   
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#operators a,#side a").not("#equals, #decimal").click(function(){

        if ($(this).text() === "sqrt" || $(this).text() === "√"){
            operator = "sqrt";
            $("#equals").click();
            return;
        }
        operator = $(this).text();
        newnumber = number;
        number = "";
        //totaldiv.text("0");
    });

    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#decimal").click(function(){
        var numOfDecs = 0;
        for (i=0;i<number.length;i++){
            if (number[i] === "."){
            numOfDecs++;
            }
        }
        if (numOfDecs > 0) {
            number = number;
            number = round(number,9);
            totaldiv.text(number);
        } else {
            number += ".";
            number = round(number,9);
            totaldiv.text(number);
        }
        testNumLength(number);
    });

    $("#equals").click(function(){
        if (operator === "+"){
            number = (parseFloat(number, 9) + parseFloat(newnumber,9)).toString(9);
        } else if (operator === "-"){
            number = (parseFloat(newnumber, 9) - parseFloat(number,9)).toString(9);
        } else if (operator === "÷"){
            number = (parseFloat(newnumber, 9) / parseFloat(number,9)).toString(9);
        } else if (operator === "×"){
            number = (parseFloat(newnumber, 9) * parseFloat(number,9)).toString(9);
        } else if (operator === "sqrt"){
            number = Math.sqrt(parseFloat(number,8).toString(8));
        }else if  (operator === "^"){
            number = Math.pow(number,newnumber)
        }
        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newnumber = "";
    });
    var valueContainer = function(value){
        num = value
        nwnum = num
        num = ""
        counter = 0
        if(counter == 0){
            console.log("max number in storage has been reached")
        }
        $("#storedValues").Click(function(){

        });   
}

});
