function orders(product, quantity) {
    
    let totalPrice=0;

    switch (product) {
        case 'coffee': 
        totalPrice=quantity*1.50 ;           
            break;
        case 'coke':
            totalPrice=quantity*1.40;
            break;
        case 'water':
        totalPrice=quantity*1.00;
        break;
        case 'snacks':
            totalPrice=quantity*2.00;
            break;
        default:
            break;
    }

    console.log(totalPrice.toFixed(2));
}
orders("coffee", 2  )

