window.addEventListener('keydown',(e)=>{
    console.log(e);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
    
});

function removeTransition(e)
{
    if(e.propertyName!=='transform')
    return;
    this.classList.remove('playing');
}


const keys=document.querySelectorAll('.key');
console.log(keys);
const cdiv=document.getElementsByClassName('key');
console.log(cdiv);
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
for(let i=0;i<cdiv.length;i++)
{
    cdiv[i].addEventListener('click',clicked);
}

function clicked(e)
{
    const audio=document.querySelector(`audio[data-key="${e.target.id}"]`);
    console.log(e.target);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();
    e.target.classList.add('playing');
};
