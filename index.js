const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 1.5
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity ={
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 50
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y +this.height +this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Platform {
    constructor() {
        this.position = {
            x: 200,
            y: 100
        }
        this.width = 200
        this.height = 20
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this. position.y, this.width, this.height)
    }
}

const player = new Player()
const platform = new Platform()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}
player.update()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platform.draw()

    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x= 5
    } else if (keys.left.pressed) {
        player.velocity.x= -5
    } else player.velocity.x = 0

    if (player.position.y + player.height <= platform.position.y && player. position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
}
animate()

addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode){
        case 37:
            console.log('left')
            keys.left.pressed = true
            break
    
        case 38:
            console.log('up')
            player.velocity.y -= 20
            break

        case 39:
            console.log('right')
            keys.right.pressed = true
            break
        
        case 40:
            console.log('down')
            break
    }
    console.log(keys.right.pressed)
})

addEventListener('keyup', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode){
        case 37:
            console.log('left')
            keys.left.pressed = false
            break
    
        case 38:
            console.log('up')
            player.velocity.y -= 20
            break

        case 39:
            console.log('right')
            keys.right.pressed = false
            break
        
        case 40:
            console.log('down')
            break
    }
    console.log(keys.right.pressed)
})
