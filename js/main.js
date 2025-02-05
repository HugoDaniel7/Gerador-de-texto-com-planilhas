document.getElementById('generate').addEventListener('click', () => {
    const inputData = document.getElementById('input-data').value;

    // Dividir os dados por linhas
    const rows = inputData.split('\n').map(row => row.split('\t'));

    // Extrair cabeçalhos e valores
    const headers = rows[0]; // Primeira linha como cabeçalhos
    const values = rows[1]; // Segunda linha como valores

    // Criar objeto com os dados extraídos
    const data = {};
    headers.forEach((header, index) => {
        data[header.trim().toLowerCase()] = values[index]?.trim() || '---';
    });

    // Função para converter o número do mês no formato "mês de ano"
    const getMonthAndYear = (date) => {
        const monthNames = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        const parts = date.split('/'); // Supondo formato DD/MM/YYYY
        const monthIndex = parseInt(parts[1], 10) - 1; // Extrair o mês
        const year = parts[2]; // Extrair o ano
        return `${monthNames[monthIndex]} de ${year}`;
    };

        // Substituir valores undefined
        const empresa = (data['empresa'] || data['tomador']).toUpperCase(); // Empresa em maiúsculas
        const mesVigencia = data['vencimento da apolice'] ? getMonthAndYear(data['vencimento da apolice']).toUpperCase() : 'DATA INVÁLIDA';

        // Gerar o texto dinâmico
        const template = `
        <p id="destaque"><b>Assunto:</b> ${empresa} / RENOVAÇÃO JUDICIAL / Apólice: ${data['apólice que será renovada']} / IS: ${data['is da apólice']} / Prazo: ${data['prazo fatal']}</p>
        <p id="destaque"><b>Prezado Executivo(a),</b></p>
        <p id="destaque">Em atenção às normas gerais aplicáveis ao <b>Seguro Garantia Judicial</b>, bem como considerando que a vigência da apólice emitida para a empresa <b>${empresa}</b> finda em <b>${mesVigencia}</b>, precisamos dar sequência aos procedimentos de renovação da respectiva garantia.</p>            <p id="destaque" class="highlight">Pedimos que nos informe se estamos em concorrência, para não corrermos o risco de perdermos o negócio por falta de estratégia e/ou taxa não competitiva.</p>
        <p id="destaque" class="no-spacing"><b>APÓLICE: ${data['apólice que será renovada']}</b></p>
        <p id="destaque" class="no-spacing"><b>TOMADOR: ${data['tomador']}</b></p>
        <p id="destaque" class="no-spacing"><b>SEGURADORA: ${data['seguradora']}</b></p>
        <p id="destaque" class="no-spacing"><b>IS: ${data['is da apólice']}</b></p>
        <p id="destaque" class="no-spacing"><b>DATA FINAL DA VIGÊNCIA: ${data['vencimento da apolice']}</b></p>
        <p id="destaque" class="no-spacing"><b>PRAZO FATAL PARA RENOVAÇÃO: ${data['prazo fatal']}</b>

        <p id="destaque">Desse modo, pedimos a gentileza que nos enviem a <b>Ficha Judicial</b> preenchida e assinada pelo advogado da causa, conforme modelo em anexo, ou o extrato atualizado do débito <b>em até 80 dias antes do seu vencimento</b>, visto que o tomador terá tempo hábil de conferir a minuta antes da respectiva emissão da apólice que é obrigatória estar caucionada em juízo <b>em até 60 dias antes do vencimento.</b><br><br> 

        Na hipótese de a apólice ter perdido seu objeto pela extinção do risco ou o tomador ter providenciado sua substituição por outra garantia devidamente aceita pelo juízo e segurado, documentos que comprovem o ocorrido deverão ser enviados para que seja possível a baixa da Apólice. Sem prejuízo dos documentos disponibilizados à Seguradora, está se reserva o direito de solicitar outros documentos e/ou informações, caso entenda necessário. Destaca-se que eventual restituição, se aplicável, ocorrerá a partir da data da comprovação, perante a Seguradora, da extinção do risco e/ou substituição da garantia por outra devidamente aceita pelo juízo e segurado.<br><br>

        Caso seja necessário o cancelamento da garantia, pedimos que enviem a documentação para cancelamento.garantia@aon.com:<br><br>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	comprovação do trânsito em julgado da sentença ou acórdão favorável ao Tomador; ou<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	homologação do acordo com comprovante integral do depósito; ou<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•   decisão judicial de liberação da apólice ou de sua efetiva substituição por outra garantia aceita em juízo.
            a aceita em juízo.<br><br>

        Adicionalmente, informa-se que <u><b>a ausência de retorno no prazo assinalado será entendida como anuência tácita para a respectiva renovação</b></u>, conforme determinado pela SUSEP e condições da apólice, e a renovação será feita com valor de importância segurada atualizado conforme índice aplicado no processo.<br><br>  

        Reforça-se que <b>caberá ao Tomador o pagamento do respectivo prêmio pela renovação, sendo que, incumbe também a este a comprovação nos autos da respectiva renovação, em até 60 (sessenta) dias antes do final de vigência da Apólice.</b><br><br> 

        Importante sempre manter o cadastro do Tomador válido com envio dos documentos de atualização cadastral para credito.garantia@aon.com:<br><br>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Último Balanço Patrimonial com DRE assinado pelo contador;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Última alteração do contrato social ou alteração societária recente; e<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Informações/documentações complementares poderão ser solicitados para conclusão da análise.<br><br>

        Ficamos à disposição.
        </p>
        `;


        // Exibir o texto formatado
        document.getElementById('output-text').innerHTML = template;

});

