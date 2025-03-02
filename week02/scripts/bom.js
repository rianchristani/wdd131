const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('____');

const li = document.createElement('li')
const deleteButton = document.createElement('button')

li.textContent = input.value;

deletebutton.textContent = '❌'

li.appendC(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
})

input.value = ''
input.focus();

button.addEventListener('click',function(){
    if (input.value.trim() !== ''){     
    }
});