function convert() {
    /* Taking the value of input from the input box */
    const inputValue = document.getElementById('temp');
    const x = inputValue.value;
    var result;
        const conversionType = document.getElementsByName('temp-type');
        let y;
        for(let i=0;i<conversionType.length;i++) {
            if(conversionType[i].checked) {
                y=conversionType[i].value;
            }
        }
        //console.log(y);
        if(y==='FtoC') {
            result = (((x-32)*5)/9).toFixed(3);

        }
        else{
            result = (((x/5)*9)+32).toFixed(3);
        }
        document.getElementById('result').innerHTML = result;
}