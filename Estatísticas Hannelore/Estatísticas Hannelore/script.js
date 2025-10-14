// --- BASE DE DADOS COMPLETA ---
const database = [
    // População
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "População", Subindicador: "N/A", Valor: 105495 },
    { ANO: 2016, Localidade: "Brusque (SC)", Indicador: "População", Subindicador: "N/A", Valor: 125812 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "População", Subindicador: "N/A", Valor: 141385 },
    { ANO: 2025, Localidade: "Brusque (SC)", Indicador: "População", Subindicador: "N/A", Valor: 146676 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "População", Subindicador: "N/A", Valor: 6248436 },
    { ANO: 2016, Localidade: "Santa Catarina", Indicador: "População", Subindicador: "N/A", Valor: 6910553 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "População", Subindicador: "N/A", Valor: 7610361 },
    { ANO: 2025, Localidade: "Santa Catarina", Indicador: "População", Subindicador: "N/A", Valor: 7892445 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "População", Subindicador: "N/A", Valor: 190755799 },
    { ANO: 2016, Localidade: "Brasil", Indicador: "População", Subindicador: "N/A", Valor: 206081432 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "População", Subindicador: "N/A", Valor: 203080756 },
    { ANO: 2025, Localidade: "Brasil", Indicador: "População", Subindicador: "N/A", Valor: 205399870 },

    // Taxa de Analfabetismo

    { ANO: 2000, Localidade: "Brusque (SC)", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 5.5 },
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 2.4 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 1.8 },
    { ANO: 2000, Localidade: "Santa Catarina", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 5.7 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 4.1 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 2.7 },
    { ANO: 2000, Localidade: "Brasil", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 13.6 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 9.6 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "Taxa de Analfabetismo", Subindicador: "N/A", Valor: 7.0 },

    // Matrículas

    { ANO: 2017, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 5695 },
    { ANO: 2021, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 3710 },
    { ANO: 2023, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 3300 },
    { ANO: 2017, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 15440 },
    { ANO: 2021, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 16480 },
    { ANO: 2023, Localidade: "Brusque (SC))", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 15068 },
    { ANO: 2017, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 6544 },
    { ANO: 2021, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 7230 },
    { ANO: 2023, Localidade: "Brusque (SC)", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 6823 },
    { ANO: 2017, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 153298 },
    { ANO: 2021, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 157965 },
    { ANO: 2023, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 172935 },
    { ANO: 2017, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 4965815 },
    { ANO: 2021, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 4931427 },
    { ANO: 2023, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Pré-Escola", Valor: 5309073 },
    { ANO: 2017, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 771551 },
    { ANO: 2021, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 812385 },
    { ANO: 2023, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 843837 },
    { ANO: 2017, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 27399702 },
    { ANO: 2021, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 26574673 },
    { ANO: 2023, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Fundamental", Valor: 26126985 },
    { ANO: 2017, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 195962 },
    { ANO: 2021, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 213684 },
    { ANO: 2023, Localidade: "Santa Catarina", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 220449 },
    { ANO: 2017, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 7910150 },
    { ANO: 2021, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 7876815 },
    { ANO: 2023, Localidade: "Brasil", Indicador: "Matrículas", Subindicador: "Ensino Médio", Valor: 7570651 },

    // Natalidade / Nascidos Vivos

    { ANO: 2017, Localidade: "Brusque (SC)", Indicador: "Natalidade", Subindicador: "Nascidos Vivos", Valor: 1841 },
    { ANO: 2019, Localidade: "Brusque (SC)", Indicador: "Natalidade", Subindicador: "Nascidos Vivos", Valor: 1960 },
    { ANO: 2021, Localidade: "Brusque (SC)", Indicador: "Natalidade", Subindicador: "Nascidos Vivos", Valor: 2126 },
    { ANO: 2023, Localidade: "Brusque (SC)", Indicador: "Natalidade", Subindicador: "Nascidos Vivos", Valor: 1802 },
    { ANO: 2017, Localidade: "Santa Catarina", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 98246 },
    { ANO: 2019, Localidade: "Santa Catarina", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 98409 },
    { ANO: 2021, Localidade: "Santa Catarina", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 97425 },
    { ANO: 2017, Localidade: "Brasil", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 2867.711 },
    { ANO: 2019, Localidade: "Brasil", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 2784778 },
    { ANO: 2021, Localidade: "Brasil", Indicador: "Saúde e Demografia", Subindicador: "Nascidos Vivos", Valor: 2633911 },

    // Saneamento

    { ANO: 2000, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Acesso à Água", Valor: 84.1 },
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Acesso à Água", Valor: 92.9 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Acesso à Água", Valor: 97.9 },
    { ANO: 2000, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Esgoto Adequado", Valor: 70.5 },
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Esgoto Adequado", Valor: 82.3 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Esgoto Adequado", Valor: 86.4 },
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Coleta de Lixo", Valor: 88.4 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Coleta de Lixo", Valor: 90.8 },
    { ANO: 2000, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Energia Elétrica", Valor: 99.2 },
    { ANO: 2010, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Energia Elétrica", Valor: 99.8 },
    { ANO: 2022, Localidade: "Brusque (SC)", Indicador: "Saneamento", Subindicador: "Energia Elétrica", Valor: 99.8 },
    { ANO: 2000, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 82.9 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 86.9 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 91.2 },
    { ANO: 2000, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 78.5 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 84.7 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Água (Rede Geral)", Valor: 85.7 },
    { ANO: 2000, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 71.9 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 82.6 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 83.0 },
    { ANO: 2000, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 64.1 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 72.5 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Esgoto Adequado", Valor: 75.7 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Coleta de Lixo", Valor: 97.4 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Coleta de Lixo", Valor: 98.3 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Coleta de Lixo", Valor: 88.4 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Coleta de Lixo", Valor: 90.9 },
    { ANO: 2000, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 98.8 },
    { ANO: 2010, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 99.7 },
    { ANO: 2022, Localidade: "Santa Catarina", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 99.8 },
    { ANO: 2000, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 95.8 },
    { ANO: 2010, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 98.9 },
    { ANO: 2022, Localidade: "Brasil", Indicador: "Saneamento e Infraestrutura", Subindicador: "Acesso à Energia Elétrica", Valor: 99.8 }
];


const locations = {
    sjb: "Brusque (SC)",
    sc: "Santa Catarina",
    br: "Brasil"
};

// Função genérica para buscar um valor na base de dados
function getValue(year, location, indicators, subindicator = "N/A") {
    // Garante que 'indicators' seja sempre um array para a busca
    const indicatorList = Array.isArray(indicators) ? indicators : [indicators];
    
    const entry = database.find(item =>
        item.ANO === year &&
        item.Localidade === location &&
        indicatorList.includes(item.Indicador) && // Verifica se o indicador do item está na lista
        item.Subindicador === subindicator
    );
    return entry ? entry.Valor.toLocaleString('pt-BR') : '--';
}

// LÓGICA PARA CRIAR CADA CARD INDIVIDUALMENTE
function setupCard(config) {
    const slicerContainer = document.getElementById(config.slicerId);
    if (!slicerContainer) return;

    const indicatorList = Array.isArray(config.indicators) ? config.indicators : [config.indicators];

    const years = [...new Set(database
        .filter(item => indicatorList.includes(item.Indicador))
        .map(item => item.ANO)
    )].sort((a, b) => a - b);

    const update = (year) => {
        slicerContainer.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.year) === year);
        });
        config.updateFunction(year);
    };

    years.forEach(year => {
        const button = document.createElement('button');
        button.innerText = year;
        button.dataset.year = year;
        button.addEventListener('click', () => update(year));
        slicerContainer.appendChild(button);
    });

    if (years.length > 0) {
        update(years[years.length - 1]);
    }
}

