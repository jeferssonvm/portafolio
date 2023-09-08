document.addEventListener("DOMContentLoaded", (events) =>{
    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML ='<iframe class="contact__iframe" frameborder="0" scolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63636.59222568485!2d-75.7217497086711!3d4.542270330572427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5ade6653bc1%3A0xc2c6ca4ab95d8808!2sArmenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1693582478202!5m2!1ses!2sco"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    },500)
});