let tmp_item = {};
let cart = []

function addPerson() {
    let item = $("#item").val();
    let price = $("#price").val();
    tmp_item.name = item;
    tmp_item.price = price;
    $("#item").val("");
    $("#price").val("");
    let copieditem = Object.assign({}, tmp_item);
    cart.push(copieditem);
    tmp_item.name = "";
    tmp_item.price = 0;
}

function display() {
    $("output").html("")
    let msg = ""
    for (let i = 0; i < cart.length; i++) {
        let tmp = cart[i]
        let itemcost = parseFloat(tmp.price)
        msg += `${tmp.name} ...$${itemcost.toFixed(2)} <br>`
    }
    msg += "<br/><br/>&nbsp;&nbsp;Total...$"
    let total = getTotal(cart)
    msg += total.toFixed(2)
    $("#output").html(msg);
}

function getTotal(theCart) {
    sum = 0;
    for (let i = 0; i < theCart.length; i++) {
        let tmp = theCart[i];
        sum += parseFloat(tmp.price)
    }
    return sum
}

function store() {
    $("#stuff").val(JSON.stringify(cart))
    alert("stored")
}