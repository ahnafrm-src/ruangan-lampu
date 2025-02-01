function saklar() {
    let toggle1 = document.getElementById("toggle-switch-1");
    let toggle2 = document.getElementById("toggle-switch-2");
    let toggle3 = document.getElementById("toggle-switch-3");
    let toggle4 = document.getElementById("toggle-switch-4");
    
    console.log('hihihiihih');
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");

    if(toggle1.checked) {
        lampu1.src = 'content/image/on.gif';
        
    }else{
        lampu1.src = "content/image/off.gif";
    }

    if(toggle2.checked) {
        lampu2.src = 'content/image/on.gif';
        
    }else{
        lampu2.src = "content/image/off.gif";
    }

    if(toggle3.checked) {
        lampu3.src = 'content/image/on.gif';
        
    }else{
        lampu3.src = "content/image/off.gif";
    }

    if(toggle4.checked) {
        lampu4.src = 'content/image/on.gif'
    }else{
        lampu4.src = 'content/image/off.gif'
    }
}
