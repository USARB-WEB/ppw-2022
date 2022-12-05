console.log('Hello. I am JavaScript')

document.getElementById('pageBody').style.backgroundColor = 'yellow';

setTimeout(() => {
    document.getElementById('pageBody').style.backgroundColor = 'red';  
}, 3000)


document.getElementById('firstButton').addEventListener('click', () => {
    alert('OOps!')
})


function greetings(){
    alert('Hello. I am JavaScript!')
    const name = prompt('What is your name?')
    alert(`Hello ${name}`)
    const age = prompt('How old are you?')
    if(age > 7){
        alert(`It's time to go to school`)
    } else {
        alert(`It's time to learn JavaScript`)
    }
}

greetings();