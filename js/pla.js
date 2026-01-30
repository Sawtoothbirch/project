 let fruit = ['apple', 'banana', 'orange', 'grape'];
    console.log(fruit.length); 
    for (let i = 0; i < fruit.length; i++) {
        console.log(fruit[i]);
    }
    
    fruit.push('kiwi');
    console.log(fruit);

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
        console.log("Anonymous function called");

    }, 1000);
    
