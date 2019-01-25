const container = document.querySelector('.container');
const colorBtn = document.querySelector('#color-btn');
const resetBtn = document.querySelector('#reset-btn');
const clearBtn = document.querySelector('#clear-btn');
let size = 16;
let baseColor = 'black';
let i = 0;


clearBtn.addEventListener('click', (e)=>{
    console.log("Clear");
    size = prompt('Enter desired size');
    if(isNaN(size) || size==null || size==""){  
        alert('Unknown value. Please enter a number.');
        prompt('Enter desired size');
    }else{
        while(container.hasChildNodes())
        container.removeChild(container.firstChild)
            generateGrid(size);
                if(baseColor == 'black'){
                    changeColor('black');
                }else{
                    randomColor();
                }
    }
});

colorBtn.addEventListener('click', (e)=>{
    console.log('Color');
    randomColor();
});

resetBtn.addEventListener('click', (e)=>{
    console.log('Reset');
});

function generateGrid(size){
    console.log('Grid size is ' +size+ '.');
    for(i = 0; i < size * size; i++){
        const div = document.createElement('div');
        const height = 500/size;

        div.style.height = `${height}px`;
        div.style.width = `${height}px`;
        div.style.display = 'inline-block';
        container.appendChild(div);
    }
}

function changeColor(color){
    baseColor = 'black';
        let divs = document.querySelectorAll('.container div');
            divs.forEach(div => div.addEventListener('mouseover', (e)=>{
                console.log(e.currentTarget);
                e.currentTarget.style.background=color;
            }));
}

function randomColor(){
    baseColor = 'green';
        let divs = document.querySelectorAll('.container div');
        divs.forEach(div => div.addEventListener('mouseover', (e)=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.currentTarget.style.background=`#${randomColor}`;
        }));
}
generateGrid(size);
changeColor(baseColor);