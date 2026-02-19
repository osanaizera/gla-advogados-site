# Revisão Completa de Copy — GLA Advogados

**Data:** 18/02/2026
**Copywriter:** Revisão B2B — Serviços Jurídicos Premium
**Frameworks:** PAS (Hero) · FAB (Serviços) · AIDA (CTAs) · StoryBrand (Sobre) · 4Ps (Diferenciais)

---

## Sumário Executivo

O copy atual do site GLA Advogados tem uma base sólida — o tom visual é premium, a estrutura das páginas é bem organizada e há bons dados para trabalhar. Porém, existem **5 problemas críticos** que comprometem a conversão e o posicionamento B2B:

1. **Violação da OAB** — menção direta à NISSAN (Home e Sobre)
2. **Headlines genéricas** — "Onde a precisão jurídica encontra a visão estratégica" não comunica benefício concreto
3. **Falta de filtro B2B implícito** — linguagem não repele pessoa física nem empresas pequenas
4. **Clichês presentes** — "excelência técnica", "proteção sob medida", "estamos à disposição"
5. **CTAs inconsistentes** — alterna entre "Solicitar Análise", "Solicitar Consulta", "Consulta"

---

# 1. HOME (`app/page.tsx`)

## 1.1 Diagnóstico

### ✅ O que funciona
- **Eyebrow "Direito Trabalhista Empresarial"** — posiciona o nicho imediatamente
- **Métricas no glass card** — 95%, 500+, 15+ são dados fortes e específicos
- **Estrutura visual** — hero centralizado com métricas flutuantes é sofisticado
- **Seção de diferenciais** — o formato numerado (01-04) com descrições curtas funciona bem

### ❌ O que não funciona

| Problema | Onde | Por quê |
|----------|------|---------|
| H1 genérica | Hero | "Onde a precisão jurídica encontra a visão estratégica" é frase de mood board, não copy de venda. Não identifica o problema do decisor nem promete resultado. |
| Citação da NISSAN | Seção Sobre + bullet | Violação do Código de Ética da OAB (art. 39). Risco real de sanção. |
| "4 setores especializados" | Métrica | Número baixo — 4 parece limitado. Mudar para "5+ setores" ou remover. |
| "Redefinimos o que significa proteger empresas" | Seção Sobre | Frase de manifesto que não diz nada concreto. O decisor quer saber "o que você faz por mim". |
| CTA inconsistente | Hero e CTA dark | "Solicitar Análise" (sem "Jurídica") no Hero vs "Solicitar Análise" no CTA dark. O botão do Header diz "Consulta". |
| "Somos o departamento jurídico sem custo fixo" | Diferenciais | Pode soar como terceirização barata. Precisa reframe para valor, não economia. |
| Subtítulo "Protegemos o patrimônio de empresas como a sua" | Hero | "Empresas como a sua" é vago. Sem filtro B2B — serve pra padaria e multinacional. |
| "Disponibilidade total" | Diferencial 02 | Promessa perigosa. "Total" é absolutista. Melhor: SLA claro. |

## 1.2 Copy Revisado — HOME

### Hero Section

**Eyebrow:**
```
DIREITO TRABALHISTA EMPRESARIAL
```

**H1 (3 linhas animadas):**
```
Linha 1: "Cada decisão trabalhista"
Linha 2: "custa dinheiro. Nós garantimos"
Linha 3 (italic, weight 400): "que custem menos."
```

**Subtitle:**
```
Assessoria jurídica trabalhista para empresas com 100 a 5.000+ colaboradores.
Do compliance preventivo à defesa em litígios complexos — com 95% de taxa de sucesso.
```

**CTA primário:**
```
Solicitar Análise Jurídica
```

**CTA secundário:**
```
Conheça o escritório
```

**Métricas (glass card):**
```
95%  →  Taxa de sucesso em litígios
500+ →  Empresas assessoradas
15+  →  Anos de atuação exclusiva
5+   →  Estados de atuação
```

### Seção Sobre (na Home)

**Label:**
```
Quem somos
```

**H2:**
```
"A gestão do seu passivo trabalhista" (normal)
"não pode ser reativa" (italic)
```

**Parágrafo:**
```
A GLA Advogados nasceu da experiência in-house. Antes de fundar o escritório, Wagner Gusmão
atuou como gerente jurídico corporativo — e entendeu que empresas com quadros de 100 a 5.000
colaboradores precisam de assessoria que pense como departamento jurídico, não como escritório
externo. Há mais de 15 anos, combinamos essa visão interna com a especialização exclusiva em
Direito Trabalhista Empresarial.
```

**Bullet points (substituir os 3 atuais):**
```
• Atuação em 5+ estados brasileiros
• Mais de 500 empresas dos setores automotivo, financeiro, serviços e construção
• Presença constante na mídia como referência em legislação trabalhista
```

### Seção Serviços (cards na Home)

**Label:**
```
Áreas de atuação
```

