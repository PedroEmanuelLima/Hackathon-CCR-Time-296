# AprendIn
## Plataforma com fialidade de instruir os jovens entre 17 a 24, os conectanto com mentores que são profissionais com experiência(s) de mercado e que possam propor quais melhores caminhos para seu mentorado, além de apontar a afinidade desse com determinadas áreas de conhecimento, além de disponibilizar recursos de crecimento individual do jovem.

> Status do Projeto: Em desenvolvimento :warning:

### Modelo de Relacional

Layout

## Como rodar a aplicação
Instale o Postges, crie uma base de dados com o nome que preferir, clicar com o botão direito em cima da base de dados e clicar em CREATE Script, cole todos os comando do arquivo __PostgresQuery.sql__ no arquivo encontrado na pasta _backend_, também na pasta backend excutar os comando do __arquivo dados.sql__ logo após na pasta _backend_ criar um arquivo __.env__ e colar:
DATABASE_URL=postgres://postgres:{sua-senha}@localhost:{porta-na-qual-está-executando(5432)}/{nome-da-base-de-dados-que-escolheu}
Substituindoo as informações necessárias.

No terminal clone o projeto:

Entre na pasta do projeto:

Entre na pasta backend:

Intale dependencias:

Execute o backend:

Abra outro terminal e navegue até a pasta do do projeto clonado em sua maquina:

Entre na pasta frontend e intale dependencias:

Execute o frontend:

Na posta 3000 do servidor local poderá ser testada a api.

## Frameworks e libs utilizadas :books:
- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS): ^2.8.5,
- [dotenv](https://www.npmjs.com/package/dotenv): ^8.2.0,
- [express](http://expressjs.com/): ^4.17.1,
- [express-promise-router](https://github.com/express-promise-router/express-promise-router): ^4.0.1,
- [nodemon](https://nodemon.io/): ^2.0.7,
- [pg](https://node-postgres.com/): ^8.5.1


## Database
_Sistema gerenciador de banco de dados objeto relacional_
[__Postgres__](https://www.bing.com/aclick?ld=e84YNX--N35JAcUiohrJSCUjVUCUxkL5cw_53hdECm1fWMY-7mWYJ2pv7ZfKw5zSjoCykaKJEqVTO7FocM3RibCx2DW6YFOvssoVWh7GISaaVKNh83hsIBjgGw3SBeJDNSWlVWL5ATxLuUSvFG6E2lCByKraQlCEklXVw56r46TaE_a_DH&u=aHR0cHMlM2ElMmYlMmZhenVyZS5taWNyb3NvZnQuY29tJTJmcHQtYnIlMmZzZXJ2aWNlcyUyZnBvc3RncmVzcWwlMmYlM2ZPQ0lEJTNkQUlEMjEwMDAxNF9TRU1fNGNmNWI2YjA0OGZmMTljNWU0MjRkNmIzMzkyYWRkNzclM2FHJTNhcyUyNmVmX2lkJTNkNGNmNWI2YjA0OGZmMTljNWU0MjRkNmIzMzkyYWRkNzclM2FHJTNhcyUyNm1zY2xraWQlM2Q0Y2Y1YjZiMDQ4ZmYxOWM1ZTQyNGQ2YjMzOTJhZGQ3Nw&rlid=4cf5b6b048ff19c5e424d6b3392add77)

### Diagrama de Classes
![img](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/backend/assets/diagrama%20de%20classe.png)
