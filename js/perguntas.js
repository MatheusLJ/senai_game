const perguntas = [
    {
      pergunta: "Qual EPI protege a cabeça contra impactos?",
      opcoes: ["a) Botina", "b) Luva", "c) Capacete", "d) Óculos de proteção"],
      resposta: 2
    },
    {
      pergunta: "Qual é o maior risco de deixar óleo derramado no chão da oficina?",
      opcoes: ["a) Deixar o chão aesthetic", "b) O ambiente estar mais cheiroso", "c) Provocar escorregões e quedas", "d) Aumentar a temperatura do ambiente"],
      resposta: 2
    },
    {
      pergunta: "Para que serve a faixa zebrada amarela e preta em ambientes industriais?",
      opcoes: ["a) Indicar área de descanso", "b) Decorar o ambiente", "c) Sinalizar áreas de risco", "d) Indicar saída de emergência"],
      resposta: 2
    },
    {
      pergunta: "Qual a principal diferença entre EPI e EPC?",
      opcoes: ["a) EPI protege o ambiente, EPC protege o trabalhador", "b) EPC é mais barato que EPI", "c) EPI é de uso coletivo, EPC é individual", "d) EPI protege o trabalhador individualmente, EPC protege o grupo ou o ambiente de trabalho"],
      resposta: 3
    },
    {
      pergunta: "Qual dos itens a seguir é considerado um EPC?",
      opcoes: ["a) Óculos de segurança", "b) Cinto de segurança tipo paraquedista", "c) Guarda-corpo em andaimes", "d) Protetor auricular"],
      resposta: 2
    },
    {
      pergunta: "Qual EPI é obrigatório para trabalhos com solda?",
      opcoes: ["a) Protetor solar", "b) Avental de raspa e máscara com filtro", "c) Boné e tênis", "d) Camiseta de algodão"],
      resposta: 1
    },
    {
      pergunta: "Qual norma regulamentadora trata sobre segurança no trabalho em máquinas e equipamentos?",
      opcoes: ["NR 18", "NR 6", "NR 12", "NR 15"],
      resposta: 2
    },
    {
      pergunta: "Na construção civil, qual é o limite máximo recomendado para trabalho em altura sem linha de vida, segundo a NR 35?",
      opcoes: ["1 metro", "1,5 metros", "2 metros", "3 metros"],
      resposta: 2
    },
    {
      pergunta: "Em áreas classificadas como atmosferas explosivas, qual EPI é inadequado?",
      opcoes: ["Calçado antiestático", "Roupa de algodão", "Celular comum no bolso", "Luva de borracha"],
      resposta: 2
    },
  
    // Fácil
    {
      pergunta: "Qual o EPI indicado para proteger as mãos contra cortes e produtos químicos?",
      opcoes: ["Máscara", "Bota de borracha", "Luva de proteção", "Protetor auricular"],
      resposta: 2
    },
    {
      pergunta: "Qual ação simples pode evitar tropeços no ambiente de trabalho?",
      opcoes: [
        "Deixar ferramentas espalhadas",
        "Utilizar fones de ouvido",
        "Manter o ambiente limpo e organizado",
        "Evitar varrer o chão"
      ],
      resposta: 2
    },
    {
      pergunta: "Qual EPI é usado para proteger a audição em ambientes ruidosos?",
      opcoes: ["Capacete", "Óculos de proteção", "Luva de borracha", "Protetor auricular"],
      resposta: 3
    },
    {
      pergunta: "O que deve ser feito antes de utilizar uma escada portátil?",
      opcoes: [
        "Subir rapidamente para testar",
        "Verificar a estabilidade e condições da escada",
        "Pintar a escada",
        "Emprestar para outro colega"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual a principal função da sinalização de segurança?",
      opcoes: [
        "Decorar o ambiente",
        "Indicar locais para descanso",
        "Orientar e alertar sobre riscos",
        "Iluminar o ambiente"
      ],
      resposta: 2
    },
    {
      pergunta: "O uso do cinto de segurança é obrigatório em trabalhos:",
      opcoes: [
        "Acima de 50 cm de altura",
        "Em locais com pouca iluminação",
        "Em altura superior a 2 metros",
        "Apenas na direção de veículos"
      ],
      resposta: 2
    },
    {
      pergunta: "Quando o uso de EPI é dispensado?",
      opcoes: [
        "Quando o trabalhador estiver com pressa",
        "Nunca, o EPI é sempre obrigatório em áreas de risco",
        "Quando estiver no horário de almoço",
        "Quando o EPI estiver sujo"
      ],
      resposta: 1
    },
  
    // Médio
    {
      pergunta: "O que caracteriza um espaço confinado?",
      opcoes: [
        "Um ambiente ao ar livre",
        "Um local sem riscos",
        "Um espaço com entrada e saída limitada, ventilação insuficiente e potencial para riscos",
        "Um escritório com ar-condicionado"
      ],
      resposta: 2
    },
    {
      pergunta: "Qual é o maior risco ao operar empilhadeiras sem treinamento?",
      opcoes: [
        "Ganhar produtividade",
        "Estacionar em local errado",
        "Atropelar pessoas ou provocar tombamento da carga",
        "Danificar a buzina"
      ],
      resposta: 2
    },
    {
      pergunta: "Em ambientes com risco de incêndio, é proibido:",
      opcoes: [
        "Utilizar roupas de algodão",
        "Falar alto",
        "Fumar ou provocar faíscas",
        "Beber água"
      ],
      resposta: 2
    },
    {
      pergunta: "O que deve ser feito ao identificar um equipamento com defeito?",
      opcoes: [
        "Continuar usando com cuidado",
        "Avisar o supervisor e isolar o equipamento",
        "Emprestar para outro colega",
        "Guardar no armário"
      ],
      resposta: 1
    },
    {
      pergunta: "Por que é importante realizar a Análise Preliminar de Risco (APR)?",
      opcoes: [
        "Para cumprir tabela",
        "Para saber quem será o líder da equipe",
        "Para identificar e prevenir acidentes antes do início das atividades",
        "Para escolher o melhor uniforme"
      ],
      resposta: 2
    },
    {
      pergunta: "O que pode ocorrer ao misturar produtos químicos sem orientação?",
      opcoes: [
        "Aumento da produtividade",
        "Reações perigosas, intoxicações e explosões",
        "Economia de material",
        "Redução de odores"
      ],
      resposta: 1
    },
    {
      pergunta: "O que fazer em caso de vazamento de gás em ambiente fechado?",
      opcoes: [
        "Acender uma luz para procurar o vazamento",
        "Ligar um ventilador",
        "Abrir portas e janelas, evacuar e acionar emergência",
        "Ligar o celular"
      ],
      resposta: 2
    },
  
    // Difícil
    {
      pergunta: "A NR 6 trata sobre:",
      opcoes: [
        "Sinalização de segurança",
        "Equipamentos de Proteção Individual (EPI)",
        "Máquinas e equipamentos",
        "Segurança em altura"
      ],
      resposta: 1
    },
    {
      pergunta: "Qual é o documento exigido por lei que comprova a entrega dos EPIs ao trabalhador?",
      opcoes: [
        "Certificado de garantia",
        "Nota fiscal da empresa",
        "Ficha de EPI assinada",
        "Manual do equipamento"
      ],
      resposta: 2
    },
    {
      pergunta: "O uso correto de EPI é responsabilidade de quem?",
      opcoes: [
        "Apenas do empregador",
        "Apenas do técnico de segurança",
        "De todos os trabalhadores",
        "Do governo"
      ],
      resposta: 2
    },
    {
      pergunta: "Qual o principal motivo para se evitar o improviso com ferramentas e andaimes?",
      opcoes: [
        "Redução de gastos",
        "Diminuição do tempo de execução",
        "Aumento do risco de acidentes graves e fatais",
        "Baixo desempenho da equipe"
      ],
      resposta: 2
    },
    {
      pergunta: "Qual órgão é responsável por fiscalizar o cumprimento das Normas Regulamentadoras no Brasil?",
      opcoes: ["SUS", "INSS", "Ministério do Trabalho", "IBGE"],
      resposta: 2
    },
    {
      pergunta: "O uso incorreto de EPIs pode resultar em:",
      opcoes: [
        "Promoções na empresa",
        "Redução do estresse",
        "Riscos de acidentes, contaminações ou lesões",
        "Aumento da produção"
      ],
      resposta: 2
    },
    {
      pergunta: "Em atividades com solda, qual risco é frequente se os EPIs adequados não forem utilizados?",
      opcoes: [
        "Hipotermia",
        "Insolação",
        "Queimaduras, intoxicação por fumos metálicos e lesões oculares",
        "Cãibras"
      ],
      resposta: 2
    }
];
  