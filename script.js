function answer(className){
    let ans = document.querySelector(`.${className}`);
    let symbol = document.getElementById(`symbol-${className}`)
    const answers = document.querySelectorAll('.answer')
    for(let i of answers){
        i.classList.add('none')
    }
    const symbols = document.querySelectorAll('.symbol')
    for(let i of symbols){
        if(i!==symbol){
            i.textContent = '+';
        }
    }
    
    if(symbol.textContent === '+'){
        ans.classList.remove('none');
        symbol.textContent = "-"
    }
    else{
        symbol.textContent = "+";
        ans.classList.add('none');
    }
}