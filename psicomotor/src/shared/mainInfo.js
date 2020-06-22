
const autor = 'Metranda da Universidade de São Paulo. Pós graduada em Excelência e Qualidade Operacional Green Belt (2016) - Instituto de Ensino e Pequisa Hospital Iraelita Albert, Expecialista em Impactos da Vioência da Saúde (2013) - Fundação Oswaldo Cruz. Especialista em Saúde Pública com foco na Estratégia Saúda da Família (2010) - Faculdade São Camilo. Especialista em Psicologia Hospitalar (2008) - Instituto de Ensino e Pequisa Hospitalar Israelita Albert Einstein. Graduada em Psicologia pela Pontifícia Universidade Católica de Campinas (2006). Atualmente, trabalaha como coordenadora de CAPS no municício de São Paulo, pela parceria entre a Secretaria Municipal de Saúde e a Sociedade Beneficente Israelita Brasileira ALber Einstein. Docente da faculdade de medicina e curso técnico de enfermagem pela mesma instituição. Atuaou como apoio técnico com atribuições de ensino, gestão e edução permanente no contexto da Atenção Primária à Saúde, Estratégia Saúde da Família e Saúde mental';

const autor2 = 'para colaboradores da mesma Instituição. Docente no Centro Universitário Anhanguera Brigadeiro e Vila Mariana, sendo responsável em ministrar disciplinas Saúde Mental, Politicas Públicas, Psicologia Hospitalar, Saúde da Família e Saúde Coletiva por 4 anos.'

const autor3 = autor + autor2

const objetivo = 'Este website tem destina-se a profissionais técnico de enfermagem com o objetivo contribuir para atuações humanizadas e pautadas em evidências científicas em situações de abordagem de pessoas com agitação psicomotora com comportamentos agressivos, com vistas a minimizar práticas inadequadas, inseguras para com esta população.';


export const infor = [
    {
        id: 0,
        name:'Autor',
        image: '',
        description: autor3},
     {
        id: 1,
        name:'Objetivo',
        image: '',
        description: objetivo},
     {
        id: 2,
        name:'Vadonut',
        image: 'images/vadonut.png',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
     {
        id: 3,
        name:'ElaiCheese Cake',
        image: 'images/elaicheesecake.png',
        category: 'dessert',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
    }
]

export default infor;