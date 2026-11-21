(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 4,
  titulo: "Controle de Custos e Análise de Valor Agregado (EVM)",
  horas: 20,
  ementa: ["PV, EV, AC e BAC", "Índices CPI e SPI", "Previsões: EAC, ETC, VAC, TCPI", "Critérios de medição do EV", "Limitações do EVM e Earned Schedule", "Painel de controle gerencial"],
  videos: [
    { t: "Módulo 02 Aula 13 - Análise do Valor Agregado: Indicadores", id: "9QqLdAZ4tYw" },
    { t: "Análise do Valor Agregado em Projetos - Gerenciamento de Custos", id: "RHCLt2xThA0" },
    { t: "PMP Exam Prep - Earned Value - EAC, ETC and VAC (em inglês)", id: "--bBlf6Kn1c" },
    { t: "What is the Earned Schedule? (em inglês)", id: "s-3fHiZwY1Q" }
  ],
  texto: `
<h2>1. Por que comparar apenas "gasto × orçado" engana</h2>
<p>Se você gastou 40% do orçamento e está no mês 5 de 10, está bem? Depende de quanto <i>foi entregue</i>. O gasto isolado não diz nada sobre desempenho. O <b>EVM</b> integra escopo, prazo e custo.</p>
<h2>2. As três medidas</h2>
<ul>
<li><b>PV</b> (Valor Planejado): custo orçado do trabalho <i>programado</i> até a data.</li>
<li><b>EV</b> (Valor Agregado): custo orçado do trabalho <i>realmente executado</i> = % físico real × orçamento.</li>
<li><b>AC</b> (Custo Real): quanto foi efetivamente gasto para executar esse trabalho.</li>
<li><b>BAC</b>: orçamento total no término.</li>
</ul>
<h2>3. Variações e índices</h2>
<table><tr><th>Medida</th><th>Fórmula</th><th>Leitura</th></tr>
<tr><td>CV (variação de custo)</td><td>EV − AC</td><td>Negativo = acima do custo</td></tr>
<tr><td>SV (variação de prazo)</td><td>EV − PV</td><td>Negativo = atrasado</td></tr>
<tr><td>CPI</td><td>EV ÷ AC</td><td>&lt; 1 = ineficiência de custo</td></tr>
<tr><td>SPI</td><td>EV ÷ PV</td><td>&lt; 1 = ritmo abaixo do plano</td></tr></table>
<h2>4. Previsões</h2>
<ul>
<li><b>EAC</b> (estimativa no término): se o desvio for típico e persistir, <b>EAC = BAC ÷ CPI</b>. Se for pontual: EAC = AC + (BAC − EV).</li>
<li><b>ETC</b> = EAC − AC (quanto falta gastar). <b>VAC</b> = BAC − EAC.</li>
<li><b>TCPI</b> = (BAC − EV) ÷ (BAC − AC): eficiência necessária no restante da obra para cumprir o BAC. Muito acima de 1 indica meta irrealista.</li>
</ul>
<p>Exemplo: BAC = R$ 10 mi; PV = 4,0; EV = 3,5; AC = 4,2. CPI = 0,83; SPI = 0,875; EAC = 10 ÷ 0,83 = <b>R$ 12 mi</b>. Estouro previsto de R$ 2 mi.</p>
<h2>5. Como medir o EV</h2>
<p>Escolha critérios antes da obra: <b>0/100</b> (só vale após concluir), <b>50/50</b>, <b>% físico medido</b> (por quantitativo) ou <b>marcos ponderados</b>. Medir EV por "gasto/orçado" invalida a análise (EV = AC e CPI sempre 1).</p>
<h2>6. Limitações</h2>
<p>O SPI converge a 1,0 ao fim da obra mesmo que esta tenha atrasado, e não distingue atividade crítica de não crítica. Complemente com análise do caminho crítico e com <b>Earned Schedule</b>, que mede o atraso em unidade de tempo.</p>`,
  pratica: "Com os dados de uma obra (real ou fictícia) de 12 meses, calcule PV, EV, AC, CPI, SPI, EAC, ETC e TCPI nos meses 3, 6 e 9. Monte um gráfico de PV, EV e AC e escreva um parecer de 10 linhas para a diretoria.",
  quiz: [
    { q: "O valor agregado (EV) é calculado como:", o: ["Custo real acumulado", "% físico realmente executado × orçamento (BAC)", "Valor planejado até a data", "Gasto acumulado ÷ prazo decorrido"], c: 1, e: "EV = trabalho realmente executado, valorizado ao custo orçado." },
    { q: "Um CPI de 0,85 indica:", o: ["Obra abaixo do custo", "Obra acima do custo (ineficiência de custo)", "Obra adiantada", "Obra exatamente no custo"], c: 1, e: "CPI < 1 significa que se gasta mais do que o valor entregue." },
    { q: "O SPI é calculado por:", o: ["EV ÷ AC", "EV ÷ PV", "PV ÷ EV", "AC ÷ PV"], c: 1, e: "SPI = EV ÷ PV." },
    { q: "Dados PV = 500, EV = 450 e AC = 480, qual a variação de prazo (SV)?", o: ["−30", "−50", "+50", "+30"], c: 1, e: "SV = EV − PV = 450 − 500 = −50: obra atrasada em valor." },
    { q: "BAC = 1.000 e CPI = 0,8 com desvio considerado típico. Qual o EAC?", o: ["800", "1.000", "1.250", "1.800"], c: 2, e: "EAC = BAC ÷ CPI = 1.000 ÷ 0,8 = 1.250." },
    { q: "Um TCPI muito acima de 1,0 sugere:", o: ["Folga de orçamento", "A meta de cumprir o BAC é irrealista sem mudança drástica", "Obra adiantada", "Erro de unidade"], c: 1, e: "Exige eficiência no restante muito superior à já alcançada." },
    { q: "Qual limitação importante do SPI?", o: ["Não pode ser calculado", "Tende a 1,0 no fim da obra mesmo havendo atraso, e não separa atividades críticas", "Só vale para obras públicas", "Depende do BDI"], c: 1, e: "Por isso se complementa com CPM e Earned Schedule." },
    { q: "Medir o EV como 'gasto ÷ orçado' é um erro porque:", o: ["É mais trabalhoso", "Faz EV = AC, e o CPI fica sempre 1, ocultando o desvio", "Viola a NBR", "Aumenta o BDI"], c: 1, e: "EV precisa refletir o avanço físico, independentemente do gasto." }
  ]
});
