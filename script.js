var graphClick = 0;
var evalClick = 0;
function evalu8(){
    evalClick += 1;
    if(evalClick == 1){
        document.getElementById('inpoot').innerHTML = 'გასუფთავება';

    }

    if(evalClick == 2){//არეფრეშებს გვერდს რაც ამავდროულად დეფაულთ მნიშვნელობებს უბრუნებს შესატან მონაცემებს
        location.reload();
    }
    var a = Number(document.getElementById('a').value);//წამოვიღოთ შეყვანილი მონაცემები
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    if (a != Number(a)){
        alert('a b და c აუცილებელია იყოს რიცხვი.');
        return;
    }

    if (b != Number(b)){
        alert('a b და c აუცილებელია იყოს რიცხვი.');
        return;
    }

    if (c != Number(c)){
        alert('a b და c აუცილებელია იყოს რიცხვი.');
        return;
    }

    var discrim = (b * b) - (4 * a * c);//გამოვთვალოთ დისკრიმინანტი
    document.getElementById('dScrim').innerHTML = discrim;

    var ToR = 'error';
    var root1 = 'error';
    var root2 = 'error';

    if(discrim == 0){//შემთხვევა როცა დისკრიმინანტი 0 ის ტოლია
        ToR = 'განტოლებას გააჩნია ერთი ამონახსი';
        root1 = 'x: ' + ( (-1 * b + Math.sqrt( Math.pow(b, 2) - (4 * a * c) ) ) / (2 * a) ).toFixed(2);
        root2 = '';
    }
    if(discrim > 0){
        ToR = 'განტოლებას გააჩნია ორი ამონახსნი';
        root1 = 'x1: ' + ( (-1 * b + Math.sqrt( Math.pow(b, 2) - (4 * a * c) ) ) / (2 * a) ).toFixed(2);    
        root2 = 'X2: ' + ( (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a) ).toFixed(2);
    }
    if(discrim < 0){//კკომპლექსური რიცხვები
        ToR = 'კომპლექსური ამონახსნები';
        var rP1 = ((-1 * b)/(2*a));
        var rP2 = Math.sqrt( ((Math.pow(b, 2) - (4 * a * c))*(-1)) ) / (2 * a);
        var i = 'i';

        if(rP1 == 0){
            root1 ='x1: ' + rP2.toFixed(2) + i;
            root2 ='x2: ' + '-' + rP2.toFixed(2) + i;

            if(rP2 == 1){
                root1 ='x1: ' + i;
                root2 ='x2: ' + '-'+i;
            }
        }

        if(rP1 != 0 && rP2 == 1){
            root1 ='Root1: ' + rP1.toFixed(2) + ' + ' + i;
            root2 ='Root2: ' + rP1.toFixed(2) + ' - ' + i;
        } 

        else if(rP1 != 0 && rP2 != 1){
            root1 ='Root1: ' + rP1.toFixed(2) + ' + ' + rP2.toFixed(2) + i;
            root2 ='Root2: ' + rP1.toFixed(2) + ' - ' + rP2.toFixed(2) + i; 
        }
    }

    document.getElementById('tor').innerHTML = ToR;
    document.getElementById('root1').innerHTML = root1;
    document.getElementById('root2').innerHTML = root2;
}



var lineX = -500;
var lineXe = 250;
var lineY = -250;
ctx.clearRect(0, 0, canvas.width, canvas.height);

function graph(){
    graphClick += 1;
    document.getElementById('gButt').innerHTML = 'გასუფთავება';

    if(graphClick == 2){        location.reload();
        graph();
    }
    var a = (document.getElementById('a').value)/50;
    var b = document.getElementById('b').value;
    var c = (document.getElementById('c').value)*50;
    var can = document.getElementById("myCanvas");
    var ctx = can.getContext("2d");
    ctx.translate(500,500);

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1.5;
    ctx.moveTo(0, 500);
    ctx.lineTo(0, -500);
    ctx.stroke();

    for(lineX = -500; lineX < 500; lineX += 50){
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 0.5;
        ctx.moveTo(lineX, 500);
        ctx.lineTo(lineX, -500);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1.5;
    ctx.moveTo(500, 0);
    ctx.lineTo(-500, 0);
    ctx.stroke();

    for(lineX = -500; lineX < 500; lineX += 50){
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 0.5;
        ctx.moveTo(500,lineX);
        ctx.lineTo(-500, lineX);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = "black";
    for(x = -500; x < 500; x++){
        ctx.lineTo((x), ((( -1*(a*(x*x) + (b*x) + c)) )));
        ctx.stroke();
    }
}