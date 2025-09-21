document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
    document.getElementById('footer').innerHTML = `
    <footer>
    </footer>`


  if (path.includes("index.html") || path === "/") {
    document.getElementById('header').innerHTML = `
        <header>
            <div class="header-left">
                <h1 class="header-logo">CHANGESKIN</h1>
                <a href="#" class="header-button">UPGRADE</a>
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

    const case_group_list = [ // добавити группу
        {group_id:0, group_name:"Epic cases"},
        {group_id:1, group_name:"Rare cases"}
    ]
    const case_list = [ //добавити кейс
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
        {name:"Case", description:"10 Items", price:420, icon:"case_test", group:0},
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
})