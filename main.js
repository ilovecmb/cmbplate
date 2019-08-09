let form_submit = ()=>{
    console.log("test");
    let plate = document.getElementById("plate").value.replace(/\s/g, '').toUpperCase();
    console.log(plate);
    document.getElementById("plate").value = "";    
    for (let i =0;i<json.length;i++){
        if (json[i]["plate"] === plate){
            cmb_true(json[i]);
            return false;
        }
    }

    switch (plate.substring(0, 2)){
    case "AM":
        cmb_true({
            "plate" : plate,
            "description" : "AM車（政府車）"
        });
        return false;
    case "ZG":
        cmb_true({
            "plate" : plate,
            "description" : "ZG車（解放軍駐港部隊）"
        });
        return false;
    case "FU":
    case "FV":
        cmb_true({
            "plate" : plate,
            "description" : "FU/FV車（<strong>可能</strong>是中國左軚車）"
        });
        return false;
    }

    cmb_false(plate);

    return false;
}

let cmb_true = info =>{
    let cmb = document.getElementById("cmb");
    cmb.style.visibility = "visible";
    cmb.classList.add("alert-danger");
    cmb.classList.remove("alert-success");
    cmb.innerHTML = "<strong>CMB plate match!</strong><br>Plate: " + info["plate"] + "<br>Description: " + info["description"] + "<br>";
}

let cmb_false = plate => {
    let cmb = document.getElementById("cmb");
    cmb.style.visibility = "visible";
    cmb.classList.add("alert-success");
    cmb.classList.remove("alert-danger");
    cmb.innerHTML = "<strong>CMB plate not match!</strong><br>Plate: " + plate + "<br>Stay alert and be water my friend!<br>";
}
