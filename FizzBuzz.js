function fizzBuzz(){
    //console.log("hola")

    const items = [];
   for (let i = 0; i < 101;i++){
       if ( i % 3 === 0 ){ 
        items.push("fizz")
       }
       else if ( i % 5 === 0  ){
        items.push("buzz")

       }else {
        items.push(i)
       } 

   }

    return items
}

module.exports =  {fizzBuzz}

3 