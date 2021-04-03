//1. Alias

type Point = {
    x: number,
    y: number
}

function printCoord(coord: Point){
    console.log(`coords: ${coord.x} - ${coord.y}`);
}

printCoord({x: 10.232, y: 14.234});

type Id = number | string;

function printId(id:Id){
    console.log(`Tu id es: ${id}`);
}

//2. interfaces
interface Point2 {
    x: number,
    y: number
}

function setCoords(coord:Point2): Point{
    const newCoord:Point = coord;
    return newCoord;
}

//3. diferencias entre interface y type

interface Animal {
    name: string
}

interface Oso extends Animal {
    agressive: boolean
}

const oso: Oso = {
    name: 'Grisli',
    agressive: true
}

type User = {
    name: string
}

type Admin = User & { type: 'admin' }

const admin1:Admin = {
    name: 'John',
    type: 'admin'
}
// las interfaces se pueden extender, los types no
interface Animal {
    type: string
}
const nuevoAnimal:Animal= {type: 'asdas'}
type Admin = User & {type: 'admin', password: string}