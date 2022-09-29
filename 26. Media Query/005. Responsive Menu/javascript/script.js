let menuIcon = document.querySelector ("#menuIcon")
let containerMenu = document.querySelector ("#container-menu")
let menuItem = document.querySelector ("#menuItem")
        
menuIcon.addEventListener ('mouseover',changeColorMenuOver)
menuIcon.addEventListener ('mouseout',changeColorMenuOut)
menuIcon.addEventListener ('click',clickMenu)


function changeColorMenuOver() {
    containerMenu.style.background = "white"
}

function changeColorMenuOut() {
    containerMenu.style.background = "rgb(202, 200, 200)"
}

function clickMenu() {
    if (menuItem.style.display == 'block') {
        menuItem.style.display = 'none'
    } else {
        menuItem.style.display = 'block'
    }
}

function changeSize() {
    if (window,innerWidth >= 768) {
        menuItem.style.display = 'block'
    } else {
        menuItem.style.display = 'none'
    }
}


/*

class MediaQuery {

    constructor() {
        this.menuIcon = document.querySelector ("#menuIcon")
        this.containerMenu = document.querySelector ("#container-menu")
        this.menuItem = document.querySelector ("#menuItem")
        
        this.menuIcon.addEventListener ('mouseenter', this.changeColorMenuOver)
        this.menuIcon.addEventListener ('mouseout', this.changeColorMenuOut)
        this.menuIcon.addEventListener ('click', this.clickMenu)
    }

    changeColorMenuOver() {
        containerMenu.style.background = 'white'
    }
    
    changeColorMenuOut() {
        containerMenu.style.background = 'rgb(202, 200, 200)'
    }
    
    clickMenu() {
        if (menuItem.style.display == 'block') {
            menuItem.style.display = 'none'
        } else {
            menuItem.style.display = 'block'
        }
    }

}


let mediaquery = new MediaQuery()


*/



