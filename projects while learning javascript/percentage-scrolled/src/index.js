let scrollPercentage=()=>{
    let progressTextid=document.getElementById('progress-value');
    let pos=document.documentElement.scrollTop;

    // scrollheight - gives total scrollable height of website
    // clientheight - gives one page length of website
    // scrolltop - gives amount scrolled from top so far

    //we need to minus client height because at the end the scrolltop will not be equal to the scrollbar height.
    let calcheight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let value=Math.floor(pos*100/calcheight);
    
    progressTextid.innerText=value+" % Viewed";
}

window.onscroll=scrollPercentage;