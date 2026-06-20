# Se Tudo Está Rodando em Localhost, Por Que Ainda Recebemos Erros de CORS?

Existe uma dúvida que praticamente todo desenvolvedor frontend encontra em algum momento da carreira.

Você sobe sua aplicação Angular.

Ela está rodando em:

```text
http://localhost:4200
```

Seu backend está rodando em:

```text
http://localhost:8080
```

Ambos estão na mesma máquina.

No mesmo notebook.

Na mesma rede.

No mesmo ambiente de desenvolvimento.

E mesmo assim o navegador responde com uma mensagem familiar:

```text
Access to fetch at 'http://localhost:8080/api/users'
from origin 'http://localhost:4200'
has been blocked by CORS policy.
```

A primeira reação normalmente é confusão.

Como duas aplicações rodando no mesmo computador podem ser consideradas "origens diferentes"?

A resposta está em como os navegadores definem o conceito de origem.

## O Que É Uma Origem?

Muitos desenvolvedores assumem que uma origem é apenas o domínio.

Na prática, não é tão simples.

Uma origem é composta por três partes:

```text
Protocolo + Host + Porta
```

Por exemplo:

```text
http://localhost:4200
```

e

```text
http://localhost:8080
```

compartilham o mesmo:

- Protocolo (`http`)
- Host (`localhost`)

Mas possuem portas diferentes.

E para o navegador, isso já é suficiente para caracterizar origens distintas.

Qualquer alteração em um desses três elementos cria uma nova origem.

Os exemplos abaixo são todos considerados origens diferentes:

```text
http://localhost:4200
https://localhost:4200
http://localhost:8080
https://api.meusistema.com
```

Para o navegador, não existe "quase a mesma origem".

Ou é igual.

Ou não é.

## Por Que o Navegador Se Importa Com Isso?

A maneira mais fácil de entender o CORS é parar de pensar no seu projeto por um momento.

Imagine que você está logado no site do seu banco.

Em outra aba, você acessa um site malicioso.

Sem mecanismos de proteção, esse site poderia tentar fazer requisições para a API do banco utilizando sua sessão já autenticada.

Poderia tentar:

- Ler informações da sua conta
- Consultar dados privados
- Executar ações em seu nome
- Acessar recursos protegidos

Isso seria um desastre.

Para evitar esse tipo de cenário, os navegadores implementam algo chamado **Same-Origin Policy**.

A ideia é simples:

Um site não pode acessar livremente recursos de outra origem sem autorização explícita.

## O Que Acontece Durante Uma Requisição?

Imagine uma aplicação Angular realizando uma chamada HTTP.

```ts
this.http.get('http://localhost:8080/api/users');
```

Para nós, desenvolvedores, parece apenas uma requisição comum.

Mas o navegador enxerga algo diferente.

```text
Origem A
http://localhost:4200

↓

Origem B
http://localhost:8080
```

Nesse momento, ele identifica que se trata de uma requisição entre origens diferentes.

A partir daí, passa a verificar se o servidor de destino permite esse acesso.

## A Parte Que Confunde Quase Todo Mundo

Existe um detalhe importante que costuma surpreender quem está começando.

Muitas vezes o backend recebe a requisição normalmente.

Sim, normalmente.

O fluxo costuma ser algo parecido com isso:

```text
Frontend
    ↓
Backend Recebe a Requisição ✅
    ↓
Backend Processa a Requisição ✅
    ↓
Backend Retorna a Resposta ✅
    ↓
Navegador Bloqueia a Resposta ❌
```

Isso explica uma situação extremamente comum.

Você abre os logs do backend.

A requisição chegou.

O controller executou.

A consulta ao banco aconteceu.

A resposta foi gerada.

Mas o navegador continua exibindo um erro de CORS.

A razão é simples:

O problema geralmente não acontece quando a requisição é enviada.

O problema acontece quando o navegador decide se a resposta pode ou não ser disponibilizada para sua aplicação.

O backend fez o trabalho dele.

O navegador apenas decidiu bloquear o acesso ao resultado.

## Afinal, O Que É CORS?

CORS significa:

