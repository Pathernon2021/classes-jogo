// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      // Determinando o tipo de ataque baseado no tipo de herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando um novo herói
  const meuHeroi = new Heroi('Herói Teste', 25, 'guerreiro');
  
  // Chamando o método atacar do herói criado
  meuHeroi.atacar();
  