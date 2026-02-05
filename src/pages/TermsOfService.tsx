
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C9F05C] to-[#FF3E94] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao início
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Termos e Condições de Uso
          </h1>
          <p className="text-xl text-black/80 mt-4">
            Termos e condições gerais de uso do aplicativo "Hype App"
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          
          <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-[#C9F05C] mb-4">Seja bem-vindo(a) ao Hype App</h2>
            <p className="text-gray-300 leading-relaxed">
              Apresentamos os Termos de Uso do Aplicativo "HYPE APP", que traz, em um único lugar, inovação e tecnologia, facilitando a interação entre anunciantes e influenciadores. Este documento, e todo o conteúdo do Aplicativo, é oferecido pela pessoa jurídica de direito privado Você no Hype Marketing e Entretenimento LTDA, com sede na cidade de São Paulo/Capital, Brasil, na Av. Cardeal Motta, 1057, Bairro: City América, Cep: 02452-001, inscrita no CNPJ sob o n. 43.442.408/0001-26, que regulamenta todos os direitos e obrigações com todos que acessam o Aplicativo "HYPE APP", denominados como "USUÁRIOS" resguardando todos os direitos previstos na legislação.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">1. DEFINIÇÕES</h2>
            <p className="mb-4">Para os fins destes Termos e Condições de Uso, as designações abaixo terão os seguintes significados:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Nós","Nosso","Nossos","Nossa":</h3>
                <p>Se refere a "Você no Hype Marketing e Entretenimento LTDA (Você no Hype), pessoa jurídica que mantém e é responsável pelo Aplicativo.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Aplicativo":</h3>
                <p>É o Aplicativo "Hype App", incluindo todas as suas páginas e recursos.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Conteúdo de terceiros":</h3>
                <p>É toda e qualquer informação, ou dado publicado, ou disponibilizado no Aplicativo por terceiros, Usuários ou Não, incluindo, dentre outros possíveis, textos, imagens, vídeos, áudios e links.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Nosso conteúdo":</h3>
                <p>Se refere a todo e qualquer informação, ou dado publicado, disponibilizado diretamente por Nós no Aplicativo.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Influenciadores":</h3>
                <p>Refere-se aquela pessoa capaz de influenciar comportamentos, criar tendências e servir como fonte de informação.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Anunciantes":</h3>
                <p>Refere-se aquele que patrocina anúncios em qualquer meio de comunicação.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Android":</h3>
                <p>É um sistema operacional para dispositivos móveis, liderado pelo Google.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"iOS":</h3>
                <p>É um sistema operacional da Apple.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Crawler/Spider":</h3>
                <p>Programa desenvolvidos para atuar ou obter informações de modo automatizado.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Dados Pessoais":</h3>
                <p>Informação relacionada a pessoa natural, identificada ou identificável.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Link":</h3>
                <p>Terminologia para endereço de internet.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Download":</h3>
                <p>Transferência de um arquivo de um determinado servidor para computador, tablet, celulares, etc. dos Usuários.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#C9F05C]">"Usuário(s)":</h3>
                <p>É a pessoa que navega, ou que de qualquer outra forma utilizar Nosso Aplicativo.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">2. FINALIDADE DO APLICATIVO</h2>
            <p className="leading-relaxed">
              O Aplicativo Hyppe App, foi criado e desenvolvido, com a proposta de facilitar, que anunciantes, encontrem e negociem publicidade, com perfis de influenciadores, no qual, poderão usufruir, pessoas jurídicas e pessoas físicas, que possuem uma rede social, respeitando a idade mínima destes Termos, e que tenham interesse e capital para marketing, independentemente de sua grandeza, número de seguidores ou valor, disponibilizando, através deste, soluções tecnológicas e inovadoras, onde, os perfis de influenciadores poderão cadastrar as suas redes sociais, ficando assim, disponíveis em Nosso catálogo (hypeapp.com.br), para que possam interagir e negociar.
            </p>
            <p className="leading-relaxed mt-4">
              O Aplicativo atua de forma intermediária entre influenciadores e anunciantes, e foi criado, visando resolver a necessidade de centralizar em um único lugar, os perfis de influenciadores, para que, os anunciantes possam, de forma descomplicada, realizar suas divulgações, trazendo para essa relação, uma comunicação mais assertiva e abrangente, com agilidade, dinamismo e interação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">3. DA ADESÃO E ACEITE DOS TERMOS</h2>
            <div className="space-y-4">
              <p><strong>3.1</strong> O Aplicativo, é compatível com os sistemas operacionais ANDROID e IOS.</p>
              <p><strong>3.2</strong> Para obtenção da totalidade dos benefícios e recursos proporcionados pelo Aplicativo, o Usuário deverá efetuar o seu cadastro, fornecendo seus dados pessoais.</p>
              <p><strong>3.3</strong> Para a realização do cadastro, é obrigatória a leitura, compreensão e aceite dos presentes Termos de Uso, pelo Usuário.</p>
              <p><strong>3.4</strong> Estes Termos de Uso específica, e exige que todo Usuário ao fazer uso do Aplicativo, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre o Usuário e o Aplicativo, direitos e obrigações entre ambas as partes, aceitos expressamente pelo Usuário.</p>
              <p><strong>3.5</strong> Ao permanecer no Aplicativo, o aceite dos Termos de Uso, irá implicar no reconhecimento, pelo Usuário, de que leu, entendeu e aceitou incondicionalmente todas as disposições constantes deste documento.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">4. DO CADASTRO DO USUÁRIO E SUA MANUTENÇÃO</h2>
            <div className="space-y-4">
              <p><strong>4.1</strong> O cadastro no Nosso Aplicativo é gratuito, tanto para que o USUÁRIO possa baixar o Aplicativo, quanto, para as atualizações, no entanto, para usufruir de todos os benefícios disponibilizados, o Usuário deverá, estar apto, e em conformidade com esses Termos de Uso, fornecendo todas as informações e dados requeridos.</p>
              <p><strong>4.2</strong> O cadastro no Aplicativo deverá ser necessariamente feito por pessoas maiores de 18 (dezoito) anos, ou regularmente emancipada.</p>
              <p><strong>4.3</strong> Ao se cadastrar, o Usuário deverá fornecer um endereço de e-mail válido, através do qual, todos os meios de contato serão realizados, sendo assim, todas as comunicações enviadas ao referido endereço serão consideradas lidas pelo Usuário, se comprometendo a consultar regularmente as mensagens recebidas, respondendo em tempo considerado razoável.</p>
              <p><strong>4.4</strong> Assim que confirmar o seu cadastro, o Usuário possuirá um login e uma senha, que serão considerados pessoais.</p>
              <p><strong>4.5</strong> A conta do Usuário é pessoal e intransferível, sendo proibido vender, ceder, alugar ou transferir.</p>
              <p><strong>4.6</strong> O Usuário assume a responsabilidade de fornecer informações exatas e verdadeiras, assumindo o compromisso de atualizar seus dados pessoais, sempre que necessário ou quando requerido, assumindo assim a responsabilidade pelas informações fornecidas ao Aplicativo.</p>
              <p><strong>4.7</strong> Ao identificarmos que quaisquer informações cadastradas não são verdadeiras, teremos o direito de suspender, ou excluir a conta do Usuário, bem como, podemos, Nos recusar a prover quaisquer de Nossos recursos, no entanto, o Usuário será notificado para se justificar.</p>
              <p><strong>4.7.1</strong> Nós, não nos responsabilizamos pela veracidade dos dados inseridos no cadastro, no qual, a criação de perfis falsos, poderá ser considerada crime de falsa identidade, falsidade ideológica ou estelionato.</p>
              <p><strong>4.7.2</strong> Caso seja identificado a existência de atividade suspeita, poderemos a qualquer tempo e a Nosso exclusivo critério, confirmar a identidade e os dados pessoais do Usuário, podendo, assim, solicitar documentos pessoais e outras formas de comprovação, por algum meio hábil.</p>
              <p><strong>4.8</strong> Cada Usuário poderá manter apenas uma conta junto ao Aplicativo, contas duplicadas, quando forem identificadas, serão automaticamente desativadas por Nós.</p>
              <p><strong>4.9</strong> Sem prejuízo de outras medidas, Nós poderemos, advertir, moderar, suspender ou cancelar o cadastro dos Usuários, negando a prestar os recursos descritos nestes Termos, caso o Usuário:</p>
              <div className="ml-6">
                <p>a) Pratique atos fraudulentos;</p>
                <p>b) Cause qualquer tipo de dano ou prejuízos a terceiros, no uso do Aplicativo;</p>
                <p>c) Descumpra qualquer disposição destes Termos.</p>
              </div>
              <p><strong>4.10</strong> O Usuário poderá, a qualquer tempo e sem necessidade de justificação, solicitar o cancelamento de seu cadastro junto ao Aplicativo, sendo o seu descadastramento realizado o mais rápido possível.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">5. DA NAVEGAÇÃO NO APLICATIVO</h2>
            <div className="space-y-4">
              <p><strong>5.1</strong> O Aplicativo funciona normalmente 24 (vinte e quatro) horas por dia, no entanto, pode ocorrer algumas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixá-lo indisponível por tempo limitado.</p>
              <p><strong>5.2</strong> Nós, não nos responsabilizamos por nenhuma perda de oportunidade ou prejuízos, que esta indisponibilidade temporária possa gerar aos Usuários.</p>
              <p><strong>5.3</strong> Caso seja necessário um tempo maior para manutenção, nós iremos informar previamente os Usuários, bem como a previsão para restabelecer os recursos do Aplicativo.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">6. ADMINISTRAÇÃO DO APLICATIVO</h2>
            <div className="space-y-4">
              <p><strong>6.1</strong> O Aplicativo é administrado por Nós, e para que haja uma gestão baseada no princípio da boa fé, Nós poderemos a qualquer a momento:</p>
              <div className="ml-6">
                <p>a) Suspender, interromper ou limitar o acesso ao todo ou em parte, a uma categoria específica ou a todos os Usuários;</p>
                <p>b) Suspender o Aplicativo, a fim de realizar atualizações e modificações.</p>
                <p>c) Remover toda informação que possa perturbar o funcionamento do Aplicativo, ou que esteja em conflito com normas de Direito brasileiro ou de Direito internacional;</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">7. VIOLAÇÕES</h2>
            <div className="space-y-4">
              <p><strong>7.1</strong> O Usuário não poderá praticar as seguintes ações em razão ou por meio da utilização do Aplicativo:</p>
              <div className="ml-6">
                <p>a) Quaisquer atos ilícitos e/ou violação da legislação vigente;</p>
                <p>b) Atos contrários à moral e os bons costumes;</p>
                <p>c) Transmissão de qualquer conteúdo que promova ou incite o preconceito (inclusive de origem, raça, sexo, cor, orientação sexual e idade) ou qualquer forma de discriminação, bem como o ódio ou atividades ilegais;</p>
                <p>d) Ameaça, coação, constrangimento físico ou moral aos demais Usuários;</p>
                <p>e) Violação de direitos de terceiros;</p>
                <p>f) Violação dos direitos de sigilo e privacidade alheios;</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">8. USO DO APLICATIVO</h2>
            <div className="space-y-4">
              <p><strong>8.1</strong> O Usuário deverá limitar-se a utilizar o Aplicativo, para a finalidade que ele foi desenvolvido, de maneira ética e adequada aos propósitos estabelecidos nestes Termos, atendendo ao disposto nas Leis brasileiras.</p>
              <p><strong>8.2</strong> O Usuário é responsável por todos e quaisquer atos ou omissões por ele realizados a partir de seu acesso ao Aplicativo.</p>
              <p><strong>8.3</strong> Não poderá o Usuário, utilizar-se de meios como, crawlers, robôs, ou quaisquer programas de computador, metodologias automatizadas, para acessar, copiar, monitorar, navegar, preencher formulários ou publicar conteúdos no Aplicativo.</p>
              <p><strong>8.4</strong> Fica o Usuário responsável por todo e qualquer conteúdo por ele carregado, e enviado ao Aplicativo;</p>
              <p><strong>8.5</strong> O Usuário não poderá, testar, sobrecarregar, violar as vulnerabilidades de mecanismos de segurança do Aplicativo, ou da infraestrutura da tecnologia que usamos.</p>
              <p><strong>8.6</strong> O Usuário não poderá reproduzir qualquer conteúdo do Aplicativo sem autorização expressa, podendo responder civil e criminalmente.</p>
              <p><strong>8.7</strong> O Usuário não poderá esconder a sua identidade, nem a origem de sua conexão, e não poderá se passar por outra pessoa, também não poderá usar-se de ferramentas ou mecanismos para manipular o acesso ao Aplicativo.</p>
              <p><strong>8.8</strong> O Usuário é o único responsável pelo uso adequado de sua conta, bem como pelo uso que for feito dela, tendo o dever de zelar por ela, e suas credenciais (login e senha) para que não sejam compartilhadas com terceiros.</p>
              <p><strong>8.9</strong> O Usuário é proibido de utilizar-se de Aplicativos Spider ou de mineração de dados, de qualquer natureza.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">9. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <div className="space-y-4">
              <p><strong>9.1</strong> Fica expressamente estabelecido que NÓS, não temos a obrigação de controlar todas as ações executadas pelos Usuários, no uso do Aplicativo, sendo assim, Nós não poderemos ser responsabilizados pelos atos dos Usuários, cabendo a estes, responderem pessoal e exclusivamente por eventuais demandas judiciais.</p>
              <p><strong>9.2</strong> Na medida máxima permitida pela legislação aplicável, nem a pessoa jurídica Você no Hype Marketing e entretenimento LTDA ("Você no Hype"), nem seu Ceo e funcionários, serão responsáveis por qualquer dano, perda, ou despesas de qualquer tipo resultantes das relações negociais entre anunciantes e influenciadores.</p>
              <p><strong>9.3</strong> Apesar de estarmos trabalhando constantemente para o aperfeiçoamento do Aplicativo, para que este funcione plenamente, Nós nos responsabilizamos por eventuais defeitos ou vícios, eventualmente encontrados no programa de computador que compõe Nosso Aplicativo, desde que tenha sido causado por Nós e que tenha sido comprovado o dano.</p>
              <p><strong>9.4</strong> Nós, não nos responsabilizamos, pelas negociações de publicidade, nem sobre as transações financeiras, ou qualquer tipo de relações comerciais e contratuais feitas entre anunciantes e influenciadores, bem como, nos eximimos de qualquer obrigação contratual, estabelecida entre os mesmos.</p>
              <p><strong>9.5</strong> Nós, não nos responsabilizamos, por eventuais prejuízos que influenciadores e anunciantes possam ter, decorrentes das negociações realizadas entre eles, não seremos responsáveis, por qualquer dano material, moral, ou lucros cessantes, que decorrerem dessas negociações.</p>
              <p><strong>9.6</strong> Nós, realizamos apenas a intermediação entre anunciantes e perfis de influenciadores, sendo assim, o Hype App, os anunciantes e os influenciadores, declaram ser independentes entre si, sem nenhuma relação societária ou comercial além da pactuada nestes Termos.</p>
              <p><strong>9.7</strong> Nós, nos responsabilizamos, nos limites e nos termos da lei, pelo Nosso conteúdo, no entanto, não nos responsabilizamos por conteúdo de terceiros.</p>
              <p><strong>9.8</strong> Nós, não nos responsabilizamos, pelo uso que os Usuários, possam eventualmente fazer de Nosso Aplicativo, cabendo a eles responderem exclusivamente por suas ações.</p>
              <p><strong>9.9</strong> Nós, não nos responsabilizamos por eventuais danos decorrentes de caso fortuito, força maior.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">10. PROPRIEDADE INTELECTUAL</h2>
            <div className="space-y-4">
              <p><strong>10.1</strong> O Usuário não adquire, por meio do presente Termos de Uso, nenhum direito de propriedade intelectual ou outros direitos exclusivos, incluindo, desenhos, marcas, direitos autorais, modelo de negócio, direito sobre informações confidenciais, ou segredos de negócio, sobre, ou relacionados ao Aplicativo, como a base de dados compostas por dados de Usuários, aos quais são de Nossa propriedade.</p>
              <p><strong>10.2</strong> O uso comercial da expressão "HYPE APP", ou suas derivações em relação a marca, nome empresarial, nome de domínio, bem como seu conteúdo, seus recursos tecnológicos, modelo de negócio, banco de dados, arquivos que permitem ao Usuário acessar a sua conta, são de Nossa titularidade, e estão protegidos pelas leis e tratados internacionais de direito autoral. O uso indevido e a reprodução total ou parcial dos referidos conteúdos são proibidos, salvo, com a Nossa prévia e expressa autorização por escrito.</p>
              <p><strong>10.3</strong> Qualquer conteúdo e recurso disponibilizado no Aplicativo, bem como toda e qualquer base de dados constituída por Nós, pertencem exclusivamente a Nós, e são protegidos pela lei brasileira, especialmente no que se refere à propriedade intelectual e direitos autorais.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">11. DA PROTEÇÃO DE DADOS PESSOAIS</h2>
            <div className="space-y-4">
              <p><strong>11.1</strong> O tratamento de dados pessoais dos Usuários está em conformidade com a Lei Federal n.13.709/2018 (Lei Geral de Proteção de Dados) e demais normas correlatas, que constam em documento próprio, denominado "Política de Privacidade" que regula o tratamento dado às informações e dados pessoais coletados através do Aplicativo.</p>
              <p><strong>11.2</strong> A Política de Privacidade é parte integrante e inseparável dos Termos de Uso, e pode ser acessada a partir do link: <Link to="/politica-de-privacidade" className="text-[#C9F05C] hover:underline">Política de Privacidade</Link>.</p>
              <p><strong>11.2.1</strong> Na Política de Privacidade, identificamos os dados pessoais que tratamos e prestamos informações, sobre como, por qual motivo e com qual fundamento legal o fazemos.</p>
              <p><strong>11.2.2</strong> Caso alguma disposição da "Política de Privacidade" conflitar com qualquer outra do presente documento, deverá prevalecer o descrito na norma mais específica.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">12. PROTEÇÃO DE REGISTROS, INFORMAÇÕES E COMUNICAÇÕES PRIVADAS</h2>
            <div className="space-y-4">
              <p><strong>12.1</strong> Nós, somente seremos obrigados a disponibilizar registros de acesso, informações pessoais ou comunicações privadas armazenadas no Aplicativo mediante ordem judicial ou a requisição de autoridade policial ou administrativa competente.</p>
              <p><strong>12.2</strong> Em todos os casos, Nós comunicaremos os Usuários da existência do pedido de revelação, ficando desde já autorizado a responder a requisição recebida.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">13. LINKS EXTERNOS</h2>
            <div className="space-y-4">
              <p><strong>13.1</strong> Nosso Aplicativo pode conter links externos, nos quais direciona o Usuário para outras páginas da internet, nos quais não exercemos controle, apesar de todas as medidas e esforços de prévias e regulares verificações, sendo assim, nos isentamos de qualquer responsabilidade sobre qualquer conteúdo encontrado nas páginas, que possam ser acessados a partir desses links.</p>
              <p><strong>13.2</strong> O Usuário está ciente e concorda com a existência desses links externos.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">14. DAS ALTERAÇÕES E MODIFICAÇÕES DO APLICATIVO</h2>
            <div className="space-y-4">
              <p><strong>14.1</strong> Nós, nos reservamos o direito de a qualquer momento modificar o Aplicativo, bem como os serviços, os recursos e normas, para adaptá-las de acordo com a evolução do Aplicativo, seja para melhorias, novas funcionalidades, ou mesmo para suprimir ou modificar as já existentes.</p>
              <p><strong>14.2</strong> A presente versão dos Termos e condições gerais de uso foi atualizada pela última vez em 27/04/2022.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">15. SERVIÇOS DE ATENDIMENTO AO USUÁRIO</h2>
            <div className="space-y-4">
              <p><strong>15.1</strong> Em caso de dúvidas, sugestões, elogios ou problemas com a utilização do Aplicativo, Nós possuímos uma equipe especializada e pronta para atender o Usuário, através de nossos serviços de atendimento, no endereço de e-mail: suporte@hypeapp.com.br ou do telefone: +551138345221.</p>
              <p><strong>15.2</strong> O Usuário poderá, ainda, optar por enviar correspondência ao endereço da sede do Aplicativo, informado no início deste documento.</p>
              <p><strong>15.3</strong> Estes serviços de atendimento ao Usuário estarão disponíveis:</p>
              <div className="ml-6">
                <p>● Segunda - Sexta - 10hrs às 18hrs</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">16. INFORMAÇÕES GERAIS</h2>
            <div className="space-y-4">
              <p><strong>16.1</strong> Nós, não nos responsabilizamos por qualquer dano ou prejuízo com envio de informações ou de conteúdo publicitário, que não tenham sido disparados pelo Nosso Aplicativo.</p>
              <p><strong>16.2</strong> Ao usar o Nosso Aplicativo e suas funcionalidades, os Usuários aceitam todo o disposto nos Termos de Uso e demais políticas legais que se encontram vigentes na data de acesso. Sendo assim, é recomendável que os Usuários se mantenham atualizados.</p>
              <p><strong>16.3</strong> Em caso de eventual tolerância, quanto a qualquer violação dos Termos de Uso, será considerada mera liberalidade e não será interpretada como novação, precedente, renúncia a direitos, alteração tácita dos Termos, direito adquirido ou alteração dos presentes Termos.</p>
              <p><strong>16.4</strong> Caso alguma disposição destes Termos de Uso for julgada inaplicável ou sem efeito, o restante das normas continua a viger, sem a necessidade de medida judicial que declare tal assertiva.</p>
              <p><strong>16.5</strong> O Usuário declara ter ciência dos direitos e obrigações decorrentes dos presentes Termos de Uso, tendo lido, compreendido e aceito todos os Termos e condições neles inseridos.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#FF3E94] mb-4">17. LEGISLAÇÃO E FORO</h2>
            <p className="leading-relaxed">
              Estes Termos de Uso, são regidos de acordo com a legislação brasileira, e sempre que possível, potenciais divergências entre Nós, e o Usuário, serão resolvidas de forma amigável, no entanto, quando todos os esforços neste sentido forem esgotados, e quaisquer disputas ou controvérsias oriundas de quaisquer atos praticados no âmbito da utilização do Aplicativos pelos Usuários, inclusive com relação ao descumprimento dos Termos de Uso ou pela violação dos direitos do Aplicativo, de outros Usuários e/ou de terceiros, incluindo direitos de propriedade intelectual, de sigilo e de personalidade, serão processadas na Comarca da Capital do Estado de São Paulo.
            </p>
          </section>

          <div className="bg-gradient-to-r from-[#C9F05C]/10 to-[#FF3E94]/10 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-[#C9F05C] mb-2">
              Nós do Hype App, desejamos a todos os Usuários uma excelente navegação.
            </h3>
            <p className="text-gray-300">
              Última atualização: 27 de Abril de 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
