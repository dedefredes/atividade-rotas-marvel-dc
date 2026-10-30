
const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>

            <p>Bem-vindo ao universo dos super-heróis Marvel e DC!</p>

            <h2>Empresas</h2>
            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
        </body>
        </html>
    `);
});


app.get('/marvel', (req, res) => {
    res.send(`
        <html lang="pt-br">
        <head><meta charset="UTF-8"><title>Marvel</title></head>
        <body>
            <h1>Marvel</h1>

            <p>A Marvel é uma empresa conhecida por seus
            personagens e histórias de super-heróis.</p>

            <h2>Personagens Marvel</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
            </ul>

            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});


app.get('/dc', (req, res) => {
    res.send(`
        <html lang="pt-br">
        <head><meta charset="UTF-8"><title>DC Comics</title></head>
        <body>
            <h1>DC Comics</h1>

            <p>A DC Comics é uma empresa conhecida por
            personagens como Batman e Superman.</p>

            <h2>Personagens DC</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});


app.get('/personagem/:empresa/:nome', (req, res) => {

    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>${nome}</title>
        </head>
        <body>
            <h1>Informações do Personagem</h1>

            <p><strong>Empresa:</strong> ${empresa}</p>

            <p><strong>Personagem:</strong> ${nome}</p>

            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
