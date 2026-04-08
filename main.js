/*Function to check and classify electricity consumption*/
function checkConsumption() {
    /*Value from input field*/
    let value = document.getElementById('consumption').value;
    /*Classification*/
    if (value >= 0 && value <= 100) {
        window.alert("Lifeline Consumer: Discounted electricity rates.");
    } else if (value > 100 && value <= 200) {
        window.alert("Low Consumption: Normal residential rate.");
    } else if (value > 200 && value <= 300) {
        window.alert("Average Consumption: Typical electricity usage.");
    } else if (value > 300 && value <= 500) {
        window.alert("High Consumption: Higher electricity usage.");
    } else if (value > 500) {
        window.alert("Very High Consumption: Heavy electricity users.");
    } else {
        window.alert("Invalid input. Please enter a non-negative number.");
    }
}