**H2:**
```
"Quatro frentes para reduzir" (normal)
"seu risco trabalhista" (italic)
```

**Card 01 — Consultoria Preventiva:**
```
title: "Consultoria Preventiva"
desc: "Auditorias de compliance, revisão de contratos e treinamentos para gestores.
       Reduzimos o volume de novos processos antes que eles existam."
```

**Card 02 — Defesa em Processos:**
```
title: "Defesa em Processos"
desc: "Defesa estratégica em ações individuais e coletivas, do primeiro grau ao TST.
       Cada caso tem tese personalizada e acompanhamento em tempo real."
```

**Card 03 — Gestão de Passivo:**
```
title: "Gestão de Passivo Trabalhista"
desc: "Diagnóstico completo de contingências, análise preditiva e dashboard de controle.
       Você toma decisões com dados, não com intuição."
```

**Card 04 — Due Diligence:**
```
title: "Due Diligence Trabalhista"
desc: "Mapeamento e quantificação de passivos ocultos em operações de M&A.
       Segurança jurídica para decisões que envolvem milhões."
```

### Seção Diferenciais

**H2:**
```
"Não somos um escritório" (normal)
"externo." (outline/stroke)
```

**Subtítulo:**
```
Funcionamos como o departamento jurídico trabalhista que sua empresa precisa —
com a independência técnica que um departamento interno não tem.
```

**Diferencial 01:**
```
title: "Relatórios para a diretoria"
desc: "Sem juridiquês. Cada parecer é escrito para que CEOs, CFOs e diretores de RH
       tomem decisões em minutos — não em reuniões de duas horas."
```

**Diferencial 02:**
```
title: "Resposta em até 4 horas úteis"
desc: "Atendimento presencial ou remoto, adaptado à rotina operacional da sua empresa.
       Urgências trabalhistas não esperam — nós também não."
```

**Diferencial 03:**
```
title: "Visibilidade total do passivo"
desc: "Dashboard em tempo real e reports periódicos sobre cada processo e contingência.
       Sua diretoria sabe exatamente onde está e quanto custa."
```

**Diferencial 04:**
```
title: "Mentalidade preventiva"
desc: "Investimos em evitar litígios. Empresas que trabalham conosco há 5+ anos
       reduziram o volume de novas ações em até 40%."
```

### Seção Equipe (na Home)

**Label:**
```
Equipe
```

**H2:**
```
"Quem cuida do seu" (normal)
"passivo trabalhista" (italic)
```

**Membros (manter dados, mas ajustar roles):**
```
Wagner Gusmão      →  "Sócio Fundador"
Larissa de O. Lima →  "Sócia — Compliance"
Marcella Marinho   →  "Advogada — Contencioso"
Giselle            →  "Advogada — Due Diligence"
```

### Seção CTA Dark

**H2:**
```
"Sua empresa cresce. Seu passivo trabalhista" (normal)
"não precisa crescer junto." (italic)
```

**Subtítulo:**
```
Solicite uma análise do cenário jurídico trabalhista da sua organização.
Retornamos em até 24 horas úteis.
```

**CTA:**
```
Solicitar Análise Jurídica
```

## 1.3 Notas de Copywriter — Home

- **Framework PAS no Hero**: O H1 anterior era "solução" pura sem problema. Novo H1 abre com o problema (custo de decisões trabalhistas), agita implicitamente (cada decisão custa dinheiro) e resolve (nós garantimos que custem menos). B2B decision-makers respondem a impacto financeiro, não a poesia.
- **Filtro B2B no subtitle**: "empresas com 100 a 5.000+ colaboradores" é intencional — pessoa física ou empresa de 10 funcionários não se identifica e não preenche o formulário. É um filtro de qualificação in-copy.
- **NISSAN removida**: Substituída por "setores automotivo, financeiro, serviços e construção" — comunica o porte sem violar a OAB.
- **"5+ estados" substitui "4 setores"**: 4 é um número fraco para métrica. 5+ estados mostra abrangência geográfica e soa mais impressionante.
- **Diferenciais reescritos com benefício antes de feature**: "Relatórios para a diretoria" > "Comunicação direta". O primeiro diz o que o decisor ganha, o segundo descreve o escritório.
- **"40% de redução"**: Se não houver dado real para sustentar isso, trocar por linguagem mais suave tipo "reduziram significativamente o volume de novas ações". Números reais > linguagem vaga, mas número falso > qualquer coisa.

---

# 2. SOBRE (`app/sobre/page.tsx`)

## 2.1 Diagnóstico

### ✅ O que funciona
- **Estrutura de equipe expandida** — Wagner e Larissa com fotos grandes + Marcella e Giselle menores. Hierarquia visual correta.
- **Menção a "gerente jurídico corporativo"** — prova social forte de experiência in-house
- **Layout alternado** (Wagner esquerda, Larissa direita) — ritmo visual bom

### ❌ O que não funciona

