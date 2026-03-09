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
    const files = fs.readdirSync(membersPath).filter(file => file.startsWith('guia-') && file.endsWith('.html'));

    if (files.length === 0) {
        console.log('Nenhum guia HTML encontrado para conversao.');
        await browser.close();
        return;
    }

    for (const file of files) {
        const filePath = 'file:///' + path.join(membersPath, file).replace(/\\/g, '/');
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