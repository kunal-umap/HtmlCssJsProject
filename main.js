const display = document.querySelector('.display');
const cardTemplate = document.getElementById('card-template');
const Hover = document.querySelectorAll('.card');


// projection section display skeliton card

for (let i = 1; i <= 10; i++) {
    const temp = cardTemplate.content.cloneNode(true);
    temp.querySelector('.index').textContent = i;
    display.append(temp);
}
 


fetch("project.json")
    .then(res => res.json())
    .then(posts => {
    display.innerHTML = '';
    posts.forEach(post => {
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector('[data-title]').textContent = post.title;
        card.querySelector('[data-body]').textContent = post.subtitle;
        card.querySelector('.btn1').setAttribute("href", `${post.prjlink}`);
        card.querySelector('.btn2').setAttribute("href", `${post.sourcecode}`);
        card.querySelector('.index').textContent = post.id;
        card.querySelector('.header-img').setAttribute("src", `${post.imglink}`);
        display.append(card);
    })
});


