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
                ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(300deg)"
                })
                ucm1.style.filter = "saturate(60)"
                ucm2.style.filter = "saturate(60)"
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
                ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(130deg)"
                })
                ucm1.style.filter = "saturate(15)"
                ucm2.style.filter = "saturate(15)"
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
                ucm1.style.filter = ""
                ucm2.style.filter = ""
                setSector(180,0)
                setTimeout(()=>{
                upgrade_btn_stage = "gray"
                
                ucs.forEach(el =>{
                    el.style.filter = "hue-rotate(0)"
                })
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
})