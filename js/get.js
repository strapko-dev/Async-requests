const $response = document.querySelector('.response');
const $form = document.forms.form;
const $input = $form.elements.input;
let users = 0;

$form.addEventListener('submit', showUser)

function showUser(event) {
    const inputValue = +$input.value;

    event.preventDefault();

    if (!users) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                users = response
                return response.find((obj) => obj.id === inputValue)
            })
            .then((response) => JSON.stringify(response))
            .then((response) => {
                console.log(response)
                $response.append('Check console bro ;)')
            })
    } else {
        const findUser = users.find((obj) => obj.id === inputValue)
        const jsonUser = JSON.stringify(findUser)
        console.log(jsonUser)
    }
    
    $input.value = ''
}