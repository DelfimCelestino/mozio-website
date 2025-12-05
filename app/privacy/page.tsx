import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Mozio',
  description: 'Política de Privacidade do Mozio - Rede social para estudantes moçambicanos no estrangeiro',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mozio
              </span>
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: 5 de Dezembro de 2024
          </p>

          {/* Introdução */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introdução
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bem-vindo ao <strong>Mozio</strong>. Esta Política de Privacidade
              descreve como coletamos, usamos, armazenamos e protegemos suas
              informações pessoais quando você utiliza nossa plataforma - uma rede
              social dedicada a estudantes moçambicanos que estudam no estrangeiro.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ao usar o Mozio, você concorda com os termos desta Política de
              Privacidade. Se você não concordar com qualquer parte desta política,
              por favor, não utilize nossos serviços.
            </p>
          </section>

          {/* Informações Coletadas */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Informações que Coletamos
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Informações Fornecidas por Você
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Dados de Cadastro:</strong> Nome, sobrenome, email, senha,
                foto de perfil, foto de capa
              </li>
              <li>
                <strong>Informações Acadêmicas:</strong> Universidade, curso, país
                de origem, país atual
              </li>
              <li>
                <strong>Conteúdo:</strong> Posts, comentários, mensagens, fotos e
                outros conteúdos que você compartilha
              </li>
              <li>
                <strong>Documentos de Verificação:</strong> Comprovantes de
                estudante ou documentos acadêmicos (apenas para verificação de conta)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.2 Informações Coletadas Automaticamente
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Localização:</strong> Dados de geolocalização (com sua
                permissão) para conectar você com estudantes próximos
              </li>
              <li>
                <strong>Dados de Uso:</strong> Interações com a plataforma, posts
                visualizados, conexões realizadas
              </li>
              <li>
                <strong>Informações do Dispositivo:</strong> Tipo de dispositivo,
                sistema operacional, identificadores únicos
              </li>
              <li>
                <strong>Dados de Log:</strong> Endereço IP, horários de acesso,
                páginas visitadas
              </li>
            </ul>
          </section>

          {/* Como Usamos */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>
                Conectar você com outros estudantes moçambicanos no estrangeiro
              </li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Enviar notificações sobre atividades relevantes</li>
              <li>Verificar sua identidade como estudante moçambicano</li>
              <li>Detectar e prevenir fraudes e abusos</li>
              <li>Cumprir obrigações legais</li>
              <li>Comunicar atualizações e novidades da plataforma</li>
            </ul>
          </section>

          {/* Compartilhamento */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nós <strong>NÃO vendemos</strong> suas informações pessoais. Podemos
              compartilhar suas informações apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Com Outros Usuários:</strong> Informações do seu perfil
                público são visíveis para outros membros da comunidade
              </li>
              <li>
                <strong>Provedores de Serviços:</strong> Empresas que nos ajudam a
                operar a plataforma (hospedagem, análise, notificações push)
              </li>
              <li>
                <strong>Requisitos Legais:</strong> Quando exigido por lei ou para
                proteger direitos e segurança
              </li>
              <li>
                <strong>Com Seu Consentimento:</strong> Em outras situações com sua
                autorização explícita
              </li>
            </ul>
          </section>

          {/* Segurança */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger suas informações:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
              <li>Criptografia de senhas (bcrypt)</li>
              <li>Autenticação segura com JWT</li>
              <li>Armazenamento seguro em servidores protegidos</li>
              <li>Backups regulares</li>
              <li>Monitoramento de segurança contínuo</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              No entanto, nenhum método de transmissão pela internet é 100% seguro.
              Embora nos esforcemos para proteger suas informações, não podemos
              garantir segurança absoluta.
            </p>
          </section>

          {/* Seus Direitos */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você tem os seguintes direitos em relação aos seus dados:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Acesso:</strong> Solicitar cópia dos seus dados pessoais
              </li>
              <li>
                <strong>Correção:</strong> Atualizar informações incorretas ou
                incompletas
              </li>
              <li>
                <strong>Exclusão:</strong> Solicitar a exclusão da sua conta e dados
              </li>
              <li>
                <strong>Portabilidade:</strong> Receber seus dados em formato
                estruturado
              </li>
              <li>
                <strong>Oposição:</strong> Opor-se ao processamento de seus dados em
                certas situações
              </li>
              <li>
                <strong>Retirada de Consentimento:</strong> Retirar consentimento
                para processamento de dados
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Para exercer esses direitos, entre em contato conosco através do email:{' '}
              <a
                href="mailto:privacy@mozio.app"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                privacy@mozio.app
              </a>
            </p>
          </section>

          {/* Retenção de Dados */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Retenção de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantemos suas informações pessoais apenas pelo tempo necessário para:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Fornecer nossos serviços</li>
              <li>Cumprir obrigações legais</li>
              <li>Resolver disputas</li>
              <li>Fazer cumprir nossos acordos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Quando você exclui sua conta, removemos suas informações pessoais,
              exceto dados que precisamos manter por razões legais ou de segurança.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cookies e Tecnologias Similares
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Manter você conectado</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o uso da plataforma</li>
              <li>Melhorar a experiência do usuário</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Você pode controlar cookies através das configurações do seu navegador.
            </p>
          </section>

          {/* Menores de Idade */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Menores de Idade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O Mozio é destinado a estudantes universitários com 18 anos ou mais.
              Não coletamos intencionalmente informações de menores de 18 anos. Se
              você acredita que coletamos dados de um menor, entre em contato
              conosco imediatamente.
            </p>
          </section>

          {/* Transferências Internacionais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Transferências Internacionais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Como conectamos estudantes moçambicanos em diferentes países, suas
              informações podem ser transferidas e armazenadas em servidores
              localizados fora de Moçambique. Garantimos que essas transferências
              sejam realizadas com proteções adequadas.
            </p>
          </section>

          {/* Alterações */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Alterações nesta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos você sobre mudanças significativas através da plataforma
              ou por email. A data da "Última atualização" no topo desta página
              indica quando a política foi revisada pela última vez.
            </p>
          </section>

          {/* Contato */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Entre em Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a
              esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@mozio.app"
                  className="text-blue-600 hover:text-blue-700"
                >
                  privacy@mozio.app
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Suporte:</strong>{' '}
                <a
                  href="mailto:support@mozio.app"
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@mozio.app
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{' '}
                <a
                  href="https://mozio.app"
                  className="text-blue-600 hover:text-blue-700"
                >
                  https://mozio.app
                </a>
              </p>
            </div>
          </section>

          {/* Consentimento */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Consentimento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ao usar o Mozio, você consente com a coleta, uso e compartilhamento de
              suas informações conforme descrito nesta Política de Privacidade.
            </p>
          </section>

          {/* Footer da Página */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              <strong>Mozio</strong> - Conectando estudantes moçambicanos pelo mundo
              🇲🇿✨
            </p>
            <p className="text-center text-gray-500 text-sm mt-2">
              © 2024 Mozio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
