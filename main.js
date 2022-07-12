function deleteItem(object, itemId) {
    index = object.findIndex((e) => {
        return e.id === itemId
    })
    if (index !== -1) {
        object.splice(index, 1)
    }
}
function addTask(inputText, toDoObject, id) {
    if(inputText == ''){
        return
    }
    toDoObject.push({ id: id, title: inputText, completed: false })
    
}
function changeText(object, objectID) {
    classitems = document.querySelectorAll('.toDoItem')
    for (let i = 0; i < object.length; i++) {
        if (object[i].id == objectID) {
            object[i].completed = !(object[i].completed)
            if (object[i].completed) {
                classitems[i].childNodes[3].style.textDecoration = 'line-through'
                console.log(classitems[i].childNodes[3])
                
            }else{
                classitems[i].childNodes[3].style.textDecoration = 'none'
                
            }
        }

    }
    
}
