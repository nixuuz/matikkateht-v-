let ans_num = 0
let inc_num = 0

let rand_num1 = 0
let rand_num2 = 0

const getRandomInNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomInNumberInRange(1,10)
    rand_num2 = getRandomInNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMcontentLoaded", () => {
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        ans_num++;
        document.querySelector('#cor').innerHTML = ans_num;
        alert('Correct!')
    }   else {
        inc_num++;
        document.querySelector('#inc').innerHTML = inc_num;
        alert('Incorrect!')
    }

    randomizeNumbers()
    document.querySelector('input').value=''
})







