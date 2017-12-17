Set.prototype.union = function (setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

function printnecktypes() {
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
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_necktypes[i]);
        k.appendChild(t);
        z.appendChild(k);
        
        y.appendChild(z);
        document.getElementById("bynecktype").appendChild(y);
    }
}
printnecktypes();

function printsleevetypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].Sleeve_type);
    }
    var available_sleevetypes = [...new Set(s)];
    for (var i = 0; i < available_sleevetypes.length; i++) {

        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_sleevetypes[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_sleevetypes[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById("bysleevetype").appendChild(y);
    }
}
printsleevetypes();

function printshirttypes() {
    var s = [];
    for (var i = 0; i < jsonproductdata.length; i++) {
        s.push(jsonproductdata[i].shirt_type);
    }
    var available_shirttypes = [...new Set(s)];

    for (var i = 0; i < available_shirttypes.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_shirttypes[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_shirttypes[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById("byshirttype").appendChild(y);
    }
}
printshirttypes();

function printsizes() {
    var result = new Set();
    for (var i = 0; i < jsonproductdata.length; i++) {
        var s = new Set(jsonproductdata[i].size);
        result = result.union(s);
    }
    var available_sizes = [...result];

    for (var i = 0; i < available_sizes.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_sizes[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_sizes[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById("bysize").appendChild(y);
    }
}
printsizes();

function printfits() {
    var result = new Set();
    for (var i = 0; i < jsonproductdata.length; i++) {
        var s = new Set(jsonproductdata[i].fit);
        result = result.union(s);
    }
    var available_fits = [...result];

    for (var i = 0; i < available_fits.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_fits[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_fits[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById("byfit").appendChild(y);
    }
}
printfits();

function printcolors() {
    var result = new Set();
    var s;
    for (var i = 0; i < jsonproductdata.length; i++) {
        s = new Set(jsonproductdata[i].colors);
        result = result.union(s);
    }
    var available_colors = [...result];

    for (var i = 0; i < available_colors.length; i++) {
        var y = document.createElement("LI");
        var z = document.createElement("LABEL");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.setAttribute("id", available_colors[i]);
        x.setAttribute("class", "filters");
        z.appendChild(x);
        var k=document.createElement("span");
        k.setAttribute("class", "label-text");
        var t = document.createTextNode(available_colors[i]);
        k.appendChild(t);
        z.appendChild(k);
        y.appendChild(z);
        document.getElementById("bycolor").appendChild(y);
    }
}
printcolors();

function getCheckedBoxes() {
    var checkboxes = document.getElementsByClassName("filters");
    var checkboxesChecked = [];
    //console.log(checkboxes);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].id);
        }
    }
    //console.log(checkboxesChecked);
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}


function filterfunc() {
    var checkedboxestofilter = getCheckedBoxes();
    var list = [];

    for (i = 0; i < checkedboxestofilter.length; i++) {
        var productList =
            newProductData.filter(
                function (obj) {
                    if (!obj) return false;
                    var p = [];
                    p = p.concat(obj.size, obj.fit, obj.Neck_type, obj.Sleeve_type, obj.colors, obj.shirt_type);
                    return p.includes(checkedboxestofilter[i]);
                }
            );
        list = list.concat(productList);
    }
    //console.log(list);

    list = [...new Set(list)];

    console.log(list);

    list.forEach(drawOneProduct);
}