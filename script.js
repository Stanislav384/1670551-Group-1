document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
    document.getElementById('footer').innerHTML = `
    <footer>
    </footer>`
    
    document.getElementById('header').innerHTML = `
        <header>
            <div class="header-left">
                <a href="index.html"class="header-logo">CHANGESKIN</a>
                <a href="upgrade.html" class="header-button">UPGRADE</a>
                <a href="#" class="header-button">CONTRACTS</a>
                <a href="#" class="header-button">GIVEAWAYS</a>
            </div>
            <div class="header-right">
                <div class="user-balance">
                    <p><span class="normal-price">345</span><span class="price-decimal">.37</span></p>
                    <img src="icons/cscoin.png" class="coin-icon">
                </div>
                <a href="#" class="header-button">ACCOUNT NAME</a>
            </div>
        </header>`

  if (path.includes("index.html") || path === "/") {
    const case_group_list = [ // добавити группу
        {group_id:0, group_name:"Epic cases"},
        {group_id:1, group_name:"Rare cases"}
    ]
    const case_list = [ //добавити кейс
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:1},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:1},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:1},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:1},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:1}
    ]


    const case_main = document.querySelector(".case-main")
    function load_cases(){
        case_main.innerHTML = ""
        case_group_list.forEach(group_element => {
            const case_sect = document.createElement("div")
            case_sect.className = "case-section"
            case_sect.innerHTML = `<h3 class="case-section-header">${group_element.group_name}</h3>`
            const case_road = document.createElement("div")
            case_road.className = "case-road"
            case_list.forEach(case_element => {
                if (case_element.group == group_element.group_id){
                    const case_cont = document.createElement("div")
                    case_cont.className = "case"
                    case_cont.innerHTML = `<h3 class="case-name">${case_element.name}</h3>
                    <p class="case-description">${case_element.description}</p>
                    <img src="icons/${case_element.icon}.png" class="case-icon">
                    <div class="case-price-container">
                        <h3 class="case-price">${case_element.price}</h3>
                        <img src="icons/cscoin.png" class="case-coin-icon">
                    </div>`
                    case_road.appendChild(case_cont)
                }
            })
            case_sect.appendChild(case_road)
            case_main.appendChild(case_sect)
        });
    }
    load_cases()
    }
    if (path.includes("upgrade.html") || path === "/") {
        const inventory_items_container = document.getElementById("inventory-items-container")
        const desired_items_container = document.getElementById("desired-items-container")
        const inventory_items = [
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500}
        ]
        const desired_items = [
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500},
            {name:"item",icon:"shadow_item",price:2500}
        ]
        function load_items(){
            inventory_items_container.innerHTML = ""
            inventory_items.forEach(item => {
                const div = document.createElement("div")
                div.className = "item-cell"
                div.innerHTML = `
                    <h6 class="item-cell-name">${item.name}</h6>
                    <img src="icons/${item.icon}.png" class="item-cell-icon">
                    <div class="item-cell-price">
                        <h5 class="item-cell-price-text">${item.price}</h5>
                        <img src="icons/cscoin.png" class="item-cell-price-coin">
                    </div>`
                inventory_items_container.appendChild(div)
            })

            desired_items_container.innerHTML = ""
            desired_items.forEach(item => {
                const div = document.createElement("div")
                div.className = "item-cell"
                div.innerHTML = `
                    <h6 class="item-cell-name">${item.name}</h6>
                    <img src="icons/${item.icon}.png" class="item-cell-icon">
                    <div class="item-cell-price">
                        <h5 class="item-cell-price-text">${item.price}</h5>
                        <img src="icons/cscoin.png" class="item-cell-price-coin">
                    </div>`
                desired_items_container.appendChild(div)
            })
        }
        load_items()
    }
})