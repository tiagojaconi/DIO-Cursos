interface Usuario {
    nome: string,
    idade: number,
    profissao: Cargo
}

enum Cargo {
    Atriz,
    Padeiro
}

let pessoa1: Usuario = {
    nome: "maria",
    idade: 29,
    profissao: Cargo.Atriz
};

let pessoa2: Usuario = {
    nome: "roberto",
    idade: 19,
    profissao: Cargo.Padeiro
}
    
let pessoa3: Usuario = {
    nome: "laura",
    idade: 32,
    profissao: Cargo.Atriz
};

let pessoa4: Usuario = {
    nome: "carlos",
    idade: 19,
    profissao: Cargo.Padeiro
}