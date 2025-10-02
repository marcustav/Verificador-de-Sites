// Precisa ter 'node-fetch' instalado: npm install node-fetch
// const fetch = require('node-fetch');
// O meu VSCODE tem a versão 22 do node-fetch, não há necessidade de declarar.
async function verificarSites(sites) {
    const promessas = sites.map(site =>
        fetch(site).then(res =>({ site, status: res.status }))
    );
    const resultados = await Promise.all(promessas);
    console.log("Status dos Sites:");
    resultados.forEach(res => {
        console.log(`${res.site}: Status ${res.status}`);
    });
}
const sites = ["https://www.google.com", "https://www.github.com", "https://www.umsitequenãoexiste.com"];
verificarSites(sites);