(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 3,
  titulo: "Planejamento de Obras e Cronograma Físico-Financeiro",
  horas: 20,
  ementa: ["Dimensionamento de durações", "Método do Caminho Crítico (CPM)", "Linha de balanço", "Curva S físico-financeira", "Histograma e nivelamento de recursos", "Last Planner e PPC"],
  videos: [
    { t: "Método do caminho crítico (CPM) na prática", q: "método do caminho crítico CPM exemplo prático" },
    { t: "Linha de balanço para obras repetitivas", q: "linha de balanço planejamento obras edifícios" },
    { t: "Cronograma físico-financeiro e curva S", q: "cronograma físico financeiro curva S obra" },
    { t: "Last Planner System e PPC", q: "last planner system PPC lean construction" }
  ],
  texto: `
<h2>1. Planejar é conectar escopo, tempo e custo</h2>
<p>O cronograma transforma a EAP em atividades com duração, precedência e recursos. Sem ele, o orçamento não tem curva de desembolso e o controle de custos fica sem referência de prazo.</p>
<h2>2. Duração das atividades</h2>
<p><b>Duração = Quantidade ÷ (Produtividade da equipe × Nº de equipes)</b>. Exemplo: 600 m² de alvenaria, equipe de 15 m²/dia, 2 equipes: 600 ÷ (15 × 2) = <b>20 dias</b>. A produtividade deve vir do histórico da empresa, não só de tabelas.</p>
<h2>3. Caminho crítico (CPM)</h2>
<p>Com as atividades e precedências, calcula-se a <b>passagem para frente</b> (início e término mais cedo: ES, EF) e a <b>passagem para trás</b> (início e término mais tarde: LS, LF). <b>Folga total = LS − ES</b>. O <b>caminho crítico</b> é a sequência de maior duração, onde a folga total é zero: qualquer atraso nela atrasa a obra.</p>
<p>Exemplo: A (5d) → B (3d) e A → C (4d); B e C → D (2d). Caminhos: A-B-D = 10; A-C-D = 11. Crítico: A-C-D, duração 11 dias; B tem 1 dia de folga.</p>
<h2>4. Linha de balanço</h2>
<p>Ideal para serviços repetitivos (torres com pavimentos-tipo). Mostra o ritmo de cada equipe pelos pavimentos, evita interferência entre equipes e garante fluxo contínuo de mão de obra.</p>
<h2>5. Curva S físico-financeira</h2>
<p>Acumulando o avanço previsto (físico e financeiro) por período, forma-se a <b>curva S</b>: ritmo lento no início (mobilização), acelerado no meio, lento no fim (acabamentos e entregas). Ela é a base do PV no controle por valor agregado e do fluxo de caixa.</p>
<h2>6. Recursos: histograma e nivelamento</h2>
<p>O histograma mostra a demanda de mão de obra ou equipamento por período. <b>Nivelamento</b> usa as folgas para reduzir picos e vales, evitando contratar e demitir em ciclos curtos.</p>
<h2>7. Planejamento de curto prazo (Last Planner)</h2>
<p>Plano mestre → médio prazo (look-ahead com remoção de restrições) → semanal. O indicador-chave é o <b>PPC</b> = atividades concluídas ÷ atividades planejadas na semana × 100. PPC baixo mostra promessas irreais ou restrições não removidas; os motivos de não cumprimento viram plano de ação.</p>`,
  pratica: "Monte uma rede com 8 atividades e precedências, calcule ES, EF, LS, LF e folgas, identifique o caminho crítico e desenhe a curva S com os custos que você atribuir. Depois simule 2 dias de atraso numa atividade com folga e outra crítica e compare o efeito.",
  quiz: [
    { q: "O caminho crítico é:", o: ["O caminho de menor duração", "A sequência de maior duração, com folga total zero", "O caminho de maior custo", "O que usa mais recursos"], c: 1, e: "Atrasos no caminho crítico atrasam o término da obra." },
    { q: "A folga total de uma atividade é calculada por:", o: ["LS − ES", "EF − ES", "ES + duração", "LF + LS"], c: 0, e: "Folga total = início mais tarde − início mais cedo (ou LF − EF)." },
    { q: "A (5d) precede B (3d) e C (4d); B e C precedem D (2d). Qual a duração do projeto?", o: ["10 dias", "11 dias", "12 dias", "14 dias"], c: 1, e: "Caminho A-C-D = 5 + 4 + 2 = 11 dias." },
    { q: "A linha de balanço é mais indicada para:", o: ["Obras com atividades únicas e não repetitivas", "Serviços repetitivos em vários pavimentos", "Obras sem cronograma", "Orçamentos paramétricos"], c: 1, e: "Foi concebida para ritmo contínuo de equipes em unidades repetitivas." },
    { q: "Por que a curva S tem formato de S?", o: ["Por erro de medição", "Ritmo lento no início e no fim e acelerado no meio da obra", "Porque o custo cai ao final", "Porque os preços variam"], c: 1, e: "Mobilização e acabamentos têm ritmo menor que a fase de pico." },
    { q: "Como se calcula o PPC?", o: ["Atividades concluídas ÷ atividades planejadas na semana × 100", "Custo real ÷ custo orçado", "Horas trabalhadas ÷ horas pagas", "Atividades iniciadas ÷ atividades totais"], c: 0, e: "PPC mede a confiabilidade do planejamento semanal." },
    { q: "600 m² de alvenaria, produtividade de 15 m²/dia por equipe, 2 equipes. Qual a duração?", o: ["10 dias", "20 dias", "30 dias", "40 dias"], c: 1, e: "600 ÷ (15 × 2) = 20 dias." },
    { q: "O nivelamento de recursos consiste em:", o: ["Reduzir o escopo", "Deslocar atividades dentro das folgas para suavizar picos de demanda", "Aumentar o BDI", "Eliminar o caminho crítico"], c: 1, e: "Usa folgas para evitar picos e vales de mão de obra ou equipamentos." }
  ]
});
