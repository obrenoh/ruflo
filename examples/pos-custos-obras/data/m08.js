(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 8,
  titulo: "Administração da Obra, Fluxo de Caixa e Aspectos Tributários",
  horas: 20,
  ementa: ["Estrutura administrativa do canteiro", "Fluxo de caixa e exposição máxima", "Financiamento e capital de giro", "Tributos na construção", "Patrimônio de afetação e RET", "Documentação e diário de obra"],
  videos: [
    { t: "Fluxo de caixa de obra e exposição máxima", q: "fluxo de caixa de obra construção civil exposição máxima" },
    { t: "Tributação na construção civil", q: "tributação construção civil ISS INSS retenção" },
    { t: "Incorporação imobiliária: patrimônio de afetação e RET", q: "patrimônio de afetação RET incorporação imobiliária" },
    { t: "Diário de obra e gestão documental", q: "diário de obra importância pleito documentação" }
  ],
  texto: `
<h2>1. Lucro não é caixa</h2>
<p>Uma obra pode ter margem prevista positiva e, ainda assim, falir por falta de caixa: desembolsa-se antes de receber. Administrar obra é administrar o <b>fluxo de caixa</b> tanto quanto o orçamento.</p>
<h2>2. Fluxo de caixa da obra</h2>
<p>Entradas: medições, financiamento à produção, recebíveis de vendas. Saídas: folha, materiais, subempreiteiros, impostos, despesas indiretas. O <b>saldo acumulado</b> ao longo do tempo mostra a <b>exposição máxima de caixa</b> — o ponto mais negativo, que define o capital de giro necessário.</p>
<h2>3. Prazos médios</h2>
<p>Se o prazo médio de recebimento (PMR) supera o de pagamento (PMP), a obra consome capital. Ações: negociar adiantamento ou sinal, antecipar medições, alongar prazos de fornecedores sem aumentar o preço, desembolsar pelo cronograma (não antes).</p>
<h2>4. Estrutura administrativa do canteiro</h2>
<p>Engenharia, planejamento/custos, suprimentos, almoxarifado, segurança, qualidade, administrativo/RH. Dimensione pela complexidade e pelo prazo: a administração local é custo fixo mensal — cada mês de atraso a repete.</p>
<h2>5. Tributos (visão geral)</h2>
<ul>
<li><b>ISS</b>: municipal, sobre serviços; pode haver retenção na fonte e regras de local de incidência.</li>
<li><b>INSS</b>: retenção de 11% sobre a nota fiscal em cessão de mão de obra/empreitada (Lei 8.212/91, art. 31), compensável no recolhimento do prestador.</li>
<li><b>PIS/COFINS, IRPJ, CSLL</b>: conforme regime (lucro presumido, real). Há retenções de órgãos públicos.</li>
<li><b>CNO</b>: Cadastro Nacional de Obras (Receita Federal), que substituiu o CEI.</li>
</ul>
<p>A legislação tributária muda com frequência (inclusive com a reforma tributária em transição): confirme alíquotas e regras vigentes com contador ou tributarista antes de decidir.</p>
<h2>6. Incorporação imobiliária</h2>
<p>O <b>patrimônio de afetação</b> separa os bens da incorporação dos da incorporadora, protegendo adquirentes e obra. O <b>RET</b> (Lei 10.931/2004) é um regime especial opcional, ligado à afetação, com alíquota unificada reduzida sobre a receita. Avalie com análise tributária caso a caso.</p>
<h2>7. Documentação</h2>
<p>O <b>diário de obra</b> é registro cronológico de efetivo, clima, serviços, ocorrências e instruções. Em pleitos e disputas, é a prova mais usada. Documente o que atrasa e por quê, no dia.</p>`,
  pratica: "Monte o fluxo de caixa mensal de uma obra de 12 meses com receitas por medição (30 dias após a medição) e despesas distribuídas conforme a curva S. Identifique a exposição máxima e proponha duas ações que a reduzam em pelo menos 20%.",
  quiz: [
    { q: "A exposição máxima de caixa corresponde a:", o: ["Ao maior saldo positivo", "Ao ponto de maior saldo acumulado negativo do fluxo", "Ao valor total do contrato", "Ao lucro final"], c: 1, e: "Define o capital de giro necessário para sustentar a obra." },
    { q: "Se o prazo médio de recebimento supera o de pagamento:", o: ["A obra gera caixa automaticamente", "A obra consome capital de giro", "Não há efeito", "O BDI diminui"], c: 1, e: "Paga-se antes de receber, o que exige capital." },
    { q: "O CNO é:", o: ["Um imposto municipal", "O Cadastro Nacional de Obras, da Receita Federal", "Uma norma de segurança", "Um índice de custo"], c: 1, e: "O CNO substituiu o antigo CEI." },
    { q: "O patrimônio de afetação, na incorporação imobiliária:", o: ["Une todos os bens da incorporadora", "Separa o patrimônio da incorporação do patrimônio geral da incorporadora", "É um imposto", "Dispensa o contrato"], c: 1, e: "Protege adquirentes e a obra, segregando recursos." },
    { q: "Uma obra com margem prevista positiva pode quebrar por:", o: ["Excesso de BDI", "Falta de caixa, por pagar antes de receber", "Boa gestão de medições", "Baixo estoque"], c: 1, e: "Lucro contábil e disponibilidade de caixa são coisas distintas." },
    { q: "O diário de obra é importante em pleitos porque:", o: ["É opcional e sem valor", "Registra cronologicamente efetivo, clima e ocorrências, servindo de prova", "Substitui o contrato", "Calcula o BDI"], c: 1, e: "É a evidência contemporânea dos fatos da obra." },
    { q: "Qual ação reduz a exposição de caixa?", o: ["Antecipar pagamentos a fornecedores", "Negociar adiantamento/sinal e alongar prazos de pagamento", "Aumentar o estoque inicial", "Contratar tudo no início"], c: 1, e: "Entradas mais cedo e saídas mais tarde reduzem o pico negativo." },
    { q: "Por que a administração local é crítica em casos de atraso?", o: ["É custo variável que cai com o atraso", "É custo fixo mensal que se repete a cada mês adicional", "É paga pelo fornecedor", "Não tem relação com o prazo"], c: 1, e: "Cada mês extra repete a equipe, o canteiro e os custos fixos." }
  ]
});
