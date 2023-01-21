function callback() {
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/itemGroup.json")
    .then((res) => res.json())
    .then((data) => {
      let item = data;
      for (var num = 0; item[num] != undefined; num++) {
        let img = item[num].img;
        let name = item[num].name;
        document.getElementById("item").innerHTML +=
          '<div class="item" Onclick ="callListItem(\'' +
          name +
          '\')"><img src="../resource/image/product/' +
          img +
          '" alt="' +
          name +
          '"><p>' +
          name +
          "</p></div>";
        document.getElementById("nav").innerHTML +=
          "<li Onclick=\"callListItem('" + name + "')\" >" + name + "</li>";
      }
    });
}

callback();

function callListItem(name) {
  document.getElementById("link").innerHTML =
    '<h2 onclick="callback()">PRODUCTS</h2>' + name;
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/" + name + ".json")
    .then((res) => res.json())
    .then((data) => {
      let item = data;
      for (var num = 0; data[num] != undefined; num++) {
        let img = data[num].img;
        let name = data[num].name;
        document.getElementById("item").innerHTML +=
          '<div class="item" Onclick ="callItem(' +
          num +
          ')"><img src="../resource/image/product/glazed/' +
          img +
          '" alt="' +
          name +
          '"><p>' +
          name +
          "</p></div>";
      }
    });
}
function callItem(name){

}