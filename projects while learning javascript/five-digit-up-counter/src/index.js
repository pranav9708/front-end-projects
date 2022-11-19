var countInterval;
function startCounter() {

    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector("#fifth .current");
    var nextNo = document.querySelector("#fifth .next");
    var currentNo2 = document.querySelector("#fourth .current");
    var nextNo2 = document.querySelector("#fourth .next");
    var currentNo3 = document.querySelector("#third .current");
    var nextNo3 = document.querySelector("#third .next");
    var currentNo4 = document.querySelector("#second .current");
    var nextNo4 = document.querySelector("#second .next");
    var currentNo5 = document.querySelector("#first .current");
    var nextNo5 = document.querySelector("#first .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);
    resetNumbers(currentNo2, nextNo2);
    resetNumbers(currentNo3, nextNo3);
    resetNumbers(currentNo4, nextNo4);
    resetNumbers(currentNo5, nextNo5);

    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }if(nextNo.innerText>9&& nextNo2.innerText>9 && nextNo3.innerText>9 && nextNo4.innerText>9){
            increaseCount(currentNo5,nextNo5);
            nextNo4.innerText=0;
            increaseCount(currentNo4,nextNo4);
            nextNo3.innerText=0;
            increaseCount(currentNo3, nextNo3);
            nextNo2.innerText=0;
            increaseCount(currentNo2, nextNo2);
            nextNo.innerText=0;
        }else if(nextNo.innerText>9&& nextNo2.innerText>9 && nextNo3.innerText>9){
            increaseCount(currentNo4,nextNo4);
            nextNo3.innerText=0;
            increaseCount(currentNo3, nextNo3);
            nextNo2.innerText=0;
            increaseCount(currentNo2, nextNo2);
            nextNo.innerText=0;
        }else if(nextNo.innerText>9 && nextNo2.innerText>9){
        
            increaseCount(currentNo3, nextNo3);
            nextNo2.innerText=0;
            increaseCount(currentNo2, nextNo2);
            nextNo.innerText=0;
        }else if(nextNo.innerText>9){
            increaseCount(currentNo2, nextNo2);
            nextNo.innerText=0;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);
}

function resetNumbers(currentNo, nextNo, end) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);
}
