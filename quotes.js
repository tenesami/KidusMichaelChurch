$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('background', 'yellow');
    });

    $('input').blur(function() {
        $(this).css('background', 'white');
    });
    const quotcontainer = document.getElementById("qut_container")
    const display = document.getElementById("display")

    const form = document.getElementById("new_form")
    const sotre_container = document.getElementById("container")


    display.addEventListener("click", () => {
        fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(function(res) {
                return res.json()
            })
            .then(function(quotes) {
                console.log(quotes)
                quotes.forEach(function(q) {
                    //console.log(q)
                    const name = document.createElement('li')
                    name.innerText = q
                    quotcontainer.appendChild(name)
                })
            })
    })


    const handleForm = (e) => {
        e.preventDefault();
        let myObj = {}
        myObj.item = $("#topic").val()
        myObj.description = $("#quote").val()

        //conver user input to json format and
        //be used by any server 
        let objStr = JSON.stringify(myObj)

        //alert(JSON.parse(objStr).store)
        const new_list = document.createElement('h3')
        new_list.innerText = JSON.parse(objStr).item
        document.body.appendChild(new_list)

        const new_list1 = document.createElement('li')
        new_list1.innerText = JSON.parse(objStr).description
        document.body.appendChild(new_list1)

    }
    form.addEventListener("submit", handleForm);
});