burger = document.querySelector('burger')
navbar = document.querySelector('navnbar')
navlist = document.querySelector('nav-list')
rightnav = document.querySelector('rightnav')


burger.addeventlistener('click',()=>{
    rightnav.classlist.toggle('v-class-resp');
    navlist.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('v-class-resp');
})