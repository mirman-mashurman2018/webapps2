var ref = new Firebase("https://intothe5ire.firebaseio.com"); //Use your app's Firebase URL
// Add some event handlers for FB events

$(document).ready(function(){
  ref.on("value", function(snapshot) {
  //  $("#feedback-list")="";
  console.log(snapshot.val());
  var snapstuffs=snapshot.val();
      $("#feedback-list").empty();
  for(var i in snapstuffs)
  {
    var message=snapstuffs[i];

    var messageDate = new Date(message.Timestamp);
    var newdiv=$(document.createElement("div"));
    var otherdiv=$(document.createElement("div"));
    otherdiv.addClass("small-12 columns");
    newdiv.addClass("small-12 rows");
    newdiv.append("<h2> Message:</h2>"+"<p>"+ message.Message +"</p>");
    newdiv.append("<h2>Name: "+message.Name+"</h2>");
    newdiv.append("<img src=\""+message.Url+"\">");
    otherdiv.append(newdiv);
  //  newLi.append("<p> Posted on: "+(1+messageDate.getMonth)+"</p>");
    $("#feedback-list").append(otherdiv);


  }
//  $("#feedback-list").append(snapshot.val());
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  $("#add-form").submit(function(event){
    event.preventDefault();
  var message=$("#message").val();
  var url=$("#imgUrl").val();
  var name=$("#Name").val();
  var timestamp=new Date().getTime();
  var stuffstoputin=
  {
    Message:message,
Url:url,
Name:name,
Timestamp:timestamp


  }
//  $.post(ref,message,function(){});
    console.log("Form submitted!");
ref.push(stuffstoputin);
    // Go grab your info and do something with it.
  });

});
