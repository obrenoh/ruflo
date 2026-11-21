(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 7,
  titulo: "Produtividade, Mão de Obra e Equipamentos",
  horas: 20,
  ementa: ["Homem-hora (HH) e RUP", "Fatores que afetam a produtividade", "Amostragem do trabalho", "Custo da mão de obra", "Custo horário de equipamentos", "Lean Construction e desperdícios"],
  videos: [
    { t: "Cálculo do R.U.P e C.U.M - Construção Civil", id: "8uCC-w6fweM" },
    { t: "Como calcular a produtividade da mão de obra?", id: "5ab9tzdqEuI" },
    { t: "[Webinar] Lean Construction para resultados", id: "Jf3OdPCdUfI" },
    { t: "Como calcular a Depreciação de Máquinas e Equipamentos?", id: "YKKkHXk0-aM" }
  ],
  texto: `
<h2>1. Produtividade é a maior alavanca de custo de mão de obra</h2>
<p>Salário e encargos têm pouca margem de negociação; a produtividade tem muita. Um serviço executado com 20% menos HH reduz o custo direto sem tocar no salário.</p>
<h2>2. RUP (Razão Unitária de Produção)</h2>
<p><b>RUP = HH ÷ Quantidade de serviço</b>. Exemplo: 120 HH para 60 m² de alvenaria → RUP = 2,0 HH/m². <b>Quanto maior a RUP, pior a produtividade.</b> Tipos usuais: diária, cumulativa (acumulada desde o início), periódica e a <b>RUP potencial</b> (referência dos melhores desempenhos, em geral a média dos melhores resultados). A diferença entre RUP cumulativa e potencial dimensiona o espaço de melhoria.</p>
<h2>3. Fatores de influência</h2>
<p>Falta de material ou projeto, retrabalho, interferência entre equipes, clima, absenteísmo, falta de treinamento, layout do canteiro, movimentação de materiais. A maior parte é causa gerencial, não "preguiça do operário".</p>
<h2>4. Amostragem do trabalho</h2>
<p>Observações em intervalos regulares classificam a atividade em <b>produtiva</b> (agrega valor direto), <b>contributiva</b> (apoia, como transporte e medição) ou <b>improdutiva</b> (espera, retrabalho). Nível de atividade típico em obras mostra grande parcela de trabalho contributivo e improdutivo; é nele que estão os ganhos.</p>
<h2>5. Custo da mão de obra</h2>
<p>Custo horário = salário horário × (1 + encargos) + benefícios. Exemplo: salário R$ 10/h, encargos 100% → R$ 20/h. Com RUP de 2,0 HH/m²: <b>R$ 40 por m²</b>.</p>
<h2>6. Equipamentos</h2>
<p>Custo horário de equipamento próprio: depreciação, juros do capital, seguros/impostos, manutenção, combustível/energia e operador. <b>Locação × compra</b> depende da taxa de utilização: com baixa ocupação, locar costuma vencer. Considere também o custo do equipamento parado.</p>
<h2>7. Lean Construction</h2>
<p>Os desperdícios clássicos: superprodução, espera, transporte, processamento excessivo, estoque, movimentação e defeitos. Ferramentas: Last Planner, Kanban de materiais, 5S, trabalho padronizado, produção puxada.</p>
<h2>8. Retroalimentação</h2>
<p>RUP cumulativa de obras anteriores é a melhor base para orçar mão de obra e dimensionar equipes futuras. Sem coleta sistemática, cada obra reinventa o erro.</p>`,
  pratica: "Em um serviço repetitivo (ex.: reboco de 10 apartamentos) registre HH diários e quantidade produzida por 10 dias. Calcule RUP diária, cumulativa e potencial, e proponha 3 ações para aproximar a cumulativa da potencial, estimando o ganho em R$.",
  quiz: [
    { q: "120 HH foram gastos para executar 60 m² de alvenaria. Qual a RUP?", o: ["0,5 HH/m²", "2,0 HH/m²", "60 HH/m²", "7.200 HH/m²"], c: 1, e: "RUP = HH ÷ quantidade = 120 ÷ 60 = 2,0 HH/m²." },
    { q: "Quanto à RUP, é correto afirmar que:", o: ["Quanto maior, melhor a produtividade", "Quanto maior, pior a produtividade", "Não tem relação com produtividade", "É igual ao custo unitário"], c: 1, e: "Mais horas por unidade de serviço = menor produtividade." },
    { q: "Na amostragem do trabalho, transportar materiais é classificado como:", o: ["Trabalho produtivo", "Trabalho contributivo", "Trabalho improdutivo sempre", "Tempo de descanso obrigatório"], c: 1, e: "Contributivo apoia a execução sem agregar valor direto." },
    { q: "Salário de R$ 10/h e encargos de 100%. Com RUP de 2,0 HH/m², o custo de mão de obra por m² é:", o: ["R$ 20", "R$ 30", "R$ 40", "R$ 50"], c: 2, e: "Custo horário R$ 20 × 2,0 HH/m² = R$ 40/m²." },
    { q: "Qual item compõe o custo horário de um equipamento próprio?", o: ["Somente combustível", "Depreciação, juros, manutenção, combustível e operador", "Apenas o aluguel", "Somente o seguro"], c: 1, e: "É a soma dos custos de propriedade e de operação." },
    { q: "Retrabalho afeta a produtividade porque:", o: ["Não afeta", "Consome HH sem entregar nova quantidade de serviço", "Reduz o salário", "Diminui a RUP"], c: 1, e: "Horas gastas refazendo aumentam o numerador da RUP." },
    { q: "A melhor base para orçar a mão de obra de uma nova obra é:", o: ["O palpite do engenheiro", "RUP cumulativa de obras anteriores da própria empresa", "Somente a tabela do concorrente", "O menor preço de mercado"], c: 1, e: "Dados próprios refletem seus processos e sua realidade." },
    { q: "Qual é um dos 7 desperdícios da construção enxuta?", o: ["Alto BDI", "Espera", "Baixo estoque de segurança", "Excesso de projetos"], c: 1, e: "Espera (de material, projeto, equipe) é desperdício clássico." }
  ]
});
