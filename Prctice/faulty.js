let randam = Math.random();
console.log(randam);
let a, b, c;

a = prompt("Enter the the first number:- ");
b = prompt("Enter the operator:- ");
c = prompt("Enter the second number:- ");

a=parseInt(a);
c=parseInt(c);

if (randam>0.1) {

    switch (b) {
        case "+":
            alert(a+c);
            break;
        case "-":
            alert(a-c);
        case "*":
            alert(a*c);
        case "/":
            alert(a/c);
        case "**":
            alert(a**c);
        default:
            break;
    }
}

else{
    switch (b) {
        case "+":
            alert(a-c);
            break;
        case "-":
            alert(a/c);
        case "*":
            alert(a+c);
        case "/":
            alert(a**c);
        case "**":
            alert(a*c);
        default:
            break;
    }
}