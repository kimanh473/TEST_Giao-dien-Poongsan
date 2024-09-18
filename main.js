//show more show less

const buttonShowMore = document.querySelector('.more-item-ghe-massage');
const showMoreSp = document.querySelector('.ghe-massage-list-product');
const backTop = document.querySelector('.back-top');

var text = document.querySelector('.more-item-ghe-massage h2');

buttonShowMore.addEventListener('click',(e)=>{
    showMoreSp.classList.toggle('show-more');
    if (text.innerHTML === "XEM THÊM"){
        text.innerHTML = "ẨN BỚT";
    }else{
        text.innerHTML = "XEM THÊM";
    }
})

backTop.addEventListener('click',function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
})

//fixed header when scrolling

window.addEventListener('scroll', function() {
    var header = document.querySelector('.main-header');
    if (window.pageYOffset > 45) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

// fakeData

const spGheMassage=[
    {
        img: 'img/1.png', 
        name: 'Ghế massage Poongsan MCP-128', 
        price: '16.500.000', 
        priceNoDc: '36.990.000', 
        address: 'Savico Long Biên, Go Vĩnh Phúc, BigC Vinh',
    }, //sp1

    {
        img: 'img/2.png', 
        name:'Ghế massage Poongsan MCP-200', 
        price: '27.500.000', 
        priceNoDc: '69.990.000', 
        address: 'Aeon Long Biên, VC Thanh Hóa, Big C Thanh Hóa, VC Thái Nguyên, VC Việt Trì, VC Kỳ Anh, Go Nam Định'
    }, //sp2

    {
        img: 'img/3.png', 
        name: 'Ghế massage Poongsan MCP-300', 
        price: '44.000.000', 
        priceNoDc: '119.900.000', 
        address: 'VC Thanh Hóa, VC Bắc Ninh, Go Hải Phòng, Savico Long Biên, VC Hà Tĩnh, VC Việt Trì'
    }, //sp3

    {
        img: 'img/4.png', 
        name: 'Ghế massage Poongsan MCP-500', 
        price: '44.000.000', 
        priceNoDc: '129.990.000', 
        address: 'Savico Long Biên, Go Vĩnh Phúc, BigC Thanh Hóa, VC Thanh Hóa'
    }, //sp4

    {
        img: 'img/5.png', 
        name: 'Ghế massage Poongsan MCP-801', 
        price: '60.500.000', 
        priceNoDc: '169.990.000', 
        address: 'VC Ocean park Gia Lâm, VC Bắc Ninh, VC Thái Bình, BigC Vinh, BigC Thăng Long'
    }, //sp5

    {
        img: 'img/6.png', 
        name: 'Ghế massage Poongsan MCP-902', 
        price: '88.000.000', 
        priceNoDc: '279.000.000', 
        address: 'BigC Thanh Hóa'
    }, //sp6

    {
        img: 'img/7.png', 
        name: 'Ghế massage Poongsan MCP-301', 
        price: '49.500.000', 
        priceNoDc: '135.900.000', 
        address: 'BigC Hải Dương, Go Vĩnh Phúc, VC Bắc Ninh'
    }, //sp7

    {
        img: 'img/8.png', 
        name: 'Ghế massage Poongsan MCP-802', 
        price: '71.500.000', 
        priceNoDc: '279.990.000', 
        address: 'VC Ocean park Gia Lâm, Go Hải Phòng, Boss Lotte, VC Hà Tĩnh, VC Thái Bình, Go Nam Định'
    }, //sp8

    {
        img: 'img/9.png', 
        name: 'Ghế massage Poongsan MCP-803', 
        price: '63.800.000', 
        priceNoDc: '179.900.000', 
        address: 'VC Thanh Hóa, Go Thanh Hóa, Go Vĩnh Phúc, BigC Vinh, VC Hải Phòng, VC Việt Trì, VC Thái Bình'
    }, //sp9
]

for (let i=0; i<spGheMassage.length; i++){
    document.getElementById("gm-name-sp"+(i+1)).innerHTML = spGheMassage[i].name;
    document.getElementById("gm-pr"+(i+1)).innerHTML = spGheMassage[i].price;
    document.getElementById("gm-no-dc-pr"+(i+1)).innerHTML = spGheMassage[i].priceNoDc;
    document.getElementById("gm-add"+(i+1)).innerHTML = spGheMassage[i].address;
    document.getElementById("gm-img-sp"+(i+1)).style.backgroundImage = "url('" + spGheMassage[i].img + "')";
}

//button search

document.getElementById("search-submit").addEventListener('click',(e)=>{
    let searchInput=document.getElementById("input-search").value;
    let elements=document.querySelectorAll(".name-sp");
    let cards=document.querySelectorAll(".sp");
    console.log(searchInput);

    elements.forEach((element,index) => {
        if(element.innerHTML.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } 
        else {
            cards[index].classList.add("hide");
        }
    })
})

