var xPlanes = [
  {"Name":"X-1", "Description":"Broke Mach 1", "ImgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bell_X-1_46-062_%28in_flight%29.jpg/800px-Bell_X-1_46-062_%28in_flight%29.jpg","BlAHS":"Blah"},
  {"Name":"X-3", "Description": " Tiny wings. Ultimately failed." "ImgUrl":"http://media.dma.mil/2005/Dec/26/2000574350/-1/-1/0/050324-F-1234P-033.JPG","BLAHS":"BLAHBLAHBLAH"},
  {"Name":"X-15", "Description":" First Manned Hypersonic aircraft","ImgUrl":"http://i.ytimg.com/vi/QCnmuAkrf9M/maxresdefault.jpg", "BLAHS":"Superblah"},
  {"Name":"X-29","Description":"Forward swept wings","ImgUrl":"https://upload.wikimedia.org/wikipedia/commons/9/91/Grumman-X29-InFlight.jpg","BLAHS":"Superduperblah"},
  {"Name":"X-31","Name": "Thrust vectoring supermaneuverability","ImgUrl":"http://www.check-six.com/images/Crash_Sites_images/X-31/X31-95Aerial.jpg" "BLAHS":"Superduperwhuperblah"},
  {"Name":"X-37","Description":"Reusable Space plane","ImgUrl":"http://i.huffpost.com/gen/1495971/images/o-X37B-facebook.jpg","BLAHS":"Superduperwooperblooperblah"},
  {"Name":"X-45","Description":" Unmanned combat vehicle","ImgUrl":"https://upload.wikimedia.org/wikipedia/commons/b/b1/Boeing_X-45A_UCAV.jpg","BLAHS":"The Penultimate Blah"},
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
  //This line is unfinished! Use a method to capture our <ul> element.
var e = document.getElementById("planes-list");
for(var i=0; i<Object.keys(xPlanes).length; i++) {
  console.log(i);
  var xPlane = xPlanes[Object.keys(xPlanes)[i]];
  e.innerHTML += "<li>"+"<h2>"+Object.keys(xPlanes)[i]+"</h2>"+"<p>"+
  xPlane +"<p>" +
  "</li>";

  //What does "i" refer to?
  // Do some things to add <li> elements to our empty list.
}
//var parent = document.getElementById("main")
//parent.appendChild(e)
