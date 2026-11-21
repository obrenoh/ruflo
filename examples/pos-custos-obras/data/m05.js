(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 5,
  titulo: "Suprimentos, Compras e Gestão de Estoques na Obra",
  horas: 20,
  ementa: ["Processo de compras", "Mapa de cotação e negociação", "Curva ABC de insumos", "Lote econômico e estoque de segurança", "Perdas de materiais", "Logística e almoxarifado"],
  videos: [
    { t: "Processos integrados de compras e suprimentos na construção civil [Sienge Podcast #30]", id: "fgk34l9Esek" },
    { t: "Lote Econômico de Compras (LEC) - Fundamentos e Exemplo", id: "YaK1eUuLUXk" },
    { t: "Curso de Almoxarife de Obras (SEDUC/AL) - Módulo IV: Gestão de Estoque", id: "qXV0ZOimNaQ" },
    { t: "Just in Time na Construção Civil: o que é e como aplicar o JIT nas obras", id: "OLO-H-U6WvY" }
  ],
  texto: `
<h2>1. Suprimentos é função estratégica</h2>
<p>Materiais costumam representar parcela relevante do custo direto de uma obra, e boa parte desse valor se concentra em poucos insumos. Uma compra bem feita se paga em preço, prazo e qualidade; uma compra mal feita aparece como parada de equipe ou retrabalho.</p>
<h2>2. Fluxo básico</h2>
<p><b>Requisição</b> (com especificação e data de necessidade) → <b>cotação</b> (preferencialmente 3 ou mais fornecedores homologados) → <b>mapa comparativo</b> → <b>negociação e pedido/contrato</b> → <b>recebimento e conferência</b> (NF × pedido × material) → <b>estoque</b> → <b>apropriação</b> ao centro de custo.</p>
<h2>3. Mapa de cotação</h2>
<p>Compare preço, prazo de entrega, condição de pagamento, frete, impostos e qualidade. Menor preço nominal nem sempre é menor custo: um prazo de pagamento mais longo ou frete incluso muda a conta. Converta tudo a valor presente quando as condições divergirem muito.</p>
<h2>4. Curva ABC e estratégia</h2>
<p>Insumos classe A (aço, concreto, esquadrias, elevadores) merecem negociação estruturada, contratos-quadro e acompanhamento de mercado. Classe C pode seguir compra simplificada. Para proteção inflacionária, considere <b>compra antecipada</b> dos itens A — avaliando custo financeiro, armazenagem e risco.</p>
<h2>5. Estoque: lote econômico e segurança</h2>
<p><b>LEC = √(2 × D × S ÷ H)</b>, em que D = demanda no período, S = custo de emitir um pedido e H = custo de manter uma unidade em estoque. Exemplo: D = 1.200; S = R$ 50; H = R$ 3 → LEC = √(2 × 1.200 × 50 ÷ 3) = √40.000 = <b>200 unidades</b>.</p>
<p>O <b>estoque de segurança</b> protege contra variabilidade na demanda e no prazo de entrega. Em canteiro, espaço é escasso: o ideal tende a ser entrega programada, próxima do uso.</p>
<h2>6. Perdas</h2>
<p>Estudos nacionais mostram perdas significativas, que variam muito por material e processo (argamassa, cerâmica, aço, concreto). As principais alavancas: projeto racionalizado, padronização, central de corte e dobra, controle de recebimento, logística interna e treinamento. Perda tem custo duplo: o material e a mão de obra de transportá-lo e removê-lo.</p>
<h2>7. Apropriação</h2>
<p>Sem apropriar corretamente consumo por serviço, a obra não aprende: os coeficientes reais nunca retornam ao orçamento seguinte.</p>`,
  pratica: "Escolha 5 insumos classe A de uma obra. Monte um mapa de cotação com 3 propostas fictícias, convertendo as condições de pagamento a valor presente (taxa de 1,5% a.m.), e justifique a escolha. Calcule o LEC de um insumo de reposição frequente.",
  quiz: [
    { q: "O mapa de cotação serve para:", o: ["Registrar o recebimento", "Comparar propostas por preço, prazo, condições e qualidade", "Calcular encargos", "Substituir o contrato"], c: 1, e: "É o instrumento de decisão entre propostas." },
    { q: "D = 1.200, S = R$ 50 por pedido e H = R$ 3 por unidade. Qual o LEC?", o: ["100", "200", "400", "600"], c: 1, e: "√(2 × 1.200 × 50 ÷ 3) = √40.000 = 200." },
    { q: "O estoque de segurança protege contra:", o: ["Redução do BDI", "Variabilidade da demanda e do prazo de entrega", "Mudança de projeto", "Erros de orçamento"], c: 1, e: "Absorve incertezas de consumo e de lead time." },
    { q: "Por que concentrar a negociação nos insumos classe A?", o: ["São os mais baratos", "Pequenas economias neles geram grande impacto financeiro", "São os mais fáceis de comprar", "Exigem menos controle"], c: 1, e: "Poucos itens concentram a maior parte do valor." },
    { q: "Qual ação reduz perdas de aço na obra?", o: ["Compra em barras sempre maiores", "Central de corte e dobra com plano de corte otimizado", "Eliminar o recebimento", "Aumentar o estoque"], c: 1, e: "Plano de corte otimizado reduz sobras e retrabalho." },
    { q: "Qual o risco típico de uma compra antecipada de aço?", o: ["Aumento de preço no futuro", "Custo financeiro, espaço de armazenagem e perda de caixa", "Redução da qualidade garantida", "Impossibilidade de apropriar"], c: 1, e: "A vantagem é a proteção inflacionária, ao custo de capital e armazenagem." },
    { q: "No recebimento de materiais, deve-se conferir:", o: ["Apenas a quantidade", "Nota fiscal × pedido × material entregue (qualidade e quantidade)", "Somente o motorista", "Nada, se o fornecedor é homologado"], c: 1, e: "Tripla conferência evita pagar por algo diferente do pedido." },
    { q: "Apropriar o consumo ao centro de custo correto permite:", o: ["Reduzir impostos", "Calcular coeficientes reais e realimentar orçamentos futuros", "Dispensar a cotação", "Eliminar estoque"], c: 1, e: "A apropriação transforma a obra em fonte de dados de custo." }
  ]
});
