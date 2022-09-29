

let numberOfOrders = 0

    //   <div class="container"> 

    //   <div class="card card1" style="width: 50px; text-align: center;">
    //      <img class="card-img-top" src="./burger.jpg" alt="Card image cap">
    //      <div class="card-body">
    //           <h5 class="card-title">Order No: L001</h5>
    //           <p class="card-text">Burger -1 No.</p>
    //           <a class="btn btn-primary m-3">Bill Amount: $12</a>
    //           <a  class="btn btn-success m-3">Order is being prepared</a>
    //      </div>
    //    </div>

    let executeOrder = () => {
        numberOfOrders++
	let todaysDate = new Date()
	let orderId = `MP${todaysDate.getFullYear()}${todaysDate.getMonth() + 1}${todaysDate.getDate()}0000${numberOfOrders}`


        // let orderId = document.getElementById("orderId").value;

        createCard(orderId);
        orderStatus(orderId);



    }
        

        






    