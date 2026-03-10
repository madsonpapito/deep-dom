const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDFs() {
    console.log('--- Iniciando Geracao de PDFs (Cura Ancestral) ---');
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const membersPath = path.join(process.cwd(), 'squads', 'cura-ancestral', 'members-area');
    
    // Lista expandida de arquivos para converter
    const filesToConvert = [
        'manual-principal.html',
        'mapa-consulta-rapida.html',
        'escudo-interacoes.html',
        'codice-potencializacao.html',
        'cofre-ervas-raras.html'
    ];
    
    // Adicionar os guias do desafio que comecam com guia-
    const guides = fs.readdirSync(membersPath).filter(file => file.startsWith('guia-') && file.endsWith('.html'));
    const allFiles = [...new Set([...filesToConvert, ...guides])];

    for (const file of allFiles) {
        const fullPath = path.join(membersPath, file);
        if (!fs.existsSync(fullPath)) {
            console.log(`Arquivo nao encontrado: ${file}, pulando...`);
            continue;
        }

        const filePath = 'file:///' + fullPath.replace(/\\/g, '/');
        const pdfPath = path.join(membersPath, file.replace('.html', '.pdf'));
        
        console.log('Convertendo: ' + file + ' -> ' + file.replace('.html', '.pdf'));
        
        const page = await browser.newPage();
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
        });
        
        await page.close();
    }

    await browser.close();
    console.log('--- Todos os PDFs foram gerados com sucesso! ---');
}

generatePDFs().catch(err => {
    console.error('Erro ao gerar PDFs:', err);
    process.exit(1);
});