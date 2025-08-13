
# Carrinho de Orçamento Simples em React

Aplicação React para orçamento de produtos, onde o usuário pode navegar pela lista de produtos, adicionar quantidades ao carrinho, editar o carrinho e finalizar o orçamento enviando os dados para o backend. Tudo isso sem banco de dados, focado em simplicidade e usabilidade.

## Tecnologias utilizadas

- React.js  
- React Router  
- Context API ou Redux  
- CSS / SCSS para estilização  
- Vite para build e dev server  

## Funcionalidades

- Visualização de uma grade com todos os produtos disponíveis  
- Visualizar detalhes de cada produto e escolher quantidade para adicionar ao carrinho  
- Carrinho fixo no topo, com acesso rápido e visualização das quantidades selecionadas  
- Atualização e remoção de produtos direto no carrinho  
- Soma automática da quantidade caso o produto já exista no carrinho  
- Formulário para preenchimento dos dados do usuário antes de finalizar a cotação  
- Envio dos dados para backend e exibição de resposta de sucesso ou erro  

## Como rodar o projeto

1. Clone este repositório:  
   ```bash
   git clone https://github.com/kauannkelvinn/teste-tecnico-5-react.git
   ```

2. Entre na pasta do projeto:  
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:  
   ```bash
   npm install
   ```

4. Inicie a aplicação:  
   ```bash
   npm run dev
   ```

5. Acesse no navegador:  
   ```
   http://localhost:5173
   ```

## Estrutura de arquivos

```plaintext
carrinho-orcamento/
├── public/                      # Arquivos estáticos públicos
├── src/
│   ├── assets/                  # Imagens e outros arquivos estáticos
│   ├── components/              # Componentes reutilizáveis da aplicação
│   │   ├── CartBar.jsx          # Barra fixa do carrinho no topo
│   │   ├── CartPage.jsx         # Página com lista de itens no carrinho e formulário
│   │   ├── ProductDetailPage.jsx# Página de detalhes do produto com seletor de quantidade
│   │   └── ProductListPage.jsx  # Página inicial com lista de todos os produtos
│   ├── context/                 # Gerenciamento de estado global
│   │   └── CartContext.jsx      # Context API para controle do carrinho
│   ├── App.jsx                  # Componente raiz da aplicação
│   ├── App.css                  # Estilos globais da aplicação
│   └── main.jsx                 # Ponto de entrada da aplicação
├── index.html                   # HTML base usado pelo Vite
├── vite.config.js               # Configuração do Vite
├── package.json                 # Dependências e scripts do projeto
└── README.md                    # Documentação do projeto
```

---

Feito por Kauan Kelvin
