//1. tipos literales

function authorize(userType: string){
    if(userType === 'user'){
        //redirect to user home page
        console.log('redirect to user page');
    }else if(userType === 'admin'){
        // redirect to admin home page
        console.log('redirect to admin page');
    }else{
        throw new Error('Tipo de usuario no identificado');
    }
}

function authorize2(userType: 'admin' | 'user'){
    if(userType == 'admin'){
        console.log('redirect to admin page');
        return;
    }
    console.log('redirect to home page');
}

authorize('admin');
authorize2('user');

let edad:5;
edad = 5;

function isTheSame(a:number, b:number): 0 | 1 | -1{

    return a === b? 0: a > b? 1: -1;

}

interface Options{
    method: 'GET' | 'POST',
    headers?: {'Content-Type': 'application/json' | 'text/html'}
}

function httpRequest(url:string, options:Options){

}

httpRequest('http://vidamrr.com', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});