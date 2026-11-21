(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 6,
  titulo: "Contratos, Medições e Gestão de Subempreiteiros",
  horas: 20,
  ementa: ["Modalidades de empreitada", "Medição e memória de cálculo", "Glosas, retenções e garantias", "Reajuste e reequilíbrio", "Aditivos (Lei 14.133/2021)", "Responsabilidade solidária"],
  videos: [
    { t: "Tipos de contrato de empreitada na construção", q: "empreitada preço global preço unitário diferença contrato obra" },
    { t: "Medição de obras e boletim de medição", q: "medição de obras boletim de medição memória de cálculo" },
    { t: "Reajuste e reequilíbrio econômico-financeiro", q: "reajuste reequilíbrio econômico financeiro contrato obra" },
    { t: "Lei 14.133/2021 aplicada a obras e serviços de engenharia", q: "lei 14133 2021 obras serviços de engenharia aditivos" }
  ],
  texto: `
<h2>1. O contrato é o principal instrumento de controle de custo</h2>
<p>Metade dos estouros de custo em obras nasce de escopo mal descrito, medição mal definida ou aditivos mal negociados. Um bom contrato transfere o risco a quem tem melhor condição de geri-lo.</p>
<h2>2. Modalidades</h2>
<ul>
<li><b>Preço unitário:</b> paga-se a quantidade efetivamente medida × preço unitário. O risco de quantidade é do contratante.</li>
<li><b>Preço global (empreitada global):</b> preço fixo para escopo definido. O risco de quantitativos é, em regra, do contratado; exige projeto maduro.</li>
<li><b>Administração (custo + taxa):</b> o contratante paga os custos comprovados mais uma taxa. Risco de custo é do contratante; exige transparência e auditoria ("open book").</li>
<li><b>EPC/turn-key:</b> projeto, suprimento e construção sob um único responsável.</li>
</ul>
<h2>3. Medição</h2>
<p>A medição deve seguir <b>critérios objetivos</b> escritos no contrato (o que se mede, em que unidade, com que descontos), com <b>memória de cálculo</b> e conferência em campo. Medir por "percentual estimado" é convite a conflito e a pagamento antecipado de serviço não feito. <b>Glosa</b> é a dedução do que foi apresentado em desconformidade ou sem comprovação.</p>
<h2>3.1 Retenções e garantias</h2>
<p>Práticas comuns: retenção contratual sobre as medições, garantia contratual (na Lei 14.133/2021, em regra até 5% do valor do contrato, podendo chegar a 10% em obras de grande complexidade, mediante justificativa), e retenção previdenciária de 11% sobre a nota fiscal em cessão de mão de obra/empreitada (Lei 8.212/91, art. 31).</p>
<h2>4. Reajuste × reequilíbrio</h2>
<ul>
<li><b>Reajuste:</b> correção periódica por índice (anualidade, a cada 12 meses), prevista no contrato.</li>
<li><b>Reequilíbrio econômico-financeiro:</b> restabelece a relação original encargo × remuneração diante de fatos imprevisíveis ou previsíveis de consequências incalculáveis, alteração unilateral ou mudanças legais relevantes. Exige demonstração do nexo e do impacto.</li>
</ul>
<h2>5. Aditivos</h2>
<p>Na Lei 14.133/2021 (art. 125), aditivos de acréscimo ou supressão em obras, serviços e compras têm, em regra, o limite de <b>25%</b> do valor inicial atualizado do contrato (50% no caso de reforma de edifício ou de equipamento). Aditivos devem ser precificados com a mesma referência e o mesmo desconto global do contrato.</p>
<h2>6. Subempreiteiros e responsabilidade</h2>
<p>Subempreitar não transfere a responsabilidade: o contratante responde solidariamente por encargos previdenciários e pode responder por obrigações trabalhistas. Exija certidões, GFIP/eSocial, comprovantes de recolhimento e seguro. Faça a gestão de documentos antes de pagar cada medição.</p>`,
  pratica: "Redija uma cláusula de medição para serviço de alvenaria (unidade, critério de medição de vãos, retenção e comprovações). Depois, simule um aditivo de 18% em um contrato de R$ 8 mi: calcule o valor e o saldo disponível antes do limite legal de 25%.",
  quiz: [
    { q: "Na empreitada por preço global:", o: ["Paga-se apenas o que for medido, item a item", "O preço é fixo para um escopo definido, e o risco de quantitativos é, em regra, do contratado", "O contratante assume todo o risco de custo", "Não existe projeto"], c: 1, e: "Preço global pressupõe escopo bem definido e fixa o preço." },
    { q: "Na empreitada por preço unitário, o pagamento é feito:", o: ["Pelo valor global fixo", "Pela quantidade efetivamente medida × preço unitário", "Pelo custo real mais taxa", "Por estimativa de percentual"], c: 1, e: "Quantidade medida × preço unitário." },
    { q: "Qual a diferença entre reajuste e reequilíbrio?", o: ["São a mesma coisa", "Reajuste é correção periódica por índice; reequilíbrio restabelece a equação econômica diante de fatos específicos", "Reajuste exige processo judicial", "Reequilíbrio é só para contratos privados"], c: 1, e: "Reajuste é automático por índice; reequilíbrio depende de demonstração de fato e impacto." },
    { q: "Na Lei 14.133/2021, o limite geral para aditivos quantitativos é:", o: ["10%", "25%", "50% sempre", "Não há limite"], c: 1, e: "Art. 125: 25% (50% em reforma de edifício ou equipamento)." },
    { q: "Glosa é:", o: ["Bonificação ao contratado", "Dedução de valores apresentados em desconformidade ou sem comprovação", "Aumento do BDI", "Prorrogação de prazo"], c: 1, e: "É a não aceitação, total ou parcial, do valor apresentado." },
    { q: "A retenção previdenciária de 11% sobre NF, em cessão de mão de obra, decorre de:", o: ["Lei 8.212/91, art. 31", "Lei de Licitações, art. 1º", "NBR 12721", "NR-18"], c: 0, e: "A previsão está no art. 31 da Lei 8.212/91." },
    { q: "Uma medição bem definida deve ter:", o: ["Percentuais estimados informalmente", "Critérios objetivos, memória de cálculo e conferência em campo", "Apenas a assinatura do contratado", "Ausência de documentos"], c: 1, e: "Critério e evidência evitam conflitos e pagamentos indevidos." },
    { q: "No contrato por administração (custo + taxa), quem assume o risco de custo?", o: ["O contratado integralmente", "Principalmente o contratante, que exige transparência e auditoria", "Ninguém", "O fornecedor de cimento"], c: 1, e: "O contratante paga o custo comprovado; por isso exige open book." }
  ]
});
