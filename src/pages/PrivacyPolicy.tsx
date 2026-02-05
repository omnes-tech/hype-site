
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-[#C9F05C] transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
          <img 
            src="/lovable-uploads/24a02f18-61cf-48b2-9d66-cad256a68099.png" 
            alt="HypeApp Logo" 
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#C9F05C]">
          POLÍTICA DE PRIVACIDADE
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed">
              Nós, do Você no Hype Marketing e Entretenimento LTDA, pessoa jurídica de direito 
              privado, inscrito no CNPJ n. 43.422.408.0001/26, com sede na cidade de São Paulo, 
              na avenida Cardeal Motta, 1057, Bairro: City América, CEP: 05101-210, Estado de 
              São Paulo, Brasil, levamos a sua privacidade e a proteção de seus dados a sério, e 
              possuímos o compromisso com a transparência e segurança de seus dados.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              De modo a tornar-se, ainda mais, transparente o que coletamos e como utilizamos, 
              apresentamos a Nossa Política De Privacidade, no qual, explicamos como tratamos 
              os seus dados pessoais, quais são os seus direitos e como você pode exercê-los, 
              agindo assim, em acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">1. DEFINIÇÕES</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">1.1 Para facilitar o entendimento da nossa Política De Privacidade, apresentamos algumas definições de termos usados nesta Política.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Dado Pessoal</h4>
                  <p className="text-gray-300">Informação relacionada a pessoa natural identificada ou identificável.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Dados sensíveis</h4>
                  <p className="text-gray-300">É o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou à organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Tratamento de dados pessoais</h4>
                  <p className="text-gray-300">Toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Controlador de dados pessoais</h4>
                  <p className="text-gray-300">Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Usuário</h4>
                  <p className="text-gray-300">Termo utilizado para identificar aquele que está usando o aplicativo.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#C9F05C]">Titular de dados</h4>
                  <p className="text-gray-300">Qualquer pessoa física que tenha seus dados tratados pelo Hype App</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">2. PRINCÍPIOS DO TRATAMENTO DE DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">2.1 O Hype App se compromete em cumprir a Lei Geral de Proteção de Dados e a cumprir o tratamento dos dados pessoais de seus Usuários com os seguintes princípios:</p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Com responsabilidade e segurança, protegendo cada dado pessoal fornecido pelo Usuário;</li>
                <li>Apenas com as finalidades determinadas nesta Política;</li>
                <li>Com transparência, garantindo aos titulares de dados, o acesso, a quais dados coletamos, e de qual forma tratamos e processamos esses dados;</li>
                <li>Com segurança, por meio de adoção de medidas técnicas, aptas a proteger os dados pessoais, prevenindo danos de eventuais acessos não autorizados, ou de qualquer situação ilícita de violação de dados;</li>
                <li>Faremos a gestão do tratamento dos dados pessoais, durante o ciclo de vida dessas informações;</li>
                <li>Não haverá em hipótese alguma, tratamento de dados para fins discriminatórios ou abusivos.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">3. POR QUE TRATAMOS OS SEUS DADOS PESSOAIS?</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">3.1 Coletamos e usamos Dados Pessoais, para gerenciar seu relacionamento conosco, e para atender de forma transparente e eficaz, para que você possa usufruir com segurança e privacidade o nosso aplicativo e seus recursos, personalizando e melhorando a sua experiência. A coleta de dados se dá no momento em que o Usuário realiza o seu cadastro em nosso Aplicativo "Hype App".</p>
              
              <p className="text-gray-300 mb-3">Exemplos de como usamos os dados incluem:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
                <li>Para a realização do cadastro em Nosso aplicativo e sua manutenção;</li>
                <li>Para que o Usuário esteja visível em nosso catálogo;</li>
                <li>Para que o Usuário receba novas campanhas e atualizações;</li>
                <li>Viabilizar que você use os recursos disponibilizados pelo aplicativo;</li>
                <li>Para o cadastro do perfil das redes sociais;</li>
                <li>Para o pagamento de campanhas realizadas;</li>
                <li>Para que influenciadores e anunciantes se conectem;</li>
                <li>Para podermos enviar nossas promoções aos Usuários cadastrados;</li>
                <li>Para confirmar ou corrigir as informações que temos sobre você;</li>
                <li>Para personalizar e levar uma melhor experiência a você;</li>
                <li>Para enviar informações de seu interesse;</li>
                <li>Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido.</li>
              </ul>
              
              <p className="text-gray-300">3.2 Os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada nos termos das Leis de Proteção de Dados, para atender exigências de processo judicial, para cumprir decisão judicial, para aplicar nossos Termos e Condições de Uso, para proteger nossas operações e direitos, e para detectar e prevenir fraude.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">4. NÃO FORNECIMENTO DE DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">4.1 Você não é obrigado a compartilhar os dados pessoais que solicitamos, no entanto, se você optar em não compartilhar, em alguns casos, não poderemos fornecer a você o acesso completo de todos os recursos e benefícios disponibilizados pelo aplicativo, tampouco, seremos capazes de disponibilizar recursos específicos.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">5. DADOS COLETADOS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">5.1 Para que você possa ter acesso a todos os recursos disponibilizados pelo aplicativo, será necessário o fornecimento e envio de dados pessoais.</p>
              <p className="text-gray-300 mb-3">5.2 Ao realizar um contato, ou para realização do cadastro coletamos os seguintes dados:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Nome completo</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">E-mail</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">CPF</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Data de nascimento</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Número de telefone</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">CEP</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Estado</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Cidade</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Bairro</span>
                </div>
                <div className="bg-[#C9F05C]/10 rounded-lg p-3 text-center">
                  <span className="text-[#C9F05C] font-medium">Chave PIX</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">6. OUTROS DADOS COLETADOS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-3">6.1 Para o cadastro do perfil das redes sociais, serão solicitados métricas do perfil influenciador como:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
                <li>Nome do Usuário;</li>
                <li>Número de seguidores;</li>
                <li>Link do perfil;</li>
                <li>Alcance de Publicações;</li>
                <li>Informações demográficas do público;</li>
                <li>Faixa etária do público;</li>
                <li>Gênero do público;</li>
              </ul>
              
              <p className="text-gray-300 mb-3">6.2 Na navegação geral do aplicativo, poderemos coletar os seguintes dados:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Dados de localização e geolocalização;</li>
                <li>Informações sobre suas preferências e interesses;</li>
                <li>Informações sobre suas visitas e atividades no aplicativo;</li>
                <li>Endereço de IP;</li>
                <li>Horário ativo no aplicativo;</li>
                <li>Outras informações que não revelem especificamente a sua identidade.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">7. COLETA DE DADOS PESSOAIS SENSÍVEIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">7.1 Nós, não coletamos dados pessoais sensíveis;</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">8. FUNDAMENTOS LEGAIS PARA O TRATAMENTO DOS DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">8.1 O Tratamento de dados pessoais realizado pelo Hype App, está amparado nas seguintes hipóteses prevista em Lei:</p>
              
              <ul className="list-none space-y-2 text-gray-300">
                <li>(i) Para o cumprimento de obrigação legal, ou regulatória pelo controlador;</li>
                <li>(ii) Pela administração pública, para o tratamento e uso compartilhado de dados necessários a execução de políticas públicas;</li>
                <li>(iii) Para a execução de contratos ou de procedimentos preliminares relacionados a contratos;</li>
                <li>(iv) Para o exercício regular de direitos em processo judicial, administrativo ou arbitral;</li>
                <li>(v) Para a proteção da vida ou da incolumidade física do titular ou de terceiros;</li>
                <li>(vi) Quando necessário para atender os interesses legítimos do controlador, ou de terceiros.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">9. COMPARTILHAMENTO DE DADOS PESSOAIS COM TERCEIROS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">9.1 O Hype App compartilha seus dados pessoais com terceiros, sempre dentro dos limites, e propósitos do negócio e sempre quando forem necessárias, e em acordo com a legislação vigente:</p>
              
              <ul className="list-none space-y-2 text-gray-300">
                <li>(i) Poderemos compartilhar os seus dados pessoais com empresas que desejam contratar a divulgação dos influenciadores;</li>
                <li>(ii) Para a prestação adequada dos serviços objeto de nossas atividades com empresas parceiras;</li>
                <li>(iii) Proteção em caso de conflitos;</li>
                <li>(iv) Mediante decisão judicial, ou requisição de autoridade competente;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">10. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">10.1 Os dados pessoais e informações de outras natureza coletadas pelo aplicativo Hype App, são armazenados e coletados por nossos servidores localizados geograficamente no Brasil, no entanto, alguns de nossos usuários, sendo eles empresas, e marcas, poderão livremente usufruir dos recursos do nosso aplicativo, para realizar acordos e negociações de publicidade, com os influenciadores que constam em nosso catálogo, podendo estes, serem de origem internacional, portanto, nesses casos específicos, poderá haver o compartilhamento de dados pessoais.</p>
              
              <p className="text-gray-300 mb-4">10.2 Ao se cadastrar em nosso aplicativo, e fazer uso de seus recursos e tecnologias, e/ou se comunicar conosco, você concorda com o tratamento de suas informações, inclusive a transferência internacional de dados, quando necessário.</p>
              
              <p className="text-gray-300">10.3 Adotamos medidas para garantir que quaisquer informações coletadas, sejam tratadas com segurança, conforme padrões de proteção de dados e de acordo com esta Política De Privacidade.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">11. FORMA DE COLETA DE DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">11.1 Você nos fornece seus dados:</p>
              <p className="text-gray-300 mb-4">(i) Quando você acessa e se cadastra no nosso aplicativo, e utiliza os recursos nele disponíveis, quando você entra em contato com um de nossos canais de atendimento, como e-mail e telefone.</p>
              <p className="text-gray-300 mb-4">(ii) Nós coletamos os seus dados de forma automática:</p>
              <p className="text-gray-300">(iii) Quando você acessa, e utiliza o nosso aplicativo, bem como os nossos recursos, nós poderemos armazenar ou recuperar informações sobre seus dados e sobre o seu comportamento ao fazer uso do aplicativo. Essas informações podem ser sobre você, suas preferências, e seu dispositivo, e são usadas principalmente para que o aplicativo e os recursos nele disponíveis funcionem como você espera.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">12. PRAZO DE RETENÇÃO E DESCARTE DOS DADOS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">12.1 Os dados pessoais coletados e tratados pelo Hype App, serão eliminados quando deixarem de ser úteis, pelos fins para quais foram coletados, ou para cumprir obrigações legais e continuar a oferecer e aprimorar os serviços e recursos, e enquanto o aplicativo estiver sendo disponibilizado.</p>
              <p className="text-gray-300">12.2 Quando não mais necessário, o descarte de dados será realizado em conformidade com as disposições legais.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">13. SEGURANÇA DOS DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">13.1 Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados, adequadas para proteção dos Dados Pessoais no nosso aplicativo. Assim, implementamos tecnologias e políticas com o objetivo de proteger a sua privacidade contra o acesso não autorizado e o uso indevido. Possuímos medidas de segurança da informação, com codificação pensadas exclusivamente para prever as vulnerabilidades mais conhecidas, onde o tráfego de dados está sobre certificado SSL.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">14. DIREITOS DO TITULAR DE DADOS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">14.1 A partir do momento da vigência da Lei Geral de Proteção de Dados (Lei 13.709/2018), o titular de dados pessoais, terá o direito de obter do aplicativo Hype App, a qualquer momento, mediante requisição formal, informações referentes aos seus dados.</p>
              
              <p className="text-gray-300 mb-4">14.2 O Hype App terá 15 dias para responder às solicitações dos titulares. Os pedidos serão analisados conforme previsto em legislação vigente, e por questões legais, algumas solicitações podem não ser atendidas.</p>
              
              <p className="text-gray-300 mb-3">14.3 Os titulares de dados, segundo o texto da Lei Geral de Proteção De Dados, podem exercer os seus direitos por meio de:</p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>(i) Confirmação da existência de tratamento;</li>
                <li>(ii) Acesso de dados;</li>
                <li>(iii) Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>(iv) Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>(v) Portabilidade dos dados a outro fornecedor de serviços;</li>
                <li>(vi) Eliminação de dados pessoais tratados com o consentimento do titular;</li>
                <li>(vii) Informação sobre a possibilidade de não fornecer consentimento;</li>
                <li>(viii) Revogação do consentimento;</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">15. LINKS DE HIPERTEXTO</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">15.1 Ao usar o Aplicativo Hype App, poderão, de tempos a tempos, conter links de hipertexto que poderá redirecionar você, para sites, propagandas e outros aplicativos, se você clicar em um desses links, não seremos responsáveis pelos Dados Pessoais eventualmente coletados por eles.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">16. USO DO APLICATIVO POR MENORES DE IDADE</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">16.1 O uso do Aplicativo deverá ser necessariamente feito por pessoas maiores de 18 (dezoito) anos, ou regularmente emancipada, portanto coletamos os dados pessoais apenas de pessoas com essa faixa etária, ou sendo o menor emancipado.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">17. ATUALIZAÇÕES DESTA POLÍTICA DE PRIVACIDADE</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">17.1 O Hype App, poderá alterar esta Política de Privacidade a qualquer momento e sempre que alguma condição relevante desta Política de Privacidade for alterada, essas alterações serão válidas, eficazes e vinculantes após a nova versão ser divulgada no nosso aplicativo ou enviada por e-mail para você.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">18. ENCARREGADO DO TRATAMENTO DOS DADOS PESSOAIS</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4">18.1 Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao tratamento de seus Dados Pessoais, você pode contactar nosso encarregado de proteção de dados:</p>
              
              <div className="bg-[#C9F05C]/10 rounded-lg p-4 border border-[#C9F05C]/20">
                <p className="text-[#C9F05C] font-medium">Contato:</p>
                <p className="text-gray-300">E-mail: suporte@hypeapp.com.br</p>
                <p className="text-gray-300">Telefone: +55 11 3834-5221</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">19. LEGISLAÇÃO E FORO</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">19.1 Esta política será regida, interpretada e executada de acordo com as Leis da República Federativa do Brasil, especialmente a Lei nº 13.709/2018, independentemente das Leis de outros estados ou países, sendo competente o foro da comarca da cidade de São Paulo/SP, para dirimir qualquer dúvida decorrente deste documento.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#FF3E94]">20. ÚLTIMA ATUALIZAÇÃO</h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <p className="text-gray-300">20.1 Última atualização: 28 de Abril de 2022.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
