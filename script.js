let themSwitch = document.querySelector(".mode");

let darkmode = false;

themSwitch.addEventListener("click", ()=>{

    if (darkmode == false){
    darkmode = true;
    themSwitch.innerHTML= '<i class="fa-solid fa-sun"></i>';
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
    return;
    }
    if (darkmode == true){
        darkmode = false;
        themSwitch.innerHTML= '<i class="fa-solid fa-sun"></i>';
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
        return;
        }

}

)