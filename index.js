let submit = document.getElementById("submit")
let reset = document.getElementById("reset")

submit.addEventListener("click", makeRequest);

// function makeRequest() {
//     let input = document.getElementById("input").value;
//     let output = document.getElementById("output");

//     console.log("button clicked");

//     console.log("DOB is : " + input);
//     function calcAge(dateString) {
//         var birthday = +new Date(dateString);
//         return Math.floor((Date.now() - birthday) / (86400000))
//     }
//     output.innerHTML = `You are ${calcAge(input)} days old.`

// }
// reset.addEventListener("click", resetBtn)

// function resetBtn() {
//     document.getElementById("output").innerHTML = `Select DOB again from the input.`
//     document.getElementById("input").value = '';
// }


function makeRequest() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");

    function calcAge(dateString) {
        var birthday = +new Date(dateString); //This will return the Date (in string) into milliseconds.
        let days = Math.floor((Date.now() - birthday) / (86400000)); //Milliseconds divide by (1000 * 60 * 60 * 24)= Days.
     
        if (days >= 0) {
            output.innerHTML = `You are ${days} days old.`
        } else if (input == 0) {
            output.innerHTML = `Select DOB....`
        } else {
            output.innerHTML = `Enter valid DOB....`
        }
    }
    calcAge(input);
}

reset.addEventListener("click", resetBtn)
function resetBtn() {
    document.getElementById("output").innerHTML = `Select DOB again from the input.`
    document.getElementById("input").value = '';
}

