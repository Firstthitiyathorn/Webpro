// console.log("HI");//not print out why?

document.querySelector("#add-form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("HI");
    // Get form values
    const productName = document.querySelector("#name").value;
    const productId = document.querySelector("#ID").value;
    const productColor = document.querySelector("#color").value;
    const productQuantity = document.querySelector("#q").value;
    const productSize = document.querySelector("#s").value;
    const productPrice = document.querySelector("#price").value;
    const productDes = document.querySelector("#des").value;
    const productPic = document.querySelector("#img").files[0];


    // const formData = new FormData();?????????????
    // formData.append('product_img', productPic);

    // Create product object
    const product = {
        id: productId,
        name: productName,
        color: productColor,
        quantity: productQuantity,
        size: productSize,
        price: productPrice,
        des: productDes,
        pic: productPic.name
    };

    console.log(product)
    // fetch("http://localhost:8134", {
    //         method: "POST",
    //         body: product
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('ERROR');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Success:', data);
    //         // Handle success response
    //         // For example, you might redirect the user to another page
    //         //window.location.href = "/product";
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });

    // window.location.href = "CRUD.html";
});