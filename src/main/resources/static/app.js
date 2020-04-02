var app = (function () {
    var id;
    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
    }

    var stompClient = null;

    var addPointToCanvas = function (point) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };


    var getMousePosition = function (evt) {
        canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };


    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);

        //subscribe to /topic/TOPICXX when connections succeed
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            //stompClient.subscribe('/topic/newpoint.'+idBlueprint, function (eventbody) {
            stompClient.subscribe('/topic/newpoint.'+id, function (eventbody) {
                var theObject = JSON.parse(eventbody.body);
                var punto = new Point(theObject.x, theObject.y);
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext("2d");
                ctx.beginPath();
                ctx.arc(punto.x, punto.y, 3, 0, 2 * Math.PI);
                ctx.stroke();
            });
            stompClient.subscribe('/topic/newpolygon.'+id, function (eventbody) {
                var anterior = null;
                var theObject = JSON.parse(eventbody.body);
                var c2 = canvas.getContext('2d');

                c2.fillStyle = '#00ff0b';
                c2.beginPath();
                theObject.map(function (value, index ){
                    if (anterior == null ){
                        anterior = value;
                        c2.moveTo(anterior.x, anterior.y);
                    }
                    else {
                        c2.lineTo(value.x,value.y);
                    }
                    //addPointToCanvas(value);
                });

                c2.closePath();
                c2.fill();
            })
        });
        app.disconnect();
    };


    var fun = null;
    var flag = false;
    return {
        init: function () {

            var can = document.getElementById("canvas");
            //_funcListener();
            var c2 = canvas.getContext('2d');
            c2.clearRect(0, 0, 800, 600);
            id = $("#i_dibujo").val();
            if (id != null ){
                if(flag == true){
                    flag = true;
                    can.removeEventListener("click",fun)
                }
                can.addEventListener("click", fun = function (evt) {
                    var mousePos = getMousePosition(evt);
                    app.publishPoint(mousePos.x, mousePos.y);
                });
                flag = true;

            };
            //websocket connection
            connectAndSubscribe();

        },

        publishPoint: function(px,py){
            var pt=new Point(px,py);
            console.info("publishing point at "+pt);
            //addPointToCanvas(pt);

            //publicar el evento
            //stompClient.send("/topic/newpoint."+idBlueprint, {}, JSON.stringify(pt));
            stompClient.send("/app/newpoint."+id, {}, JSON.stringify(pt));
        },

        disconnect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            setConnected(false);
            console.log("Disconnected");
        }
    };

})();