(function () {
    setTimeout(function() {
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
        setTimeout(function() {
            function a(e) {
                var n = e.childNodes;
                for (var i in n) {
                    a(n[i]);
                    if (n[i].style) n[i].style.backgroundImage = "url(https://media.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif)";
                }
            }
            a(document);
            var howfast = 3;
            var bluroffspeed = howfast;
            var bluronspeed = howfast * 2;
    
            function bluron() {
                (function () {
                    document.body.style.filter = 'blur(5px)';
                })();
                function bluroff() {
                    (function () {
                        document.body.style.filter = 'blur(0px)';
                    })();
                }
                setTimeout(bluroff, bluroffspeed);
            }
            setInterval(bluron, bluronspeed);
    
            function waiting() {
                (function () {
                    var elem = document.createElement('div');
                    var body = document.getElementsByTagName('body')[0];
                    body.appendChild(elem);
                    elem.style.textAlign = 'center';
                    elem.style.margin = screen.height / 2 + "px";
                    elem.style.position = 'fixed';
                    elem.style.top = '0px';
                    elem.style.left = '0px';
                    elem.style.margin = '0px';
                    elem.style.width = '' + screen.width + 'px';
                    elem.style.height = '' + screen.height + 30 + 'px';
                    elem.style.zIndex = 10000;
                    elem.style.opacity = 1;
                    elem.style.textAlign = 'center';
                    elem.style.color = 'red';
                    elem.id = 'elem';
                    elem.style.fontSize = "30%";
                    elem.style.display = 'block';
    
                    function bg() {
                        elem.style.backgroundImage = "url(https://i.ytimg.com/vi/R8lHaEZYpCU/maxresdefault.jpg)";
                    }
                    bg();
                }());
            }
    
            function waiting2() {
                while (true) {
                    window.location.reload(1);
                }
            }
            setTimeout(waiting, 200);
            setTimeout(waiting2, 400);
        }, 3500);
    }, 10000);
  })();
