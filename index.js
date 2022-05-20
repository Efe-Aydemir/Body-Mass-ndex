const lenght = document.querySelector('#lenght')
const weight = document.querySelector('#weight')
const result_btn = document.querySelector('#result_btn')

result_btn.addEventListener('click', () => {
    let result = (Number(lenght.value) / 100) * (Number(lenght.value) / 100)
    let result_2 = (Number(weight.value) / (result))



const card = `
<div id="card">
<hr>
<h1>Result</h1>
<h1>Body Mass İndex<br><span id='sha_res'>${result_2 ? result_2.toFixed() : 'Please Enter Number'}</span>
</h1>
<br>

<div id='btns'>
<button id='back_btn' onclick='window.location.reload()'>Go Back</button>
</div>
<hr>
<div id='result'>
<p>0 to 18.4 BMI: Underweight. In case of encountering this value, which indicates that the person's weight is insufficient for their height, it is recommended that the person gain weight in a healthy way, accompanied by a dietitian.</p>
<hr>
<p>18.5 to 24.9 BMI: Normal. This range of values indicates that the person is at the ideal weight. It is recommended that people with this value continue to eat a regular, balanced and healthy diet.</p>
<hr>
<p>25 to 29.9 BMI: Overweight. In this value range, which indicates that the person is overweight compared to his height, it is recommended that the person lose their excess weight with a suitable diet.</p>
<hr>
<p>BMI of 30 to 34.9: Obese. In the range of values evaluated in the first degree obese category, it is understood that the person's weight is at a level that may pose a risk in terms of health. It is recommended that these people lose weight with the help of a dietitian.</p>
<hr>
<p>BMI of 35 to 44.9: Obese. People with these values, which are defined as second degree obese, have an increased risk of cardiovascular diseases. It is recommended that the person consult a dietitian to lose weight.</p>
<hr>
<p>45+ BMI: Extremely Obese. These people who are in the third degree obese category have a very high risk of developing the disease. It is recommended to lose weight under the guidance of a physician and dietitian.</p>
<hr>
<p>Ages 19-24: BMI of 19-24.<br>
Age 25-34: BMI of 20-25.<br>
Age 35-44: BMI of 21-26.<br>
Age 45-54: BMI of 22-27.<br>
Age 55-64: BMI of 23-28.<br>
Age 65 and over: BMI of 24-29.
</div>
</div>
`

document.body.innerHTML = card

})
