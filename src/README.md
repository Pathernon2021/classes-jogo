
# Escrevendo as Classes de Um Jogo

Fazer   um  código   contendo:                                                                      
 


- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
Com as condições:

- se mago -> no ataque exibir (usou magia)
- se guerreiro -> no ataque exibir (usou espada)
- se monge -> no ataque exibir (usou artes marciais)
- se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

# Dissecando  o código
Primeiro declara-se  uma classe  de herói  onde são especificadas  informações  como nome,idade e tipo (linha 2 a 7).Em  seguida  tem-se a função atacar (linha 9 a 28) e  em seguida  a determinação  da frase a ser  dita na Saída (linha 31). Por fim , as  chamadas  para  a criação  do herói e depois o método de ataque há ser empregado (linhas 35 a 39).