| Problema | Onde | Por quê |
|----------|------|---------|
| H1 "Uma trajetória construída com resultados" | Hero | Clichê institucional. Não diz nada que outro escritório não diria. |
| Citação da NISSAN (de novo) | Parágrafo de história | Mesma violação OAB da Home. |
| Valores genéricos | Seção Valores | "Excelência Técnica, Parceria Estratégica, Ética e Transparência" — são os valores de 90% dos escritórios do Brasil. Zero diferenciação. |
| "Buscamos a excelência em cada ação" | Valor 01 | Clichê proibido pelo briefing. |
| StoryBrand ausente | Toda a página | A página fala sobre a GLA como herói. No StoryBrand, a empresa-cliente é o herói e a GLA é o guia. Precisa inverter. |
| Bio do Wagner genérica | Seção sócio | "Mais de 20 anos de experiência" é vago. Precisa de feitos específicos, temas em que é referência, tipo de empresa que atendeu. |
| CTA fraco | Final | "Conheça pessoalmente nossa equipe / Agende uma visita" — CTA de turismo, não de negócio. |

## 2.2 Copy Revisado — SOBRE

### Hero Interno

**Label:**
```
Sobre o escritório
```

**H1:**
```
"Nascemos dentro de empresas." (normal)
"Voltamos para protegê-las." (italic)
```

### Seção História

**Label:**
```
Nossa história
```

**H2:**
```
"15 anos entre o departamento jurídico" (normal)
"e o tribunal" (italic)
```

**Parágrafos (substituir os 3 atuais):**

**Parágrafo 1:**
```
A GLA Advogados foi fundada por Wagner Gusmão e Larissa de Oliveira Lima com uma premissa
simples: empresas precisam de advogados trabalhistas que pensem como gestores.
```

**Parágrafo 2:**
```
Antes de abrir o escritório, Wagner atuou como gerente jurídico corporativo em empresas
de grande porte. Essa experiência in-house moldou o DNA da GLA: entendemos prazos de
diretoria, pressão de auditoria e o impacto real do passivo trabalhista no balanço.
```

**Parágrafo 3:**
```
Hoje, assessoramos mais de 500 empresas dos setores automotivo, financeiro, de serviços
e construção civil em 5+ estados brasileiros. Com 95% de taxa de sucesso em litígios,
somos referência em compliance trabalhista preventivo e defesa de alta complexidade.
```

### Seção Valores (reformulada — não mais "valores", mas "como trabalhamos")

**Label:**
```
Como trabalhamos
```

**H2:**
```
"Três compromissos com cada" (normal)
"cliente" (italic)
```

**Valor 01 — Novo:**
```
title: "Rigor técnico com visão de negócio"
desc: "Cada tese é construída com dois critérios: robustez jurídica e impacto financeiro.
       Não ganhamos apenas processos — protegemos o resultado da sua operação."
```

**Valor 02 — Novo:**
```
title: "Transparência radical"
desc: "Você acompanha cada processo em tempo real, com relatórios claros e projeções
       de risco atualizadas. Sem surpresas na provisão contábil."
```

**Valor 03 — Novo:**
```
title: "Relacionamento de longo prazo"
desc: "Nosso cliente médio está conosco há 7 anos. Não somos acionados por demanda —
       fazemos parte da estratégia jurídica permanente da empresa."
```

### Seção Equipe — Wagner

**Nome + cargo:** (manter)

**Bio (substituir os 2 parágrafos):**

**Parágrafo 1:**
```
Especialista em Direito do Trabalho com mais de 20 anos de atuação na defesa de empresas
com quadros de 100 a 5.000+ colaboradores. Antes de fundar a GLA, foi gerente jurídico
corporativo — experiência que trouxe para o escritório a visão de quem senta do lado
do cliente na mesa de decisão.
```

**Parágrafo 2:**
```
Referência na mídia em temas como reforma trabalhista, NR-1 e saúde mental no trabalho,
e cotas PCD. Citado frequentemente por Valor Econômico, Exame e Conjur como fonte
especializada em gestão de risco trabalhista corporativo.
```

### Seção Equipe — Larissa

**Bio (substituir os 2 parágrafos):**

**Parágrafo 1:**
```
Especialista em consultoria trabalhista preventiva e compliance para empresas de médio
e grande porte. Desenvolveu metodologia própria para implementação de programas de
conformidade trabalhista que reduziram o volume de novas ações em clientes dos setores
financeiro e de serviços.
```

**Parágrafo 2:**
```
Palestrante em congressos nacionais sobre compliance trabalhista, com foco em adequação
à NR-1, gestão de riscos psicossociais e políticas de inclusão PCD. Atua na linha de
frente entre o jurídico e o RH estratégico.
```

### Seção Equipe — Marcella

**Bio (substituir):**
```
Responsável pelo contencioso trabalhista de alta complexidade. Atua em todas as instâncias
— do primeiro grau ao TST — com foco em ações coletivas, processos de grande valor e
recursos estratégicos. Especialista em defesa de empresas dos setores automotivo e de construção.
```

