function toggleItems(hasItems) {
    const empty = document.querySelector('.items-empty');
    const grid = document.querySelector('.items-grid');

    if (hasItems) { 
        empty.style.display="none"
        grid.style.display="grid"
    } else {
        empty.style.display="flex"
        grid.style.display="none"
    }
}
toggleItems(true)