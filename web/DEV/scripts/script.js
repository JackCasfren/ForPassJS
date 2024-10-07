//*Interacting with HTML


console.log("ts beeing wred");

const dynSubBtn = document.getElementById("dynSubBtn");
        const textBox = document.getElementById("textBox") as HTMLInputElement;
        const resultDiv = document.getElementById("result");

        dynSubBtn?.addEventListener("click", () => {
            alert("test")
            const textValue = textBox.value;
            if (resultDiv && textValue) {
                resultDiv.innerText = `You entered: ${textValue}`;
            }
});