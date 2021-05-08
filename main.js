let btn1=document.querySelector('.btn1');
btn1.addEventListener('click',function () {
    btn1.innerHTML=`
    <div class="container_item_modal" id="modal__">
    <div class="cont_about">
    <div class="conten_about_header">
    <i class="fas fa-times btn_modal" onclick="dispose()"></i>
    </div>

    <div class="conten_about_section">
    <div class="textConten">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, repudiandae aliquid! Porro animi non est, aspernatur expedita vel. Dignissimos voluptate facere, iste eum obcaecati voluptatem cum porro non provident mollitia!

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
</div>
<div class="textConten">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, repudiandae aliquid! Porro animi non est, aspernatur expedita vel. Dignissimos voluptate facere, iste eum obcaecati voluptatem cum porro non provident mollitia!

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
</div>
<div class="textConten">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, repudiandae aliquid! Porro animi non est, aspernatur expedita vel. Dignissimos voluptate facere, iste eum obcaecati voluptatem cum porro non provident mollitia!

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?
    
</div><div class="textConten">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, repudiandae aliquid! Porro animi non est, aspernatur expedita vel. Dignissimos voluptate facere, iste eum obcaecati voluptatem cum porro non provident mollitia!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo facilis sequi minus quia fuga soluta corrupti, ipsa commodi sapiente maxime, perferendis porro expedita est nihil eius dignissimos, amet dolores?

</div>
    </div>
    <div/>

    <div/>`;
});

let btn2=document.querySelector('.btn2');
btn2.addEventListener('click',function () {
    alert('se dio click en boton 2');
});

let btn3=document.querySelector('.btn3');
btn3.addEventListener('click',function () {
    alert('se dio click en boton 3');
});

let btn4=document.querySelector('.btn4');
btn4.addEventListener('click',function () {
    alert('se dio click en boton 4');
});

let modal=document.querySelector('#icon_menu');
modal.addEventListener('click',function () {

    document.querySelector('.modal').style.height='0vh';
    
    setInterval(
        function () {
            document.querySelector('.modal_container').style.display='none'
        },1000
    );

});

 
// document.querySelector('.container_item_modal').style.display='none';
function dispose() {
    console.log("click__");
    document.getElementById('modal__').style.background='blue';
    // document.querySelector('#modal__').style.background='blue';
}