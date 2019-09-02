# Star Crypto

## Índice

- [Star Crypto](#star-crypto)
  - [Índice](#%c3%8dndice)
  - [1. Definição do produto:](#1-defini%c3%a7%c3%a3o-do-produto)
  - [2. Interfece do projeto:](#2-interfece-do-projeto)
  - [3. Método de cifragem usado no projeto:](#3-m%c3%a9todo-de-cifragem-usado-no-projeto)
  - [4. Especificações técnicas:](#4-especifica%c3%a7%c3%b5es-t%c3%a9cnicas)

***

## 1. Definição do produto:

Inspirado no universo de Star Wars, onde a Resistência tinha formas muito ruins 
de guardar suas informações secretas, os mapas e planos eram guardados em droids 
que viviam se perdendo e corriam grande risco de parar nas mãos inimigas, como 
a do Império Galático, quando R2-D2 guardava os planos para a construção da 
Estrela da Morte, e depois a Primeira Ordem, quando o droid BB-8 guardava 
uma parte do mapa com a localização de Luke Skywalker. Nas duas ocasiões as mensagens 
poderiam estar criptografadas e assim mesmo que os inimigos tivessem acesso as 
informações secretas, eles não entenderiam, somente membros da Resistência que 
possuissem a chave para descriptografar as informações saberiam o conteúdo delas.

## 2. Interfece do projeto:

A interface permite ao usuário:

* Inserir uma mensagem (texto) para ser cifrada.
* Eleger um (_offset_) indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Ver o resultado da mensagem cifrada clicando no botão Cifrar.
* Na mesma tela, ver o resultado da mensagem decifrada clicando no botão Decifrar.
* Limpar o resultado da tela.

![Tela](./src/imagens/tela.gif)

## 3. Método de cifragem usado no projeto:

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 4. Especificações técnicas:

Para o desenvolvimento do projeto foram utilizados:

* HTML - usado para estruturar o conteúdo da página;
* CSS - usado para estilizar a página;
* JavaScript - usado para a fazer a interação do usuário com a página.
* Testes - foi também acrescentados alguns testes do hacker edition para números e deslocamento negativo.



  