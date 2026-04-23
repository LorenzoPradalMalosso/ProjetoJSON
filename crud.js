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
    const dados = fs.readFileSync("json.json", "utf-8");
    return JSON.parse(dados);
}

// Salva no JSON
function salvarDados(dados) {
    fs.writeFileSync("json.json", JSON.stringify(dados, null, 2));
}

// Função para gerar IDs, de acordo com o último ID salvo no array
function gerarID(array) {
    return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;
}

// Exibe o primeiro Menu para saber em qual tópico do JSON vamos trabalhar
function menu() {
    console.log("\n===== Sistema de Futebol =====");
    console.log("1. Campeonatos");
    console.log("2. Times");
    console.log("3. Jogadores");
    console.log("4. Partidas");
    console.log("0. Sair");
}

// Função para o código principal - Escolha das opções para que temos no JSON
function main() {
    while (true) {
        menu();
        const opcao = prompt("Escolha: ");

        switch (opcao) {
            case "1":
                menuCampeonatos();
                break;
            
            case "2":
                menuTimes();
                break;
                
            case "3":
                menuJogadores();
                break;

            case "4":
                menuPartidas();
                break;

            case "0":
                console.log("\nEncerrando o programa...");
                process.exit(0);

            default:
                console.log("Opção inválida");
        }
    }
}

// Menu específico para as funções CRUD de Campeonatos
function menuCampeonatos() {
    console.log("\n===== Gerenciador de Campeonatos =====");
    console.log("1. Adicionar Campeonato");
    console.log("2. Listar Campeonatos");
    console.log("3. Atualizar Campeonato");
    console.log("4. Excluir Campeonato (Aviso: Ao excluir o campeonato, todos os times que pertencem a ele também são exlcuídos)");
    console.log("0. Voltar");
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
        case "0":
            return;
        default:
            console.log("Opção inválida");
    }
}

// Menu específico para as funções CRUD de Times
function menuTimes() {
    console.log("\n===== Gerenciador de Times =====");
    console.log("1. Adicionar Time");
    console.log("2. Listar Times");
    console.log("3. Atualizar Time");
    console.log("4. Excluir Time");
    console.log("0. Voltar");
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
      case "0":
        return;
      default:
        console.log("Opção inválida");
    }
}

// Menu específico para as funções CRUD de Jogadores
function menuJogadores() {
    console.log("\n===== Gerenciador de Jogadores =====");
    console.log("1. Adicionar Jogador");
    console.log("2. Listar Jogadores");
    console.log("3. Atualizar Jogador");
    console.log("4. Excluir Jogador");
    console.log("0. Voltar");
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
      case "0":
        return;
      default:
        console.log("Opção inválida");
    }
}

// Menu específico para as funções CRUD de Partidas
function menuPartidas() {
    console.log("\n===== Gerenciador de Partidas =====");
    console.log("1. Adicionar Partida");
    console.log("2. Listar Partidas");
    console.log("3. Atualizar Partida");
    console.log("4. Excluir Partida");
    console.log("0. Voltar");
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
      case "0":
        return;
      default:
        console.log("Opção inválida");
    }
}

// ----------- FUNÇÕES DE CAMPEONATOS -----------
function adicionarCampeonato(){
    const nome = prompt("Digite o nome do campeonato: ");
    const pais = prompt("Informe o país do campeonato: ");

    const dados = lerDados();
    const novoID = gerarID(dados.campeonatos);

    dados.campeonatos.push({ // Salva os dados em um novo index do array
        id: novoID,
        nome: nome,
        pais: pais
    });

    salvarDados(dados);
    console.log(`\n✓ Campeonato "${nome}" adicionado com sucesso!`);
}

function listarCampeonato(){
    const dados = lerDados();
    
    if (dados.campeonatos.length === 0) {
        console.log("\n✗ Nenhum campeonato cadastrado.");
        return;
    }

    console.log("\n===== Campeonatos =====");
    dados.campeonatos.forEach(camp => {
        console.log(`ID: ${camp.id} | Nome: ${camp.nome} | País: ${camp.pais}`);
    });
}

