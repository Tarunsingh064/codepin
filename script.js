const acordians = document.querySelectorAll('.acordian');

acordians.forEach(acordian=>{
    const icon = acordian.querySelector('.icon')
    const answer = acordian.querySelector('.Answer')

    acordian.addEventListener('click',()=>{

        if(icon.classList.contains('hello')){
            icon.classList.remove('hello');
            answer.style.maxHeight = null;
        }
        else{
            icon.classList.add('hello');
            answer.style.maxHeight=answer.scrollHeight+'px'
        }



    })

})



//const acordians = document.querySelectorAll('.acordian');
//acordians.forEach(acordian=>)