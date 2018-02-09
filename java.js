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

    function problemTwenty () {

        let destination = document.getElementById("div20");
        let divWidth = 100;
        for (let i = 0; i <= 20; i++) {

                let newElement1 = document.createElement("div");
                newElement1.className = "result2"; 
            
                newElement1.style.width = divWidth + "px";
                divWidth+=5;  

                let newNum = document.createTextNode(i + ', ');
                newElement1.appendChild(newNum);

                destination.appendChild(newElement1);
        
            
        }
        
    }

    function problemTwentyOne () {

        let destination = document.getElementById('div21')
        
        for (let i=0; i <= 20; i++) {

            let divWidth = sampleArray[i]

            let newElement2 = document.createElement ('div');
            newElement2.className = "result3";

            newElement2.style.width = divWidth + "px";

            let newNum = document.createTextNode(i + ', ');
            newElement2.appendChild(newNum);

            destination.appendChild(newElement2);
        }
    }

    function problemTwentyTwo () {

        let destination = document.getElementById('div22')

        for (let i=0; i <= 20; i++) {

            let newElement3 = document.createElement ('div');
            newElement3.className = 'result4'

            if (i % 2 === 0) {
                newElement3.style.background = 'red'
                
                let newNum=document.createTextNode(i + ', ');
                newElement3.appendChild(newNum);

                destination.appendChild(newElement3);
            }

            else if (i % 2 != 0) {
                newElement3.style.background = 'gray'
                
                let newNum=document.createTextNode(i + ', ');
                newElement3.appendChild(newNum);

                destination.appendChild(newElement3);
            }

            
        }
    }

    function problemTwentyThree () {

        let destination = document.getElementById('div23')

        for (let i=0; i <= 20; i++) {

            let divWidth = sampleArray[i]

            let newElement4 = document.createElement ('div');
            newElement4.className = "result5";

            if (i % 2 === 0) {

                newElement4.style.width = divWidth + "px";
                newElement4.style.background = 'red';

                let newNum = document.createTextNode(i + ', ');
                newElement4.appendChild(newNum);

                destination.appendChild(newElement4);

            }

            else if (i % 2 != 0) {

                newElement4.style.width = divWidth + "px";
                newElement4.style.background = 'gray';

                let newNum = document.createTextNode(i + ', ');
                newElement4.appendChild(newNum);

                destination.appendChild(newElement4);
            }

            
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
    problemTwenty();
    problemTwentyOne();
    problemTwentyTwo();
    problemTwentyThree();


}