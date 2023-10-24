window.promises = [];

function createRandomPromise(){

   


   return  new Promise((resolve) =>{

      let randomTime =  Math.floor(Math.random()*(5000 -1000) + 1000);
	
      setTimeout(() => {
         resolve(`promise resolved after ${randomTime} millisec`);
      },randomTime);
      
   })
}


 
for(let i=0;i<5;i++){
   promises.push(createRandomPromise());
}

let displayDiv = document.getElementById("output");



Promise.any(promises)
.then((result) => displayDiv.innerText= result )
.catch((err) => console.log(err));

// Do not change the code above this
// add your promises to the array `promises`
