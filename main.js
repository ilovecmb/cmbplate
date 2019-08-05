let form_submit = ()=>{
    console.log("test");
    let plate = document.getElementById("plate").value.replace(/\s/g, '').toUpperCase();
    console.log(plate);
    
    for (let i =0;i<json.length;i++){
        if (json[i]["plate"] === plate){
            cmb_true(json[i]);
            return false;
        }
    }
    cmb_false();

    return false;
}

let cmb_true = info =>{
    let cmb = document.getElementById("cmb");
    cmb.style.visibility = "visible";
    cmb.classList.add("alert-danger");
    cmb.classList.remove("alert-success");
    cmb.innerHTML = "<strong>CMB plate match!</strong><br>Plate: " + info["plate"] + "<br>Description: " + info["description"] + "<br>";
}

let cmb_false = () => {
    let cmb = document.getElementById("cmb");
    cmb.style.visibility = "visible";
    cmb.classList.add("alert-success");
    cmb.classList.remove("alert-danger");
    cmb.innerHTML = "<strong>CMB plate not match!</strong><br>Stay alert and be water my friend!<br>";
}
