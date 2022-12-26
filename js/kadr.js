$(document).ready(function () {

    $('#firststyle').css({
        backgroundColor: '#929292'
    });
    $('#pluginBtnopen').click(function () {
        $('.menu').addClass('menu2');
    })
    $('#close').click(function () {
        $('.menu').removeClass('menu2')
    })

    $('#secondstyle').click(function () {

        $('.product').addClass('product2');
        $('.swiper-container').addClass('swiper-container2');
        $('.swiper-wrapper').addClass('swiper-wrapper2');
        $('.bgimage').addClass('bgimage2');
        $('.name').addClass('namee');
        $('.shtap').addClass('shtap2');
        $('.shtap').addClass('shtapsecondstyle');
        // $('.shtapsecondstyle').css({
        //     height: '26px'
        // });
        $('.price').addClass('price2');
        $('.spantext').addClass('spantext2');
        $('.categoria').addClass('categoria2');
        $('.data').addClass('data2');
        $('#firststyle').css({
            backgroundColor: '#f3f3f3'
        });
        $('.line').css({
            stroke: '#929292'
        });
        $('.line2').css({
            stroke: 'white'
        });
        $('#secondstyle').css({
            backgroundColor: '#929292'
        });
        $('.del').css({
            display: 'none'
        });
        $('.productprice').css({
            left: '5%'
        });
        $('.avatar').css({
            display: 'none'
        });
        $('.line3').css({
            display: 'none'
        });
        $('.info').addClass('info2');
    });

});

$('#firststyle').click(function () {
    $('#secondstyle').css({
        backgroundColor: '#f3f3f3'
    });
    $('.line').css({
        stroke: 'white'
    });
    $('.line2').css({
        stroke: '#929292'
    });
    $('#firststyle').css({
        backgroundColor: '#929292'
    });
    $('.svg').addClass('stroke');
    $('.product').removeClass('product2');
    $('.swiper-container').removeClass('swiper-container2');
    $('.name').removeClass('namee');
    $('.shtap').removeClass('shtap2');
    $('.shtap').removeClass('shtapsecondstyle');
    $('.price').removeClass('price2');
    $('.spantext').removeClass('spantext2');
    $('.categoria').removeClass('categoria2');
    $('.data').removeClass('data2');
    $('.bgimage').removeClass('bgimage2');
    $('.del').css({
        display: 'block',
    });
    $('.avatar').css({
        display: 'block',
        display: 'flex',
    });
    $('.line3').css({
        display: 'block'
    });
    $('.info').removeClass('info2');
});





var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.next',
    //     prevEl: '.prev',
    // },

});



var rng = document.getElementById('price');
var p = document.getElementById('changeprice');

function fun1() {
    p.innerHTML = rng.value * 50000;
    console.log(rng.value);
}





const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const arrowDown2 = document.querySelector('.arrowdown');

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    arrowDown2.classList.toggle('arrowdown3');
});
optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

const selected1 = document.querySelector(".selectedd1");
const optionsContainer1 = document.querySelector(".options-containerr1");
const arrowDown1 = document.querySelector('.arrowdown1');
const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
    optionsContainer1.classList.toggle("activee1");
    arrowDown1.classList.toggle("arrowdown11");
});
optionsList1.forEach(a => {
    a.addEventListener("click", () => {
        selected1.innerHTML = a.querySelector("label").innerHTML;
        optionsContainer1.classList.remove("activee1");
    });
});

const selected2 = document.querySelector(".selectedd");
const optionsContainer2 = document.querySelector(".options-containerr2");
const optionsList2 = document.querySelectorAll(".option2");
const arrowDown22 = document.querySelector('.arrowdown2');

selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("activee");
    arrowDown22.classList.toggle("arrowdown22");
});
optionsList2.forEach(e => {
    e.addEventListener("click", () => {
        selected2.innerHTML = e.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("activee");
    });
});