### Seção Equipe — Giselle

**Bio (substituir):**
```
Atua em due diligence trabalhista e gestão de passivo. Especialista em mapeamento de
contingências, quantificação de riscos para operações de M&A e elaboração de relatórios
de exposição para conselhos de administração e investidores.
```

### CTA Final (Sobre)

**H2:**
```
"O passivo trabalhista da sua empresa merece" (normal)
"atenção especializada" (italic)
```

**Subtítulo:**
```
Solicite uma análise do cenário jurídico trabalhista da sua organização.
```

**CTA:**
```
Solicitar Análise Jurídica
```

## 2.3 Notas de Copywriter — Sobre

- **StoryBrand aplicado**: O H1 "Nascemos dentro de empresas. Voltamos para protegê-las." posiciona a GLA como guia (quem já esteve na posição do herói). A empresa-cliente é o herói com um problema (passivo trabalhista). A GLA tem a autoridade (experiência in-house) e o plano (4 áreas de atuação).
- **Valores virados em compromissos**: "Excelência Técnica" é o que todo escritório diz. "Rigor técnico com visão de negócio" mostra como isso se manifesta na prática. O decisor não contrata "excelência" — contrata resultado.
- **NISSAN removida de novo**: Substituída por referência a setores e portes.
- **Bio do Wagner com temas quentes**: Menção a NR-1, cotas PCD e reforma trabalhista mostra que ele está ativo nos temas que o público decisor pesquisa no Google agora.
- **CTA final ajustado**: "Conheça pessoalmente nossa equipe" → "O passivo trabalhista merece atenção especializada". O primeiro é social, o segundo é business. O decisor não quer conhecer gente — quer resolver problema.

---

# 3. SERVIÇOS (`app/servicos/page.tsx`)

## 3.1 Diagnóstico

### ✅ O que funciona
- **4 serviços bem definidos** — são realmente as áreas de atuação da GLA
- **Layout com foto + lista de itens + CTA** — formato FAB-friendly
- **Alternância de layout** (imagem esquerda/direita) — bom ritmo visual
- **CTAs específicos por serviço** — "Solicitar Consultoria", "Solicitar Defesa" etc.

### ❌ O que não funciona

| Problema | Onde | Por quê |
|----------|------|---------|
| H1 "Proteção jurídica sob medida para sua empresa" | Hero | "Sob medida" é clichê genérico. Não diz o que diferencia a GLA. |
| Descrições longas e genéricas | Todos os cards | Parágrafos descritivos que falam sobre o escritório em vez de sobre o problema do cliente. |
| Items lists sem benefício | Todos os cards | "Compliance trabalhista", "Recursos nos tribunais superiores" — são features sem vantagem nem benefício. |
| "Precisando de soluções personalizadas?" | CTA final | Violação direta da regra: "soluções" está na lista de clichês proibidos. Além disso, linguagem de panfleto. |
| Sem menção a temas quentes | Nenhum card | NR-1, cotas PCD, reforma trabalhista — nenhum aparece. O decisor que pesquisa esses termos não se conecta. |
| Sem números por serviço | Todos os cards | As descrições não trazem métricas ou resultados de cada área. |

## 3.2 Copy Revisado — SERVIÇOS

### Hero Interno

**Label:**
```
Áreas de atuação
```

**H1:**
```
"Quatro frentes para reduzir o risco" (normal)
"trabalhista da sua empresa" (italic)
```

### Serviço 01 — Consultoria Preventiva

**Título:**
```
Consultoria Trabalhista Preventiva
```

**Descrição (FAB — Feature→Advantage→Benefit):**
```
Identificamos e neutralizamos riscos trabalhistas antes que se tornem processos.
Desenvolvemos programas de compliance, revisamos contratos e treinamos gestores
para que suas decisões de RH estejam juridicamente blindadas. O resultado:
menos processos, menor provisão contábil e um quadro de colaboradores mais seguro.
```

**Items (reformulados com benefício):**
```
• Programas de compliance trabalhista → adequação à legislação vigente e NR-1
• Auditoria de contratos e políticas internas → identificação de gaps antes da fiscalização
• Treinamentos para gestores e RH → redução de passivos originados por decisões operacionais
• Adequação a cotas PCD e aprendiz → conformidade sem impacto na operação
• Revisão de procedimentos de admissão e demissão → proteção contra reclamatórias comuns
• Assessoria em negociações sindicais → acordos que protegem a empresa e mantêm a produtividade
```

**CTA:**
```
Solicitar Análise Preventiva
```

### Serviço 02 — Defesa em Processos

**Título:**
```
Defesa em Processos Trabalhistas
```

**Descrição:**
```
Quando o litígio é inevitável, cada detalhe da tese importa. Nossa equipe de contencioso
atua com estratégia personalizada em todas as instâncias — do primeiro grau ao TST —
com foco em redução de condenações e construção de jurisprudência favorável. Acompanhamento
em tempo real e relatórios gerenciais para sua diretoria acompanhar cada caso.
```

