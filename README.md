# CRUD Usuário + validação de adm 

## Endpoints do serviço:

| Metodos 	| Endpoint       	| Responsabilidade                                                                                        	|
|---------	|----------------	|---------------------------------------------------------------------------------------------------------	|
| POST    	| /users         	| Criação de usuários                                                                                     	|
| POST    	| /login         	| Gera um token JWT recebendo email e password no corpo da requisição como JSON.                          	|
| GET     	| /users         	| Lista todos os usuários                                                                                 	|
| GET     	| /users/profile 	| Retorna os dados do usuário logado (usuário a qual pertence o token que será necessário neste endpoint) 	|
| PATCH   	| /users/:uuid   	| Atualiza os dados de um usuário                                                                         	|
| DELETE  	| /users/:uuid   	| Deleta usuários do banco                                                                                	|

## Criando usuário 

- **POST/users**
```json
{
    "name": "daniel",
    "email": "daniel@kenzie.com",
    "password": "123456",
    "isAdm": true
}
```

- Status: <span style="color:green">**200 CREATED**</span>
```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-18T01:23:52.910Z",
    "name": "daniel"
    "email": "daniel@kenzie.com",
    "isAdm": true
}
```

## Criando usuário com e-mail já existente:

- **POST: /users**

```json
{
    "name": "daniel",
    "email": "daniel@kenzie.com",
    "password": "123456",
    "isAdm": true
}
```

- Status: <span style="color:yellow">**400 BAD REQUEST**</span>

```JSON
{
    "message": "E-mail already registered",
}
```

## Login:

- **POST: /login**

```JSON
{
    "email": "daniel@kenzie.com",
    "password": "123456",
}
```

- Status: <span style="color:green">**200 CREATED**</span>

```JSON
{
    "token": "4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d
    2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
}
```

## Login inválido:

- **POST: /login**

```JSON
{
    "email": "daniel@mail.com",
    "password": "123456",
}
```

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```JSON
{
    "message": "Wrong email/password",
}
```

## Listando usuários:

- **GET: /users**

Com header de autorização.

- Status: <span style="color:green">**200 CREATED**</span>

```json
[
    {
        "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
        "createdOn": "2021-11-18T01:23:52.910Z",
        "updatedOn": "2021-11-18T01:23:52.910Z",
        "name": "daniel",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "email": "daniel@kenzie.com",
        "isAdm": true
    }
]
```

## Listando usuários sem token:

- GET: /users
  
Sem header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Missing authorization headers",
}
```

## Listando usuários sem ser administrador: 

- **GET: /users**

Com header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Unauthorized"
}
```

## Dados do perfil:

- **GET: /users/profile**

Com header de autorização.

- Status: <span style="color:green">**200 OK**</span>

```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-18T01:23:52.910Z",
    "name": "daniel"
    "email": "daniel@kenzie.com",
    "isAdm": true
}
```

## Dados do perfil sem token:

- **GET: /users/profile**

Sem header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Missing authorization headers",
}
```

## Atualizando usuário

- **PATCH: /users/:uuid**

Com header de autorização.

```json
{
    "name": "Daniel Kenzie"
    "email": "daniel@kenzie.com.br",
}
```

- Status: <span style="color:green">**200 OK**</span>

```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-21T07:44:21.520Z",
    "name": "Daniel Kenzie"
    "email": "daniel@kenzie.com.br",
    "isAdm": true
}
```

## Atualizando usuário sem token

- **PATCH: /users/:uuid**

Sem header de autorização.


```json
{
    "name": "Daniel Kenzie"
    "email": "daniel@kenzie.com.br",
}
```

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Missing authorization headers",
}
```

## Atualizando outro usuário sem ser administrador

- **PATCH: /users/:uuid**

```json
{
    "name": "Daniel Kenzie"
    "email": "daniel@kenzie.com.br",
}
```

Com header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Unauthorized"
}
```

## Excluindo usuário

- **PATCH: /users/:uuid**

Com header de autorização.

- Status: <span style="color:green">**200 OK**</span>

```json
{
    "message": "User deleted with success",
}
```

## Excluindo usuário sem token

- **PATCH: /users/:uuid**

Sem header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Missing authorization headers",
}
```

## Excluindo outro usuário sem ser administrador

- **PATCH: /users/:uuid**

Com header de autorização.

- Status: <span style="color:yellow">**401 UNAUTHORIZED**</span>

```json
{
    "message": "Unauthorized"
}
```
