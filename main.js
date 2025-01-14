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

let a = document.querySelector('container1');

let banner = document.querySelector('.banner');
banner.height = a.height;   