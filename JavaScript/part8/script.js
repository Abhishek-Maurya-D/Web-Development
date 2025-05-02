// example 1

document.getElementById('changeTextButton').addEventListener('click', function (){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed.";
});

// example 2

document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight')
});

// Example 3

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("changeOrder").addEventListener('click', function() {
        let coffeeType = document.getElementById("coffeeType");
        coffeeType.textContent = "Espresso";
        coffeeType.style.backgroundColor = "brown";
        coffeeType.style.padding = "5px";
    });
});

// Example 4
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addNewItem").addEventListener("click", function(){
        let newItem = document.createElement('li');
        newItem.textContent = 'Eggs';

        document.getElementById("shoppingList").appendChild(newItem);
    });
});

// Example 5
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("removeLastTask").addEventListener("click", function(){
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    })
});

// Example 6
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("clickMeButton").addEventListener('click', function(){
        alert("ChaiCode")
    })
})

// Example 7
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("teaList").addEventListener('click', function(event){
        if(event.target && event.target.matches('.teaItem')){
            alert("You selected: " + event.target.textContent);
        }
    })
})

//Example 8
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("feedbackForm").addEventListener('submit', function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
    })
})

// Example 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('domStatus').textContent = "DOM Fully Loaded";
})

// Example 10
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("toggleHighlight").addEventListener("click", function(){
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("highlight");
    })
})