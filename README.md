# Blazingly Fast JS

Isto é uma aplicação em Typescript com websocket com um servidor em Rust que foi feita para mostrar como otimizar aplicaçãoes JavaScript, ele possui uma interface em Golang que é possível visualizar todos os pacotes enviados, foi testado o envio de 500 pacotes, 1000 e 2000. Durante o curso foi ensinado como analisar as partes do programa que mais utilizam processamente e memória, com o Chrome dev tools (chrome://inspect).
---
### A primeira otimização foi feita na função 'update' do arquivo 'game.ts':
Foi possível ver que o 'self time' estava ocupando muito processamento, então foi refatorado o laço de iteração para verficar a colisão da bala. Outro grande problema era a utilização do 'Set()' na coleção 'Bullets', foi substituído por um Array, já melhorou o uso de memória e processamento.

### A segunda otimização foi o garbage colector: 
Excesso de criação de objetos e funções assíncronas, sem necessidade necessidade de ser assíncrono

## A terceira otimização foi a substituição da dependência 'WS' WebSocket:
 - A dependência 'ws' Websocket foi substituida pela uWebSockets.js, feita em C++, melhorou muito a utilização da memória
 - Retirado os loggers, em produção não havia necessidade de vários loggers, teve 

# Conclusão:
Este curso é muito bom para visualizar os 'custos' várias funcionalidades do JavaScript, como Promisses, arrays, JSON, dependências, nada 'sai de graça', e alternativas mais 'performáticas' dentro do possível que JS oferece.
[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)][fem]

This is a companion repo for the [Blazingly Fast JavaScript][course] course on [Frontend Masters][fem].

[fem]: https://frontendmasters.com
[course]: https://frontendmasters.com/courses/blazingly-fast-js/
[site]: https://theprimeagen.github.io/fem-jsperf
