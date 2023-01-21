        // const fs = require('fs');
        // const json = fs.readFileSync('./item.txt');
        // console.log(json);
        // const item = JSON.parse(json);
        // console.log(item);
        // console.log(item[2]);
        // for (var num = 0; item[num] != undefined; num++ ){
        //     let img = item[num].img;
        //     let name = item[num].name;
        //     document.getElementById("item").innerHTML += '<div class="item" Onclick ="callListItem('+num+')"><img src="../resource/image/product/'+img+'" alt="'+name+'"><p>'+name+'</p></div>'
        // }






        const json = '[{"img":"Outdoor Glazes.png","name":"Outdoor Glazes"},{"img":"Atlantis Pots.png","name":"Atlantis Pots"},{"img":"Bamboo.jpg","name":"Bamboo"},{"img":"Black & sand blasted Clays.png","name":"Black & sand blasted Clays"},{"img":"Decoration.png","name":"Decoration"},{"img":"Fountains.jpg","name":"Fountains"},{"img":"Indoor Glazes.png","name":"Indoor Glazes"},{"img":"Lacquers.jpg","name":"Lacquers"},{"img":"Painting Pots.png","name":"Painting Pots"},{"img":"Pot feets.png","name":"Pot feets"},{"img":"Terracotta Clays.png","name":"Terracotta Clays"},{"img":"Terrazzo & Cement Pots.png","name":"Terrazzo & Cement Pots"}]';
        const item = JSON.parse(json);
        console.log(item);
        console.log(item[2]);
        for (var num = 0; item[num] != undefined; num++ ){
            let img = item[num].img;
            let name = item[num].name;
            document.getElementById("item").innerHTML += '<div class="item" Onclick ="callListItem('+num+')"><img src="../resource/image/product/'+img+'" alt="'+name+'"><p>'+name+'</p></div>'
        }