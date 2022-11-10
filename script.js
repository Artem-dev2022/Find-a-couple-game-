(function(){
    let card = document.querySelectorAll('.item');
    let btn = document.querySelector('.btn');
    let count = 0;
    let card1;
    let card2;
    let value1;
    let value2;
    
    const arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8];
    
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let tmp = arr[i];
            let rnd = Math.floor(Math.random() * (i + 1));
    
            arr[i] = arr[rnd];
            arr[rnd] = tmp;
        }
        return arr;
    };
    
    function setValues(){
        shuffle(arr);
        for (let i = card.length -1; i >= 0; i--) {
            card[i].textContent = arr[i];
        };
    };
    
    setValues();
    
    card.forEach((item)=>{
        item.addEventListener('click', function(e){
            if ((count === 0) && !e.target.classList.contains('rotate')) {
                card1 = e.target;
                e.target.classList.add('rotate');
                value1 = e.target.textContent;
                console.log(card1);
                console.log(count);
                ++count;
            } 
    
            if ((count === 1) && !e.target.classList.contains('rotate')) {
                card2 = e.target;
                e.target.classList.add('rotate');
                value2 = e.target.textContent;
                console.log(card2);
                console.log(count);
                
                if (value1 === value2){
                    count = 0;
                } else {
                    setTimeout(()=>card1.classList.remove('rotate'), 300);
                    setTimeout(()=>card2.classList.remove('rotate'), 300);  
                    count = 0;
                }
            }
            gameOver();
        })
    });
    
    function gameOver(){
        let done = document.querySelectorAll('.rotate');
        if (done.length === 16) {
            btn.style.display = 'block';
        };
    };
    
    btn.addEventListener('click', function(){
        for (let i of card) {
            i.classList.remove('rotate');
        };
        setValues();
        btn.style.display = 'none';
    });
    
    })();