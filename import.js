//In this section we are going  to make a flip coin case.
console.log('import.js is started');
const r = require;
const fs = r('fs');
const express = r('express');
const app = express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

var coinState = true;
console.log('-------------------------------------------------');
console.log('Creating a FlipCoin App');

app.use((req,res,next) => {
	
	console.log("ohh");
	var string = `this is ${req.method} ${req.url} \n`;
	fs.appendFile('server.url',string,(error)=>{
		if(error){
			console.log('unable to connect the server.log');
		}
	})
	next();
});

app.get('/',(req,res) => {
	res.render('home.html');
});

//get the coin.
app.get('/getCoinState',(req,res) => {
  var coin = coinState == true ? 'Heads' : 'tail' ;
  res.render('getCoinState.html', {
  	coinState:coin
  });
});

app.get('/flipCoin',(req,res) => {
   coinState = !!Math.round(Math.random());
   res.render('flipCoin.html');
});

app.listen(3000,() => {
    console.log('Exaple App listening a port 3000!');
});


	// var  position = Math.random();
	// if(position < 0.5){
	// 	res.send('head');
	// } else {
	// 	res.send('tail');
	// }
    // this is single line code to take a boolean value randomly.
	// coinState = !!Math.round(Math.random());
	// res.send('Done Fliped');
	//another way to do that 
	// coinState = (Math.random() < 0.5) ? false : true ;
    // anoher a way to that
    //   coinState = Math.round(Math.random()) && true ; 