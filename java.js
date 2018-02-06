{


    
    function generateResultElement() {
        let newElement = document.createElement("div");
        newElement.className = "result";

        return newElement;
    }

    function problemOne() {

        let destination = document.getElementById("div1");

        for (let i = 1; i <= 20; i++) {
            // Create a div, with class "bar", and set the width to 100px.
            let newElement = generateResultElement();

            // Place a text label inside the new div.
            let newText = document.createTextNode(i + ', ');
            newElement.appendChild(newText);

            // Put the new div on the page inside the existing element "d1".
            destination.appendChild(newElement);
        }

    }

    function problemTwo() {

        let destination = document.getElementById("div2");

        for (let i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                // Create a div, with class "bar", and set the width to 100px.
                var newElement = generateResultElement();   

                // Place a text label inside the new div.
                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                // Put the new div on the page inside the existing element "d1".
                destination.appendChild(newElement);
            }
        }

    }

    function problemThree () {

        let destination = document.getElementById("div3");

        for (let i = 1; i <= 20; i++) {
            if (i % 2 != 0) {
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            }
        }
        
    }

    function problemFour () {

        let destination = document.getElementById("div4");

        for (let i = 0; i <= 100; i+=5) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    function problemFive () {

        let destination = document.getElementById("div5");

        for (let i = 1; i <= 10; i++) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i*i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    function problemSix () {

        let destination = document.getElementById("div6");

        for (let i = 20; i > 0; i-=1) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    function problemSeven () {

        let destination = document.getElementById("div7");

        for (let i = 20; i > 0; i-=1) {
            if (i % 2 == 0) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
            }   
            
        }
        
    }

    function problemEight () {

        let destination = document.getElementById("div8");

        for (let i = 20; i > 0; i-=1) {
            if (i % 2 != 0) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
            }   
            
        }
        
    }

    function problemNine () {

        let destination = document.getElementById("div9");

        for (let i = 100; i > 0; i-=5) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    function problemTen () {

        let destination = document.getElementById("div10");

        for (let i = 10; i >= 0; i--) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(i*i + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


    function problemEleven () {

        let destination = document.getElementById("div11");

        for (let i = 0; i < sampleArray.length; i++) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(sampleArray[i] + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            
        }
        
    }

    function problemTwelve () {

        let destination = document.getElementById("div12");

        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i] % 2 ==0) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(sampleArray[i] + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            }      
        }
        
    }

    function problemThirteen () {

        let destination = document.getElementById("div13");

        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i] % 2 !=0) {
            
               
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(sampleArray[i] + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
            }      
        }
        
    }

    function problemFourteen () {

        let destination = document.getElementById("div14");

        for (let i = 0; i < sampleArray.length; i++) {
           
                var newElement = generateResultElement();   

                let newNum = document.createTextNode(sampleArray[i] * sampleArray[i] + ', ');
                newElement.appendChild(newNum);

                destination.appendChild(newElement);
        
                  
        }
        
    }

    function problemFifteen() {

        let destination = document.getElementById("div15");
        let sum = 0
        for (let i = 1; i <= 20; i++) {
            sum += i;
            }
            
            let newElement = generateResultElement();

            let newText = document.createTextNode(sum);
            newElement.appendChild(newText);

            destination.appendChild(newElement);
            
            
        

    }

    function problemSixteen() {

        let destination = document.getElementById("div16");
        let sum = 0
        for (let i = 0; i < sampleArray.length; sum += sampleArray[i++]) {
            }
            
            let newElement = generateResultElement();

            let newText = document.createTextNode(sum);
            newElement.appendChild(newText);

            destination.appendChild(newElement);
            
            
        

    }

    function problemSeventeen() {

        let destination = document.getElementById("div17");
        
        for (let i = 0; i < sampleArray.length; i++) {
            var min=Math.min(...sampleArray)
            }
            
            let newElement = generateResultElement();

            let newText = document.createTextNode(min);
            newElement.appendChild(newText);

            destination.appendChild(newElement);
            
            
        

    }

    function problemEighteen() {

        let destination = document.getElementById("div18");
        
        for (let i = 0; i < sampleArray.length; i++) {
            var max=Math.max(...sampleArray)
            }
            
            let newElement = generateResultElement();

            let newText = document.createTextNode(max);
            newElement.appendChild(newText);

            destination.appendChild(newElement);
            
            
        

    }

    function problemNineteen() {

        
    

        for (let i = 1; i <= 20; i++) {
            
            let newBox = document.createElement("div");
            newBox.className = "result1";

            let newText = document.createTextNode(i + ', ');
            newBox.appendChild(newText);

            let destination = document.getElementById("div19");
            
            destination.appendChild(newBox);
        }

    }

    



    problemOne();
    problemTwo();
    problemThree();
    problemFour();
    problemFive();
    problemSix();
    problemSeven();
    problemEight();
    problemNine();
    problemTen();
    problemEleven();
    problemTwelve();
    problemThirteen();
    problemFourteen();
    problemFifteen();
    problemSixteen();
    problemSeventeen()
    problemEighteen();
    problemNineteen();


}