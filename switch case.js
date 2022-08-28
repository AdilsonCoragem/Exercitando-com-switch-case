let nomeMae = 'Anita'

switch(nomeMae){

    case  "Ana":
        alert ("A tua opção está errada!")
        break
    case  "Malanga":
        alert ("Também está errado!")
        break
    case  "Joana":
        alert ("Errado")
        break
    case 'Anita':
        alert ("O nome está correto!")
        break
default:
    alert ("Precisas perguntar a mãe ou ao filho, porque você errou! :D")


}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=====================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let idade, nome

idade = Number(prompt("Digite a idade: "))
nome = prompt("Digite o nome: ")

switch (true){

    case idade > 49 && nome != "Anita":
        alert ("Está certo!")
        break

    case idade >= 50 || nome == "Anita":
        alert ("Está certo, mas falta exatidão!")
        break

    case idade == 50 && nome == "Anita":
        alert ("Aí sim, está completamente certo!:)")
        break

default:
    alert ("Se chegou aqui, estás mais que perdido!")
}
 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=======================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente
B) Falar com o RH
C) Falar com o gerente           
D) Sair

Mostrar mensagens para cada opção!*/

let opcoes

opcoes = prompt("Digite as opções a baixo:\n\nA) Falar com a atendente (1)\nB) Falar com o RH (2)\nC) Falar com o gerente (3)\nD) Sair (4)")


    switch (true){

        case opcoes == "1":
        alert ("Aguarde 1 min, o atendente entrará em contato!")
        break

    

        case opcoes == "2":
        alert ("Aguarde 1 min, o RH entrará em contato!")
        break

        

        case opcoes == "3":
        alert ("Aguarde 1 min, o gerente entrará em contato!")
        break

        


        case opcoes == "4":
        alert ("Obrigado pelo contato, volte sempre!")
        break


    default:
        alert ("As tuas opções estão erradas, repete o processo ou volte mais logo. Obrigado!")
        
    

} 


//Aqui no desafio, o cara usou a função

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=========================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

let dataNascimento = Number(prompt("Digite a tua data de nascimento (YYYY): "))

switch (true){

    case dataNascimento <= 1945 :
        alert ("Sem Geração")
        break

    case dataNascimento == 1946 && 1964 :
        alert ("Baby Boomers")
        break

    case dataNascimento == 1965 || 1980:
        alert ("Geração X")
        break

    case dataNascimento <= 1981 || 1996:
        alert ("Geração Y ou Millennials")
        break

    
}