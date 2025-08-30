let usuario1 = {}
console.log(usuario1);
console.log(typeof usuario1);

let usuario2 = {
    nome: "João",
    sobrenome: "da Silva",
    idade: 18,
    email:"jaoa@email.com"
}

console.log(usuario2.ome+""+usuario2.sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
    nome: "Maria",
    sobrenome: "da Silva",
    idade: 25,
    email:"maria@email.com"
}

console.log(usuario3.nome+""+usuario3.sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);

let carro = {
    marca: "Toyota",
    modelo:"Corolla",
    acelerar: function(){
        console.log("O carro esta acelerando!")
    
    }
}

carro.acelerar();

