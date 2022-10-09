# Desafio 2: nginx + nodejs

## Descrição
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
<p>
    <p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>
</p>

<p>
    <p>- Lista de nomes cadastrada no banco de dados.</p>
</p>
```

Gere o `docker-compose` de uma forma que, ao executar o comando abaixo, deverá estar tudo funcionando na porta 8080.
```
docker-compose up -d
```

> A linguagem de programação para este desafio é Node.

<br/>

## Resolução

### Node.js
```
docker run --rm -it -v $(pwd)/node/:/usr/src/app -p 3000:3000 node:15 bash
cd /usr/src/app/
npm init
npm install express --save
node index.js
```
### Mysql
```
mysql -uroot -p
show databases;
use nodedb;
create table people(id int not null auto_increment, name varchar(255), primary key(id))
desc people;
```


