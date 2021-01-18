# AprendIn
## Plataforma com fialidade de instruir os jovens entre 17 a 24, os conectanto com mentores que são profissionais com experiência(s) de mercado e que possam propor quais melhores caminhos para seu mentorado, além de apontar a afinidade desse com determinadas áreas de conhecimento, além de disponibilizar recursos de crecimento individual do jovem.

> Status do Projeto: Em desenvolvimento :warning:

### Modelo de Relacional

Layout

## Como rodar a aplicação

- No terminal clone o projeto:
```bash
  gh repo clone PedroEmanuelLima/Hackathon-CCR-Time-296
```
- Entre na pasta do projeto:
```bash
  cd Hackathon-CCR-Time-296
```
- Entre na pasta backend:
```bash
  cd backend
```
- Intale dependencias:
```bash
  npm install
```
- Execute o backend:
```bash
  npm start
```
- Abra outro terminal e navegue até a pasta do do projeto clonado em sua maquina:
- Entre na pasta frontend e intale dependencias:
```bash
  cd frontend
  npm start
```
- Execute o frontend:
```bash
  npm start
```
Na posta 3333 do servidor local poderá ser testada a api, os dados do frontend estão fixos pois a conexão com a base de dados não está completa.

## Frameworks e libs utilizadas :books:
- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS): ^2.8.5,
- [dotenv](https://www.npmjs.com/package/dotenv): ^8.2.0,
- [express](http://expressjs.com/): ^4.17.1,
- [express-promise-router](https://github.com/express-promise-router/express-promise-router): ^4.0.1,
- [nodemon](https://nodemon.io/): ^2.0.7,
- [pg](https://node-postgres.com/): ^8.5.1,
- [axios](https://github.com/axios/axios): ^0.21.1,
- [react](https://reactjs.org/docs/getting-started.html): ^17.0.1,
- [react-dom](https://reactjs.org/docs/react-dom.html): ^17.0.1,
- [react-router](https://knowbody.github.io/react-router-docs/#:~:text=React%20Router%20Documentation.%20React%20Router.%20These%20are%20unofficial,Router%20repo.%20These%20docs%20cover%20React%20Router%20v2.x.x.): ^5.2.0,
- [react-router-dom](https://docs.splunk.com/Documentation/IAI/1.3.0/ReleaseNotes/react-router-dom): ^5.2.0,
- [react-scripts](https://reactjs.org/docs/getting-started.html): 4.0.1,
- [react-toastify](https://openbase.io/js/react-toastify/documentation): ^6.2.0,
- [typescript](https://www.staging-typescript.org/docs/handbook/dom-manipulation.html#:~:text=The%20Document%20Interface.%20The%20first%20line%20of%20the,contains%20calls%20to%20two%20methods%2C%20getElementById%20and%20createElement.): ^4.1.3,
- [web-vitals](https://docs.sentry.io/product/performance/web-vitals/): ^0.2.4.

## Layout do projeto
![1](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/1.png)
![2](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/2.png)
![3](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/3.png)
![4](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/4.png)
![5](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/5.png)
![6](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/6.png)
![7](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/7.png)
![8](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/8.png)
![9](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/9.png)
![10](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/frontend/assets/10.png)

## Database
#### Instale o Postges, crie uma base de dados com o nome que preferir, clicar com o botão direito em cima da base de dados e clicar em CREATE Script, cole todos os comando do arquivo __PostgresQuery.sql__ no arquivo encontrado na pasta _backend_, também na pasta backend excutar os comando do __arquivo dados.sql__ logo após na pasta _backend_ criar um arquivo __.env__ e colar:
DATABASE_URL=postgres://postgres:{sua-senha}@localhost:{porta-na-qual-está-executando(5432)}/{nome-da-base-de-dados-que-escolheu}
Substituindoo as informações necessárias.

_Sistema gerenciador de banco de dados objeto relacional_
[__Postgres__](https://www.bing.com/aclick?ld=e84YNX--N35JAcUiohrJSCUjVUCUxkL5cw_53hdECm1fWMY-7mWYJ2pv7ZfKw5zSjoCykaKJEqVTO7FocM3RibCx2DW6YFOvssoVWh7GISaaVKNh83hsIBjgGw3SBeJDNSWlVWL5ATxLuUSvFG6E2lCByKraQlCEklXVw56r46TaE_a_DH&u=aHR0cHMlM2ElMmYlMmZhenVyZS5taWNyb3NvZnQuY29tJTJmcHQtYnIlMmZzZXJ2aWNlcyUyZnBvc3RncmVzcWwlMmYlM2ZPQ0lEJTNkQUlEMjEwMDAxNF9TRU1fNGNmNWI2YjA0OGZmMTljNWU0MjRkNmIzMzkyYWRkNzclM2FHJTNhcyUyNmVmX2lkJTNkNGNmNWI2YjA0OGZmMTljNWU0MjRkNmIzMzkyYWRkNzclM2FHJTNhcyUyNm1zY2xraWQlM2Q0Y2Y1YjZiMDQ4ZmYxOWM1ZTQyNGQ2YjMzOTJhZGQ3Nw&rlid=4cf5b6b048ff19c5e424d6b3392add77)

### Diagrama de Classes
![img](https://github.com/PedroEmanuelLima/Hackathon-CCR-Time-296/blob/main/backend/assets/diagrama%20de%20classe.png)
