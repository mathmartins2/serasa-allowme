import { http, HttpResponse } from 'msw';
import { parsedEnv } from '../../env';

export const handlers = [
  http.get(
    parsedEnv.VITE_API_URL + '/297932b2-1303-4136-bbd1-cb20875bf87c',
    () => {
      return HttpResponse.json([
        {
          author: 'João Silva',
          publicationDate: '2024-09-15',
          title: 'Inovações na Inteligência Artificial',
          publicationId: '001',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/joaosilva',
            originalPostUrl: 'https://example.com/post001',
            twitter: 'https://twitter.com/joaosilva',
          },
          content:
            'Explorando as últimas inovações em IA e seu impacto na sociedade.',
        },
        {
          author: 'Maria Oliveira',
          publicationDate: '2024-08-20',
          title: 'Sustentabilidade no Setor Energético',
          publicationId: '002',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/mariaoliveira',
            originalPostUrl: 'https://example.com/post002',
            twitter: 'https://twitter.com/mariaoliveira',
          },
          content: 'Discussão sobre práticas sustentáveis no setor energético.',
        },
        {
          author: 'Carlos Pereira',
          publicationDate: '2024-07-10',
          title: 'Avanços na Medicina Genômica',
          publicationId: '003',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/carlospereira',
            originalPostUrl: 'https://example.com/post003',
            twitter: 'https://twitter.com/carlospereira',
          },
          content:
            'Como a medicina genômica está revolucionando os tratamentos médicos.',
        },
        {
          author: 'Ana Costa',
          publicationDate: '2024-06-05',
          title: 'Tecnologias Verdes Emergentes',
          publicationId: '004',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/anacosta',
            originalPostUrl: 'https://example.com/post004',
            twitter: 'https://twitter.com/anacosta',
          },
          content:
            'Uma visão sobre as novas tecnologias verdes e seu potencial.',
        },
        {
          author: 'Pedro Santos',
          publicationDate: '2024-05-15',
          title: 'Transformação Digital nas Empresas',
          publicationId: '005',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/pedrosantos',
            originalPostUrl: 'https://example.com/post005',
            twitter: 'https://twitter.com/pedrosantos',
          },
          content:
            'Estratégias para a transformação digital nas empresas modernas.',
        },
        {
          author: 'Beatriz Lima',
          publicationDate: '2024-04-25',
          title: 'Educação e Tecnologia',
          publicationId: '007',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/beatrizlima',
            originalPostUrl: 'https://example.com/post007',
            twitter: 'https://twitter.com/beatrizlima',
          },
          content: 'O papel da tecnologia na educação do futuro.',
        },
        {
          author: 'Ricardo Almeida',
          publicationDate: '2024-03-30',
          title: 'Desafios da Cibersegurança',
          publicationId: '008',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/ricardoalmeida',
            originalPostUrl: 'https://example.com/post008',
            twitter: 'https://twitter.com/ricardoalmeida',
          },
          content: 'Principais desafios e soluções em cibersegurança.',
        },
        {
          author: 'Fernanda Souza',
          publicationDate: '2024-02-20',
          title: 'Inovações em Energias Renováveis',
          publicationId: '009',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/fernandasouza',
            originalPostUrl: 'https://example.com/post009',
            twitter: 'https://twitter.com/fernandasouza',
          },
          content:
            'Novas tecnologias e inovações no campo das energias renováveis.',
        },
        {
          author: 'João Silva',
          publicationDate: '2024-01-15',
          title: 'Impacto da IA na Saúde',
          publicationId: '011',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/joaosilva',
            originalPostUrl: 'https://example.com/post011',
            twitter: 'https://twitter.com/joaosilva',
          },
          content: 'Como a inteligência artificial está transformando a saúde.',
        },
        {
          author: 'Lucas Mendes',
          publicationDate: '2023-12-10',
          title: 'Blockchain e Suas Aplicações',
          publicationId: '012',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/lucasmendes',
            originalPostUrl: 'https://example.com/post012',
            twitter: 'https://twitter.com/lucasmendes',
          },
          content: 'Explorando as diversas aplicações do blockchain.',
        },
        {
          author: 'Mariana Rocha',
          publicationDate: '2023-11-05',
          title: 'Economia Digital',
          publicationId: '013',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/marianarocha',
            originalPostUrl: 'https://example.com/post013',
            twitter: 'https://twitter.com/marianarocha',
          },
          content: 'O crescimento da economia digital e suas implicações.',
        },
        {
          author: 'Gabriel Ferreira',
          publicationDate: '2023-10-20',
          title: 'Robótica Avançada',
          publicationId: '014',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/gabrielferreira',
            originalPostUrl: 'https://example.com/post014',
            twitter: 'https://twitter.com/gabrielferreira',
          },
          content: 'Os avanços mais recentes na robótica avançada.',
        },
        {
          author: 'João Silva',
          publicationDate: '2023-09-15',
          title: 'Big Data e Análise de Dados',
          publicationId: '015',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/joaosilva',
            originalPostUrl: 'https://example.com/post015',
            twitter: 'https://twitter.com/joaosilva',
          },
          content:
            'A importância do big data e da análise de dados nas empresas.',
        },
        {
          author: 'Ana Costa',
          publicationDate: '2023-08-10',
          title: 'Tecnologia e Sustentabilidade',
          publicationId: '016',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/anacosta',
            originalPostUrl: 'https://example.com/post016',
            twitter: 'https://twitter.com/anacosta',
          },
          content: 'Como a tecnologia pode promover a sustentabilidade.',
        },
        {
          author: 'Laura Martins',
          publicationDate: '2023-07-05',
          title: 'Desenvolvimento de Software',
          publicationId: '017',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/lauramartins',
            originalPostUrl: 'https://example.com/post017',
            twitter: 'https://twitter.com/lauramartins',
          },
          content: 'Melhores práticas no desenvolvimento de software.',
        },
        {
          author: 'Beatriz Lima',
          publicationDate: '2023-06-20',
          title: 'Educação Online',
          publicationId: '018',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/beatrizlima',
            originalPostUrl: 'https://example.com/post018',
            twitter: 'https://twitter.com/beatrizlima',
          },
          content: 'O crescimento e os desafios da educação online.',
        },
        {
          author: 'Sofia Ribeiro',
          publicationDate: '2023-05-15',
          title: 'Marketing Digital',
          publicationId: '019',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/sofiaribeiro',
            originalPostUrl: 'https://example.com/post019',
            twitter: 'https://twitter.com/sofiaribeiro',
          },
          content: 'Estratégias eficazes de marketing digital.',
        },
        {
          author: 'Miguel Costa',
          publicationDate: '2023-04-10',
          title: 'Internet das Coisas (IoT)',
          publicationId: '020',
          socialMedia: {
            linkedin: 'https://linkedin.com/in/miguelcosta',
            originalPostUrl: 'https://example.com/post020',
            twitter: 'https://twitter.com/miguelcosta',
          },
          content: 'Internet das Coisas (IoT) no mundo corpotativo.',
        },
      ]);
    }
  ),
  http.get(
    parsedEnv.VITE_API_URL + '/7342bcfd-4fe6-470e-a6df-610afebf9b65',
    () => {
      return HttpResponse.json([
        {
          authorPublications: [
            {
              authorId: 'João Silva',
              publicationIds: ['001', '011', '015'],
            },
            {
              authorId: 'Maria Oliveira',
              publicationIds: ['002', '006'],
            },
            {
              authorId: 'Carlos Pereira',
              publicationIds: ['003', '010'],
            },
            {
              authorId: 'Ana Costa',
              publicationIds: ['004', '016'],
            },
            {
              authorId: 'Pedro Santos',
              publicationIds: ['005', '021'],
            },
            {
              authorId: 'Beatriz Lima',
              publicationIds: ['007', '018'],
            },
            {
              authorId: 'Ricardo Almeida',
              publicationIds: ['008'],
            },
            {
              authorId: 'Fernanda Souza',
              publicationIds: ['009'],
            },
            {
              authorId: 'Lucas Mendes',
              publicationIds: ['012'],
            },
            {
              authorId: 'Mariana Rocha',
              publicationIds: ['013'],
            },
            {
              authorId: 'Gabriel Ferreira',
              publicationIds: ['014'],
            },
            {
              authorId: 'Laura Martins',
              publicationIds: ['017'],
            },
            {
              authorId: 'Sofia Ribeiro',
              publicationIds: ['019'],
            },
            {
              authorId: 'Miguel Costa',
              publicationIds: ['020'],
            },
          ],
        },
      ]);
    }
  ),
];
