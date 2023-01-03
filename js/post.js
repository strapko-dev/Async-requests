const $response = document.querySelector('.response');
const $form = document.forms.form;
const $input = $form.elements.input;

$form.addEventListener('submit', post)

function post(event) {
    const inputValue = +$input.value;

    const user = {
        name: 'Juan',
        age: inputValue,
        job: 'Software engineer'
    }

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then((r) => r.json())
        .then((r) => console.log(r))

    event.preventDefault();
    $input.value = '';
}