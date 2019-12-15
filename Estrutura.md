# COMUNICA LAB - WEB

## 1) Extensões (VS Code e Browser)

##### Nesse projeto, está sendo utilizado o VS Code. Por isso, para melhorar o desenvolvimento é necessário instalar algumas extensões.

#### Obrigatório

- Prettier
- EditorConfig for VS Code
- ESLint

#### Não Obrigatório

- Dracula Official -> Tema para VS Code.
- Material Icon Themes -> Icones para o VS Code.
- Rocketseat ReactJS -> Atalho para criação de componentes.

##### Para ajudar no desenvolvimento, tambem pode instalar a extênsão para browser: React Developer Tools

## 2) Configurar VS Code

##### Aperte Ctrl + Shift + P

##### Escreva Preferences: Open Settings (JSON)

##### Dentro das preferências digite:

#### Obrigatório

```sh
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true
```

#### Não Obrigatório

- Instalar a font Fira Code pelo site [FiraCode](https://github.com/tonsky/FiraCode)
- Procure por Download.v2, onde esse 2 é o número da versão, podendo ser um valor diferente.
- Baixe a fonte e instale no sistema operacional todas elas.
- Vá nas preferências e digite:

```sh
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
"emmet.syntaxProfiles": {
        "javascript": "jsx",
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
    }
```

## 3) Tarefa

##### Abra o RedMine: [RedMine-DComp](https://redmine.dcomp.ufs.br)

##### Procure a sua tarefa e o número dela. (Exemplo: #13)

##### Crie uma branch com o nome do número da tarefa.

```sh
git checkout -b 13
```

```sh
git add .
```

```sh
git commit -m "Criando a pagina"
```

```sh
git push -u origin 13
```

- Abra o GitHub: [ComunicaLab-Web](https://github.com/DCOMP-UFS/comunicalab-web)
- Aperte em Compare & pull request.
- No canto direito em Reviewers, clique na chave ao lado e selecione 2 pessoas do projeto.
- Descreva o nome e a descrição da tarefa.
- Aperte em Create pull request.

## 4) Estrutura do Projeto

```
[src]
    [modules] //Pasta com todos os modulos da app
        [module name] //Pasta de um modulo
            [actions] //Pasta das actions do modulo
                actionName.js
            [reducers] //Pasta dos reducers do modulo
                reducerName.js
            [constants] //Pasta das constantes do modulo
            [styles] //Pasta dos stilos gerais do modulo
            [components] //Pasta dos componentes do modulo
                [component name] //Pasta de um componente do modulo
                    componentController.jsx //Componente que recebe os reducers e actions e possui alguma logica
                    componentView.jsx //Componente que apenas exibe o layout do componente
                    styles //stilos especificos do componente
                index_old.js //arquivo que importa todos os componentes e exporta eles
        [utils] //Pasta de arquivos e pastas gerais do app
            [helpers] //Pasta com funcoes de apoio, tais como api, formatacao de numero,data,cpf e cnpj
                index_old.js //Arquivo que exporta todos os helpers
            [components] //Pasta com os componentes gerais da app, sao usados em varios lugares
                index_old.js //aquivo que exporta todos os componentes
            [styles] //stilos gerais da app
```

###### Exemplo

```
├── src
├── index.jsx
├── app.jsx
├── store
│   ├── index.js
└── modules
    ├── home
        ├── actions
            └── actionsHome.js
        ├── reducer
            └── reducerHome.js
        ├── constants
            └── index.js
        ├── components
            ├── HomeController.jsx
            └── HomeControllerView.jsx
        └── index.js
    └── login
        ├── actions
            └── actionsLogin.js
        ├── reducer
            └── reducerLogin.js
        ├── constants
            └── index.js
        ├── components
            ├── LoginController.jsx
            └── LoginControllerView.jsx
        └── index.js
```
