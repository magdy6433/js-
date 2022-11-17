let data = [];

function add() {
 
    let search = document.getElementById("search").value;

    let ob = {search: search}

    data.push(ob);
    show();
    
}

function show() {
    let str ="";
    
    for(let i=0;i<data.length;i++) {
        str+= `<div class="row">
        <li>${data[i]['search']}</li>
        <i onclick="deleteRow()" class="fa-sharp fa-solid fa-trash"></i>
    </div>`
    }
    document.getElementById("data").innerHTML = str;
}

function deleteRow(i) {
    data.splice(i,1)
    show();
}