// --- CONFIGURAÇÃO DE CADA CARD ---
document.addEventListener('DOMContentLoaded', () => {

    setupCard({
        slicerId: 'slicer-populacao',
        indicators: ['População'],
        updateFunction: (year) => {
            document.getElementById('pop-sjb').innerText = getValue(year, locations.sjb, 'População');
            document.getElementById('pop-sc').innerText = getValue(year, locations.sc, 'População');
            document.getElementById('pop-br').innerText = getValue(year, locations.br, 'População');
        }
    });

    setupCard({
        slicerId: 'slicer-saneamento',
        indicators: ['Saneamento', 'Saneamento e Infraestrutura'],
        updateFunction: (year) => {
            const saneamentoIndicators = ['Saneamento', 'Saneamento e Infraestrutura'];
            document.getElementById('agua-sjb').innerText = getValue(year, locations.sjb, saneamentoIndicators, 'Acesso à Água');
            document.getElementById('agua-sc').innerText = getValue(year, locations.sc, saneamentoIndicators, 'Acesso à Água (Rede Geral)');
            document.getElementById('agua-br').innerText = getValue(year, locations.br, saneamentoIndicators, 'Acesso à Água (Rede Geral)');
            
            document.getElementById('esgoto-sjb').innerText = getValue(year, locations.sjb, saneamentoIndicators, 'Esgoto Adequado');
            document.getElementById('esgoto-sc').innerText = getValue(year, locations.sc, saneamentoIndicators, 'Esgoto Adequado');
            document.getElementById('esgoto-br').innerText = getValue(year, locations.br, saneamentoIndicators, 'Esgoto Adequado');

            document.getElementById('lixo-sjb').innerText = getValue(year, locations.sjb, saneamentoIndicators, 'Coleta de Lixo');
            document.getElementById('lixo-sc').innerText = getValue(year, locations.sc, saneamentoIndicators, 'Coleta de Lixo');
            document.getElementById('lixo-br').innerText = getValue(year, locations.br, saneamentoIndicators, 'Coleta de Lixo');

            document.getElementById('energia-sjb').innerText = getValue(year, locations.sjb, saneamentoIndicators, 'Energia Elétrica');
            document.getElementById('energia-sc').innerText = getValue(year, locations.sc, saneamentoIndicators, 'Acesso à Energia Elétrica');
            document.getElementById('energia-br').innerText = getValue(year, locations.br, saneamentoIndicators, 'Acesso à Energia Elétrica');
        }
    });
    
    setupCard({
        slicerId: 'slicer-analf',
        indicators: ['Taxa de Analfabetismo'],
        updateFunction: (year) => {
            document.getElementById('analf-sjb').innerText = getValue(year, locations.sjb, 'Taxa de Analfabetismo');
            document.getElementById('analf-sc').innerText = getValue(year, locations.sc, 'Taxa de Analfabetismo');
            document.getElementById('analf-br').innerText = getValue(year, locations.br, 'Taxa de Analfabetismo');
        }
    });

    setupCard({
        slicerId: 'slicer-nascidos',
        indicators: ['Natalidade', 'Saúde e Demografia'],
        updateFunction: (year) => {
            const nascIndicadores = ['Natalidade', 'Saúde e Demografia'];
            document.getElementById('nasc-sjb').innerText = getValue(year, locations.sjb, nascIndicadores, 'Nascidos Vivos');
            document.getElementById('nasc-sc').innerText = getValue(year, locations.sc, nascIndicadores, 'Nascidos Vivos');
            document.getElementById('nasc-br').innerText = getValue(year, locations.br, nascIndicadores, 'Nascidos Vivos');
        }
    });

    setupCard({
        slicerId: 'slicer-matriculas',
        indicators: ['Matrículas'],
        updateFunction: (year) => {
            document.getElementById('mat-pre-sjb').innerText = getValue(year, locations.sjb, 'Matrículas', 'Pré-Escola');
            document.getElementById('mat-pre-sc').innerText = getValue(year, locations.sc, 'Matrículas', 'Pré-Escola');
            document.getElementById('mat-pre-br').innerText = getValue(year, locations.br, 'Matrículas', 'Pré-Escola');
            
            document.getElementById('mat-fund-sjb').innerText = getValue(year, locations.sjb, 'Matrículas', 'Ensino Fundamental');
            document.getElementById('mat-fund-sc').innerText = getValue(year, locations.sc, 'Matrículas', 'Ensino Fundamental');
            document.getElementById('mat-fund-br').innerText = getValue(year, locations.br, 'Matrículas', 'Ensino Fundamental');

            document.getElementById('mat-medio-sjb').innerText = getValue(year, locations.sjb, 'Matrículas', 'Ensino Médio');
            document.getElementById('mat-medio-sc').innerText = getValue(year, locations.sc, 'Matrículas', 'Ensino Médio');
            document.getElementById('mat-medio-br').innerText = getValue(year, locations.br, 'Matrículas', 'Ensino Médio');
        }
    });

});