function atualizarCampeonato(){
    const dados = lerDados();
    
    if (dados.campeonatos.length === 0) {
        console.log("\n✗ Nenhum campeonato cadastrado.");
        return;
    }

    listarCampeonato();
    const id = parseInt(prompt("\nDigite o ID do campeonato a atualizar: "));
    const campeonato = dados.campeonatos.find(c => c.id === id);

    if (!campeonato) {
        console.log("✗ Campeonato não encontrado.");
        return;
    }

    const novoNome = prompt("Digite o novo nome (deixe em branco para manter): ");
    const novoPais = prompt("Digite o novo país (deixe em branco para manter): ");

    if (novoNome) campeonato.nome = novoNome;
    if (novoPais) campeonato.pais = novoPais;

    salvarDados(dados);
    console.log("\n✓ Campeonato atualizado com sucesso!");
}

function excluirCampeonato(){
    const dados = lerDados();
    
    if (dados.campeonatos.length === 0) {
        console.log("\n✗ Nenhum campeonato cadastrado.");
        return;
    }

    listarCampeonato();
    const id = parseInt(prompt("\nDigite o ID do campeonato a excluir: "));
    const indexCamp = dados.campeonatos.findIndex(c => c.id === id);

    if (indexCamp === -1) {
        console.log("✗ Campeonato não encontrado.");
        return;
    }

    const nomeCamp = dados.campeonatos[indexCamp].nome;

    // Excluir times associados ao campeonato
    dados.times = dados.times.filter(time => time.campeonato_id !== id);

    // Excluir jogadores dos times excluídos
    const timesExcluidos = dados.times.map(t => t.id);
    dados.jogadores = dados.jogadores.filter(jog => !timesExcluidos.includes(jog.time_id));

    // Excluir partidas envolvendo os times excluídos
    dados.partidas = dados.partidas.filter(part => 
        !timesExcluidos.includes(part.time1_id) && !timesExcluidos.includes(part.time2_id)
    );

    // Excluir o campeonato
    dados.campeonatos.splice(indexCamp, 1);

    salvarDados(dados);
    console.log(`\n✓ Campeonato "${nomeCamp}" e todos os seus times foram excluídos!`);
}

// ----------- FUNÇÕES DE TIMES -----------
function adicionarTimes(){
    const dados = lerDados();
    
    if (dados.campeonatos.length === 0) {
        console.log("\n✗ Nenhum campeonato cadastrado. Crie um campeonato primeiro!");
        return;
    }

    listarCampeonato();
    const campeonato_id = parseInt(prompt("\nDigite o ID do campeonato: "));
    const campeonato = dados.campeonatos.find(c => c.id === campeonato_id);

    if (!campeonato) {
        console.log("✗ Campeonato não encontrado.");
        return;
    }

    const nome = prompt("Digite o nome do time: ");
    const fundacao = parseInt(prompt("Ano de fundação: "));
    const estadio = prompt("Nome do estádio: ");

    const novoID = gerarID(dados.times);

    dados.times.push({
        id: novoID,
        nome: nome,
        fundacao: fundacao,
        campeonato_id: campeonato_id,
        estadio: estadio
    });

    salvarDados(dados);
    console.log(`\n✓ Time "${nome}" adicionado com sucesso!`);
}

function listarTimes(){
    const dados = lerDados();
    
    if (dados.times.length === 0) {
        console.log("\n✗ Nenhum time cadastrado.");
        return;
    }

    console.log("\n===== Times =====");
    dados.times.forEach(time => {
        const camp = dados.campeonatos.find(c => c.id === time.campeonato_id);
        console.log(`ID: ${time.id} | Nome: ${time.nome} | Fundação: ${time.fundacao} | Estadio: ${time.estadio} | Campeonato: ${camp?.nome}`);
    });
}

function atualizarTimes(){
    const dados = lerDados();
    
    if (dados.times.length === 0) {
        console.log("\n✗ Nenhum time cadastrado.");
        return;
    }

    listarTimes();
    const id = parseInt(prompt("\nDigite o ID do time a atualizar: "));
    const time = dados.times.find(t => t.id === id);

    if (!time) {
        console.log("✗ Time não encontrado.");
        return;
    }

    const novoNome = prompt("Digite o novo nome (deixe em branco para manter): ");
    const novoEstadio = prompt("Digite o novo estádio (deixe em branco para manter): ");

    if (novoNome) time.nome = novoNome;
    if (novoEstadio) time.estadio = novoEstadio;

    salvarDados(dados);
    console.log("\n✓ Time atualizado com sucesso!");
}

