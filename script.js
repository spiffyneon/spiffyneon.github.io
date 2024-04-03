function convert() {
    let numberInput = document.getElementById("numberInput").value;
    let conversionFrom = document.getElementById("conversionFrom").value;
    let conversionTo = document.getElementById("conversionTo").value;
    let result = document.getElementById("result");

    let convertedNumber;

    if (conversionFrom === "binary") {
        convertedNumber = BigInt(`0b${numberInput}`);
    } else if (conversionFrom === "decimal") {
        convertedNumber = BigInt(numberInput);
    } else if (conversionFrom === "hexadecimal") {
        convertedNumber = BigInt(`0x${numberInput}`);
    } else if (conversionFrom === "octal") {
        convertedNumber = BigInt(`0o${numberInput}`);
    }

    if (conversionTo === "binary") {
        result.textContent = convertedNumber.toString(2);
    } else if (conversionTo === "decimal") {
        result.textContent = convertedNumber.toString(10);
    } else if (conversionTo === "hexadecimal") {
        result.textContent = convertedNumber.toString(16).toUpperCase();
    } else if (conversionTo === "octal") {
        result.textContent = convertedNumber.toString(8);
    }
}
