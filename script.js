const user_data ={
    name:"NMPmCH",
    balance:345.37
}

function formatPrice(number) {
  const [whole, decimal] = number.toString().split(".");
  const formattedWhole = Number(whole).toLocaleString("en-GB").replace(/,/g, " ");

  return `
    <span class="normal-price">${formattedWhole}</span>
    ${decimal ? `<span class="price-decimal">.${decimal}</span>` : ""}
    <img src="icons/cscoin.png" class="coin-icon">
  `;
}
function login_check(){
    if (user_data){
        const userbalance = document.getElementById("user-balance");
        const usernickname = document.getElementById("user-nickname");
        userbalance.innerHTML = formatPrice(user_data.balance);
        usernickname.innerHTML = user_data.name;
    }
}
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
                <a href="contracts.html" class="header-button">CONTRACTS</a>
            </div>
            <div class="header-right">
                <div class="user-balance" id="user-balance">
                    <p><span class="normal-price">345</span><span class="price-decimal">.37</span></p>
                    <img src="icons/cscoin.png" class="coin-icon">
                </div>
                <a href="#" class="header-button" id="user-nickname">ACCOUNT NAME</a>
            </div>
        </header>`

    if (path.includes("index.html") || path === "/") {
    const case_group_list = [ // добавити группу
        {group_id:0, group_name:"Epic cases"},
        {group_id:1, group_name:"Rare cases"}
    ]
    const case_list = [ //добавити кейс
        {name:"Case Desert", description:"10 Items", price:420, icon:"desert_l5", group:0},
        {name:"Case M4A4", description:"10 Items", price:420, icon:"m4a4_l2", group:0},
        {name:"Case AK", description:"10 Items", price:420, icon:"ak47_l5", group:0},
        {name:"Case AWP", description:"10 Items", price:420, icon:"awp_l5", group:0},
        {name:"Case Agent Yellow", description:"10 Items", price:420, icon:"agent_yellow_l4", group:0},
        {name:"Case Agent Red", description:"10 Items", price:420, icon:"agent_red_l4", group:0},
        {name:"Case Agent Green", description:"10 Items", price:420, icon:"agent_green_l4", group:0},
        {name:"Case Agent Blue", description:"10 Items", price:420, icon:"agent_blue_l4", group:1}
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
                    <img src="icons/case_${case_element.icon}.png" class="case-icon">
                    <a class="case-price-container" href="case.html">
                        <h3 class="case-price">${case_element.price}</h3>
                        <img src="icons/cscoin.png" class="case-coin-icon">
                    </a>`
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
        const update_deco_ring = document.querySelector('.upgrade-circle-container-dec-3');
    const marker = document.querySelector('.marker');

    let sector_start = -1;
    let sector_sweep = -1;
    let sector_start_new = 0;
    let sector_sweep_new = 0;
    let sector_start_animation_speed = 100;
    let sector_sweep_animation_speed = 4;

    let animating = false;

    function setSector(start, sweep) {
      if (start !== undefined) sector_start_new = start;
      if (sweep !== undefined) sector_sweep_new = sweep;
      
      if (!animating) {
        animating = true;
        requestAnimationFrame(SectorAnimation);
      }
    }

    function SectorAnimation() {
      let changed = false;

      if (sector_start !== sector_start_new) {
        if (Math.abs(sector_start - sector_start_new) <= sector_start_animation_speed) {
          sector_start = sector_start_new;
        } else if (sector_start < sector_start_new) {
          sector_start += sector_start_animation_speed;
        } else {
          sector_start -= sector_start_animation_speed;
        }
        update_deco_ring.style.setProperty('--sector-start', `${sector_start}deg`);
        changed = true;
      }

      if (sector_sweep !== sector_sweep_new) {
        if (Math.abs(sector_sweep - sector_sweep_new) <= sector_sweep_animation_speed) {
          sector_sweep = sector_sweep_new;
        } else if (sector_sweep < sector_sweep_new) {
          sector_sweep += sector_sweep_animation_speed;
        } else {
          sector_sweep -= sector_sweep_animation_speed;
        }
        update_deco_ring.style.setProperty('--sector-sweep', `${sector_sweep}deg`);
        changed = true;
      }

      if (changed) {
        requestAnimationFrame(SectorAnimation);
      } else {
        animating = false;
      }
    }


    function setMarker(angle) {
      marker.style.transform =
        `rotate(${angle - 90}deg) translate(100px)`;
    }
    function hide_marker(hide="hide"){
      if (hide == "hide") marker.style.opacity = "0"
      if (hide == "show") marker.style.opacity = "1"
    }
    setSector(180, 0);
    setMarker(0)
    setTimeout(()=>{sector_start_animation_speed = 2;},10)





        const inventory_items = [
            {item_id:"0",name:"item",icon:"revolver",price:500},
            {item_id:"1",name:"item",icon:"m4a1",price:750},
            {item_id:"2",name:"item",icon:"aug",price:1000},
            {item_id:"3",name:"blueknife",icon:"blueknife",price:1250},
            {item_id:"4",name:"item",icon:"tec9",price:1500},
            {item_id:"5",name:"red eagle",icon:"reddeagle",price:1750},
            {item_id:"6",name:"item",icon:"ump",price:2000},
            {item_id:"7",name:"item",icon:"glock",price:2250},
            {item_id:"8",name:"item",icon:"usp",price:2500}
        ]
        const desired_items = [
            {item_id:"0",name:"item",icon:"glock",price:1500},
            {item_id:"1",name:"blue knife",icon:"blueknife",price:1750},
            {item_id:"2",name:"green knife",icon:"greenknife",price:2000},
            {item_id:"3",name:"item",icon:"aug",price:2250},
            {item_id:"4",name:"five seven",icon:"fiveseven",price:2500},
            {item_id:"5",name:"white awp",icon:"whiteawp",price:2750},
            {item_id:"6",name:"item",icon:"usp",price:3000},
            {item_id:"7",name:"item",icon:"xm",price:3250},
            {item_id:"8",name:"item",icon:"awp",price:3500}
        ]
        function load_items(){
            inventory_items_container.innerHTML = ""
            inventory_items.forEach(item => {
                const div = document.createElement("div")
                div.className = "item-cell"
                div.dataset.icon = String(item.icon)
                div.dataset.price = item.price
                div.dataset.type = "inventory"
                div.id = String(item.item_id)
                let item_name = item.name
                if (item.name == "item") item_name = item.icon
                div.innerHTML = `
                    <h6 class="item-cell-name">${item_name}</h6>
                    <img src="icons/item_${item.icon}.png" class="item-cell-icon">
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
                div.dataset.icon = String(item.icon)
                div.dataset.price = item.price
                div.dataset.type = "desired"
                div.id = String(item.item_id)
                let item_name = item.name
                if (item.name == "item") item_name = item.icon
                div.innerHTML = `
                    <h6 class="item-cell-name">${item_name}</h6>
                    <img src="icons/item_${item.icon}.png" class="item-cell-icon">
                    <div class="item-cell-price">
                        <h5 class="item-cell-price-text">${item.price}</h5>
                        <img src="icons/cscoin.png" class="item-cell-price-coin">
                    </div>`
                desired_items_container.appendChild(div)
            })
        }
        load_items()


        let inventory_choosen_cell
        let upgrade_choosen_cell
        let upgdate_choice_blocked = false
        const inventory_section = document.getElementById("inventory-items-container")
        const inventory_upgrade_section = document.getElementById("desired-items-container")
        const selected_item_left = document.getElementById("selected-item-left")
        const selected_item_right = document.getElementById("selected-item-right")
        function upgrade_item_choose(from=null, id=null) {
        if (!upgdate_choice_blocked) {
            if (from === "inventory") {
                const choosen_cell = inventory_section.querySelector(`#${CSS.escape(id)}`);
                if (choosen_cell !== inventory_choosen_cell) {
                    if (inventory_choosen_cell) inventory_choosen_cell.style.filter = "brightness(1)";
                    inventory_choosen_cell = choosen_cell;
                    inventory_choosen_cell.style.filter = "brightness(0.8)";
                    selected_item_left.src = `icons/item_${inventory_choosen_cell.dataset.icon}.png`
                    
                }
            }
            else if (from === "upgrade") {
                const choosen_cell = inventory_upgrade_section.querySelector(`#${CSS.escape(id)}`);
                if (choosen_cell !== upgrade_choosen_cell) {
                    if (upgrade_choosen_cell) upgrade_choosen_cell.style.filter = "brightness(1)";
                    upgrade_choosen_cell = choosen_cell;
                    upgrade_choosen_cell.style.filter = "brightness(0.8)";
                    selected_item_right.src = `icons/item_${upgrade_choosen_cell.dataset.icon}.png`
                }
            }
            chance_calculator()
        }
        }
        const upgrade_procent = document.querySelector(".upgrade-procent")
        inventory_section.addEventListener("click", (e) => {
        const cell = e.target.closest(".item-cell");
        if (cell) {
            upgrade_item_choose("inventory", cell.id);
        }
        });

        inventory_upgrade_section.addEventListener("click", (e) => {
        const cell = e.target.closest(".item-cell");
        if (cell) {
            upgrade_item_choose("upgrade", cell.id);
        }
        });
        const upgrade_btn = document.querySelector(".upgrade-button")
        upgrade_btn_stage = "gray"
        function chance(percent) {
            return Math.random() < (percent / 100);
        }
        let sweep = 0
        let start = 0
        function marker_set(res){
        const pct = Math.max(0, Math.min(100, res));
        sweep = 360 * (pct / 100);
        const base = 180;
        start = base - sweep / 2;
        setSector(start, sweep);
            
        }

        function getCurrentAngle() {
        let tr = marker.style.transform;
        let match = tr.match(/rotate\(([-0-9.]+)deg\)/);
        return match ? (parseFloat(match[1]) + 90) % 360 : 0;
        }

        function pickTargetAngle(target) {
        let start = parseFloat(getComputedStyle(update_deco_ring).getPropertyValue('--sector-start'));
        let sweep = parseFloat(getComputedStyle(update_deco_ring).getPropertyValue('--sector-sweep'));

        if (target === "inside") {
            return start + Math.random() * sweep;
        } else {
            let rand = Math.random() * (360 - sweep);
            return (start + sweep + rand) % 360;
        }
        }

        function spinMarker(target = "inside", {duration = 3, spins = 4} = {}) {
        hide_marker("show")
        let current = getCurrentAngle();
        let targetAngle = pickTargetAngle(target);

        let finalAngle = targetAngle + spins * 360;

        gsap.to({ angle: current }, {
            angle: finalAngle,
            duration: duration,
            ease: "power3.out",
            onUpdate: function() {
            setMarker(this.targets()[0].angle);
            },
            onComplete: function() {
            setMarker(targetAngle);
            hide_marker("hide")
            }
        });
        }
        function upgrade_finish_animation_time_calculator(){{
            if (500 < sector_sweep*3.5) return sector_sweep*3.5
            else return 500
        }}
        const ucm1 = document.querySelector(".upgrade-container-main-item-1")
        const ucm2 = document.querySelector(".upgrade-container-main-item-2")
        const ucs = document.querySelectorAll(".upgrade-containers")
        const ubt = document.querySelector(".upgrade-button-text")
        function upgrade_finish_animation(type){
            setSector(180, 0)
            upgrade_procent.style.opacity = "0"
            upgrade_btn.style.opacity = "0"
            setTimeout(()=>{
            if (type == "win"){
                /*ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(300deg)"
                })
                ucm1.style.setProperty('--sat','60')
                ucm2.style.setProperty('--sat','60')*/
                update_deco_ring.style.setProperty("--sector-color", "#11c470ff");
                upgrade_procent.innerHTML = "WIN";
                upgrade_btn.style.background = "linear-gradient(180deg, #14F28A 0%, #02974C 100%) padding-box";
                ubt.innerHTML = "YOU WON";
                selected_item_left.style.opacity = "1"
                selected_item_right.style.opacity = "1"
                upgrade_procent.style.opacity = "1"
                //upgrade_text.style.opacity = "1"
                upgrade_btn.style.opacity = "1"
                setSector(0, 360)
            }
            if (type == "lose"){
               /* ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(130deg)"
                })
                ucm1.style.setProperty('--sat','15')
                ucm2.style.setProperty('--sat','15')*/
                update_deco_ring.style.setProperty("--sector-color", "#c9124cff");
                upgrade_procent.innerHTML = "LOSE";
                upgrade_btn.style.background = " linear-gradient(180deg, #F2145A 0%, #970231 100%) padding-box";
                ubt.innerHTML = "YOU LOSE";
                selected_item_left.style.opacity = "1"
                selected_item_right.style.opacity = "1"
                upgrade_procent.style.opacity = "1"
                //upgrade_text.style.opacity = "1"
                upgrade_btn.style.opacity = "1"
                setSector(0, 360)
            }

            upgrade_btn_stage = "coloured"
            upgrade_btn.style.pointerEvents = "all"
            },(upgrade_finish_animation_time_calculator()))
        }

        function upgrade_update(type="none"){
            if (result != 0){
            if(type == "none") upgrade_btn.style.background = "linear-gradient(#FFC935,#BA6917) padding-box, linear-gradient(#fee5a2,#BA6917) border-box";
            upgrade_btn.style.pointerEvents = "all";
            marker_set(result)
            if (upgrade_btn_stage == "gray" && type == "upgrade"){
                upgrade_btn.style.pointerEvents = "none"
                upgdate_choice_blocked = true
                upgrade_btn.style.opacity = "80%"
                update_deco_ring.style.setProperty("--sector-color", "#fea23a85");
                if (chance(result)){
                spinMarker("inside", {duration: 20, spins: 10});
                setTimeout(() => {
                    upgrade_finish_animation("win")
                }, 20000)
                }
                else{
                spinMarker("outside", {duration: 20, spins: 10});
                setTimeout(() => {
                    upgrade_finish_animation("lose")
                },20000)
                }
            }
            else if (upgrade_btn_stage == "coloured" && type == "upgrade"){
                selected_item_left.style.opacity = "0"
                selected_item_right.style.opacity = "0"
                upgrade_procent.style.opacity = "0"
                upgrade_btn.style.opacity = "0"
                result = 0;
                /*ucm1.style.filter = ""
                ucm2.style.filter = ""*/
                setSector(180,0)
                setTimeout(()=>{
                upgrade_btn_stage = "gray"
                
                /*ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(0)"
                })*/
                ubt.style.color = "rgb(192, 193, 193)"
                upgrade_btn.style.background = "linear-gradient(#FFC935,#BA6917) padding-box, linear-gradient(#fee5a2,#BA6917) border-box";
                selected_item_left.src = "icons/icon_filler.png";
                selected_item_right.src = "icons/icon_filler.png";
                inventory_choosen_cell.style.filter = "";
                inventory_choosen_cell = undefined;
                upgrade_choosen_cell.style.filter = "";
                upgrade_choosen_cell = undefined;
                upgrade_procent.innerHTML = "0.00 %";
                chance_calculator();
                upgrade_update();
                upgdate_choice_blocked = false
                selected_item_left.style.opacity = "1"
                selected_item_right.style.opacity = "1"
                upgrade_procent.style.opacity = "1"
                upgrade_btn.style.opacity = "1"
                },1000)
            }
            }
            else {
            upgrade_btn.style.background = "linear-gradient(#A1A1A1,#535353) padding-box, linear-gradient(#b5b5b5,#535353) border-box";
            upgrade_btn.style.pointerEvents = "none";
            ubt.innerHTML = "UPGRADE";
            ubt.style.color = "white"
            update_deco_ring.style.setProperty("--sector-color", "#fea33a");
            }
        }
        upgrade_btn.addEventListener('click', () => {
            upgrade_update("upgrade")
        })
        let result = 0
        function chance_calculator(){
            
            let price_1 = 0
            let price_2 = 0
            if (inventory_choosen_cell){
            price_1 = inventory_choosen_cell.dataset.price
            }
            if (upgrade_choosen_cell){
            price_2 = upgrade_choosen_cell.dataset.price
            }
            if (price_2 != 0)
            {
            result = price_1/price_2*100
            if (result > 85) result = 85
            result = result.toFixed(2)
            upgrade_procent.innerHTML = `${result} %`
            }
            upgrade_update()
        }
        
        const filter_inv_to = document.getElementById("filter-inventory-to")
        const filter_inv_from = document.getElementById("filter-inventory-from")
        const filter_upg_to = document.getElementById("filter-upgrade-to")
        const filter_upg_from = document.getElementById("filter-upgrade-from")
        filter_inv_from.addEventListener("input", () => {filter()})
        filter_inv_to.addEventListener("input", () => {filter()})
        filter_upg_from.addEventListener("input", () => {filter()})
        filter_upg_to.addEventListener("input", () => {filter()})
        function filter(){
            const filter_inv_to_price = document.getElementById("filter-inventory-to").value
            const filter_inv_from_price = document.getElementById("filter-inventory-from").value
            const filter_upg_to_price = document.getElementById("filter-upgrade-to").value
            const filter_upg_from_price = document.getElementById("filter-upgrade-from").value
            const uic = document.querySelectorAll(".item-cell")
            uic.forEach(el =>{
                if (el.dataset.type == "inventory"){
                    if (el.dataset.price > filter_inv_from_price && el.dataset.price < filter_inv_to_price) el.style.display = "flex";
                    else el.style.display = "none";
                }
                else if (el.dataset.type == "desired"){
                    if (el.dataset.price > filter_upg_from_price && el.dataset.price < filter_upg_to_price) el.style.display = "flex";
                    else el.style.display = "none";
                }
            })
        }
    }
    if (path.includes("case.html") || path === "/") {
        const case_items = [
        {name:"Glock", price:420, icon:"glock"},
        {name:"AWP", price:420, icon:"awp"},
        {name:"USP", price:420, icon:"usp"},
        {name:"AUG", price:420, icon:"aug"},
        {name:"Glock", price:420, icon:"glock"},
        {name:"AWP", price:420, icon:"awp"},
        {name:"USP", price:420, icon:"usp"},
        {name:"AUG", price:420, icon:"aug"},
        {name:"Glock", price:420, icon:"glock"},
        {name:"AWP", price:420, icon:"awp"},
        {name:"USP", price:420, icon:"usp"},
        {name:"AUG", price:420, icon:"aug"},
        ]
        
        function load_case_items(array){
        if (Array.isArray(array) && array.length > 0) {
            array.forEach(case_element => {
            let container;
            container = document.getElementById("case-inventory-cont");

            if (!container) return;
            const div = document.createElement("div");
            div.className = "case"
            div.innerHTML = `<h3 class="case-name">${case_element.name}</h3>
                <img src="icons/item_${case_element.icon}.png" class="case-icon">
                <div class="case-price-container">
                    <h3 class="case-price">${case_element.price}</h3>
                    <img src="icons/cscoin.png" class="case-coin-icon">
                </div>
            `;
            container.appendChild(div);
            });
            
        }
        };
    load_case_items(case_items);

    function roulet_reset(array,reset,slot,id=0){
        let class_name = ""
        let subclass_name = ""

        console.log(reset, slot, id)

        if (slot == 0) {
        class_name = "case-roulet-item-cell"
        subclass_name = ""};
        
        const roulet_container = document.getElementById(`case_roulet_slot_${slot}`)
        let expand_number = 5
        if (reset == "all" || reset == "expand"){
        if (reset == "all"){
            roulet_container.innerHTML = ''
            gsap.to(roulet_container, {duration: 0, x: 0, y: 0})
            expand_number = 60
        }
            for (let i = 0; i < expand_number; i++) {
            const ran_container = array[randint(0, array.length - 1)];
            const div = document.createElement("div");
            div.className = class_name
            div.id = `roulet_cell_slot_${slot}`
            div.dataset.item_id = ran_container.item_id;
            div.innerHTML = `<h3 class="case-name">${ran_container.name}</h3>
                <img src="icons/item_${ran_container.icon}.png" class="case-icon">
                <div class="case-price-container">
                    <h3 class="case-price">${ran_container.price}</h3>
                    <img src="icons/cscoin.png" class="case-coin-icon">
                </div>`;
            roulet_container.appendChild(div)
            };
        }
        else if (reset == "add") {
        const ran_container = array[id];
        const div = document.createElement("div");
        div.className = class_name;
        div.id = `roulet_cell_slot_${slot}`;
        div.dataset.item_id = ran_container.item_id;
        div.innerHTML = `<h3 class="case-name">${ran_container.name}</h3>
                <img src="icons/item_${ran_container.icon}.png" class="case-icon">
                <div class="case-price-container">
                    <h3 class="case-price">${ran_container.price}</h3>
                    <img src="icons/cscoin.png" class="case-coin-icon">
                </div>`;
        }
    }
    CustomEase.create("custom", "M0,0 C0,0 0.118,0.607 0.269,0.743 0.394,0.855 0.486,0.883 0.655,0.929 0.719,0.945 0.824,0.936 0.861,0.951 0.891,0.963 0.908,0.959 0.934,0.974 0.956,0.987 0.969,1 1,1 1.03,1 1,1 1,1 ")
    let slots_move = 57;
    let step = 205;
    function roulet_spin(slot, array_stop_on_element) {
    function set_case_result(slot){
        if (slot == 0) roulet_0_result = array_stop_on_element
    }
    roulet_reset(case_items,"all",slot,array_stop_on_element)
    roulet_reset(case_items,"add",slot,array_stop_on_element)
    
    const containerSelector = `#case_roulet_slot_${slot}`;
    const container = document.querySelector(containerSelector);
    let slots_to_move = (step * slots_move)
    gsap.to(container, {duration: 0, x: 0, y: 0})
        gsap.to(container, {duration: 16, ease: "custom", x: 0-(slots_to_move), y: 0,onComplete: () => {
        set_case_result(slot)
        setTimeout(() => {case_results(case_items, "show")},1000)
        }
        })
        roulet_reset(case_items,"expand",slot)
    
    }

    let roulet_0_result = -1
    function case_results(array,act){
    const case_roulet_result_container = document.querySelector(".case-roulet-result-container")
    let case_roulet_result = document.querySelectorAll(".case-roulet-result")
    case_roulet_result.forEach(el => {
        el.style.opacity = "1";
    })
    let array_el
    
    if (act == "show"){
        case_roulet_result_container.innerHTML = ""
        case_roulet_result_container.style.backgroundColor = "#0b0c10b3";
        case_roulet_result_container.style.backdropFilter = "blur(10px)";
        if (roulet_0_result > -1){
        array_el = array[roulet_0_result]
        const div = document.createElement("div")
        div.className = "case-roulet-result"
        div.innerHTML = `<h3 class="case-name">${array_el.name}</h3>
                <img src="icons/item_${array_el.icon}.png" class="case-icon">`

        case_roulet_result_container.appendChild(div)
        }
        case_roulet_result_container.style.opacity = "1";
        case_roulet_result = document.querySelectorAll(".case-roulet-result")
        case_roulet_result.forEach(el => {
        el.style.opacity = "1";
    })
    if (!roulet_fast) setTimeout(() => {case_buttons_controller("start","unlock")},100)
    else case_buttons_controller("start","unlock")
    }
    else if (act == "hide"){
        case_roulet_result_container.style.opacity = "0%";
        case_roulet_result_container.style.backgroundColor = "#0b0c10ff";
        case_roulet_result_container.style.backdropFilter = "blur(0px)";
        setTimeout(()=> {case_roulet_result_container.innerHTML = ""},250)
        roulet_0_result = -1
        
    }
    }
    if (!user_data) {
        document.querySelector(".case-buttons-upper-subcontainer-container-img").style.display="flex";
        document.querySelector(".case-buttons-upper-subcontainer-text").style.display="flex";
    }
    else if (user_data) {
        document.querySelector(".case-buttons-upper-subcontainer-container-img").style.display="none";
        document.querySelector(".case-buttons-upper-subcontainer-text").style.display="none";
    }

    let roulets_amount = 0
    function roulets_switcher(num){
    const roulet_arrow_vertical = document.querySelector(".case-roulet-arrows-vertical")
    const case_roulet_container = document.querySelector(".case-roulet-container")
    const case_roulet_slot_0 = document.getElementById("case_roulet_slot_0")

    slots_move = 57;
    step = 286.5;
    case_roulet_slot_0.style.display = "none";
    case_roulet_container.style.setProperty("--crc-before", "rbga(0,0,0,0)");
    roulet_arrow_vertical.style.display = "none";
    
        slots_move = 57;
        step = 205;
        case_roulet_container.style.setProperty("--crc-before", "linear-gradient(to right, #0B0C10 0%, rgba(0, 0, 0, 0)20%, rgba(0, 0, 0, 0)80%, #0B0C10)");
        roulet_arrow_vertical.style.display = "flex";
        case_roulet_slot_0.style.display = "flex";
        roulet_reset(case_items,"all",0)
    
    }
    roulets_switcher(roulets_amount)
    case_buttons_controller("conb_1","activate")
    document.getElementById("case_open_btn").addEventListener('click', function() {
    case_buttons_controller("start","start")
    });
    function case_buttons_controller(btn,act){
    if (btn == "start" && act == "start"){
            case_results(case_items,"hide")
            roulet_spin(0, randint(0,3))
    }
    else if (btn == "start", act == "unlock"){
        case_open_num_selection.style.opacity = "1";
        case_open_num_selection.style.pointerEvents = "all";
        case_buttons_middle_subcontainer.style.opacity = "1";
        case_buttons_middle_subcontainer.style.pointerEvents = "all";
    }

    }
    let roulet_fast = false;


    roulet_reset(case_items,"all",0)
    }
    login_check()
})