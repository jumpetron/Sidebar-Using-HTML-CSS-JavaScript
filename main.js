const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');


btn.onclick = () =>{
    sidebar.classList.toggle('close');
    btn.classList.toggle('ri-menu-unfold-lin')
}