```text
Cross-Origin Resource Sharing
```

Apesar do nome parecer complicado, o conceito é relativamente simples.

O servidor informa ao navegador:

> "Eu autorizo requisições vindas desta origem."

Essa autorização acontece através de cabeçalhos HTTP.

Por exemplo:

```http
Access-Control-Allow-Origin: http://localhost:4200
```

Quando o navegador recebe esse cabeçalho e a origem corresponde à aplicação que fez a requisição, a resposta é liberada.

Sem esse cabeçalho, ela é bloqueada.

É basicamente isso.

O navegador não está perguntando se a requisição foi bem-sucedida.

Ele está perguntando se o servidor permitiu explicitamente aquele acesso.

## Então Por Que Funciona No Postman?

Essa é outra dúvida muito comum.

Você testa a API no Postman.

Tudo funciona.

A resposta chega normalmente.

Nenhum erro.

Então você faz exatamente a mesma chamada no Angular ou React.

E recebe um erro de CORS.

Como isso é possível?

A explicação é simples:

O Postman não é um navegador.

Ferramentas como:

- Postman
- Insomnia
- cURL

não implementam as políticas de segurança dos navegadores.

O CORS é uma proteção aplicada pelos navegadores.

Fora deles, essa regra simplesmente não existe.

Por isso a mesma requisição pode funcionar perfeitamente no Postman e falhar imediatamente dentro do Chrome.

## O Papel dos Proxies em Desenvolvimento

É justamente por causa disso que Angular, React e outras ferramentas oferecem mecanismos de proxy para desenvolvimento.

Em vez de chamar diretamente:

```ts
this.http.get('http://localhost:8080/api/users');
```

Você faz:

```ts
this.http.get('/api/users');
```

E configura o ambiente de desenvolvimento para encaminhar a requisição ao backend.

Do ponto de vista do navegador, tudo continua acontecendo na mesma origem.

Quem redireciona a chamada é o proxy.

É importante entender que o proxy não remove o CORS.

Ele simplesmente evita que a situação aconteça.

## O Que São as Requisições Preflight?

Existe ainda um comportamento adicional que costuma gerar confusão.

Nem todas as requisições são enviadas diretamente.

Dependendo dos cabeçalhos, método HTTP ou conteúdo enviado, o navegador pode executar uma requisição preliminar chamada **preflight request**.

Essa requisição utiliza o método:

```http
OPTIONS
```

O objetivo dela é perguntar ao servidor:

> "Se eu enviar uma requisição desse tipo, você vai permitir?"

Somente após receber uma resposta adequada o navegador envia a requisição real.

Por isso, às vezes você vê duas chamadas na aba Network:

```text
OPTIONS
POST
```

A primeira é a verificação.

A segunda é a requisição de verdade.

Quando a configuração de CORS está incorreta, muitas vezes o problema acontece já nessa etapa de preflight.

## O Que Eu Gostaria de Ter Entendido Antes

Durante muito tempo eu enxergava erros de CORS como algo arbitrário.

Pareciam mensagens misteriosas que surgiam aleatoriamente durante o desenvolvimento.

Mas a realidade é bem mais simples.

O navegador não está tentando dificultar sua vida.

Ele está seguindo regras de segurança extremamente rígidas.

E essas regras não se importam com o fato de que:

- O backend está na mesma máquina
- Você é o dono da aplicação
- Tudo faz parte do mesmo projeto

O navegador olha apenas para uma coisa:

```text
Protocolo + Host + Porta
```

Se qualquer um desses elementos for diferente, você está lidando com outra origem.

E, nesse momento, as regras de CORS entram em ação.

## Conclusão

Uma das formas mais rápidas de perder o medo de CORS é entender que ele não é um problema do Angular, do React ou do backend.

Ele é um mecanismo de segurança do navegador.

Quando você entende o conceito de origem e como o navegador aplica a Same-Origin Policy, os erros de CORS deixam de parecer aleatórios.

Eles passam a ser apenas uma consequência previsível de uma regra simples:

Origens diferentes exigem permissão explícita.

E é exatamente para isso que o CORS existe.
