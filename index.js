
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", (e) => {
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const calculateBtn = document.querySelector("#calculateBtn");
    const output = document.querySelector("#output");
    var status = document.querySelector("#status");
    var statusInfo = document.querySelector("#statusInfo");

    e.preventDefault();
    var weightValue = parseFloat(weight.value);

    let heightValue = parseFloat(height.value);

    var bmiValue;

    if(!weightValue || !heightValue) {
        output.innerHTML = " Please enter your weight and height";
    }  else {
        bmiValue = weightValue / heightValue ** 2;
    }

    output.innerHTML = bmiValue.toFixed(2);
    // console.log(bmiValue);

    if (bmiValue < 18.5) {
        status.innerHTML = "Underweight";
        statusInfo.innerHTML = "A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recomended to ask your doctor or a dietician for advice.";

    }
    if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        status.innerHTML = "Normal";
        statusInfo.innerHTML = "A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.";
    }
    if (bmiValue >= 25 && bmiValue <= 29.9) {
        status.innerHTML = "Overweight";
        statusInfo.innerHTML = "A BMI of 18.5-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietician for advice.";
    }
    if (bmiValue >= 30 && bmiValue <= 34.9) {
        status.innerHTML = "Obesity (Class 1)";
        statusInfo.innerHTML = "A BMI of 30 - 34.9 indicates that you are obessed. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietician for advice.";
    }
    
    if (bmiValue >= 35 && bmiValue <= 39.9) {
        status.innerHTML = "Obesity (Class 2)";
        statusInfo.innerHTML = "A BMI of 35 - 39.9 indicates that you are obessed. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietician for advice.";
    }
    if (bmiValue >= 40) {
        status.innerHTML = "Extreme Obesity";
        statusInfo.innerHTML = "A BMI of over 40 indicates that you are extremely obessed. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietician for advice.";
    }
    
});

