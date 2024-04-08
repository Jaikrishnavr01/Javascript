function guessNumber(){
    const randomNum = Math.floor(Math.random() * 11);

    let input;
    do {
        input = parseInt(prompt("Enter a number between 0 and 10"));

        if (input < randomNum){
            console.log("Entered number is too low");
        } else if (input > randomNum){
            console.log("Entered number is too high");
        }
    } while (input !== randomNum);

    console.log("Congratulations! You guessed the correct number: " + randomNum);
}

guessNumber();