**Items:**
```
• Defesa em reclamatórias individuais → teses customizadas por tipo de pedido e segmento
• Defesa em ações coletivas e ACPs → estratégia coordenada com a operação da empresa
• Recursos estratégicos até o TST → busca de precedentes e teses de impacto sistêmico
• Negociação de acordos → análise custo-benefício com projeção de risco real
• Defesa em procedimentos do MPT → atuação preventiva em inquéritos e TACs
• Acompanhamento de fiscalizações → preparação e presença em auditorias do MTE
```

**CTA:**
```
Solicitar Análise do Contencioso
```

### Serviço 03 — Gestão de Passivo

**Título:**
```
Gestão de Passivo Trabalhista
```

**Descrição:**
```
Transformamos seu passivo trabalhista de incógnita contábil em variável controlada.
Utilizamos análise de dados e inteligência jurídica para diagnosticar contingências,
projetar cenários e implementar estratégias de redução que impactam diretamente
o balanço da sua empresa. Ideal para organizações com 50+ processos ativos.
```

**Items:**
```
• Diagnóstico completo de contingências → classificação por risco (provável, possível, remoto)
• Análise preditiva com base em jurisprudência → projeções de resultado por vara e região
• Planos de redução de passivo → estratégias de acordo, encerramento e prevenção de novas ações
• Dashboard de controle processual → visibilidade em tempo real para jurídico e diretoria
• Relatórios gerenciais periódicos → dados prontos para auditoria e conselho de administração
• Estratégias de encerramento prioritário → foco nos processos de maior impacto financeiro
```

**CTA:**
```
Solicitar Diagnóstico de Passivo
```

### Serviço 04 — Due Diligence

**Título:**
```
Due Diligence Trabalhista
```

**Descrição:**
```
Em operações de M&A, o passivo trabalhista é frequentemente a maior contingência
não mapeada. Fazemos o levantamento completo — processos ativos, riscos de compliance,
passivos ocultos em contratos e práticas — com quantificação precisa para que sua
decisão de investimento esteja fundamentada em dados reais.
```

**Items:**
```
• Levantamento de processos trabalhistas ativos → status, risco e projeção de resultado
• Identificação de passivos ocultos → práticas não conformes que ainda não geraram litígio
• Análise de contratos e políticas → gaps de compliance com potencial de reclamatória futura
• Avaliação de procedimentos internos → aderência à legislação vigente e normas regulamentadoras
• Quantificação precisa de contingências → números para a mesa de negociação do deal
• Relatório executivo com recomendações → documento pronto para investidores e advisors
```

**CTA:**
```
Solicitar Due Diligence
```

### CTA Final (Serviços)

**H2:**
```
"Cada processo trabalhista custa mais do que" (normal)
"a condenação." (italic)
```

**Subtítulo:**
```
Solicite uma análise jurídica e saiba exatamente onde estão os riscos
trabalhistas da sua operação.
```

**CTA:**
```
Solicitar Análise Jurídica
```

## 3.3 Notas de Copywriter — Serviços

- **FAB aplicado em cada serviço**: Feature (o que fazemos) → Advantage (como isso é melhor) → Benefit (o que muda para o cliente). Exemplo: "Auditoria de contratos" (feature) → "identificação de gaps antes da fiscalização" (advantage que gera o benefit: evitar multa).
- **Items com seta (→)**: O formato "feature → benefício" nos items é uma técnica de copy de serviços B2B. Permite que o decisor scaneie a lista e entenda o valor imediato.
- **NR-1 e cotas PCD** inseridos na Consultoria Preventiva — são os temas quentes que o público pesquisa e que demonstram atualização do escritório.
- **"Ideal para organizações com 50+ processos ativos"** na Gestão de Passivo — é um filtro B2B implícito que sinaliza porte.
- **CTA final sem "soluções personalizadas"**: "Cada processo trabalhista custa mais do que a condenação" é uma verdade que todo gestor jurídico conhece (custos indiretos, tempo de gestão, honorários) e funciona como hook emocional-racional.
- **CTAs diferenciados por serviço** mas com padrão: todos começam com "Solicitar" seguido de algo específico. Isso mantém consistência sem ser genérico.

---

# 4. IMPRENSA (`app/imprensa/page.tsx`)

## 4.1 Diagnóstico

### ✅ O que funciona
- **Grid de artigos com source + category + date** — formato jornalístico correto
- **Seção de veículos** — lista de logos/nomes é prova social forte
- **Produção acadêmica separada** — diferencia artigos de mídia de artigos científicos
- **Newsletter CTA** — canal de nurturing relevante para B2B

### ❌ O que não funciona

