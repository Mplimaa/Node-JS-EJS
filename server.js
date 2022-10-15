const express = require('express');

//instanciar express e guardar na variavel app
const app = express();

//express vai reinderizar atraves de argumentos abaixo
app.set("view engine", "ejs");

//criação de rota / é dominio , o res é response(resposta)
//colocar arquivo index dentro da pasta "views" para abrir o site
app.get("/", function (req, res){
    const items = [
            {
                title: "D",
                message: "esenvolver aplicações/serviços de forma fácil"
            },
            {
                title: "E",
                message: "JS usa javascript para renderizar HTML"
            },
            {
                title: "M",
                message: "uito fácil de usar"
            },
            {
                title: "A",
                message: "morzinho"
            },
            {
                title: "I",
                message: "nstall EJS agora mesmo!"
            },
            {
                title: "S",
                message: "intaxe simples!"
            },

    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando Javascript "

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });

});

//nome do site /sobre about)
app.get("/sobre", function (req, res){
    res.render("pages/about");

});

//fala p/ o servidor rodar!!!!!!! listen função de ouve/escuta porta 8080
app.listen(8080)
console.log("rodando")
//alteração feita em arquivo ejs não precisa parar o servidor
//só para o servidor se fizer alteração no arquivo js do servisor for example