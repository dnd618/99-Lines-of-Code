var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'friend';
    } else {
        bottles = 'friends';
    }
    console.log(counter+" "+friends+" of codes in the file.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+friends+" of of codes in the file.);
    }
    console.log(counter+" "+friends+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No lines of code on the wall.");
    }
}