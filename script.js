const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
itemNumber = 0
uncheckedItems = 0
checkedItems = 0


function newTodo() {
    var newToDo = prompt('enter a todo:')

    var newList = document.createElement("LI")                 // Create a <p> element
    newList.innerHTML = "<br>" + newToDo                // Insert text

    var att = document.createAttribute("id")
    att.value = "item_list_id_" + itemNumber
    newList.setAttributeNode(att);

    list.appendChild(newList)

    var newCheckbox = document.createElement("INPUT")

    var newCheckboxType = document.createAttribute("type")
    newCheckboxType.value = "checkbox"
    newCheckbox.setAttributeNode(newCheckboxType)
    var newCheckboxID = document.createAttribute("id")
    newCheckboxID.value = "item_checkbox_id_" + itemNumber
    newCheckbox.setAttributeNode(newCheckboxID)
    var newCheckboxOnClick = document.createAttribute("onclick")
    newCheckboxOnClick.value = "clickCheckbox(this)"
    newCheckbox.setAttributeNode(newCheckboxOnClick)

    newList.appendChild(newCheckbox);
    ++itemNumber

    var newDelButton = document.createElement("BUTTON")
    newDelButton.innerHTML = "delete"
    att = document.createAttribute("onclick")
    att.value = "deleteTODO(this)"
    newDelButton.setAttributeNode(att)
    att = document.createAttribute("value")
    att.value = newCheckboxID
    newDelButton.setAttributeNode(att)

    newList.appendChild(newDelButton);

    uncheckedItems++
    uncheckedCountSpan.innerHTML = '' + uncheckedItems
}

function clickCheckbox(callinCheckboxId){
    var counter
    callinCheckboxId.checked ? counter = 1 : counter = -1
    uncheckedItems-=counter
    checkedItems+=counter
    uncheckedCountSpan.innerHTML = '' + uncheckedItems
    itemCountSpan.innerHTML = '' + checkedItems
}

function deleteTODO(id){
    id.value.checked ? checkedItems-- : uncheckedItems--
    uncheckedCountSpan.innerHTML = '' + uncheckedItems
    itemCountSpan.innerHTML = '' + checkedItems
    id.parentNode.remove()
}
