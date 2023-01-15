let open = document.getElementById('open-btn');
let modalcontainer = documet.getElementById('modal-container');
let close = document.getElementById('close-btn')
//listenersss
open.addEventListener('click', function(){
    modalcontainer.style.display = "block";
});

close.addEventListener('click', function (){
    modalcontainer.style.display= 'none';
});
