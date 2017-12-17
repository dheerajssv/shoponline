function drawOneProduct(ele, index) {
    var obj = ele;

    var str = ("<div class=\"responsive\"><div class=\"gallery\">  <img src=\"" +
        obj.image_url +
        " \" width=\"300\" height=\"200\"></a><div class=\"title\"> " +
        obj.title +
        " </div> <div class=\"desc\">Price: $ " +
        obj.price +
        "</div> </div>  </div>");

    var listDiv = document.getElementById("listbody");

    if (index === 0) {
        listDiv.innerHTML = str;
    }
    else {
        listDiv.innerHTML += str;
    }
}