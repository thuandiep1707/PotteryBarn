function Top() {
  window.scrollTo(0, 320);
}
function callback() {
  Top();
  document.getElementById("link").innerHTML =
    '<h2 onclick="callback()">PRODUCTS</h2>';
  document.getElementById("item").innerHTML = "";
  document.getElementById("nav").innerHTML = "";
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
  Top();
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
      var num = 0;
      for (num; data[num] != undefined; num++) {
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
  Top();
  document.getElementById("item").innerHTML = "";
  document.getElementById('list-line').innerHTML ="";
  fetch("../resource/js/" + name + ".json")
    .then((res) => res.json())
    .then((data) => {
      let itemArr=[];
      let amount = 0;
      let item = data;
      document.getElementById("item").innerHTML +=
        '<div class="product-item"><div class="item__img"><img src="../resource/image/product/'+name+'/' +
        item[num].name +
        '.jpg" alt="' +
        name +
        '"></div><div class="item__infor"><div class="name">' +
        item[num].name +
        "</div><h3>Product info</h3><h3>" +
        item[num].size +
        "</h3><h3>Packing: " +
        item[num].packing +
        "</h3><h3>Color: " +
        item[num].color +
        '</h3></div></div><div class="descript"><div class="name">Mô Tả:</div><p>' +
        item[num].descript +
        "</p></div>";
      while (data[amount] != undefined){
        amount ++;
      }
      let num4 = 0;
      while (num4 < 4){
        let numItem = Math.floor(Math.random()*amount) ;
        if (!itemArr.includes(numItem)){
          itemArr.push(numItem);
          num4 ++;
        }
      }
      for (i in itemArr){
        let numL =itemArr[i];
        let img = data[numL].img;
        let Nname = data[numL].name;
        console.log(itemArr[i]);
        document.getElementById('list-line').innerHTML += '<div class="line-item" Onclick ="callItem(' +
        numL +
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
