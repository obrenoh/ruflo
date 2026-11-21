(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 1,
  titulo: "Fundamentos de Gestão de Custos e Ciclo de Vida do Empreendimento",
  horas: 20,
  ementa: ["Custo, despesa e investimento", "Custos diretos, indiretos, fixos e variáveis", "Ciclo de vida e curva de influência sobre o custo", "EAP e plano de contas da obra", "Índices: CUB, INCC, SINAPI"],
  videos: [
    { t: "[Palestra] Gestão de Custos na Construção Civil", id: "C166pe8wBhY" },
    { t: "Custos Diretos e Indiretos - Orçamento de Obras", id: "8-HXyU9N44M" },
    { t: "Como fazer uma Estrutura Analítica de Projeto (EAP) para Orçamento de Obras", id: "tyCwDoZe8F0" },
    { t: "O que são o CUB e o INCC-M?", id: "qWAWpA_Rx1E" }
  ],
  texto: `
<h2>1. Conceitos básicos</h2>
<p><b>Investimento</b> é o recurso aplicado esperando retorno futuro (o terreno, a obra). <b>Custo</b> é o consumo de recursos para produzir o bem (materiais, mão de obra, equipamentos). <b>Despesa</b> é o consumo para manter a estrutura da empresa (administração central, comercial). Misturar custo e despesa distorce a margem real de cada obra.</p>
<h2>2. Classificações de custo</h2>
<ul>
<li><b>Direto:</b> apropriável a um serviço específico (concreto da laje, mão de obra do pedreiro).</li>
<li><b>Indireto da obra:</b> necessário à obra, mas não a um serviço específico (engenheiro, almoxarife, canteiro, vigilância) — a "administração local".</li>
<li><b>Fixo:</b> não varia com o volume executado no curto prazo (aluguel do canteiro, equipe de gestão).</li>
<li><b>Variável:</b> varia com a produção (consumo de concreto, aço, tijolo).</li>
</ul>
<h2>3. Ciclo de vida e curva de influência</h2>
<p>As fases são: concepção, viabilidade, projeto, planejamento, execução, entrega e uso. A capacidade de influenciar o custo final é <b>máxima no início</b> (escolha do partido arquitetônico, do sistema estrutural, do padrão de acabamento) e cai rapidamente; já o custo de uma mudança cresce. A maior parte do custo é "decidida" em projeto, mas "gasta" na execução. Por isso, o gestor de custos que só entra na obra chega tarde.</p>
<h2>4. Precisão das estimativas</h2>
<p>A precisão aumenta com a maturidade do projeto: estimativas paramétricas (R$/m² a partir do CUB) servem a estudos de viabilidade; o orçamento analítico, com composições e quantitativos de projeto executivo, sustenta contrato e controle. Toda estimativa deve declarar sua faixa de incerteza.</p>
<h2>5. EAP e plano de contas</h2>
<p>A <b>EAP (Estrutura Analítica do Projeto)</b> decompõe o escopo em entregas. O <b>plano de contas</b> (centros de custo) deve espelhar a EAP: assim, o orçado e o realizado são comparáveis na mesma estrutura. Sem essa amarração, não existe controle — apenas contabilidade.</p>
<h2>6. Índices de referência</h2>
<ul>
<li><b>CUB</b> (Custo Unitário Básico): R$/m² de projetos-padrão, calculado mensalmente pelos Sinduscons conforme a NBR 12721.</li>
<li><b>INCC</b> (FGV): variação mensal do custo da construção; muito usado para reajuste de contratos de venda na planta.</li>
<li><b>SINAPI</b> (Caixa/IBGE): preços e custos de insumos e composições por UF, base de orçamentos de obras públicas.</li>
</ul>
<p><i>Atenção:</i> índice de custo é média de mercado. Não substitui a apropriação de custos da sua obra.</p>`,
  pratica: "Pegue uma obra real (ou um memorial de um prédio de 4 pavimentos) e monte uma EAP de 3 níveis. Em seguida, crie o plano de contas correspondente, classificando cada conta em direta ou indireta e fixa ou variável.",
  quiz: [
    { q: "Qual item é típico de custo DIRETO de uma obra?", o: ["Salário do engenheiro residente", "Aluguel do canteiro de obras", "Concreto incorporado à laje", "Energia do escritório central"], c: 2, e: "Custo direto é apropriável a um serviço específico; o concreto da laje pertence diretamente a ela." },
    { q: "Em que fase do ciclo de vida a capacidade de influenciar o custo final é maior?", o: ["Execução", "Concepção e viabilidade", "Entrega", "Pós-ocupação"], c: 1, e: "As decisões iniciais (partido, sistema estrutural, padrão) definem a maior parte do custo final." },
    { q: "O CUB é:", o: ["Um índice de inflação geral da economia", "Um custo unitário por m² de projetos-padrão, calculado pelos Sinduscons (NBR 12721)", "Uma tabela de preços de insumos de obras públicas", "Um imposto sobre a construção"], c: 1, e: "CUB = Custo Unitário Básico, em R$/m², conforme NBR 12721." },
    { q: "O INCC, da FGV, é amplamente usado para:", o: ["Calcular o BDI", "Reajustar contratos de compra de imóveis na planta", "Definir a alíquota do ISS", "Medir a produtividade da mão de obra"], c: 1, e: "O INCC mede a variação do custo da construção e é referência comum de reajuste." },
    { q: "Qual é um custo VARIÁVEL em uma obra?", o: ["Consumo de aço proporcional ao volume estrutural executado", "Aluguel mensal do container de escritório", "Salário fixo do mestre de obras", "Vigilância do canteiro"], c: 0, e: "Custo variável acompanha o volume produzido; os demais independem da produção no curto prazo." },
    { q: "Qual a principal função da EAP no controle de custos?", o: ["Calcular impostos", "Decompor o escopo em entregas, base para orçamento e controle", "Definir o preço de venda", "Substituir o cronograma"], c: 1, e: "A EAP estrutura o escopo; orçamento e controle se apoiam nela." },
    { q: "Estimativa paramétrica é aquela que:", o: ["Soma todas as composições unitárias do projeto executivo", "Usa relações estatísticas, como R$/m² de obras similares", "Depende de cotações firmes de todos os fornecedores", "Só pode ser feita após a obra"], c: 1, e: "Paramétrica = relação estatística (ex.: custo por m²), típica de fases iniciais." },
    { q: "Por que o plano de contas da obra deve espelhar a EAP?", o: ["Para reduzir impostos", "Para comparar orçado e realizado na mesma estrutura", "Porque a lei exige", "Para dispensar o cronograma"], c: 1, e: "Sem estruturas idênticas, a comparação orçado × realizado perde sentido." }
  ]
});
