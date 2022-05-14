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
<hr>
<div id='btns'>
<button id='back_btn' onclick='window.location.reload()'>Go Back</button>
</div>
</div>
`

document.body.innerHTML = card

})
