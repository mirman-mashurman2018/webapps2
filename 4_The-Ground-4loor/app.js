$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();
    var stuff=
    {
    firstname:$("#firstname").val(),
    lastname:$("#lastname").val(),
    email:$("#email").val(),
    message:$("#message").val(),
    }
   console.log(stuff);
    var Url= "http://x.mirman.org:1031/ground4loor";
    $.post(Url,stuff,function(res){
      console.log(res);
    });
  });
});
