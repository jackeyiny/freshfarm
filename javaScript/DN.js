$(document).ready(function(){
    function kiemtraDN(){
        var kt=/^[A-Za-z0-9]{6,16}$/;
        if($("#username").val()==""){
            $("#usernameAlert").html("*Không được để trống");
            return false;
        }
        if(!kt.test($("#username").val())){
            $("#usernameAlert").html("*Chỉ được nhập chữ và số, từ 6-16 kí tự");
            return true;
        }
        $("#usernameAlert").html("*");
        return true;
    }
    $("#username").blur(kiemtraDN);
    function Password(){
        var kt=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        ;
        if($("#password").val()==""){
            $("#passwordAlert").html("*Không được để trống");
            return false;
        }
        if(!kt.test($("#password").val())){
            $("#passwordAlert").html("*Tối thiểu 8 chữ cái, ít nhất 1 chữ hoa, 1 chữ thường và một số");
            return true;
        }
        $("#passwordAlert").html("*");
        return true;
    }
    $("#password").blur(Password)
    $("#submit").click(function () {
        if (
          kiemtraDN()==true &&
          Password()==true 
          
        ) {
          $("#myDN").hide();
          $("#myTC").show();
        }
      });
});