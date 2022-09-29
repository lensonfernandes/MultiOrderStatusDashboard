



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

        const cardOverallDiv = document.createElement("div");
        // para.innerText = "This is a paragraph";
        //document.body.appendChild(para);
        // cardOverallDiv.classList = "container"
        document.getElementById("card-container").appendChild(cardOverallDiv);

        // let card = document.createElement("div");
        // card.classList = "card"
        // card.style.width = "18rem";
        // card.style.textAlign = "center"
        
        cardOverallDiv.innerHTML = '<div class="card card1 m-2" style="width:18rem; text-align: center;"><img class="card-img-top" src="./burger.jpg" alt="Card image cap"></img>'

        const card_body_div =  document.createElement("div")
        card_body_div.classList = "card-body"
        cardOverallDiv.getElementsByClassName("card")[0].appendChild(card_body_div);
        // document.getElementsByClassName

        const cardTitle = document.createElement("h5")
        cardTitle.classList="card-title"
        cardTitle.innerText="Order No: L001"
        card_body_div.appendChild(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList = "card-text"
        cardText.innerText = "Burger -1 No"
        card_body_div.appendChild(cardText);

        const billButton = document.createElement("button")
        billButton.classList = "btn btn-primary m-3"
        billButton.innerText = "Bill Amount: $12"
        card_body_div.appendChild(billButton);

        const statusButton = document.createElement("button")
        statusButton.classList = "btn btn-success m-3"
        statusButton.innerText = "Order is being prepared"
        card_body_div.appendChild(statusButton)



    }
        

        






    