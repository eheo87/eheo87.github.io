var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);

!function(e){
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
      var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top},1e3,"easeInOutExpo"),!1
    }
  })
  ,e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#sideNav"})}(jQuery);

  function arr(n) {
    var tables = document.getElementsByClassName("history");

    if (n === 0) {
      for (let i = 0; i < tables.length; i++) {
          if (tables[i].classList[1] === "1990") {
              tables[i].style.display = "block";
          } else {
              tables[i].style.display = "none";
          }
      }
    } else if (n === 1) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].classList[1] === "2000") {
                tables[i].style.display = "block";
            } else {
                tables[i].style.display = "none";
            }
        }
    } else if (n === 2) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].classList[1] === "2010") {
                tables[i].style.display = "block";
            } else {
                tables[i].style.display = "none";
            }
        }
    }
}

function arr2(n) {
    var tables = document.getElementsByClassName("squad");

    if (n === 0) {
      for (let i = 0; i < tables.length; i++) {
          if (tables[i].classList[1] === "GK") {
              tables[i].style.display = "block";
          } else {
              tables[i].style.display = "none";
          }
      }
    } else if (n === 1) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].classList[1] === "CB") {
                tables[i].style.display = "block";
            } else {
                tables[i].style.display = "none";
            }
        }
    } else if (n === 2) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].classList[1] === "MF") {
                tables[i].style.display = "block";
            } else {
                tables[i].style.display = "none";
            }
        }
    } else if (n === 3) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].classList[1] === "FW") {
                tables[i].style.display = "block";
            } else {
                tables[i].style.display = "none";
            }
        }
    }
}
