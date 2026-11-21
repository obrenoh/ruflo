(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 10,
  titulo: "Reorçamento, Pleitos, BIM 5D e Encerramento da Obra",
  horas: 20,
  ementa: ["Reorçamento periódico", "Análise de pleitos (claims) e atrasos", "Custos de aceleração e prolongamento", "BIM 5D", "Encerramento, as-built e recebimento", "Lições aprendidas e indicadores"],
  videos: [
    { t: "O que é BIM 5D? O BIM no Orçamento de Obras!", id: "nUGQ8TrSOKs" },
    { t: "How to Analyze Construction Delays for EOT Claims (em inglês)", id: "XS-Admp26JQ" },
    { t: "Atraso na empreitada: como construtores podem melhorar seus contratos", id: "sLucikKUa58" },
    { t: "Passo a passo do projeto de As-Built: como fazer na prática", id: "m81-XnVz9k0" }
  ],
  texto: `
<h2>1. Reorçamento: atualizar a previsão, não só registrar o passado</h2>
<p>O reorçamento revisa periodicamente (ex.: trimestralmente ou a cada marco) a previsão de custo no término: <b>custo incorrido + custo a completar atualizado</b>. Use quantitativos revisados, preços contratados, produtividades reais e riscos remanescentes. Ele alimenta o EAC do EVM com informação de campo, em vez de extrapolar apenas índices.</p>
<h2>2. Pleitos (claims)</h2>
<p>Um pleito é um pedido formal de ajuste de prazo e/ou preço por evento que não é de responsabilidade de quem pleiteia. Para ser aceito, precisa de: <b>(1) causa e responsabilidade</b> (cláusula contratual, evento), <b>(2) nexo</b> entre evento e efeito, <b>(3) evidências contemporâneas</b> (diário de obra, atas, e-mails, fotos), <b>(4) quantificação</b> auditável.</p>
<p>Na análise de atrasos, compare o cronograma planejado com o realizado por janelas de tempo, isolando atrasos concorrentes. Atrasos no caminho crítico geram direito a prazo; o custo depende da responsabilidade.</p>
<h2>3. Custos de prolongamento e aceleração</h2>
<p><b>Administração local prolongada</b> = custo mensal fixo × meses de atraso (canteiro, equipe, equipamentos, vigilância). <b>Aceleração</b> (turnos extras, mais equipes) reduz prazo ao preço de menor produtividade e custo adicional: avalie contra o custo do atraso (multas, administração, receita postergada).</p>
<h2>4. BIM 5D</h2>
<p>No BIM 5D, os elementos do modelo carregam quantitativos extraídos automaticamente e vinculados a composições de custo. Vantagens: cenários rápidos de custo, atualização a cada revisão de projeto, rastreabilidade. Limites: depende de modelagem consistente e de critérios de quantificação definidos; modelo ruim gera orçamento ruim, só que mais rápido.</p>
<h2>5. Encerramento</h2>
<p>Desmobilização, <b>as-built</b> (projeto "como construído"), manuais, comissionamento, <b>recebimento provisório e definitivo</b> (na Lei 14.133/2021, art. 140), baixa de estoques e contratos, quitação de subempreiteiros, encerramento fiscal (CNO, certidões). Pendências nessa fase prendem equipe e caixa.</p>
<h2>6. Lições aprendidas e indicadores finais</h2>
<p>Indicadores: <b>desvio orçamentário final (%) = (custo real − orçado) ÷ orçado</b>; margem final; CPI final; atraso em dias; custo de retrabalho; RUP por serviço. Devolva os dados ao banco de composições e índices: é aqui que a organização aprende e o próximo orçamento fica melhor.</p>`,
  pratica: "Com os dados da prática do módulo 4, faça um reorçamento no mês 9: custo incorrido, custo a completar por serviço e previsão final. Depois, redija um pleito de prorrogação de prazo por atraso na entrega de projeto pelo cliente, com os 4 elementos exigidos.",
  quiz: [
    { q: "A previsão de custo no término obtida em um reorçamento é composta por:", o: ["Apenas o custo orçado inicial", "Custo incorrido + custo a completar atualizado", "Apenas o saldo de contrato", "O BDI"], c: 1, e: "Real até a data + estimativa atualizada do que falta." },
    { q: "Qual NÃO é um elemento essencial de um pleito consistente?", o: ["Nexo causal", "Evidências contemporâneas", "Quantificação auditável", "Desejo de compensar prejuízos"], c: 3, e: "O pleito exige causa, nexo, evidência e quantificação; a vontade de compensar não é fundamento." },
    { q: "Custo de administração local prolongada por atraso é calculado como:", o: ["Percentual do BDI", "Custo mensal fixo da administração local × meses de prorrogação", "Valor total do contrato ÷ prazo", "Metade da multa contratual"], c: 1, e: "Cada mês extra repete a estrutura fixa da obra." },
    { q: "No BIM 5D, a quinta dimensão é:", o: ["O tempo", "O custo", "A sustentabilidade", "A segurança"], c: 1, e: "Modelo 3D + tempo (4D) + custo (5D)." },
    { q: "Na Lei 14.133/2021, o recebimento do objeto de obras ocorre:", o: ["Apenas de modo verbal", "Em recebimento provisório e depois definitivo", "Somente após o prazo de garantia", "Não há previsão"], c: 1, e: "Art. 140: recebimento provisório e definitivo, nos termos do contrato." },
    { q: "O as-built é:", o: ["A proposta comercial", "O projeto 'como construído', registrando o que foi executado", "A planilha de medição", "O cronograma original"], c: 1, e: "Documenta o executado, essencial para manutenção e uso." },
    { q: "Obra orçada em R$ 10 mi e custo real final de R$ 10,8 mi. Qual o desvio orçamentário?", o: ["−8%", "+8%", "+10,8%", "+0,8%"], c: 1, e: "(10,8 − 10) ÷ 10 = +8%." },
    { q: "Por que alimentar o banco de composições com os dados da obra concluída?", o: ["Para cumprir burocracia", "Para tornar mais precisos os orçamentos futuros", "Para aumentar o BDI", "Para dispensar o planejamento"], c: 1, e: "Aprendizado organizacional: dados reais melhoram a próxima estimativa." }
  ]
});
