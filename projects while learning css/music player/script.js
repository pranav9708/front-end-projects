//simple function to play/pause audio based on user click

(function(){
    var audio = new Audio('audio/1.mp3');
    var play=document.querySelector('#play');
    var pause=document.querySelector('#pause');

    play.addEventListener('click', function(){
        console.log("inside play");
        play.style.display="none";
        pause.style.display="flex";
        audio.play();
    });

    pause.addEventListener('click', function(){
        console.log("inside pause");
        play.style.display="flex";
        pause.style.display="none";
        audio.pause();
    });
})();

