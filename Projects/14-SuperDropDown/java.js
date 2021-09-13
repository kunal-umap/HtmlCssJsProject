const dropDown = document.querySelectorAll('.navagationBar > ul');
const box = document.querySelector('.dropDownBackground');
const navBar = document.querySelector('.navagationBar');

function displayDropdown(){
    this.classList.add('hover-on');
    setTimeout(() => this.classList.contains('hover-on') && this.classList.add('hover-on-stable'),150)
    box.classList.add('open');

    const dropMenue = this.querySelector('.dropdown');
    const coOrdinate = dropMenue.getBoundingClientRect();
    const navCords = navBar.getBoundingClientRect(); 

    box.style.setProperty('width', `${coOrdinate.width}px`);
    box.style.setProperty('height', `${coOrdinate.height}px`);
    box.style.setProperty('left', `${coOrdinate.left  - navCords.left}px`);
    box.style.setProperty('top', `${coOrdinate.top  - navCords.top}px`);

    // box.style.setProperty('transform',`translate(${coOrdinate.left - navCords.left}px,${coOrdinate.top - navCords.top}px)`);

}

function endDropdown(){
    box.classList.remove('open');
    this.classList.remove('hover-on','hover-on-stable');
}

dropDown.forEach(drop => drop.addEventListener('mouseenter',displayDropdown));
dropDown.forEach(drop => drop.addEventListener('mouseleave',endDropdown));