type Resultado={
    site: string;
    status: number | string; //Número do status ou mensagem de erro.
};

async function verificadorSites(sites: string[]): Promise<void>{
    const promessas: Promise<Resultado>[]=sites.map(async site=>{
        try{
            const res=await fetch(site);
            return {site,status:res.status};

        }catch(error:any){
            //Caso der erro, retornará a mensagem.
            return {site,status:`Erro: ${error.message}`};
        }
    });

    const resultados:Resultado[]=await Promise.all(promessas);

    console.log("Status dos Sites: ");
    resultados.forEach(res=>{
        console.log(`${res.site}: Status ${res.status}`);
    });
}

const sites: string[]=[
    'https://github.com/',
    'https://www.google.com/',
    'https://www.umsitequenaoexiste.com/'
]

await verificadorSites(sites);