const { fizzBuzz } = require("../FizzBuzz.js");

//import { fizzBuzz } from "../FizzBuzz.js";


describe ("FizzBuzz", ()=> {

it( "return 100 items", ()=> {

//Arranges 
const expectValue = 101
//act 
const result = fizzBuzz ()
//assert
expect(result.length).toBe(expectValue);


})

xit( "the last position is a number 100 ", ()=> {

    //Arranges 
    const expectValue = 100
    //act 
    const result = fizzBuzz ()
    //assert
    expect(result[100]).toBe(expectValue);
    
    
    })

    
it( "when number is 3 write fizz ", ()=> {

    //Arranges 
    const expectValue = "fizz"
    //act 
    const result = fizzBuzz ()
    //assert
    expect(result[3]).toBe(expectValue);
    
    })
    it( "when number is 6 fizz ", ()=> {

        //Arranges 
        const expectValue = "fizz"
        //act 
        const result = fizzBuzz ()
        //assert
        expect(result[6]).toBe(expectValue);
        
        })

     it( "when number is 6 fizz ", ()=> {

        //Arranges 
        const expectValue = "fizz"
        //act 
        const result = fizzBuzz ()
        //assert
        expect(result[6]).toBe(expectValue);
        
        })


        it( "when number is 5 write buzz  ", ()=> {

            //Arranges 
            const expectValue = "buzz"
            //act 
            const result = fizzBuzz ()
            //assert
            expect(result[5]).toBe(expectValue);
            
            })

            it( "when number is 10 write buzz  ", ()=> {

                //Arranges 
                const expectValue = "buzz"
                //act 
                const result = fizzBuzz ()
                //assert
                expect(result[10]).toBe(expectValue);
                
                })



})
