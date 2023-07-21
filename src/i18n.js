import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          about: {
            name: 'Kevin',
            surname: 'Osborne'
          },
          description: {
            quote1: 'Simplicity is the fundamental part of design where we so often miss our <1>target<1>.',
            quote2: 'Let me help you <1>hit yours</1>.',
            about: `I live in Portugal with my partner Ana, where we have recently just purchased our first house, which we share with the real owner; our cat Loki. I like to unwind by creating music, painting or playing video games.
            <1/><1/>  
            I started considering web design as a potential career in 2020. During the pandemic, I didn't want to waste time indoors when I was given the perfect opportunity to use the isolation to study.
            <1/><1/>
            Before that, I had completed a degree in Music, Business and Management, spent 14 years in retail management, 1 year in project management and several other jobs in between it all. I found my own way to both lead and be led as part of a cohesive team.
            <1/><1/>
            I found several courses, and applied myself to everything I could. Some styles stuck, some didn't. I realised those that did had a design that really struck with me. So I focused on UX/UI design, using React.`,
            cardQuote1: {
                title: 'Clear Design',
                body: 'Setting the groundwork for the initial design is a key part of the process. Designing can often be the most <1>fun</1> part of the process, so let me help you achieve what <1>you</1> want.'
            },
            cardQuote2: {
                title: 'Achievable Goals',
                body: 'A design process must come with achievable goals. This not only allows you to build <1>trust</1> with your stakeholders, but allows our working relationship to be built with <1>honesty</1>.'
            },
            cardQuote3: {
                title: 'Constructive Feedback',
                body: 'By creating reachable designs with <1>achievable</1> goals, we can achieve what works best for you. This process starts with an open and honest relationship that allows for <1>creative</1> and constructive feedback.'
            }
          },
          skills: {
            jobList: `Retail Manager > Project Manager > <1>Web Designer</1>`,
            title1: 'Skills',
            title2: 'Other',
            basic1: 'Basic C#',
            basic2: 'Basic Salesforce'           
          },
          projects: {
            calculator: {
                title: 'Calculator',
                body: 'A <1>simple</1> calculator project to showcase that less can be more.'
            },
            dashboard: {
                title: 'Admin Dashboard',
                body: `A <1>clean</1> high level dashboard to visualize your company.`
            },
            todo: {
                title: 'To Do App',
                body: `A <1>minimalistic</1> design that lets you focus on what's important.`
            },
            weather: {
                title: 'Geolocation Weather App',
                body: `An <1>elegant</1> application to display current weather in your area.`
            }
          },
          nav: {
            home: 'Home',
            about: 'About',
            contact: 'Contact'
          },
          contact: {
            title: `Let's get in touch`,
            body: `Whether you have an aspiring idea and need help getting it over the line, or perhaps you need help from the start, please get in touch and let's discuss what we can get done for you.`,
            email: 'By <1>email</1>',
            whatsapp: 'by <1>whatsapp</1>',
            whatsappChat: 'Direct Chat'
          },
          footer: {
            title: 'Contact',
            body: `The process is about what you want, so let's think <1>outside the box</1> to realise your design.`
          }
        }
      },
      pt: {
        translation: {
            about: {
                name: 'Kevin',
                surname: 'Osborne'
            },
            description: {
                quote1: 'Simplicidade é a parte fundamental do design onde muitas vezes falhamos o <1>alvo<1>.',
                quote2: 'Deixe-me ajudá-lo a acertar <1>o seu</1>.',
                about: `Eu vivo em Portugal com a minha namorada Ana, onde acabámos de comprar a nossa primeira casa, que partilhamos com o verdadeiro dono, o nosso gato Loki. A maneira como gosto de relaxar vem da criação de música, da pintura e dos video jogos.
                <1/><1/>
                Comecei a considerar o web design como uma potencial carreira em 2020. Durante a pandemia, não queria perder tempo dentro de casa e aproveitei a oportunidade do isolamento para estudar.
                <1/><1/>
                A minha licenciatura é em Música, Negócios e Gestão, passei 14 anos como gerente comercial, 1 ano como gestor de projetos entre outros. Encontrei o meu caminho na liderança e ao ser liderado como parte de uma equipa coesa.
                <1/><1/>
                Encontrei vários cursos, e dediquei-me a tudo o que pude. Alguns dos estilos gostei, outros nem tanto. Percebi que aqueles que tinha gostado, realmente influenciaram e impressionaram-me. Por isso foquei-me no UX/UI design, usando React.`,
                cardQuote1: {
                    title: 'Design claro',
                    body: 'Definir bases de um projeto é uma parte fundamental do processo. Muitas vezes, o design é a parte mais <1>divertida</1>, então deixe-me ajudá-lo a alcançar o que <1>deseja</1>.'
                },
                cardQuote2: {
                    title: 'Metas atingíveis',
                    body: 'Um processo de design deve vir com metas alcançáveis. Isso cria <1>confiança</1> com os stakeholders e permite que o relacionamento do trabalho seja construído com <1>honestidade</1>.'
                },
                cardQuote3: {
                    title: 'Feedback construtivo',
                    body: 'Ao criar designs acessíveis com metas <1>atingíveis</1>, conseguimos alcançar o que melhor funciona consigo. Esse processo começa com um relacionamento aberto e honesto que permite um feedback <1>criativo</1> e construtivo.'
                }
              },
              skills: {
                jobList: `Gerente Comercial > Gestor de Projetos > <1>Web Designer</1>`,
                title1: 'Capacidades',
                title2: 'Outros',
                basic1: 'Salesforce Básico',
                basic2: 'C# Básico'        
              },
              projects: {
                calculator: {
                    title: 'Calculadora',
                    body: 'Um projeto de uma calculadora <1>simples</1> que mostra que menos pode ser mais.'
                },
                dashboard: {
                  title: 'Dashboard Admin',
                  body: `Um dashboard <1>completo</1> de maneira a visualizar as suas vendas`
                },
                todo: {
                    title: 'Lista de Tarefas',
                    body: `Um design <1>minimalista</1> que permite que crie tarefas de maneira a facilitá-lo.`
                },
                weather: {
                    title: 'App Meteorológico',
                    body: `Uma app <1>elegante</1> para exibir o clima atual da sua área.`
                }
              },
              nav: {
                home: 'Pagina inicial',
                about: 'Sobre',
                contact: 'Contacto'
              },
              contact: {
                title: `Vamos entrar em contacto`,
                body: `Se você tem uma ideia na qual precisa de ajuda, ou simplesmente precisa de apoio desde o início, entre em contacto para analisar o que conseguimos fazer.`,
                email: 'Por <1>e-mail</1>',
                whatsapp: 'Por <1>whatsapp</1>',
                whatsappChat: 'Contacto Direto'
              },
              footer: {
                title: 'Contacto',
                body: `O processo é sobre o que você deseja, então vamos pensar <1>fora da caixa</1> de maneira a realizar o seu design.`
              }
        }
      }
    }
  });

export default i18n;