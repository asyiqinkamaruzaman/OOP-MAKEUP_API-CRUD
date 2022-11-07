
function buttonClicked(){

    var brand = document.getElementById("brand_input").value
    var cat = document.getElementById("category_input").value

    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&category=${cat}`)

    
    .then((response) => response.json())
    .then((data) => {

        console.log(data); //output the API into console
        console.log(data[0].brand)
        console.log(data[0].category)
        console.log(data[0].name)
        console.log(data[0].description)
        console.log(data[0].price)

        for(var i =0; i<data.length;i++){
            if (data[i].category !=null && data[i].category==cat) {
                console.log(data[i].category)
                var newLi = document.createElement("li");
                // assign the property into newLi
                newLi.innerHTML = `Brand:${data[i].brand}  <br>Product:${data[i].name}  <br>Category:${data[i].category} 
                <br>Description:${data[i].description} <br>Price:${data[i].price}`;
                // end to ul
                document.getElementById("list").appendChild(newLi);}
        }

      
        ;
    })
}

