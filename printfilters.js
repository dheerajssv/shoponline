Set.prototype.union = function (setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

/*function printnecktypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].Neck_type);
    }
    var available_necktypes = [...new Set(s)];

    for (var i = 0; i < available_necktypes.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_necktypes[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k = document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_necktypes[i]);
        k.appendChild(t);
        z.appendChild(k);

        y.appendChild(z);
        document.getElementById("bynecktype").appendChild(y);
    }
} */

function loadfilters() {
    printnecktypes();
    printsleevetypes();
    printshirttypes();
    printsizes();
    printfits();
    printcolors();
}


function printnecktypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].Neck_type);
    }
    return print([...new Set(s)], "bynecktype");
}

function printsleevetypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].Sleeve_type);
    }
    return print([...new Set(s)], "bysleevetype");
}

function printshirttypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].shirt_type);
    }
    return print([...new Set(s)], "byshirttype");
}

function printsizes() {
    var result = new Set();
    for (var i = 0; i < jsonproductdata.length; i++) {
        var s = new Set(jsonproductdata[i].size);
        result = result.union(s);
    }
    return print([...result], "bysize");
}

function printfits() {
    var result = new Set();
    for (var i = 0; i < jsonproductdata.length; i++) {
        var s = new Set(jsonproductdata[i].fit);
        result = result.union(s);
    }
    return print([...result], "byfit");
}

function printcolors() {
    var result = new Set();
    var s;
    for (var i = 0; i < jsonproductdata.length; i++) {
        for (var j = 0; j < jsonproductdata[i].available_colors.length; j++) {
            s = new Set(jsonproductdata[i].available_colors[j].colors);
            //console.log(s);
            result = result.union(s);
        }
    }
    return print([...result], "bycolor");
}

function print(availabletypes, divid) {
    for (var i = 0; i < availabletypes.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", availabletypes[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k = document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(availabletypes[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById(divid).appendChild(y);
    }
}

function getCheckedBoxes() {
    var checkboxes = document.getElementsByClassName("filters");
    var checkboxesChecked = [];
    console.log(checkboxes);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].id);
        }
    }
    console.log(checkboxesChecked);
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function filterfunc() {

    var checkedboxestofilter = getCheckedBoxes();
    var list = [];
    document.getElementById("displayfilteredby").innerHTML = "Filtered by " + checkedboxestofilter;
    for (i = 0; i < checkedboxestofilter.length; i++) {
        var productList =
            newProductData.filter(
                function (obj) {
                    if (!obj) return false;
                    var p = [];
                    var s = [];
                    for (var j = 0; j < obj.available_colors.length; j++) {
                        s = s.concat(obj.available_colors[j].colors);
                        console.log(s);
                    }
                    p = p.concat(obj.size, obj.fit, obj.Neck_type, obj.Sleeve_type, s, obj.shirt_type);
                    console.log(p);
                    return p.includes(checkedboxestofilter[i]);
                }
            );

        list = list.concat(productList);
    }
    //console.log(list);

    list = [...new Set(list)];

    console.log(list);
    document.getElementById("listbody").innerHTML = "";

    list.forEach(drawOneProduct);
}