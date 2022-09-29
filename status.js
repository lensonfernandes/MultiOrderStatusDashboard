






//  <button class="btn btn-success" type="button">Order Placed</button>
//  <button class="btn btn-success" type="button">Verifying Order Details</button>
//  <button class="btn btn-success" type="button">Checking Inventory</button>
//  <button class="btn btn-success" type="button">25% of Items Fetched</button>
//  <button class="btn btn-success" type="button">50% of Items Fetched</button>
//  <button class="btn btn-success" type="button">75% of Items Fetched</button>
//  <button class="btn btn-success" type="button">All Items Fetched</button>
//  <button class="btn btn-success" type="button">Order Packed and Ready for Pick Up</button>




let orderStatus = async (orderId) => {
    let orderElement = document.getElementById(orderId)
    console.log(orderElement)
    // orderIdValue = document.getElementById('orderId').value;
    // console.log(orderIdValue)
    // document.getElementById('order-no-display').innerText = `Status for Order No. ${orderIdValue}`
	// document.getElementById('order-no-display').style.display = 'block'


    // console.log('This is Test message')
    // console.log('This is Message 2')
    //  await setTimeout(()=>{ console.log('This is Message Inside SetTime')},5000)
   
    // console.log('This is Message 3')
    // console.log('This is Message 4')


    let orderPlaced = () => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Order Placed')
            orderElement.innerText = "Order Placed"
            resolve();
        },1000)
    })
    
    
    let verifyOrder = () => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Verifying Order Details')
            // document.getElementById(orderId).innerText = "Verifying Order Details"
            orderElement.innerText = "Verifying Order Details"
    
            resolve();
        },2000)
    })
    
    
    let checkInventory = () => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Checking Inventory')
            orderElement.innerText = "Checking Inventory"
    
            resolve();
        },5000)
    })
    
    let progress25 =() =>  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('25% of items fetched')
            orderElement.innerText = "25% of items fetched"
    
            resolve();
        },3000)
    })
    
    
    let progress50 =() =>  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('50% of items fetched')
            orderElement.innerText = "50% of items fetched"
    
            resolve();
        },3000)
    })
    
    let progress75 =() =>  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('75% of items fetched')
            orderElement.innerText = "75% of items fetched"
    
            resolve();
        },3000)
    })
    
    let progress100 =() =>  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('All items fetched')
            orderElement.innerText = "All items fetched"
    
            resolve();
        },3000)
    })
    


    try{
        await orderPlaced();
        await verifyOrder();
        await checkInventory();
        await progress25();
        await progress50();
        await progress75();
        await progress100();
        
        orderElement.innerText = "Order packed and is Ready"

    }
    catch(e)
    {
        console.log(e);
        console.log('Inside Catch Block')
    }
}