function excluirTimes(){
    const dados = lerDados();
    
    if (dados.times.length === 0) {
        console.log("\n✗ Nenhum time cadastrado.");
        return;
    }

    listarTimes();
    const id = parseInt(prompt("\nDigite o ID do time a excluir: "));
    const indexTime = dados.times.findIndex(t => t.id === id);

    if (indexTime === -1) {
        console.log("✗ Time não encontrado.");
        return;
    }

    const nomeTime = dados.times[indexTime].nome;

    // Excluir jogadores do time
    dados.jogadores = dados.jogadores.filter(jog => jog.time_id !== id);

    // Excluir partidas envolvendo o time
    dados.partidas = dados.partidas.filter(part => 
        part.time1_id !== id && part.time2_id !== id
    );

    // Excluir o time
    dados.times.splice(indexTime, 1);

    salvarDados(dados);
    console.log(`\n✓ Time "${nomeTime}" foi excluído!`);
}

// ----------- FUNÇÕES DE JOGADORES -----------
function adicionarJogadores(){
    const dados = lerDados();
    
    if (dados.times.length === 0) {
        console.log("\n✗ Nenhum time cadastrado. Crie um time primeiro!");
        return;
    }

    listarTimes();
    const time_id = parseInt(prompt("\nDigite o ID do time: "));
    const time = dados.times.find(t => t.id === time_id);

    if (!time) {
        console.log("✗ Time não encontrado.");
        return;
    }

    const nome = prompt("Digite o nome do jogador: ");
    const idade = parseInt(prompt("Idade do jogador: "));
    const numeroCamisa = parseInt(prompt("Número da camisa: "));

    const novoID = gerarID(dados.jogadores);

    dados.jogadores.push({
        id: novoID,
        nome: nome,
        idade: idade,
        numeroCamisa: numeroCamisa,
        time_id: time_id
    });

    salvarDados(dados);
    console.log(`\n✓ Jogador "${nome}" adicionado com sucesso!`);
}

function listarJogadores(){
    const dados = lerDados();
    
    if (dados.jogadores.length === 0) {
        console.log("\n✗ Nenhum jogador cadastrado.");
        return;
    }

    console.log("\n===== Jogadores =====");
    dados.jogadores.forEach(jog => {
        const time = dados.times.find(t => t.id === jog.time_id);
        console.log(`ID: ${jog.id} | Nome: ${jog.nome} | Idade: ${jog.idade} | Camisa: ${jog.numeroCamisa} | Time: ${time?.nome}`);
    });
}

function atualizarJogadores(){
    const dados = lerDados();
    
    if (dados.jogadores.length === 0) {
        console.log("\n✗ Nenhum jogador cadastrado.");
        return;
    }

    listarJogadores();
    const id = parseInt(prompt("\nDigite o ID do jogador a atualizar: "));
    const jogador = dados.jogadores.find(j => j.id === id);

    if (!jogador) {
        console.log("✗ Jogador não encontrado.");
        return;
    }

    const novoNome = prompt("Digite o novo nome (deixe em branco para manter): ");
    const novaIdade = prompt("Digite a nova idade (deixe em branco para manter): ");
    const novaCamisa = prompt("Digite o novo número da camisa (deixe em branco para manter): ");

    if (novoNome) jogador.nome = novoNome;
    if (novaIdade) jogador.idade = parseInt(novaIdade);
    if (novaCamisa) jogador.numeroCamisa = parseInt(novaCamisa);

    salvarDados(dados);
    console.log("\n✓ Jogador atualizado com sucesso!");
}

