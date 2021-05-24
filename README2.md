#Como rodar o Projeto.
    -Descompactar o arquivo ZIP.
    -Entrar com o CMD dentro da pasta "expertise".
    -Confira se o Aplicativo "Docker" esta rodando.
    -Rodar os comandos para gerar a imagem no docker.
        *docker build .\dogs\ -t dog/dog
        *docker images (Para conferir se gerou a imagem)
        *docker run -p 3000:3000 dog/dog
    -A partir dos comandos acima a API esta rodando.
    Voce consegue acessar na browser acessando "http://localhost:3000/dogs".

#Caso o docker de problema.
    -Ese projeto tem:
        *NestJs:7.6.0
        *mongoose(biblioteca)
        *cors(biblioteca)
    -para rodar esse projeto fora do docker
        *npm run start:dev

#Acessando o layout (Frontend)
    -Os arquivos front-end são html, podendo ser acessados pelo browser
    atraves do acesso na pasta do projeto, dentro da pasta "layout". De dois clicks
    encima do arquivo "index.html" e voce tera acesso ao front-end.

#dogs.postman_collection.json é a documentação do postman. Mostrando sobre as rotas.



