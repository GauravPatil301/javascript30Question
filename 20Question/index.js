// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
shoppingCart = shoppingCart.filter(item => item !=='Honey')
shoppingCart = shoppingCart.map(item => item === 'Tea' ? 'Green Tea' : item);
console.log(shoppingCart);

// Output: ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']