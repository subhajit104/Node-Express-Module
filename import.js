//In this section we are going  to make a flip coin case.
console.log('import.js is started');
const r = require;
// const sayHi = r('./export');
// console.log(sayHi); 
var coinState = true;
console.log('-------------------------------------------------');
console.log('Creating a FlipCoin App');
const express = r('express');
const app = express();

app.get('/',(req,res) => {
	res.send('Creating A FlipCoin App');
});

//get the coin.
app.get('/getCoin',(req,res) => {
  res.send((coinState == true) ? 'Heads' : 'Tails'); 
});
app.get('/flipCoin',(req,res) => {
	// var  position = Math.random();
	// if(position < 0.5){
	// 	res.send('head');
	// } else {
	// 	res.send('tail');
	// }
    // this is single line code to take a boolean value randomly.
	coinState = !!Math.round(Math.random());
	res.send('Done Fliped');
	//another way to do that 
	// coinState = (Math.random() < 0.5) ? false : true ;
    // anoher a way to that
    //   coinState = Math.round(Math.random()) && true ; 
})
app.listen(3000,() => {
    console.log('Exaple App listening a port 3000!');
});