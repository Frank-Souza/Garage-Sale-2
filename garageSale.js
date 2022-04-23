const itemsForSale = [
    {
        id: "cofee-pot",
        price: 50.99,
        name: "Coffee Pot",
        description: "Makes black coffee very fast",
        image: "https://cdn.shopify.com/s/files/1/0528/3545/1043/files/MoccaMaster_Set_53941_KBGV_PolishedSilver_3533-01_1000x.png?v=1629745608",      
    },
    {
        id: "cofee-grinder",
        price: 65.99,
        name: "Coffee Grinder",
        description: "Burr grinder, good for mediuum roast",
        image: "https://cb.scene7.com/is/image/Crate/KitchenAidBurrCoffeeGrndrSSS21/$web_pdp_main_carousel_zoom_med$/210412132033/kitchenaid-burr-coffee-grinder.jpg",

    }
]

const shoppingCart = []

const itemsSlot = document.getElementById("items-slot")

function itemToDisplayHtml(item){
    const html= `
    <div class="item-card">
        <h4>${item.name}</h4>
        <img src=${item.image}>
        <p>${item.description}</p>
        <em>${item.price}</em>
        <button onclick="addItemToCart('${item.id}')">Add To Cart</button>
    </div>
    `
    return html
}
function addItemToCart(id){
    shoppingCart.push(id)
}

function addItemsForSaleToPage(){
    for(let i = 0; i<itemsForSale.length; i++){
        const item = itemsForSale[i]
        const htmlForItem = itemToDisplayHtml(item)
        const appendableElement = document.createElement('div')
        appendableElement.innerHTML = htmlForItem
        itemsSlot.append(appendableElement)
    }
}

addItemsForSaleToPage()