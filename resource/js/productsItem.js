        fetch('../resource/js/item.json')
            .then(res => res.json())
            .then(data =>{
                const item = data;
                for (var num = 0; item[num] != undefined; num++ ){
                    let img = item[num].img;
                    let name = item[num].name;
                    document.getElementById("item").innerHTML += '<div class="item" Onclick ="callListItem('+num+')"><img src="../resource/image/product/'+img+'" alt="'+name+'"><p>'+name+'</p></div>'
                }
            })