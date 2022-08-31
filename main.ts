namespace SpriteKind {
    export const hud = SpriteKind.create()
}
namespace StatusBarKind {
    export const ammo = StatusBarKind.create()
    export const armour = StatusBarKind.create()
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (max_ammo >= 36) {
        pause(1000)
        ammo2 = 36
        max_ammo += -36
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (menu_on == false) {
        if (zoom_on == true) {
            zoom_on = false
            fpx_scale = 1024
            animation.runImageAnimation(
            mySprite6,
            [img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `,img`
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                ........................................................................ffffffffffffff...............................................................................
                ......................................................fffffffffffffffffffffffffffffffffffffffffffffff................................................................
                ..................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffff............................................................
                ................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................
                ..............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................
                ............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................
                ..........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
                .........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................
                ........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
                ........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
                ......................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................
                .....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................
                ....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................
                ...................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................
                ..................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................
                .................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................
                ................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
                ..............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................
                ..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
                .............................ffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffff................................
                ............................ffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffff................................
                ............................fffffffffffffffffffffffffffffffffffffff..............f..............ffffffffffffffffffffffffffffffffffffff...............................
                ...........................ffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffff..............................
                ..........................fffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffff.............................
                ..........................ffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffff.............................
                .........................fffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffff............................
                ........................fffffffffffffffffffffffffffffffffff......................f......................ffffffffffffffffffffffffffffffffff...........................
                ........................ffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffff..........................
                .......................ffffffffffffffffffffffffffffffffff........................f........................ffffffffffffffffffffffffffffffffff.........................
                ......................ffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffff.........................
                ......................fffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffff.........................
                .....................fffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffff........................
                .....................ffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
                ....................fffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
                ....................ffffffffffffffffffffffffffffffff.............................f.............................fffffffffffffffffffffffffffffff.......................
                ....................fffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffff.......................
                ....................fffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffff.......................
                ....................ffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffff......................
                ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffff......................
                ...................ffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
                ..................fffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
                ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffff.....................
                ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
                ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
                ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
                ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffff.....................
                .................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
                .................ffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffff......................
                ..................fffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffff......................
                ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
                ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
                ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
                ..................fffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
                ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffff.......................
                ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffff.......................
                ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffff........................
                ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffff........................
                ....................fffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffff........................
                ....................fffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffff........................
                ....................ffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffff........................
                ....................fffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
                ....................fffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffff.........................
                .....................fffffffffffffffffffffffffffffffff...........................f...........................fffffffffffffffffffffffffffffff.........................
                .....................ffffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffff.........................
                ......................ffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffff.........................
                ......................fffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffff..........................
                .......................fffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffff..........................
                .......................ffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffff..........................
                .......................fffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffff..........................
                ........................ffffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffffff...........................
                ........................fffffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffffff...........................
                ........................fffffffffffffffffffffffffffffffffffffffff................f................ffffffffffffffffffffffffffffffffffffffff...........................
                .........................ffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffff............................
                ..........................ffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffff............................
                ..........................fffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffff............................
                ..........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................
                ...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................
                ...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................
                ............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................
                .............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................
                ..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
                ...............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
                ...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................
                ................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
                .................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................
                ..................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................
                .....................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................................
                ......................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................
                ........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................
                ..........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................................
                ...........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................
                .............................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
                ................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
                ..................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
                .....................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
                .........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................
                ............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................
                ..................................................................fffffffffffffffffffffffffffffffffffffffff..........................................................
                ........................................................................ffffffffffffffffffffffffffffffff.............................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                `,img`
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .........................................................................fffffffffffffffffffffffffff.................................................................
                ....................................................................ffffffffffffffffffffffffffffffffffff.............................................................
                .................................................................ffffffffffffffffffffffffffffffffffffffffff..........................................................
                ...............................................................ffffffffffffffffffffffffffffffffffffffffffffff........................................................
                .............................................................ffffffffffffffffffffffffffffffffffffffffffffffffff......................................................
                ...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................................
                ........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
                ......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
                ....................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
                .................................................ffffffffffffffffffffffff........f........fffffffffffffffffffffffffff................................................
                ................................................ffffffffffffffffffffff...........f...........fffffffffffffffffffffffff...............................................
                ...............................................ffffffffffffffffffff..............f..............fffffffffffffffffffffff..............................................
                ..............................................fffffffffffffffffff................f................fffffffffffffffffffff..............................................
                .............................................ffffffffffffffffff..................f..................ffffffffffffffffffff.............................................
                ............................................ffffffffffffffffff...................f...................ffffffffffffffffffff............................................
                ...........................................fffffffffffffffff.....................f.....................fffffffffffffffffff...........................................
                ..........................................fffffffffffffffff......................f......................fffffffffffffffffff..........................................
                .........................................fffffffffffffffff.......................f.......................ffffffffffffffffff..........................................
                ........................................fffffffffffffffff........................f........................ffffffffffffffffff.........................................
                .......................................fffffffffffffffff.........................f.........................fffffffffffffffff.........................................
                .......................................ffffffffffffffff..........................f..........................fffffffffffffffff........................................
                .......................................fffffffffffffff...........................f...........................ffffffffffffffff........................................
                ......................................fffffffffffffff............................f............................fffffffffffffff........................................
                .....................................ffffffffffffffff............................f............................ffffffffffffffff.......................................
                .....................................fffffffffffffff.............................f.............................fffffffffffffff.......................................
                .....................................ffffffffffffff..............................f..............................ffffffffffffff.......................................
                ....................................fffffffffffffff..............................f..............................ffffffffffffff.......................................
                ...................................fffffffffffffff...............................f...............................ffffffffffffff......................................
                ...................................fffffffffffffff...............................f...............................ffffffffffffff......................................
                ..................................fffffffffffffff................................f................................fffffffffffff......................................
                ..................................fffffffffffffff................................f................................fffffffffffff......................................
                .................................ffffffffffffffff................................f................................fffffffffffff......................................
                .................................fffffffffffffff.................................f.................................ffffffffffff......................................
                ................................ffffffffffffffff.................................f.................................fffffffffffff.....................................
                ................................ffffffffffffffff.................................f.................................fffffffffffff.....................................
                ................................fffffffffffffff..................................f..................................ffffffffffff.....................................
                ................................fffffffffffffff..................................f..................................ffffffffffff.....................................
                ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
                ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
                ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff.................................fff.................................ffffffffffffff...................................
                ...............................ffffffffffffffff................................f.f.f................................ffffffffffffff...................................
                ...............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
                ...............................ffffffffffffffff................................f.f.f................................ffffffffffffff...................................
                ...............................ffffffffffffffff.................................fff.................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
                ...............................fffffffffffffffff.................................f.................................fffffffffffffff...................................
                ...............................fffffffffffffffff.................................f.................................fffffffffffffff...................................
                ................................ffffffffffffffff.................................f.................................fffffffffffffff...................................
                ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
                ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
                ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
                ................................ffffffffffffffffff...............................f...............................fffffffffffffffff...................................
                ................................ffffffffffffffffff...............................f...............................fffffffffffffffff...................................
                ................................fffffffffffffffffff..............................f..............................ffffffffffffffffff...................................
                ................................fffffffffffffffffff..............................f..............................ffffffffffffffffff...................................
                .................................fffffffffffffffffff.............................f.............................ffffffffffffffffff....................................
                .................................ffffffffffffffffffff............................f............................ffffffffffffffffff.....................................
                ..................................fffffffffffffffffff............................f............................ffffffffffffffffff.....................................
                ..................................ffffffffffffffffffff...........................f...........................fffffffffffffffffff.....................................
                ..................................fffffffffffffffffffff..........................f..........................fffffffffffffffffff......................................
                ...................................fffffffffffffffffffff.........................f.........................ffffffffffffffffffff......................................
                ...................................ffffffffffffffffffffff........................f........................fffffffffffffffffffff......................................
                ....................................ffffffffffffffffffffff.......................f.......................fffffffffffffffffffff.......................................
                .....................................ffffffffffffffffffffff......................f......................ffffffffffffffffffffff.......................................
                ......................................ffffffffffffffffffffff.....................f.....................ffffffffffffffffffffff........................................
                .......................................fffffffffffffffffffffff...................f...................ffffffffffffffffffffffff........................................
                ........................................fffffffffffffffffffffff..................f..................ffffffffffffffffffffffff.........................................
                ........................................fffffffffffffffffffffffff................f................fffffffffffffffffffffffff..........................................
                .........................................ffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffff..........................................
                ...........................................fffffffffffffffffffffffffff...........f...........fffffffffffffffffffffffffffff...........................................
                ............................................fffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffff............................................
                ..............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
                ...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
                .................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................
                ...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
                ....................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
                ......................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
                ........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................................
                ..........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................
                ............................................................fffffffffffffffffffffffffffffffffffffffffffffff..........................................................
                ..............................................................fffffffffffffffffffffffffffffffffffffffffff............................................................
                ................................................................ffffffffffffffffffffffffffffffffffffffff.............................................................
                ..................................................................ffffffffffffffffffffffffffffffffffff...............................................................
                ....................................................................ffffffffffffffffffffffffffffffff.................................................................
                .........................................................................fffffffffffffffffffffffff...................................................................
                ............................................................................fffffffffffffffffff......................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                .....................................................................................................................................................................
                `],
            25,
            false
            )
            timer.after(100, function () {
                color.clearFadeEffect()
                mySprite6.destroy()
            })
        }
    }
})
function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu_on == false) {
        fpx_scale = 2000
        zoom_on = true
        mySprite6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        animation.runImageAnimation(
        mySprite6,
        [img`
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .........................................................................fffffffffffffffffffffffffff.................................................................
            ....................................................................ffffffffffffffffffffffffffffffffffff.............................................................
            .................................................................ffffffffffffffffffffffffffffffffffffffffff..........................................................
            ...............................................................ffffffffffffffffffffffffffffffffffffffffffffff........................................................
            ............................................................ffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................
            ...........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................................
            ........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
            ......................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
            ....................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
            .................................................ffffffffffffffffffffffff........f........fffffffffffffffffffffffffff................................................
            ................................................ffffffffffffffffffffff...........f...........fffffffffffffffffffffffff...............................................
            ...............................................ffffffffffffffffffff..............f..............fffffffffffffffffffffff..............................................
            ..............................................fffffffffffffffffff................f................fffffffffffffffffffff..............................................
            .............................................ffffffffffffffffff..................f..................ffffffffffffffffffff.............................................
            ............................................ffffffffffffffffff...................f...................ffffffffffffffffffff............................................
            ...........................................fffffffffffffffff.....................f.....................fffffffffffffffffff...........................................
            ..........................................fffffffffffffffff......................f......................fffffffffffffffffff..........................................
            .........................................fffffffffffffffff.......................f.......................ffffffffffffffffff..........................................
            ........................................fffffffffffffffff........................f........................ffffffffffffffffff.........................................
            .......................................fffffffffffffffff.........................f.........................fffffffffffffffff.........................................
            .......................................ffffffffffffffff..........................f..........................fffffffffffffffff........................................
            .......................................fffffffffffffff...........................f...........................ffffffffffffffff........................................
            ......................................fffffffffffffff............................f............................fffffffffffffff........................................
            .....................................ffffffffffffffff............................f............................ffffffffffffffff.......................................
            .....................................fffffffffffffff.............................f.............................fffffffffffffff.......................................
            .....................................ffffffffffffff..............................f..............................ffffffffffffff.......................................
            ....................................fffffffffffffff..............................f..............................ffffffffffffff.......................................
            ...................................fffffffffffffff...............................f...............................ffffffffffffff......................................
            ...................................fffffffffffffff...............................f...............................ffffffffffffff......................................
            ..................................fffffffffffffff................................f................................fffffffffffff......................................
            ..................................fffffffffffffff................................f................................fffffffffffff......................................
            .................................ffffffffffffffff................................f................................fffffffffffff......................................
            .................................fffffffffffffff.................................f.................................ffffffffffff......................................
            ................................ffffffffffffffff.................................f.................................fffffffffffff.....................................
            ................................ffffffffffffffff.................................f.................................fffffffffffff.....................................
            ................................fffffffffffffff..................................f..................................ffffffffffff.....................................
            ................................fffffffffffffff..................................f..................................ffffffffffff.....................................
            ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
            ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
            ...............................ffffffffffffffff..................................f..................................fffffffffffff....................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff.................................fff.................................ffffffffffffff...................................
            ...............................ffffffffffffffff................................f.f.f................................ffffffffffffff...................................
            ...............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
            ...............................ffffffffffffffff................................f.f.f................................ffffffffffffff...................................
            ...............................ffffffffffffffff.................................fff.................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................ffffffffffffffff..................................f..................................ffffffffffffff...................................
            ...............................fffffffffffffffff.................................f.................................fffffffffffffff...................................
            ...............................fffffffffffffffff.................................f.................................fffffffffffffff...................................
            ................................ffffffffffffffff.................................f.................................fffffffffffffff...................................
            ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
            ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
            ................................fffffffffffffffff................................f................................ffffffffffffffff...................................
            ................................ffffffffffffffffff...............................f...............................fffffffffffffffff...................................
            ................................ffffffffffffffffff...............................f...............................fffffffffffffffff...................................
            ................................fffffffffffffffffff..............................f..............................ffffffffffffffffff...................................
            ................................fffffffffffffffffff..............................f..............................ffffffffffffffffff...................................
            .................................fffffffffffffffffff.............................f.............................ffffffffffffffffff....................................
            .................................ffffffffffffffffffff............................f............................ffffffffffffffffff.....................................
            ..................................fffffffffffffffffff............................f............................ffffffffffffffffff.....................................
            ..................................ffffffffffffffffffff...........................f...........................fffffffffffffffffff.....................................
            ..................................fffffffffffffffffffff..........................f..........................fffffffffffffffffff......................................
            ...................................fffffffffffffffffffff.........................f.........................ffffffffffffffffffff......................................
            ...................................ffffffffffffffffffffff........................f........................fffffffffffffffffffff......................................
            ....................................ffffffffffffffffffffff.......................f.......................fffffffffffffffffffff.......................................
            .....................................ffffffffffffffffffffff......................f......................ffffffffffffffffffffff.......................................
            ......................................ffffffffffffffffffffff.....................f.....................ffffffffffffffffffffff........................................
            .......................................fffffffffffffffffffffff...................f...................ffffffffffffffffffffffff........................................
            ........................................fffffffffffffffffffffff..................f..................ffffffffffffffffffffffff.........................................
            ........................................fffffffffffffffffffffffff................f................fffffffffffffffffffffffff..........................................
            .........................................ffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffff..........................................
            ...........................................fffffffffffffffffffffffffff...........f...........fffffffffffffffffffffffffffff...........................................
            ............................................fffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffff............................................
            ..............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
            ...............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
            .................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................
            ...................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
            ....................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
            ......................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
            ........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................................
            ..........................................................ffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................
            ............................................................fffffffffffffffffffffffffffffffffffffffffffffff..........................................................
            ..............................................................fffffffffffffffffffffffffffffffffffffffffff............................................................
            ................................................................ffffffffffffffffffffffffffffffffffffffff.............................................................
            ..................................................................ffffffffffffffffffffffffffffffffffff...............................................................
            ....................................................................ffffffffffffffffffffffffffffffff.................................................................
            .........................................................................fffffffffffffffffffffffff...................................................................
            ............................................................................fffffffffffffffffff......................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            `,img`
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            ........................................................................ffffffffffffff...............................................................................
            ......................................................fffffffffffffffffffffffffffffffffffffffffffffff................................................................
            ..................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffff............................................................
            ................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................................
            ..............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................
            ............................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................
            ..........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................................
            .........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................
            ........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
            ........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
            ......................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................
            .....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................
            ....................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................
            ...................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................................
            ..................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................
            .................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................
            ................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
            ..............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................
            ..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
            .............................ffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffff................................
            ............................ffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffff................................
            ............................fffffffffffffffffffffffffffffffffffffff..............f..............ffffffffffffffffffffffffffffffffffffff...............................
            ...........................ffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffff..............................
            ..........................fffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffff.............................
            ..........................ffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffff.............................
            .........................fffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffff............................
            ........................fffffffffffffffffffffffffffffffffff......................f......................ffffffffffffffffffffffffffffffffff...........................
            ........................ffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffff..........................
            .......................ffffffffffffffffffffffffffffffffff........................f........................ffffffffffffffffffffffffffffffffff.........................
            ......................ffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffff.........................
            ......................fffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffff.........................
            .....................fffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffff........................
            .....................ffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
            ....................fffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
            ....................ffffffffffffffffffffffffffffffff.............................f.............................fffffffffffffffffffffffffffffff.......................
            ....................fffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffff.......................
            ....................fffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffff.......................
            ....................ffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffff......................
            ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffff......................
            ...................ffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
            ..................fffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
            ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffff.....................
            ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
            ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
            ..................ffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffff.....................
            ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            ..................fffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffff.....................
            .................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffff.....................
            .................ffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffff......................
            ..................fffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
            ..................ffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffff......................
            ..................fffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffff......................
            ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffff.......................
            ..................fffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffff.......................
            ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffff........................
            ...................fffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffff........................
            ....................fffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffff........................
            ....................fffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffff........................
            ....................ffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffff........................
            ....................fffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffff........................
            ....................fffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffff.........................
            .....................fffffffffffffffffffffffffffffffff...........................f...........................fffffffffffffffffffffffffffffff.........................
            .....................ffffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffff.........................
            ......................ffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffff.........................
            ......................fffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffff..........................
            .......................fffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffff..........................
            .......................ffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffff..........................
            .......................fffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffff..........................
            ........................ffffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffffff...........................
            ........................fffffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffffff...........................
            ........................fffffffffffffffffffffffffffffffffffffffff................f................ffffffffffffffffffffffffffffffffffffffff...........................
            .........................ffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffff............................
            ..........................ffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffff............................
            ..........................fffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffff............................
            ..........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................
            ...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................
            ...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................
            ............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................
            .............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................
            ..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
            ...............................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.................................
            ...............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................
            ................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................
            .................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....................................
            ..................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................
            .....................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................................
            ......................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................
            ........................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................
            ..........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................................
            ...........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................
            .............................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............................................
            ................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................
            ..................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
            .....................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................................................
            .........................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................................................
            ............................................................ffffffffffffffffffffffffffffffffffffffffffffffffffff.....................................................
            ..................................................................fffffffffffffffffffffffffffffffffffffffff..........................................................
            ........................................................................ffffffffffffffffffffffffffffffff.............................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            .....................................................................................................................................................................
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff................................f................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `],
        25,
        false
        )
        mySprite6.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff................................f.f.f................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff.................................fff.................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff..................................f..................................ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff.................................f.................................fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff................................f................................ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff...............................f...............................fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff..............................f..............................ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff.............................f.............................fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff............................f............................ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff...........................f...........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff..........................f..........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................f.........................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................f........................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......................f.......................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................f......................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.....................f.....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...................f...................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f..................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................f................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............f..............ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........f...........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........f........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite6.setPosition(82, 63)
        color.Brighten.startScreenEffect()
    }
})
let mySprite: Sprite = null
let mySprite6: Sprite = null
let zoom_on = false
let max_ammo = 0
let ammo2 = 0
let fpx_scale = 0
let menu_on = false
menu_on = true
pause(1)
scene.setBackgroundImage(img`
    bdddddddddddddddddddddddddddddbbbbdddddddbbbbbbbbbbbdddbbbbbbbbbbbbbb6bb66666666666666b666666b66b6666666666666666666666bbb6666bbbbbbb666bbbbbbbbbbbbbbbbbbbbbbbb
    bdddddddddddddddddddddddddddddbbbdddddddddbbbbbbbdddddddbbbbbbbb66bddbbbb6bbbb6666666bb666666b66b6666666666666666666666bb6666bbbbbbbb6bbbbbbbbbbbbbbbbbbbbbbbbbb
    bdddddddddddddddddddddddddddddbbbddddddddddbbbdddddddddd9bbbbbbbbbdddd9dd9ddd96666666b666666b666b66666666666666666666666b66666bbbbb66bbbbbbbbbbbbbbbbbbbbbbbbbbb
    bddddddddddddddddddddddddddddbbbbbdddd111ddddddddddddddd99999bbbbbddddddddddddbb66666b666666b66666666666b6666666666bb66666666bbbbbb6bbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbdddddddddddddddddddddddddddbbb9bdddd1111dddddddddddddd9ddd999999dddddddddddd9bbb666966666b666b6666666bb66666666bddd66b6666bbbbbbb66bbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbdddddddddddddddddddddddddbb999ddd11111ddddddddd1dd1dd11dddddddddddddddddddd9bbbbbb66666b666b666666bbb6666dbbbdddbbbdb66bbbbbddbb6bbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddbcbbddddddddddddddddd11dddd99999ddd11111dddddddd111111111111dddddddddddddddddd96b99b66666b66b666666b9bb6bbdddddddbddddd6bbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddcccbbddbccccbdddddd11dddd99ddddddd1111111ddddd11111111111111dddddddddddddddddd9dd9b6666bb66b666b66bbbb6bbddddddddddddbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddccccccccccccbddddd11ddddd9ddddd1d1111111111dd11111111111111111dd11ddddddddddddddd9b6b669669b6bbb999bbbb999ddddddddddddbbdbbddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddbccccccccccbddd111ddddd999ddddd1d1111111111dd11111111111111111d1111dddddddddddddd99996b9bb9bbbb9999bbb999b9b99bbbbdddbbdddbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddccccccccbddddd111dddd9dddddddddd1dddddd1111d1111111111111111111111dddddddddddddd9999999999999999999b9999999bbbb9bbbb66dbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddccccccccbddddd1111dbddddddd1ddddddbbbbbd111111111111111111111111111ddddddddddddd99999999999999999999999ddd9bbb99bbbb6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddbcccccccbdddddd1111bcbdddddd1dd1ddbbbbbdbd111111111111111111111111dddddddd1dddddd999999999999999999999999dd9bb9999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbb
    dddbccccccccddddddd11dbccbdddd1dddddbbbbbbdbbd11111111111111111111111dddd111111ddddd999999999999999999dbdd99d9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddb
    dddbbbbccccccdddddd1dbcccbdd11ddd11dce4eeebbcb11111111111111111111111ddddd1111dddddd99999999999999999db4bdd9999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd
    dddddddbcccccddddddddcecccbd11dd111dee4eeecbbb11111111111111111111dddddd111111dddddd999999999999999dbe44ddd9999999d999999999999999bdddbbddbbbbbbbbbbbbdddddddddd
    ddddddddbbccbd1ddddddcccccebd111111deed4ddbbcd11111111111111ddddddd11dd111111dddddd9999999999999ddbcce4dd1dd99999dd9999999999ddd99ddddddddddddbbbbdbbbdddddddddd
    dddddddddddddd1dddddddbcbcccbdd1111dbebbddbbc11111111111111dddbbbbbdddd111dddddddd99999999999ddbbeccbd111dddd999d9999999999999999dddddddddddddbbbddddddddddddddd
    ddddddddddddddd1dddd11dbcecccbd11111dbbbbcccc1111111111111dddbbccccdddd111dddddd9d99999d99dddbeecccbdd1dddddd9999999999999999999dddddddddddddddddddddddddddddddd
    ddddddddddddddddddd11111bcccccd1111dbbbecccccdddd1111111dddbbbccccbdddd11ddddddd9d9999dbddbbeeccccb9ddd44bddd9999999999999999999dddddddddddddddddddddddddddddddd
    ddddddddddddddddddd111dddccccbd1111dbbccccccbbbbbd111111bbbbccbbcbdddddddddddddddddddddbbbeecceeecbcbcebdddd999999999999999999999ddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddbcbccccbd1d11bbccccccccbbbbbd1111dbbbbcbb9bbddddd11ddddddddbbeeeeeeccceeeccccccbbdddd999999999999999999999dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddbdcccccccd1ddddccccccccccbbccb1111bcccccbcccbdddd111ddddddbeeeecccccceeeeccccccb99999999999d999999999999999dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddbbbcccccc111dddbccccccccccbbcb1111cccccbcccccdd1111dddddbcccceccccceb4eccccfcb9999999999999999d999999999999dddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddccccccccd11dddbcccccccccccbccd111ccccbbbbebbd1111ddddbcccccccccbbeeecfccccb9999999999999999999999999999999dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddccccbbcbdddddbbcccccccccccccd111bcccbbbccccb1111dbbccccbccccbbcccccccccbd99999999999999999999999999999999dddddddddddddddddddddddddddddddd
    ddddbdbddddddddddddddddbbcbbbbcbdd1dbbbccccccccccccd1111bcccccccccc111ddbccccbccccbccccccccccc9999999999999999999999999999999999dddd11dddddddddddddddddddddddddd
    dddbcccbddddddddddddd11dbbbbbbccbd1bbbbccccccccccccbdd11dcccccccccc11dddbccccccccccccccccccceeb999999999999999999999999999999999dddddddddddddddddddddddddddddddd
    ddddbcccbbbddddddddd1111ddbbbbcccdddbbccccccccccccbbddddddccccccccb1ddddbbbbbcccccccccceceeecc999999999999999999999999999999999ddddddddddddddddddddddddddddddddd
    dddddbcccbbddddddddd11111dbbdbbbcdd1dbccccccccccccbbddddddccccccccd1ddddbbccccccccccceeeeeecbd99999999999999999999999999999999d111dddddddddddddddddddddddddddddd
    ddddddbbdd1dddddddd1111111dbbcbbcb1dbbccccccccccccbdddddddbbbbecfcd3bbbbcccccccccccceeeececbd99999999999999999999999999999999dd111dddddddddddddddddddddddddddddd
    ddddddddd111ddddddd11111111bcccdbcdbbcccccccccccccbddddbcbbbcdddbbbeeebcceeccccccccceeecccbdd111d999999999999999999999999999ddd11ddddddddddddddddddddddddddddddd
    dddddddd1dd11dddddd11111111bcccbbcccccccccccccccccbddbeccccccbddbbccbcccc7eccccccecccccccddd1111ddddd9dd99ddddd99dd99999999ddddd1ddddddddddddddddddddddddddddddd
    ddddddddd1dd11ddd11111111ddbcccbdccccccccccccccbbbbdbbccbbbbccbbeccccccccbcccccceccccccddddd1111dddddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1dd11ddd111111dbcbc8ccbcccccbcccccccbbbbbdbecccbbbbceecceccccbbbccbbccecccccd11ddd111ddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddd
    dd1dddddddd1dd11dd111111ddddcbceccccccccccccccbbbbbbccccccbbbbbceeecccbbdbccddbceeccccd111d1ddddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddddd
    dd11dddddddddd111dddddd1dddbcccebbcccccccccccbbbddbbbbbcbccbbbdbeeecccbbbbecddbeeecccc1111dddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddddd
    d111ddddddddd1111ddddd91ddbbcccccbbcccccccccbbbbddbcbeccbbccbbbdbeecccccbbecbbeeeecccb1111dddddddddddddd11111111dddddddddddddddddddddddddddddddddddddddddddddddd
    d1111ddddd11d11111119991dcbbbccfcbbcccccccccccbddbcceecfcbcccbbbbcccccccebbccbeeeccccd11111dddddddddddd111111111ddddddddddd11ddddddddddddddddddddddddddddddddddd
    ddd1111111111111111199ddbcbbccffbcdccccccccccbb9bccebbecfcbccbbcccbcccccceccceeeccccb11111111ddddddddd111111111dddddddddddd111dddddddddddddddddddddddddddddddddd
    ddd11111111111111dd999dbbcbbccffecdbcccccccbcbbbcee4d44eccbebccccbbcccceccccceeccccb111111111ddddddddd111111111dddddddddddd11ddddddddddddddddddddddddddddddddddd
    dddd1111111111111dd1199dbccccffffcdbcccccccbcbeeee44544eecceeeccbbbeeebbeeeeecccccbd111111111ddddddd11111111111111ddddd111dddddddddddddddddddddddddddddddddddddd
    ddd1111ddd11111111d1111dbcccfffcebdbcccccccccbeceee4444eeeceeccccbbbbbbeeeebbecccbd111111111111111d111111111111111111111111ddddddddddddddddddddddddddddddddddddd
    ddd11dddbbd1111111d1111bcccccceeeebdccccccccccceeee4444eeeccccccccbbbbcbcccceecbd111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd
    bbddddbbbbd111111111111bccccbbeeeebdcccccccccccebee4444eeebccccccccbbccbcccccccd1111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbd11111111111dcceeeeccccbbccccbccccbbbbb444d4eecbccccccccbbcbbccccccd11111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbd11111111111dccccefffcbcccccbccbcbbddddbbdbecccccccccccbccbbbdcccd111111111111111111dd111111111111111111111ddbbddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbd1111111111bccccffffbbceeccccccbbcbbbddbbbbccbcccccccccccbdd1ddd11111111111111111111d1d11111111dbddd111ddddbbbddddddddddddddddddddddddddddddddddddd
    bbbbbbbdbbbbbbbd11111111bcecffffcbbebbbbccccbbcccbbbbbbcccbcccccccccccbbd1111111111111111111111d11dd11111111dbbdddddddbdbbbbdddddddddd11dddddddddddddddddddddddd
    bbbbbdddddbbbbbbdd11111dbccffffcbecbbbdbecccbccccbbcbdbcccbccccccccccccbddd11111111111111111111111dd111111dbbbbdddddddbdbbbbbbdddddddddddddddddddddddddddddddddd
    bbbbd1ddddbbbbbbdddd1111ddbffcececbeebbbecccbcccbbccbdbcccccccccccccccbbddd1111dd111111111111111111d11111ddbbbbddddddddbbbbbbbbddddddddddddddddddddddddddddddddd
    bbbd11dddbbbbbbbddddd1111bcccbbccccceeeeeecbbccccccccbbcccccccccccccccbddddd111db111111111111111111d111ddddddbbddddddddbbbbbbbbbdddddddbbddddddddddbdddddddddddd
    bdd111ddbbbccbdddddddd1dbcccebcccccfebeebbbbbbbcfccccfcfccccccccccccccbddddd111bcddddd1111d111111dddbddbbddddbbbddddddddbbbbbbbbddddddbbbbbbddddbbbbdddddddddddd
    bdd11dddbbccccdddddddddbccbcbbcedbecceebbccbbbbcffffffffcccccccccccccccddddd111bcbbbbbd1dddd111bdbbdcbbcbdbdddbbddbdddddbbbbbbbdbddddbbbbbbbbbbbbbbbbddddddddddd
    ddd11ddbbcccccbdddddddbccbbbbccbdbbbeeecbcbbbbbbcfffffffcccccccccccccccbdddd11dccbbbbbbddddbd1dbbdbbccccbbbddddddbddddddbdbbdbbbbbbdbbbbbbbbbbbbbbbbbbdddddddddd
    bdddddbbbcccccbddddddbbbbcceccbdbebbeeecbbbbbbbcccffffffcccccccccccccbbcbddd1dbccbbbbbbbdddbbdbccbecccbbbbbdbddbdbdddddbbbdbddbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd
    bdddddbbccccccbbddbdbbbbbeccfbddeebeeeccbbd11ddcccffffffccccbcccccccccbcbddddbbcccbbbbbbbdbbbbbbbcccccbbbbbbbddddddddddbbbbbddbbdbbbbbbbbbbbbbbbbdbbbbbbbddddddd
    bddddbbccccccccbbbcccecccccffbeeeeeeeecccbdbbbbbcccfffffcccbcccccccccccccbbddbccccbbbbbbddbccbcbbcccccbbbbdbbddddddddddbbbbbddbbbbbbbbbbbbbbbbbbdddbbbbbbbdddddd
    bdddbbcccccccccbbbccccccfcccfcccceeebbcccbbbbbbbeeeccccccccddcbccccccccccccbbcccccbbbbbdddbccccbcccbcccccbdbbbbddddddbddbbdbddbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbd
    bdddbbccccccccbbccccccccccccceecccbb3becbdbbbbbbccccccccccd11cbbcccccccccccccccccccbbbbddbccccccccccbbcccbbbbcbdddddddddddddddbdbbbbbbbbbbddbbbbbbdddbbbbbbbbbbb
    bddbbcccccccccbcccccfcbccecccbbeeeb333becddbbcdbccccccccccd1dcbdbccccccccccccccccccccbbddbccccccccbbbbbbbcbcccbbbbdddddddddddbddbbbbdbbbddddbbbcbbbbbbbbbbbbbbbd
    ddbbccccccccccccccccfcccccccbbeeebb33444cbbbcbbbbcfffffcccb1bcbdbbccccccccbccccccccbbbbddbcccbccccbbbccccccccccbbbbbbbbbbbbddddbbbbbdbbbddddbbccbbbbbbbbdddbbbbd
    ddbbcccccccccccccccccfcccfcccceedd4d3444ecccbbceebeffffffcbdcccbcbbccccbccbbcccccccbcbbddbccebccccccccccccccccccccccccbbcccccbbbbbbbbbbddbbdbbccbbdbbbbbbbbbbbbd
    ddbbccccccccccccfffcfccbccccffcb134d4442eccfccbbeebbcffffcdccccccbbcccccbcccccccccbbcbdddbcceecccccccccffccffcbccccccccbcccccccbcccbbbbbdbbbccccbbddbddbbbbbbbbc
    bbcccccccccccccffcccccbbbcccfffb3e444422eccfffccbbeb3efffccccccccccbccccbccccccccccbbbdddbcceccfccfffcccccfccfcccccccccbcccccccccccccbbbbbbbccccbbbbbbbbbbbbbccc
    ccccccccccccccfffcccccccccccfcceeee444eecffccffccbbeb3bcffcccbccccccccccbcccbccccccccbbbbcccccffffffccccccffffcccccccccccccccccccccccbbbbccbccccbbbbbbbbbbbbbccc
    ccccccccccccccfffccccfcccccccceecce24efccfccecffcccbeebbcfcccccccffcccccdbcccccccccccccccccbccffffffccccccffffcccccccccccccccccccccccccbbccbcccccbbbbbbbbbbbbccc
    ccccccccccccccfffccccfccbbebeceeffe2effeecccccccffccceebcffcccccfffcccccbbcccccccccccccccccbccccccfffcccccffffcccccbbbbbbccccccccccccccccccbcccccbbbbbbbbbbccccc
    ccccccccccccccccccccccbbbbbbbceefffccffeeecccccccffccbeeccfffffffffffffcbdcccccccccbbbbbbcceccccccfffffcccffffcccccbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbccccc
    ccccbcbccccccccccccbbbbbbbbeeeecfcccffceeeeeeecccccfcccbbbccfcfffcfcfffcbdcccccbcccbbbbbbccecceeccfcccccccfffffccccccbbcccbbbbbbbbbbbbbccbcccccccbbbbbbbbbbccccc
    bbbddbbccccccccecccbebbbbeeeeccceebeebbddbeeeecccecfffccbbbccffffceeeffcbdcccccbcccbbbbbbcccccecccccfcceeeccffceeccccbccccccccccccccccbccbcccccccbbbbbbbbbcccccc
    db1ddddbbcccccbbbeebebbeeeeeecccdbbbbbebbddddeccb4ecfcccccbbccfffebeeeffbbcccccbbcbbbbbbbcbccccecccffcccecceecceeccccbccccccccccccccccbbcbcccccccbbbbbbbbccccccc
    dd11d111dccccccccccbbecccceecccdbeeebbd333444bcce434eccccccbbbbcffceeeefcbccccebbcccccccccdecceeeecceecccccecfceeccccbccccccccccccccccbbcbcccccccccccccccccccccc
    dd11d111ddbccccccccecfffccccccddeeeeeeeeeeee2ecee444bcccccccbbbbceeceeeecbccceebbbeeeeeccebeece4eeeeeccccccccceeeccccbccccccccccccccccbccccccccccccccccccccccccc
    dd1dd11db1dccccccccccffcccccccbeeeccceeeeeeeeeceee4eeccccccccbbccceeceeccbcceeeecbeeeeeeeeb4eee4444ecccccccccceeeccccbcccecccccccccccccccccccccccccccccccccccccc
    ddddd1dbc1bbccccccccccccbcccccbbbbeecffffffceefeeeeccccccccccccbccceeeeeebceeeeeccbbbeeeeee4eee4444ccccccccccceecccccbbeeeeeeccccccccccccccccccccccccccccccccccc
    bbbdddbccdbcccccccccccbcbbcccebebbbeccfffffceefeeeeccccffcccccccbccccceee2ebeeeeccbbbbeeeeeeeee77bbcccccceeeccccccccbbbbbeeeeecccccccccccccccccccccccccccccccccc
    bcbdbbcccdbcbccccccccbcbbbcceeeeeeecffffccfcecceeeeccccfffcccccccccccceee42eeeeeccbceeebeeeeeee444eccccccccccccccccbdddbbeeecccccccccccccccccccccccccccccccccccc
    ccbbbbcccdcccccccccccbcbbcccbbbeccfffffffcccccccceeccccffcccccccccccccccee224becccebebbbeeeceeeeeeccccccccccccccccccbbbbeeeecccccccccccccccccccccccccccccccccccc
    ccccbbcccbcccccccccccbccbeecbdbeccffffffcccffffcccffccfffcccccccccccccccceeebbecccecbbbbbbeecccceccccccccccccccccccccbbeeeeccccccccccccccccccccccccccccccccccccc
    ecccccccccccccccccccbbcbccccbddbecfffccfccffffffccffccffffffccccccccccccccceeeeeccccebbbbbeeeeccccccccceccccccccccbcbbbbbbbbbbbbbbbcccbccccccccccccccccccccccccc
    ccccccccccccccccccccbccbccfccddbeecbbbbccfffffffcccfffffcccffccccccccccccccceeeeecccebbbbbbeeecccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccccccccccccccccccccc
    cccccccccccccccccccbccbbcccccbbbbbbbddbbbcfffffffccccffccccfffcccccccccccccccce2eeccebbbbbbbeeeecccccccccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccc
    ccccbbcccccccccccccbccbccccceeebbbcccdbbbcffffffffffcccccccffffccfcccffccccccceeeeccbbbbbbbbeeeeccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccc
    cccccccccccbbbccccbbccbccccceeeeeeeecbbbbbcfffffffffcccccccfffffcffccfffccccceeeeeccbbbbbbbeeceecccccccccccccccccccccccccccccccccccccccccbcbbbcccccccccccccccccc
    cccccccccccccccccbbbccbccccbeeeeeeeeebbbbbccfffffffccccccccfffcccfffffcfffccfceeeecccbbcceeeccccccccccccccccccbccccccccccccbccccccccccccccbbbbbbbccccccccccccccc
    bbcccccccccccccccbbbcccccccbeeeeeeeccbbbbbbcffffffffcffffccfffccbfffffcffffffffcccccccccccccccccccccccccccbcccbcccccccccccb6cccccbbccccccbccccccb6cccccccccccccc
    ccccccccccccccccbcbbcccccccbeeeeeecccbbbbbbbcfffffffffffffffffccbfffffffcffffffffccccccccccccccccccccccccccccc9ccccb9ccccccbbccccb9ccccccccccccccbbccccccccccccc
    cccccccccccccccbbbbccccccccceeeeecccbbbbbbbccfffffffffffffffffccbfffffffffcfffffffcccccccccccccccccccccccccccc9bbbbb9ccccbbb9bcccb9cccccccccbbcccb9bcccccccccccc
    ccccccbccccccbbbcbcccccccccceecceecccbbbbcbcccffffffffffffffffccbccfffffffffffccfcfcccccccccccccccccccccccccccdbcccb9cccbbbcbdbccb9cccccccccccccb9bccccccccccccc
    cccccbbbbbbbbbbbbccccccccccceecccccccbbbbcccccffffffffffffffffccccfcfffffffffcccecccfcccccccccccccccccccccccccdbcccbdccbdbcccbdccbdbccccccccccbbbbcccccccccccccc
    cccccbbddddddddbbccccccccccceecccccccbdbcbcccccccffcccffffcfffffccfcfccfcccccfceecccccccccccccccccccccccccccccdbcccbbccbbcccccbbccbbbbbbccccbbbbcccccccccccccccc
    cccccccbdddddbdbcccccccccccceecccccccbdbcccccccccccffffffccffffffbccfccccccccccbeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccbbbbcdbbbbbdbcccccccccccccecccccccbdbccffcfccccccfffffcfffffffbcccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbcbccbcbccccbdbcccccccccccccccccccccbdbccffcfccccccccccfffffffffbbbbccbbccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccbbccccccccccccbcccccccccbdbccffcccccfccccccfffffffffbbbbbbbbcccccbccccccccccbbbccccccccccbcccbbcccbccccdbbbccccccccbbcccbccccccccbbdbbcccdbbbcccccc
    cccccccccccccbbccccccccccccbccccccccccbbccffccffccccccccffffffffcbbbbbbbbbccccccccccccccbbbbbccccccccbbcccbdcccbccccbcccccccccccbdcccbccccbcccccbeecccbccccccccc
    cccccccccccccbcccccccccccbbbbcccccbbcbbbcccffcccccccccccfffffffccbbbbbbbbbbccccccccccccccbbbbbcccccccbbcccbbbccbccccbcccccccccccbbbccbccccbcccccbcccccbccccccccc
    bbcccccccccccbccccccccccbbbcbcccbbbbbbbcbbccccccccccccccfffffffccbbbbbbbbbbbcccccccccccccbbbbbcccccccbbcccbbdbcdccccbcccccccccccbcbccbccccbcccccbcccccbccccccccc
    bbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbcbbcccfcccccccccfffffffffcbbbbbbbbbbbcccccccccccccbbbbbbbcccccbbcccbbbbcdccccbbbbccccccccbccbcbccccbcccccbcccccdbbbcccccc
    bbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbcccccccccccccfffffcccccbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbcbbcccbbbbbdccccbbbcccccccccbccbcbccccccccccbcccccbccccccccc
    bbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbccbbbbcccccccccccccccffffcccccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbcccbbbbbdccccbcccccccccccbcccbbccccccccccbeccccbccccccccc
    bbbbbbbbbbdbbbbcccccccbbbbbbbbbbccbcccbbbccccccccccccccffffccccccbcbbbbbbbbbbbbbbcbccccbbbbbbbbbbbbbbbbcccbbbbddccccbcccccccccccbcccbbccccccccccbcccccbccccccccc
    bbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccfccccccccbbbbbbbbbbbbbbbbbbbcccccbbbbbbbcbcccbbcccbbcbbdccccbcccccccccccbccccdccccccccccbcccccdbbbcccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccfccccccccbbbbbbbbbbbbbbbbbbbbbccbbbbbbcccccccccccccccccbccccccccccccccccccccccccccccccccccccccbbbbcccccc
    bbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbccbccbbbbccccccccbbbbbbbbbbbbbbbbbbcccbbbbbcccccccccccccccccccccccccccccccc
    bbbbbbbbbccbbbccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbccbbbbbbbbbbdbbbbcccccc
    bbbbbbbbbcccbbcbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccbbbbbcccccccccbbbdbdbbdbbbbdbbbbbbbbbbbbdbbdbbbbdbcbbbbbdbbbbddbbbcccccc
    bbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccfccccccccccccccccbbbbbbbbbbbbbbbbbbbcbbbbcccccccccccbbbdddbbdbbbbdbbbbbbbbbbbddbbdbbbbdbccdbbbddbbbddbbbcccccc
    bbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccffffcccccccccccccccbbbbbbbbbbbbbbbbbbbcbbbbcccccccccccbbbdddbbdbbbbdbbbbbbbbbbbbbbbdbbbdddccbbcbdbbbbddbbbcccccc
    bbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccfffccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbdbbbddbbbbbbbbbbbbcbbdbbbcbccbbcbbdbbbbbbbbcccccc
    bbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccfffcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
    cbbbccccbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbccccccccfffcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcccccccffffccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccfffffccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccffffcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccffffcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccffffccccccccccccccccccccbbcbbbbbbbbbbbcbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . c c c d d c c c . . . . 
    . . . b b 1 1 1 1 1 1 c c . . . 
    . . c b 1 1 1 f f 1 1 1 c c . . 
    . . b b 1 1 b f f f 1 1 d c . . 
    . c b b 1 1 f f f f 1 1 d c c . 
    . c b b 1 1 1 1 1 1 1 1 d c c . 
    . c c b 1 1 1 1 1 1 1 1 c c c . 
    . c f b 1 1 f c c c 1 1 c c c . 
    . . c f 1 1 f c c c 1 1 f c . . 
    . . c f 1 1 f f c c 1 1 c c . . 
    . . . c f f f f f f f f c . . . 
    . . . . c c f f f f c c . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("", DialogLayout.Bottom)
pause(1)
menu_on = false
let map = img`
    66666666666665656663666366666366
    6.......6......................6
    6.......6......................6
    6...7...5......................6
    6...7...6..7777777777....6666666
    6...1...6..7777777777..........6
    6...2...6..66666.......7.......6
    6...7...6......6.......4.......6
    6...1...64664666.......7.......6
    6...7..................7.......6
    666666666665666566..665666656666
    6..............................6
    6..............................6
    6....7777777477777777774777....6
    6....6666666666666666666666....6
    6....6666266666266666266666....6
    6..............................6
    6..............................6
    677727777771777717772777.......6
    6..............................6
    6............77777777777.......6
    6..........777.........777777776
    6..6....7777...................6
    6..6....6.....77777....777.....6
    6..6....6.....7...77...7.77....6
    6..6....6.....77...7....7.77..76
    6..6....667....7...7...7...7..76
    6..6......777..7...77777...77776
    6..6........7777...............6
    6..............................6
    6..............................6
    66666666666666666666666666666666
    `
let textures = [
img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbfffffffffffbbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbbbfffffffffffffffffbbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbbffffffffffffffffffbbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbbffffffffffffffffffbbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffbbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbffffffffffffffffffffbbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbcccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbbccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbbccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbbccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbbccccccccccccccccccbbbbbbbbbbbbfffffffffffffffffffffbbbbbbb
    bbbbbbbcccccccccccccccccbbbbbbbbbbbbbfffffffffffffffffffbbbbbbbb
    bbbbbbbbbcccccccccccccccbbbbbbbbbbbbbfffffffffffffffffffbbbbbbbb
    bbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbfffffffffffffffffbbbbbbbbb
    bbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbfffffffffffffffbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbb
    bbbbbbbbbbfffffffffffffbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbb
    bbbbbbbbbffffffffffffffbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb
    bbbbbbbbbffffffffffffffffbbbbbbbbbbbbbcccccccccccccccccccbbbbbbb
    bbbbbbbbffffffffffffffffffbbbbbbbbbbbcccccccccccccccccccccbbbbbb
    bbbbbbbfffffffffffffffffffbbbbbbbbbbbcccccccccccccccccccccbbbbbb
    bbbbbbbffffffffffffffffffffbbbbbbbbbcccccccccccccccccccccccbbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbcccccccccccccccccccccccbbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbfffffffffffffffffffffbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbbffffffffffffffffffbbbbbbbbbbbccccccccccccccccccccccccbbbb
    bbbbbbbbfffffffffffffffffbbbbbbbbbbbcccccccccccccccccccccccbbbbb
    bbbbbbbbbbffffffffffffffbbbbbbbbbbbbcccccccccccccccccccccccbbbbb
    bbbbbbbbbbbbffffffffffffbbbbbbbbbbbbcccccccccccccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `,
null,
img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffff55555fffff55555fffff55555ff
    fffff55555fffff55555fffff55555ff
    fffff55555fffff55555fffff55555ff
    fffff55555fffff55555fffff55555ff
    fffff55555fffff55555fffff55555ff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb555555555bbbbbbbbbbb
    55555fffff555555fffff55555fffff5
    55555fffff555555fffff55555fffff5
    555fffffff5555fffffff555fffffff5
    555fffffff5555fffffff555fffffff5
    555fffffff5555fffffff555fffffff5
    555fffff555555fffff55555fffff555
    555fffff555555fffff55555fffff555
    `,
null,
img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffff5555fffff5555fffff5555fffff5
    ffff5555fffff5555fffff5555fffff5
    ffff5555fffff5555fffff5555fffff5
    ffff5555fffff5555fffff5555fffff5
    ffff5555fffff5555fffff5555fffff5
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccbbbbbbbbbbbbbbbbcccccccccbb
    cccccccccccbbbbbbbbccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    `,
null,
img`
    fffffbbbbbbbbbbbbbbbbbbbbbbfffff
    fffff5bbbbbbbbbbbbbbbbbbbbbfffff
    fffff55bbbbbbbbbbbbbbbbbb55fffff
    fffff55bbbbbbbbbbbbbbbbb555fffff
    fffff555bbbbbbbbbbbbbbb5555fffff
    ffffffffffbbbbbbbbbbbbb5555fffff
    b5555ffffffbbbbbbbbbbb555555555b
    bb555ffffffbbbbbbbbbbfffff555bbb
    bbb55ffffffffbbbbbbbffffff55bbbb
    bbbb5ffffffffbbbbbb5ffffff55bbbb
    bbbbbffffffff5bbbfffffffff5bbbbb
    bbbbbbfffffff55bffffffffff5bbbbb
    bbbbbbbffffff555ffffffffffbbbbbb
    bbbbbbb5fffff555fffffffffbbbbbbb
    bbbbbbbb55555555ffffffffbbbbbbbb
    bbbbbbbbb5555555fffff55bbbbbbbbb
    bbbbbbbbbbb55555555555bbbbbbbbbb
    bbbbbbbbbbb55555fffffbbbbbbbbbbb
    bbbbbbbbbffffff5ffffffffbbbbbbbb
    bbbbbbbbbffffff5fffffffffbbbbbbb
    bbbbbbb55ffffff5fffffffffbbbbbbb
    bbbbbb555ffffff5fffffffff55bbbbb
    bbbbb5555ffffff5bffffffff5555bbb
    bbb555555fffffbbbb5ffffff55555bb
    b5fffff55fffffbbbbbbfffff555555b
    5ffffff55555bbbbbbbbb555555fffff
    5ffffff5555bbbbbbbbbbbb5555fffff
    5ffffff55bbbbbbbbbbbbbbb555fffff
    5ffffffbbbbbbbbbbbbbbbbbbb5fffff
    5fffffbbbbbbbbbbbbbbbbbbbbbfffff
    5555bbbbbbbbbbbbbbbbbbbbbbbbffff
    555bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `,
null,
img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffff5bbbbbbbbbbbbbbbbbbbbbbbbbb
    fffff55bbbbbbbbbbbbbbbbbbbbbbbbb
    5555555bbbbbbbbbbbbbbbbbbbbbbbbb
    55ffffffbbbbbbbbbbbbbbbbbbbbbbbb
    b5fffffffbbbbbbbbbbbbbbbbbbbbbbb
    bffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bffffffff55bbbbbbbbbbbbbbbbbbbbb
    bffffffff5555bbbbbbbbbbbbbbbbbbb
    bffffffff555555bbbbbbbbbbbbbbbbb
    bffffffff5555ffffffbbbbbbbbbbfff
    bbbbfffff5555fffffffff55555fffff
    bbbbfffff5555fffffffff55555fffff
    bbbbbbbbb5555fffffffff55555fffff
    bbbbbbbbbbb55fffffffff55555fffff
    bbbbbbbbbbbbbfffffffff55555fffff
    bbbbbbbbbbbbbbbbbbbbbbbbb55fffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb555ffffffff5bbbbbbbb
    bbbbbbbbb555555ffffffff5555bbbbb
    bbbbbffffff5555ffffffff55555555b
    bb55fffffff5555ffffffff555ffffff
    5555fffffff5555ffffffff555ffffff
    5555fffffff55555bbfffff555ffffff
    5555fffffff55bbbbbbbbbb555ffffff
    5555ffffffbbbbbbbbbbbbbbbbffffff
    555555bbbbbbbbbbbbbbbbbbbbbfffff
    55555bbbbbbbbbbbbbbbbbbbbbbbffff
    `,
null,
img`
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    ccc5555555555ccccccc555555555ccc
    cccccccccccccccccccc555555555ccc
    cccccccccccccccccccc555555555ccc
    ccccccccccccccc5555555555ccccccc
    ccccccccccccccc5cccccccc5ccccccc
    ccccccccccccccc5cccccccc5ccccccc
    ccccccccccccccc5cccccccc5ccccccc
    ccccccccccccccc5cccccccc5ccccccc
    ccc55555555555c5cccccccc5ccccccc
    ccc5ccccccccc5c5cccccccc5ccccccc
    ccc5ccccccccc5c5ccc5555555555555
    ccc5ccccccccc5c5ccc5cccc5cccccc5
    ccc5ccccccccc5c5ccc5cccc5cccccc5
    ccc5ccccccccc5c5ccc5cccc5cccccc5
    ccc5ccccccccc5c5555555555cccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc5ccccccccc5ccccc5ccccccccccc5
    ccc55555555555ccccc5555555555555
    `,
img`
    ccccccccccccccccccccbbbbbbbbbbbb
    ccccccccccccccccccccbccccccccccb
    ccccccccccccccccccccbccccccccccb
    bbbbbbbbbbbbbcccccccbccccccccccb
    bbbbbbbbbbbbbcccccccbccccccccccb
    bbbbbbbbbbbbbcccccccbccccccccccb
    bbbbbbbbbbbbbcccccccbccccccccccb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccb
    bbbbbbbbbbbbbbccccccbcccbccccccb
    bbbbbbbbbbbbbbccccccbcccbccccccb
    bbbbbbbbbbbbbbccccccbcccbccccccb
    bbbbbbbbbbbbbbccccccbcccbccccccb
    cccccccccccccbccccccbbbbbbbbbbbb
    cccccccccccccbccccccccccbccccccc
    cccccccccccccbccccccccccbccccccc
    cccccccccccccbccccccccccbccccccc
    cccccccccccccbbbbbbbbbbbbccccccc
    cccccccccccccccccccccccccccccccc
    ccccccccccccccccccbbbbbbbbbbbbbb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbccccccccccccb
    bbbbbbbbbbbcccccccbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    `,
img`
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    5555ccc55ccc5555ccc5555ccc5ccc55
    5555ccc55ccc5555ccc5555ccc5ccc55
    5555ccc55ccc5555ccc5555ccc5ccc55
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    555ccc555ccc555ccc555ccc555ccc55
    555ccc555ccc555ccc555ccc555ccc55
    555ccc555ccc555ccc555ccc555ccc55
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    55555555555555555555555555555555
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    `,
img`
    bbbccccccccccccccccccccccccccccc
    bbbccccccccccccccccccccccccccccc
    bbbccccccccccccccccccccccccccccc
    bbbbcccccccccccccccccccccccccccc
    bbbbbbbbbbbccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bbbccccccccccccccccccccccccccccc
    bccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbcccccccccc
    bbbbbbbbbbbbbbbccccccccccccccccc
    bbcccccccccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccccc
    bbcccccccccccccccccccccccccccccc
    bbccccccccccccccccccccccccbbbbbb
    bbcccccccccccccccccbbbbbbbbbbbbb
    `
]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
fpx_scale = 1024
let fov = 0.66
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . 1 1 . 1 . . . . . 
    . . . . . 1 . 1 1 . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ammo2 = 36
max_ammo = 216
let canshoot = true
let cooldown = 250
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.setBarSize(30, 4)
statusbar2.max = 100
statusbar2.positionDirection(CollisionDirection.Top)
statusbar2.setOffsetPadding(0, 7)
statusbar2.setBarBorder(1, 12)
let statusbar3 = statusbars.create(20, 4, StatusBarKind.armour)
statusbar3.setBarSize(40, 4)
statusbar3.max = 100
statusbar3.positionDirection(CollisionDirection.Top)
statusbar3.setOffsetPadding(0, 2)
statusbar3.setColor(9, 8, 6)
statusbar3.setBarBorder(1, 12)
let mySprite2 = sprites.create(img`
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ...............................ffffff...........................................
    ..........................ffffffbf666f..........................................
    .........................ffccccbf88886f.........................................
    ........................fccccccbf88886f.........................................
    ........................fcccccccbf866ff.........................................
    ........................fccccccccbffff..........................................
    .........................ffffffffffff...........................................
    ............................ffffffffff..........................................
    .........................fffbbdddddfff..........................................
    ........................fbbbbbbbbdfcccf.........................................
    .......................ffbbbbbbbbdfcccf.........................................
    ......................ffbbffffbbbdfcccff........................................
    ......................fbfff..fbbbbdfc9cbf.......................................
    ......................fbfff..fbbbbdfc99bf.......................................
    ...................ff.fbfff..fbbbbdfcc9cb.......................................
    ...................ffffbffff.fbbbfdffcfff.......................................
    ....................fffffbbfffbbbf2dfcfcbff.....................................
    .....................fccccccbfbbb2bfdfffcbbff...................................
    ......................ffccccbbbbbbfcfffccccbbf..................................
    ......................cffcccbbbbbbfcfffffccccbfff...............................
    ......................fccffbbbbbbbbfbbdddffcccbbbff.............................
    .....................ffccbbfffbbbbbbbbdddddccccccbfff...........................
    ....................f1ffcccbbffffbbbbbbbbddffcccccbbffff........................
    ....................fd11fccccfbbffbbbbbbbbbdffffccccbbbf........................
    ....................fdd11ccccbfcbbfbbbbbbbbdddddfffccccb........................
    ....................fddd1cccccffccfffbbbbbbbddddddfffccc........................
    ....................fddd1ffcccbfccbbffbbbbbbbbbdddddfffc........................
    ...................fddddd11ffcbffcccbbfbbbbbbbbbddddddff........................
    ...................fddddd1111fcbfcccccfffbbbbbbbbbbddddd........................
    ...................fddddddd111cbfcccccbbffbbbbbbbbbbbddd........................
    ...................ffdddddd111cbfcccccccbffbbbbbbbbbbbbd........................
    ....................ffddddddd1fbfccccccccbbfbbbbbbbbbbbb........................
    .....................ffddddddd1ffccccccccccffffbbbbbbbbb........................
    ......................ffddddddd1fccccccccccbbbffbbbbbbbb........................
    `, SpriteKind.Player)
mySprite2.setScale(2.35, ScaleAnchor.Middle)
mySprite2.setPosition(146, 80)
transformSprites.rotateSprite(mySprite2, 10)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hud)
mySprite4.setPosition(138, 10)
mySprite4.setScale(1.2, ScaleAnchor.Middle)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hud)
mySprite5.setPosition(151, 14)
mySprite5.setScale(1.2, ScaleAnchor.Middle)
forever(function () {
    if (controller.B.isPressed()) {
        if (canshoot) {
            if (ammo2 == 0) {
                mySprite.destroy()
            } else {
                canshoot = false
                scene.cameraShake(3, 300)
                mySprite = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Player)
                ammo2 += -1
                music.bigCrash.play()
                music.sonar.play()
                pause(50)
                mySprite.destroy()
                pause(50)
                mySprite = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Player)
                ammo2 += -1
                music.bigCrash.play()
                music.sonar.play()
                pause(50)
                mySprite.destroy()
                pause(50)
                mySprite = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . 2 2 . 2 . . . . . 
                    . . . . . 2 . . . . 2 . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Player)
                ammo2 += -1
                music.bigCrash.play()
                music.sonar.play()
                pause(50)
                mySprite.destroy()
                pause(50)
                timer.after(cooldown, function () {
                    canshoot = true
                })
            }
        }
    }
})
game.onUpdate(function () {
    st.updateControls()
if (ammo2 == 36) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . 9 9 9 . . . 9 . . . . 
            . . . 9 . 9 . . . . . 9 . . . . 
            . 9 9 9 . 9 9 9 . . 9 . . . . . 
            . . . 9 . 9 . 9 . 9 . . . . . . 
            . 9 9 9 . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 33) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . 9 9 9 . . . 9 . . . . 
            . . . 9 . . . 9 . . . 9 . . . . 
            . 9 9 9 . 9 9 9 . . 9 . . . . . 
            . . . 9 . . . 9 . 9 . . . . . . 
            . 9 9 9 . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 30) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . 9 9 9 . . . 9 . . . . 
            . . . 9 . 9 . 9 . . . 9 . . . . 
            . 9 9 9 . 9 . 9 . . 9 . . . . . 
            . . . 9 . 9 . 9 . 9 . . . . . . 
            . 9 9 9 . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 27) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . 9 9 9 . . . 9 . . . . 
            . . . 9 . . . 9 . . . 9 . . . . 
            . 9 9 9 . . . 9 . . 9 . . . . . 
            . 9 . . . . 9 . . 9 . . . . . . 
            . 9 9 9 . . 9 . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 24) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . . 9 9 . . . 9 . . . . 
            . . . 9 . 9 . 9 . . . 9 . . . . 
            . 9 9 9 . 9 9 9 9 . 9 . . . . . 
            . 9 . . . . . 9 . 9 . . . . . . 
            . 9 9 9 . . . 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 21) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 . . 9 . . . . 9 . . . . 
            . . . 9 . . 9 . . . . 9 . . . . 
            . 9 9 9 . . 9 . . . 9 . . . . . 
            . 9 . . . . 9 . . 9 . . . . . . 
            . 9 9 9 . . 9 . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 18) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . 9 . . 9 9 9 . . . 9 . . . . 
            . . 9 . . 9 . 9 . . . 9 . . . . 
            . . 9 . . 9 9 9 . . 9 . . . . . 
            . . 9 . . 9 . 9 . 9 . . . . . . 
            . . 9 . . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 15) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . 9 . . 9 9 9 . . . 9 . . . . 
            . . 9 . . 9 . . . . . 9 . . . . 
            . . 9 . . 9 9 9 . . 9 . . . . . 
            . . 9 . . . . 9 . 9 . . . . . . 
            . . 9 . . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 12) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . 9 . . 9 9 9 . . . 9 . . . . 
            . . 9 . . . . 9 . . . 9 . . . . 
            . . 9 . . 9 9 9 . . 9 . . . . . 
            . . 9 . . 9 . . . 9 . . . . . . 
            . . 9 . . 9 9 9 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 9) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 . . . . 9 . . . . 
            . . . 9 . . 9 . . . . 9 . . . . 
            . . . 9 9 9 9 . . . 9 . . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . 9 9 9 9 . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 6) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 . . . . 9 . . . . 
            . . . 9 . . . . . . . 9 . . . . 
            . . . 9 9 9 9 . . . 9 . . . . . 
            . . . 9 . . 9 . . 9 . . . . . . 
            . . . 9 9 9 9 . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 3) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 . . . . . 9 . . . . 
            . . . . . . 9 . . . . 9 . . . . 
            . . . 9 9 9 . . . . 9 . . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . 9 9 9 . . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (ammo2 == 0) {
        mySprite4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . 9 . . . . 9 6 . . . . . . . 
            6 6 9 9 9 9 9 9 9 9 6 6 6 6 9 . 
            . . 6 6 6 6 6 9 9 9 9 9 9 9 9 . 
            . . . 6 6 6 . . . 9 9 . 6 9 9 . 
            . . . . . . . . . . 9 . . 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 . . . . . 9 . . . . 
            . . 9 . . . 9 . . . . 9 . . . . 
            . . 9 . . . 9 . . . 9 . . . . . 
            . . 9 . . . 9 . . 9 . . . . . . 
            . . . 9 9 9 . . . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (max_ammo == 216) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 . . 9 . . 9 9 9 . . . 
            . . . . 9 . . 9 . . 9 . . . . . 
            . . 9 9 9 . . 9 . . 9 9 9 . . . 
            . . 9 . . . . 9 . . 9 . 9 . . . 
            . . 9 9 9 . . 9 . . 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 180) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 . . 9 9 9 . 9 9 9 . . . 
            . . . 9 . . 9 . 9 . 9 . 9 . . . 
            . . . 9 . . 9 9 9 . 9 . 9 . . . 
            . . . 9 . . 9 . 9 . 9 . 9 . . . 
            . . . 9 . . 9 9 9 . 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 144) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 . . . 9 9 . . . 9 9 . . 
            . . . 9 . . 9 . 9 . . 9 . 9 . . 
            . . . 9 . . 9 9 9 9 . 9 9 9 9 . 
            . . . 9 . . . . 9 . . . . 9 . . 
            . . . 9 . . . . 9 . . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 108) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 . . 9 9 9 . 9 9 9 . . . 
            . . . 9 . . 9 . 9 . 9 . 9 . . . 
            . . . 9 . . 9 . 9 . 9 9 9 . . . 
            . . . 9 . . 9 . 9 . 9 . 9 . . . 
            . . . 9 . . 9 9 9 . 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 72) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 . 9 9 9 . . . . . . . 
            . . . . 9 . . . 9 . . . . . . . 
            . . . . 9 . 9 9 9 . . . . . . . 
            . . . 9 . . 9 . . . . . . . . . 
            . . . 9 . . 9 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 36) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 . 9 9 9 . . . . . . . 
            . . . . 9 . 9 . . . . . . . . . 
            . . 9 9 9 . 9 9 9 . . . . . . . 
            . . . . 9 . 9 . 9 . . . . . . . 
            . . 9 9 9 . 9 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (max_ammo == 0) {
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 9 9 . . . . . . . . . . . 
            . . 9 . 9 . . . . . . . . . . . 
            . . 9 . 9 . . . . . . . . . . . 
            . . 9 . 9 . . . . . . . . . . . 
            . . 9 9 9 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
