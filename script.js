const sendInput = document.querySelector('input');
console.log(sendInput);
const itemsContainer = document.querySelector('.items');
console.log(itemsContainer);
const button = document.querySelectorAll('.items');
console.log(button);

input.addEventListener('keydown', function(event){
    
    if(event.key == 'Enter') {

        const messageText = sendInput.value;
        const newMessage = document.createElement('div');
        newMessage.classList.add('items');
        newMessage.textContent = messageText;

        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
           }); 

        itemsContainer.append(newMessage); 
        
        
        sendInput.value = '';
    }
    
});


/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
