let index = 0;
interval = 1000;

const rand = (min,max) =>
Math.floor(Math.random()* (max = min +1))+min;

for(const star of document.getElementsByClassName("nagic-star")){
    setInterval(() => {
star.style.setProperty("--star-left", '${rand(-10, 100)}%');
star.style.setProperty("--star-top", '${rand(-40, 80)}%');
    }, 1000);
}