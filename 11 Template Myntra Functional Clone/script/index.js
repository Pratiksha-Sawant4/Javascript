

// let BagItem = [];
let BagItem;
onLoad();

function onLoad() {
    let BagItemStr = localStorage.getItem('BagItem');
    BagItem = BagItemStr ? JSON.parse(BagItemStr) : [];

    displayHP();
    displayBagIcon();
}



function addtoBag(itemId) {
    BagItem.push(itemId);
    localStorage.setItem('BagItem', JSON.stringify(BagItem));



    displayBagIcon();
}

function displayBagIcon() {
    let ItemCount = document.querySelector('.bag-item-count');
    if (BagItem.length > 0) {
        ItemCount.innerText = BagItem.length;
        ItemCount.style.visibility = "visible"

    }
    else {
        ItemCount.style.visibility = "hidden"
    }
}


function displayHP() {

    let itemscontainerElement = document.querySelector('.items-container');

    if (!itemscontainerElement ) {
        return;
    }

    let innerHTML = '';
    items.forEach(item => {

        innerHTML += `
    
    <div class="item-container">
    <img class="item-img" src=${item.image} alt="Ear Ring">
    <div class="rating">${item.rating.stars} ★ | ${item.rating.count}</div>
    <div class="company-name">${item.company} </div>
    <div class="item-name">${item.item_name} </div>
    <div class="price">
    <span class="current-price"> Rs ${item.current_price}</span>
    <span class="original-price"> Rs ${item.original_price}</span>
    <span class="discount"> (${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addtoBag(${item.id})"> Add to Bag</button>
    </div>
    
    `

    });

    itemscontainerElement.innerHTML = innerHTML;

}





// {
//     id: '001',
//     image: 'images/1.jpg',
//     company: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     original_price: 1045,
//     current_price: 606,
//     discount_percentage: 42,
//     return_period: 14,
//     delivery_date: '10 Oct 2023',
//     rating: {
//         stars: 4.5,
//         count: 1400,
//     },
// },

/*
let item = {

    item_name  : `images/1.jpg`,
    rating : {
        star : 4.5 ,
        noOfReview : 1400,
    },
    company_name : 'Carlton London ',
    product_name : 'Rhodium-plated ',
    current_price :  606,
    original_price : 1045,
    discount__percentage : 42,

}

*/


/*
itemscontainerElement.innerHTML = `

<div class="item-container">
<img class="item-img" src=${item.image} alt="Ear Ring">
<div class="rating">${item.rating.star} ★ | ${item.rating.star}</div>
<div class="company-name">${item.company_name} </div>
<div class="item-name">${item.product_name} </div>
<div class="price">
    <span class="current-price"> Rs ${item.current_price}</span>
    <span class="original-price"> Rs ${item.original_price}</span>
    <span class="discount"> (${item.discount__percentage}% OFF)</span>
</div>
<button class="btn-add-bag"> Add to Bag</button>
</div>

` ;

*/