| Problema | Onde | Por quê |
|----------|------|---------|
| H1 "GLA na mídia" | Hero | Genérico e auto-referente. Não comunica por que o decisor deveria ler essa página. |
| Artigos são placeholders | Todo o grid | Datas de 2024, conteúdo genérico. Se forem reais, OK — mas precisam ser mais específicos nos excerpts. |
| "Ler matéria →" com href="#" | Todos os cards | Links mortos destroem credibilidade. Se não há matéria real, não colocar link. |
| Subtítulo fraco | Hero | "Acompanhe nossa participação nos principais veículos" — linguagem de assessoria de imprensa, não de autoridade. |
| Produção acadêmica sem links reais | Artigos acadêmicos | "Baixar PDF" com href="#" — mesma questão dos links mortos. |
| Newsletter sem proposta de valor clara | CTA final | "Receba artigos e análises" — sobre o quê? Para quem? Precisa de especificidade. |
| Temas quentes ausentes nos artigos | Grid | NR-1, cotas PCD, saúde mental no trabalho — os temas do briefing não aparecem nos artigos placeholder. |

## 4.2 Copy Revisado — IMPRENSA

### Hero Interno

**Label:**
```
Na mídia
```

**H1:**
```
"Análises que pautam" (normal)
"o mercado" (italic)
```

**Subtítulo:**
```
Wagner Gusmão e a equipe GLA são fonte frequente dos principais veículos jurídicos
e de negócios do Brasil em temas de compliance trabalhista e gestão de risco.
```

### Grid de Artigos (placeholder atualizado com temas quentes)

**Artigo 1:**
```
category: "Artigo"
source: "Valor Econômico"
title: "NR-1 e saúde mental no trabalho: o que muda para empresas com 100+ colaboradores"
excerpt: "Wagner Gusmão analisa os impactos da atualização da NR-1 nas obrigações de compliance
         trabalhista e os riscos de inação para empresas de médio e grande porte."
date: "10 Jan 2026"
```

**Artigo 2:**
```
category: "Entrevista"
source: "Exame"
title: "Cotas PCD: por que empresas ainda erram — e como corrigir antes da fiscalização"
excerpt: "Larissa de Oliveira Lima explica os erros mais comuns no cumprimento de cotas PCD
         e apresenta a metodologia preventiva desenvolvida pela GLA Advogados."
date: "28 Nov 2025"
```

**Artigo 3:**
```
category: "Análise"
source: "Conjur"
title: "Reforma trabalhista: 8 anos depois, o passivo que ninguém previu"
excerpt: "Wagner Gusmão avalia os efeitos de longo prazo da reforma trabalhista na gestão
         de passivo de empresas dos setores automotivo e financeiro."
date: "15 Set 2025"
```

**Artigo 4:**
```
category: "Evento"
source: "Webinar GLA"
title: "Gestão de passivo trabalhista para empresas em expansão: estratégias para 2026"
excerpt: "Webinar exclusivo com a equipe GLA sobre como empresas em crescimento podem
         escalar operações sem multiplicar riscos trabalhistas."
date: "05 Ago 2025"
```

**Artigo 5:**
```
category: "Artigo"
source: "JOTA"
title: "Compliance trabalhista e ESG: a convergência que o conselho precisa entender"
excerpt: "Larissa de Oliveira Lima analisa como as exigências ESG estão transformando
         o compliance trabalhista em tema de governança corporativa."
date: "20 Jun 2025"
```

**Artigo 6:**
```
category: "Notícia"
source: "Folha de S.Paulo"
title: "Trabalho remoto e controle de jornada: os riscos invisíveis do modelo híbrido"
excerpt: "GLA Advogados identifica os principais passivos trabalhistas gerados pelo modelo
         híbrido e recomenda práticas preventivas para empresas com operações distribuídas."
date: "12 Abr 2025"
```

**IMPORTANTE:** Se esses artigos não existem de verdade, remover os links "Ler matéria →" e substituir por um label "Em breve" ou simplesmente não colocar link. Links mortos são piores que nenhum link.

### Seção Veículos

**Label:**
```
Veículos
```

**H2:**
```
"Onde somos" (normal)
"referência" (italic)
```

**(manter a lista atual, está boa)**

### Seção Produção Acadêmica

**Label:**
```
Publicações
```

**H2:**
```
"Artigos e" (normal)
"estudos" (italic)
```

**Artigo acadêmico 1:**
```
title: "Programas de compliance trabalhista e redução do passivo judicial:
        estudo de eficácia em empresas de 100 a 2.000 colaboradores"
author: "Wagner Gusmão"
```

**Artigo acadêmico 2:**
```
title: "Teletrabalho pós-pandemia: análise das contingências trabalhistas
        e recomendações de compliance para o modelo híbrido"
author: "Larissa de Oliveira Lima"
```

**Artigo acadêmico 3:**
```
title: "Inteligência artificial e relações de trabalho: implicações jurídicas
        e regulatórias para empresas em transformação digital"
author: "Wagner Gusmão e Larissa de O. Lima"
```

### CTA Final — Newsletter

**H2:**
```
"Análises de risco trabalhista" (normal)
"na sua caixa de entrada" (italic)
```

