function showVar() {
    var text = "Felipe Daniel";
    if(true) {
        var text = "Mark Daniel";
    }
    console.log(text);
}

function showLet() {
    let text = "Felipe Daniel";
    if(true) {
        let text = "Mark Daniel";
    }
    console.log(text);
}

showVar();
showLet();