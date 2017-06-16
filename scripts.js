var lines;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        lines = 'line';
    } else {
        lines = 'lines';
    }
    console.log(counter+" "+lines+" of code in the file.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+lines+" of code in the file.");
    }
    console.log(counter+" "+lines+" of code.");
    console.log("strikes one out.");
    console.log("clears it all out.");
    if (counter == 1) {
        console.log("No more lines of code in the file.");
    }
}
 