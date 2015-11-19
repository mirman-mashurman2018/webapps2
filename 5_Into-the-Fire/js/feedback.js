var ref = new Firebase("https://intothe5ire.firebaseio.com"); //Use your app's Firebase URL

// Add some event handlers for FB events

$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
  var message=$("#message").val();
  $.post(ref,message,function(){});
    console.log("Form submitted!");
    ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    // Go grab your info and do something with it.
  });
});
