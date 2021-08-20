function isNumberKey(evt) {
   

    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

var btn_clicked="btn1";
function process() {

    
    var i_had = document.getElementById("i_had").value;
    var how_many1 = document.getElementById("how_many1").value;
    
    var i_also_had = document.getElementById("i_also_had").value;

    var how_many2 = document.getElementById("how_many2").value;
    var and_i_had = document.getElementById("and_i_had").value;

    var how_many3 = document.getElementById("how_many3").value;
   // var i_am = document.getElementById("i_am").value;
    
    if (how_many1 == '') {
        alert("please enter input");
        how_many1.focus;
        return false;
    }
    else if(how_many2 == '') {
        alert("please enter input");
        how_many2.focus;
        return false;
    }
    else if(how_many3 == '') {
        alert("please enter input");
        how_many3.focus;
        return false;
    }
var  i_am=4; 
    if(btn_clicked=='btn1'){
        i_am=400;  
    }
    else if(btn_clicked=='btn2')
    {
        i_am=200;  
    }
    else if(btn_clicked=='btn3')
    {
        i_am=100;  
    }
    else if(btn_clicked=='btn4')
    {
        i_am=0;  
    }
    var caffeine_intake ;
    

        max_recomended_dose = '';
    caffeine_intake = parseFloat(i_had * how_many1) + parseFloat(i_also_had * how_many2) + parseFloat(and_i_had * how_many3);
    max_recomended_dose = parseFloat(i_am);

    document.getElementById("result").style.display = 'block';

    document.getElementById("caffiene_intake").innerHTML = caffeine_intake;

    document.getElementById("recomended_dose").innerHTML = max_recomended_dose;

    jQuery('html,body').animate({
        scrollTop: jQuery("#result").offset().top - 5
    }, 'slow');
    $('#results').css('display','block') ;
    $('#result').css('display','block') ;
}

function buttonClicked(e)
{
    
        btn_clicked= e.id ;
   
   
    $('.btn-outline-danger').css("background-color", "#fff");
    $('.btn-outline-danger').css("color", "#dc3545");
    $(e).css("background-color", "#dc3545");
    $(e).css("color", "#fff");
}