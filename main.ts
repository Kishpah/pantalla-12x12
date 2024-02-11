function dibujaPixel (color: string) {
    if (color == "." || color == "f") {
        // Negro
        strip.setPixelColor(0, neopixel.rgb(0, 0, 0))
        strip.shift(1)
    } else if (color == "1") {
        // Blanco
        strip.setPixelColor(0, neopixel.rgb(255, 255, 255))
        strip.shift(1)
    } else if (color == "2") {
        // Rojo
        strip.setPixelColor(0, neopixel.rgb(0, 0, 255))
        strip.shift(1)
    } else if (color == "3") {
        // Rosa
        strip.setPixelColor(0, neopixel.rgb(75, 96, 128))
        strip.shift(1)
    } else if (color == "4") {
        // Naranja
        strip.setPixelColor(0, neopixel.rgb(96, 48, 190))
        strip.shift(1)
    } else if (color == "5") {
        // Amarillo
        strip.setPixelColor(0, neopixel.rgb(190, 0, 190))
        strip.shift(1)
    } else if (color == "6") {
        // Teal
        strip.setPixelColor(0, neopixel.rgb(128, 128, 0))
        strip.shift(1)
    } else if (color == "7") {
        // Verde
        strip.setPixelColor(0, neopixel.rgb(0, 255, 0))
        strip.shift(1)
    } else if (color == "8") {
        // Azul
        strip.setPixelColor(0, neopixel.rgb(0, 255, 0))
        strip.shift(1)
    } else if (color == "9") {
        // Turquesa
        strip.setPixelColor(0, neopixel.rgb(190, 190, 86))
        strip.shift(1)
    } else if (color == "a") {
        // Morado
        strip.setPixelColor(0, neopixel.rgb(46, 197, 142))
        strip.shift(1)
    } else if (color == "b") {
        // Marrón
        strip.setPixelColor(0, neopixel.rgb(70, 61, 144))
        strip.shift(1)
    }
}
function reverse (texto: string) {
    reversed = ""
    for (let index = 0; index <= texto.length; index++) {
        letra2 = texto.substr(texto.length - index, 1)
        reversed = "" + reversed + letra2
    }
    return reversed
}
function pintaImagen (texto: string) {
    linea = ""
    invertir = false
    for (let letra of texto) {
        if (lista_colores.indexOf(letra) != -1) {
            linea = "" + linea + letra
            if (linea.length == tamañoPantalla) {
                if (invertir) {
                    linea = reverse(linea)
                }
                invertir = !(invertir)
                for (let color of linea) {
                    dibujaPixel(color)
                }
                linea = ""
            }
        }
    }
    // El shield que tengo tiene 5 leds que se añaden a los de la tira. Tenemos que desplazar todo para saltarnos esos leds.
    strip.shift(4)
    strip.show()
}
input.onButtonPressed(Button.B, function () {
    cont = cont + 2
    if (cont >= lista_imagenes.length) {
        cont = 0
    }
    img1 = cont
    img2 = cont + 1
})
let invertir = false
let linea = ""
let letra2 = ""
let reversed = ""
let lista_colores: string[] = []
let tamañoPantalla = 0
let img2 = 0
let img1 = 0
let cont = 0
let lista_imagenes: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 149, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setBrightness(255)
lista_imagenes = [
`
    . . . 3 3 3 3 3 3 . . .
    . . 3 3 3 3 3 3 3 3 . .
    . 3 3 3 3 3 3 3 3 3 3 .
    . 3 3 1 1 3 3 1 1 3 3 .
    3 3 3 1 8 3 3 1 8 3 3 3
    3 3 3 1 8 3 3 1 8 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 . . 3 3 3 3 . . 3 3
    3 . . . . 3 3 . . . . 3`,
`
    . . . 3 3 3 3 3 3 . . .
    . . 3 3 3 3 3 3 3 3 . .
    . 3 3 3 3 3 3 3 3 3 3 .
    . 3 3 1 8 3 3 1 8 3 3 .
    3 3 3 1 8 3 3 1 8 3 3 3
    3 3 3 1 1 3 3 1 1 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 . 3 3 3 3 3 . 3 3
    3 3 . . . 3 3 3 . . . 3`,
`
    . . . 8 8 8 8 8 8 . . .
    . . 8 8 8 8 8 8 8 8 . .
    . 8 8 8 8 8 8 8 8 8 8 .
    . 8 8 1 1 8 8 1 1 8 8 .
    8 8 8 1 1 8 8 1 1 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 1 1 8 8 1 1 8 8 8
    8 8 1 8 8 1 1 8 8 1 8 8
    8 8 8 8 8 8 8 8 8 8 8 8
    8 8 . . 8 8 8 8 . . 8 8
    8 . . . . 8 8 . . . . 8`,
`
    . . . 8 8 8 8 8 8 . . .
    . . 8 8 8 8 8 8 8 8 . .
    . 8 8 8 8 8 8 8 8 8 8 .
    . 8 8 8 8 8 8 8 8 8 8 .
    8 8 8 1 1 8 8 1 1 8 8 8
    8 8 8 1 1 8 8 1 1 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 1 8 8 1 8 8 8 8
    8 8 1 1 8 1 1 8 1 1 8 8
    8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 . 8 8 8 8 . 8 8 8
    8 8 . . . 8 8 . . . 8 8`,
`
    . . . 5 5 5 5 5 5 . . .
    . . 5 5 5 5 5 5 5 5 . .
    . 5 5 f f 5 5 5 5 5 5 .
    5 5 5 f f 5 5 5 5 5 . .
    5 5 5 5 5 5 5 5 . . . .
    5 5 5 5 5 5 . . . . . .
    5 5 5 5 5 5 . . . . . .
    5 5 5 5 5 5 5 5 . . . .
    5 5 5 5 5 5 5 5 5 5 . .
    . 5 5 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 5 5 . .
    . . . 5 5 5 5 5 5 . . .`,
`
    . . . 5 5 5 5 5 5 . . .
    . . 5 5 5 5 5 5 5 5 . .
    . 5 5 5 f f 5 5 5 5 5 .
    5 5 5 5 f f 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 5 5 . .
    . . . 5 5 5 5 5 5 . . . `
]
cont = 0
img1 = cont
img2 = cont + 1
tamañoPantalla = 12
lista_colores = [
".",
"f",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"a",
"b",
"c",
"d",
"e"
]
basic.forever(function () {
    pintaImagen(lista_imagenes[img1])
    basic.pause(500)
    pintaImagen(lista_imagenes[img2])
    basic.pause(500)
})
