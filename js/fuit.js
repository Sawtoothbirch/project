 
    
    

    let lives=3;
    while (lives > 0) {
        console.log("Lives lost")
        lives--;
    }

    do {
        
            console.log("try again");
            break;
    } while (lives > 0);
    let colors = ['red', 'green', 'blue'];
    for (let color of colors) {
        console.log(color);
    }
    for (let index in colors) {
        console.log(index);
    }
    // named..function
    function add(a,b){
        return a + b;
    }
    console.log(add(5, 7));

    // anonymous function
    setTimeout(function(){
        console.log("yes");

    }, 1000);
    console.log(add(10, 20));
    function greeting(m){
        return function(n){
            console.log(m + " " + n);
        }
    }
    const x=greeting("Hello");
    const y=greeting("Bonjour");
    x("Alice");
    y("Bob");
    function multiply(a){
        return function(b){
            return a * b;
        }
        }
        multiply(5)
        console.log(multiply(5)(4));
        function w(...v){
            return v.reduce((acc, c) => acc + c, 0);

        }
        console.log(w(1, 2, 3, 4, 5));
      const p="Kaya"
      P=p.toUpperCase();
      console.log(P);
      let fruits=["mango", "banana", "apple"]
      fruits.push("orange");
      console.log(fruits);
      let numbers=[15,20,30,40]
      function getSum(){
      return numbers.reduce((acc, c) => acc + c, 0);
      }
      console.log(numbers);
      const me={
        fistname:"John",
        lastname:"Doe",
        age:25,

      }
      function getFullName(){
        return me.fistname + " " + me.lastname;

      }
        console.log(getFullName());
        let string=" hello world "
        console.log(string.trim());
        function normal(v){
            return function(l){
                return v+" "+l;
            }
            }
            const ui=normal("Good Morning");
            ui("Everyone");
            console.log(ui("Everyone"));
            //Write an arrow function that takes a number and returns its square.
           function square (n){
            return ((n)=> n*n)(n);
              }
            console.log(square(6));
            
            setTimeout(function (){
                console.log(1+6);

            }
            ,2000,1,6);
            ( function (){
                console.log("Hello from IIFEThis is an IIFE");
            })();
            function stuff(ok){
                return function(ko){
                    return 5+ok;
                }
            }
         let ok=30;
            console.log(stuff(ok)(10));