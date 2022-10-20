// 3
// new 
// input type text 
// select -- push, pop, shift, unshift
// button 'action' will do the action

const list1 = []

function pushActionButton() {
    const selected_option = document.getElementById('options').value
    const element = document.getElementById('text_id').value
    if (selected_option == 'push') {
        list1.push(element)
    }
    else if (selected_option == 'unshift') {
        list1.unshift(element)
    }        
    else if (selected_option == 'pop') {
        document.getElementById('text_id').value = list1.pop()
    }
    else if (selected_option == 'shift') {
        document.getElementById('text_id').value = list1.shift()
    }    
    
    document.getElementById('the_list').innerHTML = list1
}

function pushUndoButton() {
    // crazy bonus
}    