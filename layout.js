function drawOneProduct(ele, index) {
    var obj = ele;
    var listDiv = document.getElementById("listbody");
    var x = document.createElement("div");
    x.setAttribute("class", "responsive");
    var y = document.createElement("div");
    y.setAttribute("class", "gallery");
    var image = document.createElement("img");
    image.setAttribute("src", obj.available_colors[0].image_url);
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    y.appendChild(image);

    console.log(obj.available_colors.length);
    if (obj.available_colors.length > 1) {
        var k = document.createElement("div");
        k.setAttribute("class", "gal");
        for (var i = 0; i < obj.available_colors.length; i++) {
            var images = document.createElement("img");
            console.log(obj.available_colors[i].image_url);
            images.setAttribute("src", obj.available_colors[i].image_url);
            images.setAttribute("width", "300");
            images.setAttribute("height", "200");
            k.appendChild(images);
        }

        y.appendChild(k);
    }

    var z = document.createElement("div");
    z.setAttribute("class", "title");
    var t = document.createTextNode(obj.title);
    z.appendChild(t);
    y.appendChild(z);
    var p = document.createElement("div");
    p.setAttribute("class", "desc");
    var pr = document.createTextNode("Price $" + obj.price);
    p.appendChild(pr);
    y.appendChild(p);
    x.appendChild(y);


    listDiv.appendChild(x);




    //initially developed
    // var str = ("<div class=\"responsive\"><div class=\"gallery\">  <img src=\"" +
    // obj.available_colors[0].image_url +
    // " \" width=\"300\" height=\"200\">"+
    // "<div class=\"title\"> " +
    // obj.title +
    // " </div> <div class=\"desc\">Price: $ " +
    // obj.price +
    // "</div> </div>  </div>");

    // next

    
    // var str = ("<div class=\"responsive\"><div class=\"gallery\"><div id='"+obj.title+" '>  <img src=\"" +
    //     obj.available_colors[0].image_url +
    //     " \" width=\"300\" height=\"200\"></div>"+

    //     "<div class=\"gal\"> " +

    //     " <img src=\"" + obj.available_colors[1].image_url + 
    //     " \" width=\"60\" height=\"40\" onclick=\"image(this)\">  " +
    //     " <img src=\"" + obj.available_colors[2].image_url + 
    //     " \" width=\"60\" height=\"40\" onclick=\"image(this,this)\">  " +





    //     "</div>"+

    //     "<div class=\"title\"> " +
    //     obj.title +
    //     " </div> <div class=\"desc\">Price: $" +
    //     obj.price +
    //     "</div> </div>  </div>");


    // var listDiv = document.getElementById("listbody");
    // if (index === 0) {
    //     listDiv.innerHTML = str;
    // }
    // else {
    //     listDiv.innerHTML += str;
    // }
}