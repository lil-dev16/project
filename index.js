

const showMenu = (toggleId, navId)=> {
    const toggle = document.getElementById(toggleId);
    let menu = document.getElementById(navId);

    if(toggle && menu){
    toggle.addEventListener('click', ()=> {
        menu.classList.toggle('show');
    })
    
}};

    
showMenu('navid', 'nav-menu');

const navLink = document.querySelectorAll('#nav-link');

const linkAction =()=> {
    //add class
    // navLink.forEach(elem => elem.classList.remove('active'))
    //     this.classList.add('active');

        //remove menu
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show')
        console.log('fdde');
}

navLink.forEach(e => e.addEventListener('click', linkAction))