# Hair Day

> Agendamentos rápidos, horários claros e um fluxo sem fricção para o salão.

## Visão Geral

O **Hair Day** é uma aplicação web para agendar e gerenciar compromissos de salão. A UI é focada em clareza: escolha a data, visualize horários livres, confirme o agendamento e, se precisar, cancele com um clique.

## Principais Funcionalidades

- Seleção de datas e horários disponíveis em tempo real.
- Criação, listagem e cancelamento de agendamentos.
- Regras de horários de funcionamento centralizadas para evitar conflitos.
- Fluxo otimizado para dispositivos móveis.

## Stack

- JavaScript (frontend vanilla, módulos ES).
- Node.js + Webpack para empacotamento e dev server.
- Day.js para manipulação de datas.

## Estrutura de Pastas

```
index.html
package.json
server.json
webpack.config.js
src/
    main.js                 # bootstrap da aplicação
    assets/
        libs/dayjs.js         # helper de datas
    modules/
        page-load.js          # inicialização e listeners globais
        form/
            date-change.js      # troca de data e atualização de horários
            hours-click.js      # seleção de horário
            hours-load.js       # carregamento da grade de horários
            submit.js           # envio do agendamento
        schedules/
            load.js             # busca e montagem da lista
            show.js             # exibição detalhada
            cancel.js           # cancelamento
    services/
        api-config.js         # base de chamadas HTTP
        schedule-new.js       # criação
        schedule-delete.js    # remoção
        schedule-fetch-by-day.js # busca por dia
    styles/
        global.css            # reset e tokens visuais
        form.css              # UI do formulário
        schedule.css          # lista de agendamentos
    utils/
        opening-hours.js      # regras de horário de funcionamento
```

## Como Rodar

Pré-requisitos: Node.js 18+ e npm.

```bash
git clone <URL_DO_REPOSITORIO>
cd hair_day
npm install
```

Ambientes disponíveis:

- Desenvolvimento (com hot reload): `npm run dev`
- API fake com json-server: `npm run server` (porta 3333)
- Build de produção: `npm run build`

Após `npm run dev`, acesse http://localhost:8080 (padrão do webpack-dev-server). Se usar a API fake, os endpoints ficam em http://localhost:3333.

## Scripts NPM

- `npm run dev` – sobe o webpack-dev-server com recarregamento.
- `npm run server` – inicia o json-server usando server.json.
- `npm run build` – gera o bundle otimizado para produção.

## Fluxo de Uso

1. Abra o app e selecione uma data. 2) Escolha um horário livre. 3) Preencha os dados e confirme. 4) Consulte ou cancele um agendamento na lista.

## Próximos Passos (ideias)

- Validação de conflitos ao vivo enquanto o usuário navega pelos horários.
- Feedback visual para horários recém-criados ou cancelados.
- Tema claro/escuro.

## Contribuição

Pull requests e sugestões são bem-vindos. Abra uma issue descrevendo o contexto e o que deseja alterar.

## Licença

MIT License. Consulte LICENSE para detalhes.