function excluirJogadores(){
    const dados = lerDados();
    
    if (dados.jogadores.length === 0) {
        console.log("\n✗ Nenhum jogador cadastrado.");
        return;
    }

    listarJogadores();
    const id = parseInt(prompt("\nDigite o ID do jogador a excluir: "));
    const indexJog = dados.jogadores.findIndex(j => j.id === id);

    if (indexJog === -1) {
        console.log("✗ Jogador não encontrado.");
        return;
    }

    const nomeJog = dados.jogadores[indexJog].nome;

    dados.jogadores.splice(indexJog, 1);

    salvarDados(dados);
    console.log(`\n✓ Jogador "${nomeJog}" foi excluído!`);
}

// ----------- FUNÇÕES DE PARTIDAS -----------
function adicionarPartidas(){
    const dados = lerDados();
    
    if (dados.times.length < 2) {
        console.log("\n✗ É necessário ter pelo menos 2 times cadastrados!");
        return;
    }

    listarTimes();
    const time1_id = parseInt(prompt("\nDigite o ID do primeiro time: "));
    const time2_id = parseInt(prompt("Digite o ID do segundo time: "));

    const time1 = dados.times.find(t => t.id === time1_id);
    const time2 = dados.times.find(t => t.id === time2_id);

    if (!time1 || !time2) {
        console.log("✗ Um ou ambos os times não foram encontrados.");
        return;
    }

    if (time1_id === time2_id) {
        console.log("✗ Um time não pode jogar contra ele mesmo!");
        return;
    }

    const data = prompt("Digite a data da partida (DD/MM/YYYY): ");
    const gols_time1 = parseInt(prompt(`Gols do ${time1.nome}: `));
    const gols_time2 = parseInt(prompt(`Gols do ${time2.nome}: `));

    const novoID = gerarID(dados.partidas);

    dados.partidas.push({
        id: novoID,
        time1_id: time1_id,
        time2_id: time2_id,
        data: data,
        gols_time1: gols_time1,
        gols_time2: gols_time2
    });

    salvarDados(dados);
    console.log(`\n✓ Partida adicionada com sucesso!`);
}

function listarPartidas(){
    const dados = lerDados();
    
    if (dados.partidas.length === 0) {
        console.log("\n✗ Nenhuma partida cadastrada.");
        return;
    }

    console.log("\n===== Partidas =====");
    dados.partidas.forEach(part => {
        const time1 = dados.times.find(t => t.id === part.time1_id);
        const time2 = dados.times.find(t => t.id === part.time2_id);
        console.log(`ID: ${part.id} | ${time1?.nome} ${part.gols_time1} x ${part.gols_time2} ${time2?.nome} | Data: ${part.data}`);
    });
}

function atualizarPartidas(){
    const dados = lerDados();
    
    if (dados.partidas.length === 0) {
        console.log("\n✗ Nenhuma partida cadastrada.");
        return;
    }

    listarPartidas();
    const id = parseInt(prompt("\nDigite o ID da partida a atualizar: "));
    const partida = dados.partidas.find(p => p.id === id);

    if (!partida) {
        console.log("✗ Partida não encontrada.");
        return;
    }

    const novaData = prompt("Digite a nova data (deixe em branco para manter): ");
    const novosGols1 = prompt("Digite o novo placar do time 1 (deixe em branco para manter): ");
    const novosGols2 = prompt("Digite o novo placar do time 2 (deixe em branco para manter): ");

    if (novaData) partida.data = novaData;
    if (novosGols1) partida.gols_time1 = parseInt(novosGols1);
    if (novosGols2) partida.gols_time2 = parseInt(novosGols2);

    salvarDados(dados);
    console.log("\n✓ Partida atualizada com sucesso!");
}

function excluirPartidas(){
    const dados = lerDados();
    
    if (dados.partidas.length === 0) {
        console.log("\n✗ Nenhuma partida cadastrada.");
        return;
    }

    listarPartidas();
    const id = parseInt(prompt("\nDigite o ID da partida a excluir: "));
    const indexPart = dados.partidas.findIndex(p => p.id === id);

    if (indexPart === -1) {
        console.log("✗ Partida não encontrado.");
        return;
    }

    dados.partidas.splice(indexPart, 1);

    salvarDados(dados);
    console.log("\n✓ Partida foi excluída!");
}

// Iniciar o programa
main();