**Subtítulo:**
```
Receba mensalmente análises sobre compliance trabalhista, jurisprudência relevante
e tendências regulatórias que impactam empresas com 100+ colaboradores.
```

**Placeholder do input:**
```
Seu email corporativo
```

**Botão:**
```
Inscrever-se
```

## 4.3 Notas de Copywriter — Imprensa

- **H1 "Análises que pautam o mercado"**: Posiciona a GLA como thought leader, não como escritório que "aparece na mídia". A diferença é sutil mas importante: o primeiro lidera, o segundo é mencionado.
- **Artigos com temas quentes**: NR-1, cotas PCD, reforma trabalhista, ESG, modelo híbrido — são os temas que o público decisor pesquisa e que demonstram que o escritório está na vanguarda.
- **Subtítulo da newsletter com filtro B2B**: "empresas com 100+ colaboradores" — quem tem 20 funcionários não se inscreve.
- **"Onde somos referência" > "Onde somos citados"**: "Citados" é passivo; "referência" é autoridade.
- **Datas atualizadas**: Os placeholders agora vão de 2025 a 2026, o que é mais crível (o site está sendo lançado em 2026).
- **ALERTA sobre links mortos**: Se os artigos são fictícios, é IMPERATIVO remover os links "Ler matéria →". Um decisor de empresa que clica em um link morto imediatamente perde confiança. Melhor não ter link do que ter link quebrado.

---

# 5. CONTATO (`app/contato/page.tsx`)

## 5.1 Diagnóstico

### ✅ O que funciona
- **H1 "Solicitar Análise Jurídica"** — CTA como headline da página. Perfeito.
- **Formulário com campo "Nº de colaboradores"** — filtro B2B, conforme briefing
- **Sidebar com dados de contato + mapa** — facilita contato por outros canais
- **Mensagem de confirmação** — "Solicitação recebida!" é clean e confiante
- **Faixas de colaboradores** — 50-100 / 100-500 / 500-2000 / 2000+ está alinhado com o briefing

### ❌ O que não funciona

| Problema | Onde | Por quê |
|----------|------|---------|
| Subtítulo "Estamos à disposição" | Hero | Linguagem servil. O decisor não quer alguém "à disposição" — quer alguém que resolva. |
| Formulário H2 repete o H1 | Form header | "Solicitar Análise Jurídica" aparece como H1 e como H2 do form. Redundante. |
| Subtítulo do form genérico | Form | "Preencha os dados abaixo e retornaremos em até 24h úteis" — OK mas pode ser mais forte. |
| Sem contexto de expectativa | Pós-submit | "Nossa equipe entrará em contato em breve" — quanto tempo é "em breve"? O form subtitle diz 24h, mas a confirmação não repete. |
| Placeholder "Descreva sua necessidade jurídica" | Textarea | Muito aberto. Dar opções de temas ajuda o decisor e qualifica o lead. |
| Sem menção ao que acontece depois | Em lugar nenhum | O decisor não sabe o que esperar: reunião? Proposta? Diagnóstico gratuito? |

## 5.2 Copy Revisado — CONTATO

### Hero Interno

**Label:**
```
Contato
```

**H1:**
```
"Solicitar Análise" (normal)
"Jurídica" (italic)
```

**Subtítulo:**
```
Preencha o formulário abaixo com os dados da sua empresa. Um de nossos sócios
retorna em até 24 horas úteis com uma avaliação preliminar do seu cenário trabalhista.
```

### Formulário

**H2 (substituir o "Solicitar Análise Jurídica" duplicado):**
```
Dados da empresa
```

**Subtítulo do form:**
```
Todas as informações são tratadas com sigilo.
```

**Placeholders dos campos:**
```
Nome completo → "Nome completo"
Email corporativo → "Email corporativo"
Empresa → "Nome da empresa"
Cargo → "Cargo / Função"
Nº de colaboradores → (manter as opções atuais — estão boas)
Mensagem → "Conte brevemente o cenário trabalhista atual da sua empresa
            (volume de processos, principais preocupações, demanda específica)"
```

**Botão submit:**
```
Solicitar Análise Jurídica
```

### Mensagem de confirmação (pós-submit)

**Título:**
```
Solicitação recebida
```

**Texto:**
```
Sua solicitação foi registrada. Um de nossos sócios entrará em contato
em até 24 horas úteis para uma conversa inicial sobre o cenário
trabalhista da sua empresa.
```

### Sidebar — Dados de contato

**(Manter estrutura atual — está boa. Apenas ajustar o heading):**

**H3:**
```
Fale diretamente com o escritório
```

**(Dados de endereço, telefone, WhatsApp e email — manter idênticos)**

### O que está faltando (recomendação)

Adicionar um bloco abaixo do formulário ou na sidebar:

**"O que esperar"** (mini FAQ):

