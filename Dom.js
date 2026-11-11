let count = 0;
var display = document.getElementById("display");
const inc = () => {
    count++;
    display.innerHTML = count;
}
const dec = () => {
    if(count > 0)
    {
        count --;
    }
    display.innerHTML = count;
}