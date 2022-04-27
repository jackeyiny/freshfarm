$(document).ready(function(){
    var i= 1;
    $("#myModal").hide();
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
    function XNMK(){
        if($("#password").val()!=$("#re-password").val()){
            $("#re-passwordAlert").html("*Không chính xác");
            return false;
        }else{
            $("#re-passwordAlert").html("*");
            
        }
        return true;
        
    }
    $("#re-password").blur(XNMK);
    function KTMail(){
        var mail=/^([A-Za-z]){1}([A-Za-z0-9]+)@gmail.com$/;
        if($("#email").val()==""){
            $("#emailAlert").html("* Bắt buộc nhập !");
            return false;
        }
        if(!mail.test($("#email").val())){
            $("#emailAlert").html("* Nhập đúng định dạng xxx@gmail.com");
            return false;
        }
        $("#emailAlert").html("*");
        return true;
    }
    $("#email").blur(KTMail);
    $("#submit").click(function () {
        if (
          kiemtraDN()==true &&
          Password()==true &&
          XNMK()==true &&
          KTMail()==true
        ) {
          $("#DK").hide();
          $("#myModal").show();
        }
      });
      function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#name").val() == "") {
          $("#nameAlert").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#name").val())) {
          $("#nameAlert").html("Mỗi ký tự đầu viết hoa không sử dụng số");
          return true;
        }
        $("#nameAlert").html("*");
        return true;
      }
      $("#name").blur(kiemTraTen);
      function kiemTraDiaChi() {
         if ($("#DC").val() == "") {
           $("#DCAlert").html("Không để trống");
           return false;
         }else{
         $("#DCAlert").html("*");
         return true;
         }
        }
      $("#DC").blur(kiemTraDiaChi);
      function kiemTraSDT() {
        var mauKT = /^0\d{9}$/;
        if ($("#SDT").val() == "") {
          $("#SDTAlert").html("Không để trống");
          return false;
        }
        if (!mauKT.test($("#SDT").val())) {
          $("#SDTAlert").html("Theo dạng 0xxxxxxxxx");
          return true;
        }
        $("#SDTAlert").html("*");
        return true;
      }
      $("#SDT").blur(kiemTraSDT);
      function KTNS(){
        var ns = new Date($("#NS").val());
       var today= new Date();
       if($("#NS").val()==""){
           $("#NSAlert").html("*Bắt buộc nhập !!");
           return false;
       }
       if((eval(today.getFullYear()-ns.getFullYear())<13)){
           $("#NSAlert").html("*tuổi từ 13 !!");
           return false;
       }
       $("#NSAlert").html("*");
       return true;
    }
      $("#NS").blur(KTNS);
      $("#save").click(function () {
        if (
          kiemTraTen()==true &&
          kiemTraDiaChi()==true &&
          kiemTraSDT()==true &&
          KTNS()==true 
        ) {
          $("#myModal").hide();
          $("#myCN").show();
        }
      });
        
});