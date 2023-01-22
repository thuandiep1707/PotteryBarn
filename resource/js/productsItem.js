function callback() {
  document.getElementById("link").innerHTML =
    '<h2 onclick="callback()">PRODUCTS</h2>'
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
    '<h2 onclick="callback()">PRODUCTS</h2> <h4 onclick="callListItem(\''+name+'\')">'+ name+'</h4>';
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/" + name + ".json")
    .then((res) => res.json())
    .then((data) => {
      for (var num = 0; data[num] != undefined; num++) {
        let img = data[num].img;
        let Nname = data[num].name;
        document.getElementById("item").innerHTML +=
          '<div class="item" Onclick ="callItem(' +
          num + ",'"+name+"'"+
          ')"><img src="../resource/image/product/glazed/' +
          img +
          '" alt="' +
          Nname +
          '"><p>' +
          Nname +
          "</p></div>";
      }
    });
}
function callItem(num,name){
  document.getElementById("item").innerHTML = "";
  fetch("../resource/js/"+name+".json")
  .then((res) => res.json())
  .then((data) => {
    let item =data;
    alert("Thành công");
    document.getElementById('item').innerHTML += "abcsaskdhkasjd";
  });
}