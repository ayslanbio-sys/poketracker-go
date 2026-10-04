# Pokémon GO Collection Tracker

Aplicação web local, sem backend, para controlar coleção de Pokémon GO.

## Recursos da versão 1
- Pokédex das 1.025 espécies base até Pecharunt, carregadas pela PokéAPI e armazenadas em cache no navegador.
- Dashboard geral e progresso por região.
- Quantidade por Pokémon.
- Normal, Shiny, Shadow, Regional, XXL, XXS, Macho, Fêmea, Lucky e 4★.
- Busca e filtros por região/status.
- Metas/totais configuráveis para as categorias do dashboard.
- Backup e restauração em JSON.
- Dados da coleção armazenados localmente no navegador.

## Como usar
1. Extraia a pasta.
2. Abra `index.html` em um navegador com internet na primeira execução.
3. A Pokédex será carregada e ficará em cache.
4. Clique em um Pokémon e informe suas quantidades.
5. Use **Backup** regularmente.

## GitHub Pages
Este projeto é estático. Basta criar um repositório no GitHub, enviar `index.html`, `styles.css`, `app.js` e esta documentação, e ativar GitHub Pages.

## Fonte da Pokédex
A lista base usa a PokéAPI. O projeto GoRefs é uma referência adicional para dados específicos de Pokémon GO, incluindo espécies e formas, disponibilidade de Shiny/Shadow e outras informações: https://github.com/theflyingfool/GoRefs

## Observação
A versão inicial controla a coleção por espécie. Formas, fantasias e variantes regionais específicas podem ser adicionadas em uma próxima etapa como subitens de cada espécie, sem perder os dados já cadastrados.
