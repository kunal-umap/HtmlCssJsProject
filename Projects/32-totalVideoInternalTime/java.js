const timeData = Array.from(document.querySelectorAll('[data-time]'));
let dis = document.querySelector('.total');

const  second = timeData
                .map(data => data.dataset.time)
                .map(value => {
                    const [min,sec] = value.split(':').map(parseFloat);
                    return (min*60)+sec;
                })
                .reduce((accu,sec) => sec + accu);
// console.log(second);

let [hour,sec] = [Math.floor(second/3600) ,Math.floor((second-(3600*Math.floor(second/3600)))/60)];
dis.innerHTML =`Total Video Content => ${hour}hr : ${sec}min`;
