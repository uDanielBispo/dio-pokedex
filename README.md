# Pokedex

Preview: https://udanielbispo.github.io/dio-pokedex/

API’s HTTP Requests são “links” que respondem a solicitação realizando um CRUD que é representado dessa forma

 Tabela de relação

| C | Create | POST |
| --- | --- | --- |
| R | Read | GET |
| U | Update | PUT |
| D | Delete | DELETE |

### Filtros

É possivel criar filtros na requisição GET de um HTTP Utilizando “?”

```bash
https://pokeapi.co/api/v2/pokemon?type=1
```

### Headers

São configurações da solicitação, indica o que aceita na resposta:

```bash
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
```

### Body

É o corpo da requisição, traz informações. Pode ser utilizado na requisição quando for POST ou PUT

```json
request-body
{
	"name":"test"
}
```

### Request status code

- **1XX**: Informativo – a solicitação foi aceita ou o processo continua em andamento;
- **2XX**: Confirmação – a ação foi concluída ou entendida;
- **3XX**: Redirecionamento – indica que algo mais precisa ser feito ou precisou ser feito para completar a solicitação;
- **4XX**: Erro do cliente- indica que a solicitação não pode ser concluída ou contém a sintaxe incorreta;
- **5XX**: Erro no servidor – o servidor falhou ao concluir a solicitação.

por exemplo o famoso erro **404**, que geralmente indica que sua busca não foi encontrada, devido a um erro de sintaxe.