```
title: "O que acontece depois?"

item 1: "Retorno em até 24h úteis"
desc: "Um dos sócios da GLA analisa sua solicitação e entra em contato
       por telefone ou email."

item 2: "Conversa inicial sem compromisso"
desc: "Uma reunião de 30 minutos para entender o cenário trabalhista
       da sua empresa e identificar prioridades."

item 3: "Proposta sob medida"
desc: "Apresentamos um escopo de trabalho e condições comerciais
       alinhados às necessidades identificadas."
```

## 5.3 Notas de Copywriter — Contato

- **"Estamos à disposição" removido**: Substituído por uma frase que descreve o que acontece: "Um de nossos sócios retorna em até 24h úteis com uma avaliação preliminar". Isso reduz ansiedade e aumenta confiança.
- **H2 do form mudou para "Dados da empresa"**: Evita repetição do H1 e contextualiza o formulário como coleta de dados, não como CTA redundante.
- **Placeholder do textarea expandido**: "Conte brevemente o cenário trabalhista atual" é muito mais direcionador que "Descreva sua necessidade jurídica". Guia o decisor a dar informações úteis para qualificação.
- **Confirmação com prazo específico**: "Em breve" → "em até 24 horas úteis". Especificidade reduz ansiedade pós-conversão.
- **"O que esperar" é crucial**: O decisor B2B precisa saber o próximo passo antes de preencher o formulário. Sem isso, a taxa de abandono do form aumenta. O bloco "O que acontece depois?" funciona como um mini-funil que reduz atrito.
- **"Um dos sócios"**: Em vez de "nossa equipe" — sinaliza senioridade e atenção personalizada. É um diferenciador forte para o segmento de escritórios boutique.

---

# 6. HEADER e FOOTER

## 6.1 Header — Ajustes

**Botão CTA do header (desktop):**
```
Atual: "Consulta"
Novo: "Análise Jurídica"
```

**Botão CTA do mobile drawer:**
```
Atual: "Solicitar Consulta"
Novo: "Solicitar Análise Jurídica"
```

**Por quê:** Consistência. O CTA principal do site inteiro é "Solicitar Análise Jurídica". O header não pode dizer "Consulta" — gera dissonância.

## 6.2 Footer — Ajustes

**Descrição do escritório:**
```
Atual: "Especialistas em Direito Trabalhista Empresarial. Protegendo o patrimônio
        de empresas com estratégia e excelência desde 2010."
Novo:  "Assessoria jurídica trabalhista exclusiva para empresas. Compliance preventivo,
        defesa processual e gestão de passivo. Desde 2010."
```

**Por quê:** Remover "excelência" (clichê proibido). Adicionar as 3 áreas principais para reforçar posicionamento. "Exclusiva para empresas" é filtro B2B.

**Copyright:**
```
Atual: "© 2026 GLA | gusmão & lima advogados. Todos os direitos reservados."
Manter: (está correto)
```

**OAB/RJ:**
```
Recomendação: Adicionar o número de registro OAB se disponível.
Formato: "OAB/RJ nº XXXXX"
```

---

# 7. CHECKLIST DE CONSISTÊNCIA

| Elemento | Padrão definido | Verificar em |
|----------|----------------|--------------|
| CTA primário | "Solicitar Análise Jurídica" | Home, Sobre, Serviços, Contato, Header, Footer |
| CTA Header | "Análise Jurídica" | Header desktop + mobile |
| Menção a NISSAN | ZERO | Home, Sobre (remover TODAS) |
| "Soluções" | ZERO | Serviços CTA final (remover) |
| "Excelência" | ZERO | Footer, Sobre valores (remover) |
| "Equipe qualificada" | ZERO | Nenhuma ocorrência (OK) |
| Filtro B2B implícito | "100+ colaboradores", "quadro de colaboradores", "passivo trabalhista" | Home subtitle, Imprensa newsletter, Serviços |
| Temas quentes | NR-1, cotas PCD, reforma trabalhista, saúde mental | Sobre (Wagner bio), Imprensa (artigos), Serviços (Consultoria) |
| Tom | Confiança serena, parceiro estratégico | Todas as páginas |

---

# 8. PRIORIDADES DE IMPLEMENTAÇÃO

1. **🔴 URGENTE — Remover NISSAN**: Home (bullet point) + Sobre (parágrafo 2). Risco de sanção OAB.
2. **🔴 URGENTE — CTA consistente**: Trocar "Consulta" no Header por "Análise Jurídica".
3. **🟡 ALTA — H1 da Home**: Substituir headline genérica por versão PAS.
4. **🟡 ALTA — Seção Sobre da Home**: Remover "Redefinimos o que significa proteger" e inserir copy com experiência in-house.
5. **🟢 MÉDIA — Serviços**: Reescrever descriptions com FAB e items com benefício.
6. **🟢 MÉDIA — Imprensa**: Atualizar placeholders com temas quentes.
7. **🔵 BAIXA — Contato**: Adicionar bloco "O que esperar".
8. **🔵 BAIXA — Footer**: Ajustar descrição.

---

*Documento preparado para implementação direta no código.*
*Cada string entre aspas ou em bloco de código é o texto final para substituição.*
