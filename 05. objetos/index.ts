//objetos

//1. objetos en Javascript

const user = {
    nombre: 'Marcos',
    edad: 28
}

console.log(user, user.nombre, user['edad']);


//2. objetos como tipo de dato
function printCoords(p: {x:number, y:number}){
    console.log(`Coordenadas: ${p.x}, ${p.y}`);
}

const coords = {
    x: 14.3456,
    y: 10.2355
}

printCoords(coords);

//3. parámetros opcionales

function postTweet(t:{username:string, text:string, mediaUrl?:string}){
    
    console.log(`Nuevo tweet: ${t.username}: ${t.text}, ${t.mediaUrl?.toLowerCase()}`);
}

const tweet = {
    username:'@vidamrr',
    text: 'Saludos a todos'
};

postTweet(tweet);

const tweet2:{
    username: string;
    text:string;
    mediaUrl?:string
} = {
    username: '@typescript',
    text:'Hello everyone!',
    mediaUrl: 'http://media.server/welcome'
}

postTweet(tweet2);