(window.CURRICULUM = window.CURRICULUM || []).push({
  id: 2,
  titulo: "Orçamento de Obras: Quantitativos, Composições e BDI",
  horas: 20,
  ementa: ["Levantamento de quantitativos", "Composição unitária de custos", "SINAPI e TCPO", "Curva ABC", "BDI e formação de preço", "Encargos sociais"],
  videos: [
    { t: "Como Fazer Orçamento de Obras Passo a Passo", id: "q8VxmWs4Tl0" },
    { t: "Composição Unitária no SINAPI - Série Interpretando 04", id: "Fli3rwTp5dA" },
    { t: "BDI de Obras: Como Calcular Segundo o TCU (Passo a Passo)", id: "4KiXqW4KfhM" },
    { t: "Como Fazer uma Curva ABC na Prática [Orçamento de Obras]", id: "60VnEqcMrMI" }
  ],
  texto: `
<h2>1. Do projeto ao preço</h2>
<p>O orçamento analítico segue um fluxo: <b>levantamento de quantitativos → composições unitárias → custo direto → custos indiretos → BDI → preço</b>. A qualidade do resultado depende da qualidade do projeto: quantitativos de projeto básico geram orçamento com grande incerteza.</p>
<h2>2. Levantamento de quantitativos</h2>
<p>Deve seguir critérios de medição padronizados (ex.: alvenaria em m² descontando vãos acima de certo tamanho; formas em m² de contato). Documente os critérios: dois orçamentistas com critérios diferentes chegam a números diferentes para o mesmo projeto.</p>
<h2>3. Composição unitária</h2>
<p>A composição lista, para <b>1 unidade de serviço</b>, os insumos e seus <b>coeficientes de consumo</b>. Exemplo: 1 m² de alvenaria = X kg de argamassa + N blocos + Y h de pedreiro + Z h de servente. Custo unitário = Σ (coeficiente × preço do insumo). Bases: <b>SINAPI</b> (Caixa/IBGE, mensal por UF, com versões desonerada e não desonerada) e <b>TCPO</b> (Pini). Sempre confira mês-base, UF e regime de desoneração, e adapte coeficientes à sua realidade com dados próprios de obra.</p>
<h2>4. Curva ABC</h2>
<p>Pelo princípio de Pareto, poucos itens concentram a maior parte do valor. Classe <b>A</b>: poucos itens, grande valor — cotação criteriosa, controle rigoroso. Classe <b>C</b>: muitos itens, pouco valor — controle simplificado. A ABC de serviços e a de insumos dão focos diferentes.</p>
<h2>5. Encargos sociais</h2>
<p>O salário horista recebe acréscimos (FGTS, previdência quando aplicável, férias, 13º, descansos remunerados, afastamentos, indenizações). Em obras o total costuma superar 100% sobre o salário-base horista, variando por UF e regime tributário. Um erro de encargos contamina toda a mão de obra do orçamento.</p>
<h2>6. BDI</h2>
<p><b>BDI</b> (Benefícios e Despesas Indiretas) é o percentual aplicado sobre o custo direto: <i>Preço = CD × (1 + BDI)</i>. A fórmula usada como referência em obras públicas (Acórdão TCU 2622/2013):</p>
<p style="text-align:center"><b>BDI = [ (1 + AC + S + R + G) × (1 + DF) × (1 + L) / (1 − I) ] − 1</b></p>
<p>AC = administração central; S = seguro; R = riscos; G = garantias; DF = despesas financeiras; L = lucro; I = tributos sobre o preço (ISS, PIS, COFINS, etc.). Confira os parâmetros vigentes na fonte oficial: o acórdão traz faixas referenciais por tipo de obra, e a legislação tributária muda.</p>
<h2>7. Armadilha clássica: BDI × margem</h2>
<p>BDI incide sobre o <b>custo</b>; margem incide sobre o <b>preço</b>. Um BDI de 25% significa que o BDI representa 25/125 = <b>20% do preço</b>, e não 25%.</p>`,
  pratica: "Monte a composição unitária de 1 m² de alvenaria de vedação (blocos cerâmicos) com ao menos 4 insumos. Calcule o custo unitário com preços de uma cotação real e compare com a composição SINAPI do seu estado. Explique as diferenças.",
  quiz: [
    { q: "Uma composição unitária de custo lista:", o: ["Apenas o preço final do serviço", "Os insumos e seus coeficientes de consumo para uma unidade de serviço", "O cronograma do serviço", "Os impostos incidentes"], c: 1, e: "Composição = insumos × coeficientes por unidade de serviço." },
    { q: "Custo direto de R$ 1.000.000 e BDI de 25%. Qual o preço de venda?", o: ["R$ 1.025.000", "R$ 1.250.000", "R$ 1.333.333", "R$ 1.500.000"], c: 1, e: "Preço = CD × (1 + BDI) = 1.000.000 × 1,25 = 1.250.000." },
    { q: "Qual item NÃO integra a fórmula de BDI do Acórdão TCU 2622/2013?", o: ["Administração central", "Lucro", "Custo da mão de obra direta do serviço", "Despesas financeiras"], c: 2, e: "A mão de obra direta já está no custo direto, base de incidência do BDI." },
    { q: "Na curva ABC de insumos, os itens da classe A são:", o: ["Muitos itens de baixo valor", "Poucos itens que concentram a maior parte do valor", "Itens sem impacto no custo", "Apenas mão de obra"], c: 1, e: "Classe A = poucos itens, grande peso financeiro: priorize cotação e controle." },
    { q: "O SINAPI é mantido por:", o: ["CREA e CAU", "Caixa Econômica Federal e IBGE", "FGV e Sinduscon", "Receita Federal"], c: 1, e: "SINAPI: Caixa e IBGE, com referência mensal por UF." },
    { q: "Com BDI de 25% sobre o custo direto, o BDI representa que fração do preço final?", o: ["25%", "20%", "30%", "15%"], c: 1, e: "25/125 = 20%. BDI incide sobre custo; margem sobre preço." },
    { q: "Qual a diferença entre orçamento analítico e sintético?", o: ["O analítico detalha as composições; o sintético resume por serviço", "O sintético detalha insumos; o analítico só totais", "Não há diferença", "O analítico exclui BDI"], c: 0, e: "Analítico abre as composições; sintético apresenta serviço, quantidade e valor." },
    { q: "Ao usar o SINAPI, o que é essencial verificar?", o: ["Somente o nome da obra", "Mês-base, UF e se a referência é desonerada ou não", "Apenas o BDI", "O número de pavimentos"], c: 1, e: "Mês-base, UF e regime de desoneração mudam os preços de forma relevante." }
  ]
});
