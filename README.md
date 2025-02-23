## Anotações

##### 📍 No arquivo src/app/globals.css tem algumas configurações de tema feito com o postcss integrado com o tailwind (o postcss é instalado juntamente com o tailwind, não precisa fazer uma instalação extra). Bem interessante

#### 📍 No arquivo src/app/components/Button/index.tsx tem uma dica de tipagem de elementos html MUITO INTERESSANTE

#### 📍 No arquivo src/app/components/Input/index.tsx tem dicas de estilizações e de Composition Pattern (desmembrar um componente em partes para que fique mais maleável) ❗MUITO INTERESSANTES❗

### 📍 Uma dica sobre responsividade é utilizar o dvh (ex.: `h-dvh`) ao invés de vh (ex.: `h-screen`), porque o dvh consegue se adptar ao tamanho da tela do dispositivo de forma dinâmica. Tem um exemplo prático no código do arquivo src/app/page.tsx

### 📍 `align-items: stretch` faz com que os elementos estiquem para ficar do mesmo tamanho

### 🧩 twMerge: biblioteca para mergear as estilizações do tailwind (tem um exemplo no arquivo src/app/components/IconButton/index.tsx)

### 📍 na pasta src/app/invite tem um conceito de formatação que é separar os componentes de funções que estão na página principal (page.tsx/index.tsx) da rota e separar em componentes dentro da rota. Ex.: um componente que engloba texto, botão de requisição e outras coisas pode ser desmembrado e criado um componente na pasta da rota, deixando o arquivo principal (page/index) mais legível e com menos código. Não cria na pasta components, mas sim na rota pq não se trata de um componente global, mas sim exclusivo daquela rota

### 📍 a pasta (home) em src/app/ está em volta de parenteses para que o Next não leia essa pasta como uma rota. Quando está entre parenteses, o Next lê como uma pasta normal e não como rota. Então a rota default continuará sendo o arquivo page.tsx que está dentro da pasta (home)

### 📍 o "use client" serve para dizer ao Next que no arquivo tem código JavaScript, tem algum componente que terá interação com usuário, seja um onClick, onChange, qualquer função que precise da interação com o usuário. Então, sempre que tiver uma função que seja disparada por um onclick, onchange, etc, precisa do "use client" no topo do arquivo. Porém, o ideal é que todo componente que precise de interação JS do usuário seja desmembrado e não fique na página da rota para não pesar a página web (o que pode implicar no SEO da página). Ex.: se na rota padrão tem um botão com função JS, o ideal é tirar esse botão do arquivo e criar um componente. Porque se usar o "use client" na rota padrão todo o arquivo de rota enviará JS pra página web e não só o botão. O que pode acabar causando lentidão e afetando o SEO. Importante ressaltar que não pode haver uma função assíncrona em um arquivo que contém o "use client" ❗SUPER IMPORTANTE❗

### 📍 no arquivo src/app/(home)/subscription-form.tsx tem algumas dicas de validação de formulário

### 🧩 orval: biblioteca para automatizar a criação do arquivo api.ts, adicionando todas as rotas de requisições e tipagens presentes em uma doc (swagger por exemplo). Porém, a doc precisa estar muito bem documentada para que a biblioteca funcione corretamente. Para gerar o arquivo api.ts é necessário configurar o arquivo orval.config.ts e após isso rodar o comando `npx orval`

### 📍 no arquivo src/app/invite/[subscriberId]/page.tsx tem a nova forma de lidar com parâmetros em pastas das rotas no NextJS MUITO INTERESSANTE
