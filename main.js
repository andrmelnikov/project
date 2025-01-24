function handle() {
    // alert('Форма отправлена!');
    let inputs = document.querySelectorAll('.get');
    let input_values = [];
    for (let i =0; i < inputs.length; i++){
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
}

let button = document.querySelector('.button');
button.addEventListener('click', handle);

let links = document.querySelectorAll('.btn');
let targetID;
links.forEach(function(e) {
    e.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = e.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
let up = document.querySelector('.return');
up.addEventListener('click', function (event) {
    event.preventDefault();
    targetID = up.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})