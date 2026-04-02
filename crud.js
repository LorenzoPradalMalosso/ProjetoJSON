const fs = require("fs");
const prompt = require('prompt-sync')();

// Funções necessárias:
// - Campeonatos: Adicionar campeonato (dados), listar campeonatos,
//      atualizar campeonatos, excluir campeonatos - REGRA: Ao excluir
//      o campeonato também exclói os times nele

// - Times: Adicionar time (dados), listar time (todos ou por campeonato), 
//      atualizar time, excluir time - REGRA: Só pode adicionar se tiver 
//      o campeonato cadastrado

// - Jogadores: Adicionar jogador (dados), listar jogadores (todos ou 
//      por time), atualizar perfil do jogador, exluir jogador - REGRA: 
//      Só pode adicionar se tiver o time (por id)

// - Partidas: Adicionar partida (dados), listar partidas (todas ou por 
//      time), atualizar partida, excluir partida - REGRA: Só pode 
//      adicionar partida se tiver os times cadastrados


// PARA FAZER: Reformular todo o sistema de escolha de grupos e funções - Primeiro função, depois grupo, e aí vai para função específica


// FUNÇÕES PARA MANIPULAÇÃO NO JSON
// Leitura do JSON
function lerDados() {
    const dados = fs.readFileSync("contatos.json", "utf-8");
    return JSON.parse(dados);
}

// Salva no JSON
function salvarDados(dados) {
    fs.writeFileSync("contatos.json", JSON.stringify(dados, null, 2));
}

function menu() {
    console.log("===== Sistema de Futebol =====");
    console.log("1. Campeonatos");
    console.log("2. Times");
    console.log("3. Jogadores");
    console.log("4. Partidas");
    console.log("0. Sair");
}

function main() {
    while (true) {
        menu();
        const opcao = prompt("Escolha: ");

        switch (opcao) {
            case "1": // Fazer
                menuCampeonatos();
                break;
            
            case "2": // Fazer
                menuTimes();
                break;
                
            case "3": // Fazer
                menuJogadores();
                break;

            case "4": // Fazer
                menuPartidas();
                break;

            case "0": // Finalizado
                console.log("\nEncerrando o programa...");
                break;

            default:
                console.log("Opção inválida");
        }
    }
}

function menuCampeonatos() {
    console.log("\n===== Gerenciador de Campeonatos =====");
    console.log("1. Adicionar Campeonato");
    console.log("2. Listar Campeonatos");
    console.log("3. Atualizar Campeonatos");
    console.log("4. Excluir Campeonato");
    const opcao = prompt("Escolha: ")
    switch (opcao) {
        case "1":
            adicionarCampeonato();
            break;
        case "2":
            listarCampeonato();
            break;
        case "3":
            atualizarCampeonato();
            break;
        case "4":
            excluirCampeonato();
            break;
        default:
            console.log("Opção inválida");
    }
}

function menuTimes() {
    console.log("\n===== Gerenciador de Times =====");
    console.log("1. Adicionar Times");
    console.log("2. Listar Times");
    console.log("3. Atualizar Times");
    console.log("4. Excluir Time");
    const opcao = prompt("Escolha: ");
    switch (opcao) {
      case "1":
        adicionarTimes();
        break;
      case "2":
        listarTimes();
        break;
      case "3":
        atualizarTimes();
        break;
      case "4":
        excluirTimes();
        break;
      default:
        console.log("Opção inválida");
    }
}

function menuJogadores() {
    console.log("\n===== Gerenciador de Jogadores =====");
    console.log("1. Adicionar Jogadores");
    console.log("2. Listar Jogadores");
    console.log("3. Atualizar Jogadores");
    console.log("4. Excluir Jogadores");
    const opcao = prompt("Escolha: ");
    switch (opcao) {
      case "1":
        adicionarJogadores();
        break;
      case "2":
        listarJogadores();
        break;
      case "3":
        atualizarJogadores();
        break;
      case "4":
        excluirJogadores();
        break;
      default:
        console.log("Opção inválida");
    }
}

function menuPartidas() {
    console.log("\n===== Gerenciador de Partidas =====");
    console.log("1. Adicionar Partidas");
    console.log("2. Listar Partidas");
    console.log("3. Atualizar Partidas");
    console.log("4. Excluir Partidas");
    const opcao = prompt("Escolha: ");
    switch (opcao) {
      case "1":
        adicionarPartidas();
        break;
      case "2":
        listarPartidas();
        break;
      case "3":
        atualizarPartidas();
        break;
      case "4":
        excluirPartidas();
        break;
      default:
        console.log("Opção inválida");
    }
}

// FUNÇÕES DE CAMPEONATOS
function adicionarCampeonato(){

}

function listarCampeonato(){

}

function atualizarCampeonato(){

}

function excluirCampeonato(){

}

// FUNÇÕES DE TIMES
function adicionarTimes(){

}

function listarTimes(){

}

function atualizarTimes(){

}

function excluirTimes(){

}

// FUNÇÕES DE JOGADORES
function adicionarJogadores(){

}

function listarJogadores(){

}

function atualizarJogadores(){

}

function excluirJogadores(){

}

// FUNÇÕES DE PARTIDAS
function adicionarPartidas(){

}

function listarPartidas(){

}

function atualizarPartidas(){

}

function excluirPartidas(){

}