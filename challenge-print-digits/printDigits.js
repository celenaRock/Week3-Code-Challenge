const printDigits = num => {
    while (num) {
        let digit = num % 10
        console.log(digit)
        num = (num - digit) / 10
    }

}

printDigits(19)
printDigits(321)
printDigits(654)