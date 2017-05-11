$(document).ready(function(){
    var testNumLength = function(number) {
        totaldiv.text("0");
        var numToString = number.toString()
        var StringLen = numToString.length

        if (isNaN(number) || StringLen >= 9) {
            number = "";
            totaldiv.text("Err");
        }else if (!isNaN(number)){
            totaldiv.text(number);
            valueContainer(number);
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var counter = 0;
    var HistoryVal = "";
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
            number = math.round(number,9);
            totaldiv.text(number);
        } else {
            number += ".";
            number = math.round(number,9);
            totaldiv.text(number);
        }
        testNumLength(number);
    });

    $("#equals").click(function(){
        curnumber = number
        if (operator === "+"){
            number = (parseFloat(number, 9) + parseFloat(newnumber,9)).toString(9);
        } else if (operator === "-"){
            number = (parseFloat(newnumber, 9) - parseFloat(number,9)).toString(9);
        } else if (operator === "÷"){
            number = (parseFloat(newnumber, 9) / parseFloat(number,9)).toString(9);
        } else if (operator === "×"){
            number = (parseFloat(newnumber, 9) * parseFloat(number,9)).toString(9);
        } else if (operator === "sqrt"){
            number = Math.sqrt(parseFloat(number)).toString(9);
            number = number.substring(0,8) 
        }else if  (operator === "^"){
            number = Math.pow(number,newnumber)
        }
        HistoryVal = curnumber + operator + newnumber +"=" +  number
        totaldiv.text(number);
        testNumLength(number);
        valueContainer(HistoryVal);
        number = "";
        newnumber = "";
    });
    var valueContainer = function(value){
        num = value.toString(9)
        
        var hHis = $("#History");
        var allcal = new Array();
        counter += 1
        if (operator != ""){
            allcal[counter] = num
        }
        
        console.log(counter);
      if (counter <= 10) {
        for (var i = allcal.length - 1; i >= 0; i--) {
            hHis.text(allcal[i]);
              if (i >= 10){
                hHis.text("");
            }
        }if (num = "") {
            hHis.text("History has been cleared");
            counter = 0
        }
    }       
}

});
