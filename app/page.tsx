import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Users, Calendar, MessageCircle, MapPin, Star, Briefcase, GraduationCap, Lightbulb, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                🇲🇿 Feito para estudantes moçambicanos
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Conecte-se com<br />
              <span className="text-primary">
                Estudantes Moçambicanos
              </span><br />
              ao Redor do Mundo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A rede social exclusiva para estudantes moçambicanos no estrangeiro. 
              Partilhe experiências, encontre eventos e construa conexões.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#download"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Download App
              </a>
              <a 
                href="#features"
                className="px-8 py-4 border-2 border-border rounded-full hover:border-foreground transition-colors font-semibold text-lg"
              >
                Saber Mais
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
            <div className="relative flex items-center justify-center gap-8">
              {/* Left Image */}
              <div className="hidden lg:block w-64 h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-6 hover:rotate-3 transition-transform">
                <Image 
                  src="/02.png" 
                  alt="Feature" 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Center Image */}
              <div className="relative z-10 w-80 h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/01.png"
                  alt="Mozio App"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Image */}
              <div className="hidden lg:block w-64 h-[500px] rounded-2xl overflow-hidden shadow-2xl -rotate-6 hover:-rotate-3 transition-transform">
                <Image 
                  src="/03.png" 
                  alt="Feature" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-xl text-muted-foreground">
              Funcionalidades pensadas para a comunidade estudantil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Comunidades
              </h3>
              <p className="text-muted-foreground">
                Junte-se a comunidades por universidade, cidade ou país
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Eventos
              </h3>
              <p className="text-muted-foreground">
                Descubra e participe de eventos presenciais ou online
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Chat
              </h3>
              <p className="text-muted-foreground">
                Converse em tempo real com outros estudantes
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Proximidade
              </h3>
              <p className="text-muted-foreground">
                Encontre compatriotas perto de você
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Oportunidades
              </h3>
              <p className="text-muted-foreground">
                Descubra vagas de emprego, estágios e bolsas de estudo
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Mentorias
              </h3>
              <p className="text-muted-foreground">
                Conecte-se com mentores e partilhe conhecimento
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Recursos
              </h3>
              <p className="text-muted-foreground">
                Acesse guias, dicas e recursos para estudantes
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Networking
              </h3>
              <p className="text-muted-foreground">
                Expanda sua rede profissional e acadêmica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          <FeatureCard
            title="Partilhe experiências e conecte-se"
            description="Crie posts, partilhe fotos e interaja com outros estudantes moçambicanos. Construa uma rede de apoio forte, mesmo longe de casa."
            image="/04.png"
          />
          
          <FeatureCard
            title="Descubra eventos próximos"
            description="Encontre meetups, festas, sessões de estudo e eventos culturais. Filtre por data e país para descobrir oportunidades de networking."
            image="/05.png"
            reverse
          />
          
          <FeatureCard
            title="Junte-se a comunidades"
            description="Participe de grupos exclusivos da sua universidade ou cidade. Partilhe experiências acadêmicas e construa conexões duradouras."
            image="/02.png"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que dizem os estudantes
            </h2>
            <p className="text-xl text-muted-foreground">
              Feedback da nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                location: "Lisboa, Portugal",
                text: "O Mozio mudou completamente minha experiência no estrangeiro. Consegui encontrar outros moçambicanos e criar uma rede de amigos incrível!",
                rating: 5
              },
              {
                name: "João Macamo",
                location: "Londres, UK",
                text: "Excelente app para networking! Participei de vários eventos e conheci pessoas que se tornaram grandes amigos.",
                rating: 5
              },
              {
                name: "Maria Costa",
                location: "Toronto, Canadá",
                text: "Finalmente uma plataforma só para nós! É muito mais fácil encontrar eventos e conectar com compatriotas.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Baixe o App Agora
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Disponível para iOS e Android. Comece a conectar-se hoje!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://apps.apple.com/us/app/mozio/id6755781266"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity font-semibold"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.delfim.mozio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:opacity-90 transition-opacity font-semibold"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>

          <div className="relative max-w-sm mx-auto">
            <Image
              src="/03.png"
              alt="Download Mozio"
              width={300}
              height={600}
              className="mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
