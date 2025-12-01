# 📱 Mozio Frontend - App Mobile

Aplicativo mobile da plataforma **Mozio** - Rede social para estudantes moçambicanos no estrangeiro.

## 🇲🇿 Sobre o Mozio

O **Mozio** é uma plataforma social dedicada a **estudantes moçambicanos que estudam no estrangeiro**. O app permite que estes estudantes se conectem, troquem experiências, se encontrem, participem de eventos e construam uma comunidade forte, mesmo longe de casa.

### 🎯 Missão

Facilitar a conexão e integração de estudantes moçambicanos espalhados pelo mundo, criando uma rede de apoio, partilha de experiências e oportunidades de networking.

### ✨ Funcionalidades

#### 👥 **Perfil & Conexões**
- Perfil personalizado com foto e informações acadêmicas
- Sistema de conexões entre estudantes
- **Detecção de proximidade** - Descubra compatriotas perto de você
- Feed personalizado de atividades

#### 🏘️ **Comunidades**
- Comunidades por universidade, cidade ou país
- Comunidades públicas e privadas
- Posts exclusivos da comunidade
- Sistema de solicitação de entrada
- Partilha de experiências acadêmicas

#### 📅 **Eventos**
- Criação e descoberta de eventos
- Eventos presenciais ou online
- **Filtros por data e país**
- Sistema de participação
- Ideal para: meetups, festas, sessões de estudo

#### 📝 **Feed Social**
- Posts com texto e imagens
- Curtidas, comentários e compartilhamentos
- Salvamento de posts favoritos
- Feed de comunidades

#### 🔔 **Notificações**
- Notificações em tempo real
- Alertas de conexões, eventos e comunidades
- Ações diretas (aceitar/rejeitar)

#### 💬 **Chat**
- Mensagens privadas
- Conversas em tempo real
- Networking facilitado

## 🚀 Começar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo CLI
- iOS Simulator (Mac) ou Android Emulator

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd Mozio/frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o backend**
   
   Edite `lib/api/config.ts` e configure a URL do backend:
   ```typescript
   const API_URL = 'http://SEU_IP:4005/api';
   ```

4. **Inicie o app**
   ```bash
   npx expo start
   ```

5. **Execute no dispositivo**
   - Pressione `i` para iOS Simulator
   - Pressione `a` para Android Emulator
   - Escaneie o QR code com Expo Go no seu dispositivo físico

## 📂 Estrutura do Projeto

```
frontend/
├── app/                     # Telas (Expo Router)
│   ├── (tabs)/             # Navegação por tabs
│   │   ├── index.tsx       # Home - Feed
│   │   ├── events.tsx      # Eventos
│   │   ├── communities.tsx # Comunidades
│   │   ├── chats.tsx       # Conversas
│   │   └── profile.tsx     # Perfil
│   ├── auth/               # Autenticação
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── event/              # Eventos
│   │   ├── create.tsx
│   │   └── [id].tsx
│   ├── community/          # Comunidades
│   │   ├── create.tsx
│   │   └── [id].tsx
│   ├── notification/       # Notificações
│   │   └── [id].tsx
│   └── _layout.tsx
├── components/             # Componentes reutilizáveis
│   ├── CountryPicker.tsx
│   ├── EventCard.tsx
│   └── ...
├── screens/               # Telas complexas
│   ├── EventsScreen.tsx
│   ├── EventDetailScreen.tsx
│   └── ...
├── hooks/                 # Custom hooks
│   ├── useAuth.ts
│   ├── useEvents.ts
│   ├── useCommunity.ts
│   └── ...
├── lib/                   # Bibliotecas
│   └── api/
│       └── config.ts      # Configuração da API
├── theme/                 # Sistema de design
│   └── index.ts
└── utils/                 # Utilitários
    ├── countryHelpers.ts
    └── ...
```

## 🎨 Design System

### Tema
- **Suporte a Dark Mode** completo
- Cores adaptativas para Light/Dark
- Componentes consistentes

### Componentes Principais
- `EventCard` - Card de evento
- `CommunityCard` - Card de comunidade
- `PostCard` - Card de post
- `CountryPicker` - Seletor de país (193 países)
- `NotificationCard` - Card de notificação

## 🛠️ Tecnologias

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Router** - Navegação file-based
- **React Query** - Gerenciamento de estado e cache
- **Axios** - Cliente HTTP
- **date-fns** - Manipulação de datas
- **Expo Image Picker** - Seleção de imagens

## 🌍 Funcionalidades Especiais

### Filtros de Eventos
- **Por Data**: Hoje, Esta semana, Este mês, Próximos eventos
- **Por País**: 193 países disponíveis
- Badge mostrando filtros ativos

### Sistema de Notificações
- Notificações tipadas por ação
- Ícones específicos por tipo
- Confirmação antes de aceitar/rejeitar
- Mensagens de erro detalhadas

### Detecção de Proximidade
- Encontre estudantes moçambicanos perto de você
- Baseado em geolocalização

## 🎯 Roadmap

- [x] Autenticação
- [x] Perfis de usuário
- [x] Feed de posts
- [x] Comunidades
- [x] Eventos com filtros
- [x] Notificações
- [x] Chat
- [ ] Notificações push
- [ ] Modo offline
- [ ] Busca avançada
- [ ] Compartilhamento externo
- [ ] Suporte a vídeos
- [ ] Stories

## 👥 Contribuir

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 💬 Contato

**Mozio** - Conectando estudantes moçambicanos pelo mundo 🇲🇿✨

---

Desenvolvido com ❤️ para a comunidade estudantil moçambicana
