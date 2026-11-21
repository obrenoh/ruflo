(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 9,
  titulo: "Riscos, Qualidade, Segurança e Custos da Não Qualidade",
  horas: 20,
  ementa: ["Gestão de riscos e valor monetário esperado", "Reservas de contingência", "Custos da qualidade (CNQ)", "FVS, PBQP-H e NBR 15575", "NR-18, NR-35 e PGR", "Custo dos acidentes"],
  videos: [
    { t: "Como fazer matriz de análise de riscos", id: "hxPjCp_hBg0" },
    { t: "Conceitos Importantes - Quais são os custos de qualidade (aula completa)", id: "2S_KdTlIcpI" },
    { t: "NR-35 Trabalho em Altura - Treinamento Atualizado Completo 2026", id: "JE0pdE7iUNo" },
    { t: "Aprenda a fazer um Plano da Qualidade da Obra (PBQP-H SiAC)", id: "KLEId45XzcA" }
  ],
  texto: `
<h2>1. Risco é custo que ainda não aconteceu</h2>
<p>Todo orçamento tem incertezas. Gerir riscos é identificá-las, quantificá-las e decidir o que mitigar, transferir, aceitar ou evitar. Ignorar riscos não os elimina; apenas os transforma em estouro.</p>
<h2>2. Matriz e valor monetário esperado</h2>
<p>A matriz probabilidade × impacto prioriza. Para decisões financeiras, use o <b>VME = probabilidade × impacto (R$)</b>. Exemplo: 30% de chance de uma contenção adicional de R$ 200 mil → VME = R$ 60 mil. A soma dos VMEs dos riscos relevantes dimensiona a <b>reserva de contingência</b>.</p>
<h2>3. Reservas</h2>
<p><b>Contingência</b>: para riscos identificados (conhecidos desconhecidos). <b>Reserva gerencial</b>: para o que não foi previsto. Contingência deve ter dono, critérios de uso e transparência; reserva escondida em composições "engorda" o orçamento e perde credibilidade.</p>
<h2>4. Custos da qualidade (CNQ)</h2>
<ul>
<li><b>Prevenção</b>: treinamento, projeto compatibilizado, planejamento.</li>
<li><b>Avaliação</b>: inspeções, ensaios, FVS (Ficha de Verificação de Serviço).</li>
<li><b>Falhas internas</b>: retrabalho e perdas antes da entrega.</li>
<li><b>Falhas externas</b>: assistência técnica, reparos na garantia, danos à imagem após a entrega.</li>
</ul>
<p>Regra de bolso (a "regra 1-10-100"): corrigir é caro quanto mais tarde se descobre o problema; investir em prevenção reduz o custo total. A garantia legal de solidez e segurança é de 5 anos para o empreiteiro (Código Civil, art. 618), e a NBR 15575 define requisitos de desempenho e prazos de garantia das partes da edificação.</p>
<h2>5. Sistemas de qualidade</h2>
<p>O <b>PBQP-H/SiAC</b> estrutura a qualificação de construtoras com procedimentos de execução e controle. Resultados práticos: padronização, rastreabilidade de materiais e menos retrabalho.</p>
<h2>6. Segurança do trabalho</h2>
<p><b>NR-18</b>: condições e meio ambiente de trabalho na construção. <b>NR-35</b>: trabalho em altura (acima de 2,0 m do nível inferior com risco de queda). O programa de riscos é o <b>PGR</b> (NR-1), integrado à NR-18, que substituiu o antigo PCMAT. <b>NR-12</b>, <b>NR-10</b>, <b>NR-33</b> e outras aplicam-se conforme a atividade.</p>
<h2>7. O custo real do acidente</h2>
<p>Além dos custos diretos (afastamento, tratamento, multas), há os indiretos: parada de frente, investigação, substituição de pessoal, perda de produtividade, ações e imagem. Segurança é investimento com retorno mensurável, além de obrigação legal e ética.</p>`,
  pratica: "Liste 8 riscos de uma obra (geotecnia, chuvas, variação de aço, atraso de projeto etc.), atribua probabilidade e impacto em R$, calcule o VME de cada um e a contingência total. Em seguida, defina uma ação de mitigação para os 3 maiores.",
  quiz: [
    { q: "Probabilidade de 30% e impacto de R$ 200 mil. Qual o VME?", o: ["R$ 30 mil", "R$ 60 mil", "R$ 140 mil", "R$ 200 mil"], c: 1, e: "VME = 0,30 × 200.000 = R$ 60.000." },
    { q: "A reserva de contingência destina-se a:", o: ["Riscos identificados e quantificados", "Qualquer gasto sem critério", "Aumentar o lucro", "Pagar despesas administrativas fixas"], c: 0, e: "Cobre riscos conhecidos; imprevistos totais cabem à reserva gerencial." },
    { q: "Reparos em garantia após a entrega do edifício são custo de:", o: ["Prevenção", "Avaliação", "Falha interna", "Falha externa"], c: 3, e: "Falha externa: detectada pelo cliente depois da entrega." },
    { q: "A NR-35 trata de:", o: ["Máquinas e equipamentos", "Trabalho em altura", "Instalações elétricas", "Espaços confinados"], c: 1, e: "A NR-35 define requisitos de trabalho em altura (acima de 2,0 m)." },
    { q: "Pelo art. 618 do Código Civil, o prazo de garantia de solidez e segurança do empreiteiro é de:", o: ["1 ano", "2 anos", "5 anos", "20 anos"], c: 2, e: "Cinco anos, pela solidez e segurança da obra." },
    { q: "A FVS (Ficha de Verificação de Serviço) é um instrumento de:", o: ["Medição financeira", "Avaliação/inspeção da qualidade da execução", "Cálculo de BDI", "Contratação"], c: 1, e: "Inspeciona a conformidade do serviço executado." },
    { q: "Qual afirmação sobre custos da qualidade é verdadeira?", o: ["Investir em prevenção tende a reduzir falhas e custo total", "Falhas externas são sempre mais baratas", "Avaliação elimina a necessidade de prevenção", "Retrabalho é custo de prevenção"], c: 0, e: "Prevenir é mais barato do que corrigir tardiamente." },
    { q: "O PGR (NR-1) integrado à NR-18 substituiu o:", o: ["PCMAT", "PBQP-H", "CNO", "FVS"], c: 0, e: "O PGR passou a ser o programa de gerenciamento de riscos, no lugar do PCMAT." }
  ]
});
