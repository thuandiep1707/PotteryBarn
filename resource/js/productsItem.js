function callback() {
  document.getElementById("link").innerHTML =
    '<h2 onclick="callback()">PRODUCTS</h2>';
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

callListItem('Lacquers');

function callListItem(name) {
  document.getElementById("link").innerHTML =
    '<h2 onclick="callback()">PRODUCTS</h2> <h4 onclick="callListItem(\'' +
    name +
    "')\">" +
    name +
    "</h4>";
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/" + name + ".json")
    .then((res) => res.json())
    .then((data) => {
      for (var num = 0; data[num] != undefined; num++) {
        let img = data[num].img;
        let Nname = data[num].name;
        document.getElementById("item").innerHTML +=
          '<div class="item" Onclick ="callItem(' +
          num +
          ",'" +
          name +
          "'" +
          ')"><img src="../resource/image/product/'+name+'/' +
          img +
          '" alt="' +
          Nname +
          '"><p>' +
          Nname +
          "</p></div>";
      }
    });
}
function callItem(num, name) {
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/" + name + ".json")
    .then((res) => res.json())
    .then((data) => {
      let item = data;
      document.getElementById("item").innerHTML +=
        '<div class="product-item"><div class="item__img"><img src="../resource/image/product/'+name+'/' +
        item[num].name +
        '.jpg" alt="' +
        name +
        '"></div><div class="item__infor"><div class="name">' +
        item[num].name +
        "</div><h3>Product info</h3><h3>Size: " +
        item[num].size +
        "</h3><h3>Packing: " +
        item[num].packing +
        "</h3><h3>Color: " +
        item[num].color +
        '</h3></div></div><div class="descript"><div class="name">Mô Tả:</div><p>' +
        item[num].descript +
        "</p></div>";
    });
}
