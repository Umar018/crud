const checkout = [
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true },
];

function sumWithTax(receipt){
    let total = 0
    for(let item of receipt){
        let cost = item.prc * item.qty
        if(item.taxable === true){
            cost *= 1.06
        }
        total += cost
    }
    return Number(total.toFixed(2));
}

console.log(sumWithTax(checkout)); 
  
  


