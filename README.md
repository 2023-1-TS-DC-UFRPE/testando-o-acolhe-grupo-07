
>[!NOTE]
> Este repositório está configurado com GitHub Actions. Após cada commit na branch `main`, todos os testes são executados e um relatório HTML é gerado. O relatório é hospedado no GitHub Pages para referência futura.

## Executando o projeto

Para executar os testes deste repositório, basta seguir as etapas:

1. Clone este repositório

``` bash
git clone git@github.com:2023-1-TS-DC-UFRPE/testando-o-acolhe-grupo-07.git
```

2. Instale as dependências do projeto:

``` bash
npm install
```

3. Execute o Cypress:

```bash
npx cypress open
```

## Variáveis de ambiente do Cypress

Para a função de login funcionar corretamente, é necessário fornecer algumas variáveis de ambiente.

Você pode configurá-las criando o arquivo `cypress.env.json` na raiz do repositório. 

**Exemplo:**

```json
{
  "EMAIL": "seu e-mail de gestor do Acolhe",
  "PASSWORD": "sua senha"
}
```

## Relatório HTML

Você pode gerar um relatório HTML dos testes executando o comando:

```bash
npx cypress run
```

Este comando irá gerar um arquivo `index.html` na pasta `./cypress/reports/html`