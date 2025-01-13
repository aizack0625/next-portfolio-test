"use client";
import { useState } from "react";
import Image from "next/image";
import ParticlesBackground from '../../components/ParticlesBackground';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
// import SectionBackground from '@/components/SectionBackground';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const aboutsRef = useIntersectionObserver();
  const skillsRef = useIntersectionObserver();
  const worksRef = useIntersectionObserver();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lightParticleOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#FF33DE", "#00D1A0", "#4834A6", "#00E5E0", "#FF33DE", "#00D1A0", "#4834A6", "#00E5E0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#0000ff",
        opacity: 0.5,
        width: 1.1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "top",
        random: true,
        straight: false,
        outModes: "out",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    background: {
      color: "#000000",
      image: "radial-gradient(circle, #ffffff 0%, #333333 100%)",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };

  return (
    <main className="main-content">
      <link rel="icon" href="/images/favicon.ico" />
      <header className="header w-full">
        <div className="container mx-auto flex justify-between items-center px-4 relative ">
          <p className="logo">
            <a href="#">
              <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            </a>
          </p>

          <nav className={`menu ${isOpen ? 'open' : ''} md:static absolute right-0 top-full w-full md:w-auto bg-white`}>
            <ul className="menu-list">
              <li><a href="#" onClick={toggleMenu}>Home</a></li>
              <li><a href="#works" onClick={toggleMenu}>Works</a></li>
              <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#abouts" onClick={toggleMenu}>Abouts</a></li>
            </ul>
          </nav>

          <button
            className="hamburger md:hidden block"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </header>

      <section id="mv" className="min-h-[50vh] py-20 md:h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
        <ParticlesBackground options={lightParticleOptions} />
        <h1 className="mv_title text-2xl sm:text-4xl md:text-6xl font-bold mb-4 relative z-10">
          <span className="typing-animation">Tomoaki Aizawa</span>
        </h1>
        <p className="fade-in-animation text-lg sm:text-xl md:text-2xl text-gray-600 relative z-10">
          Frontend Developer
        </p>
      </section>

      <section
        ref={worksRef}
        id="works"
        className="sec section-hidden relative overflow-hidden min-h-screen py-20 bg-gradient-to-br from-[#fbfbfb] to-[#f0f0f0]"
      >
        <div className="absolute inset-0 z-0 cyber-grid"></div>
        <h2 className="section_title relative z-10 cyber-glitch" data-text="Works">Works</h2>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a
              href="https://aizack0625.github.io/rock-paper-scissors/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-animation block bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 shadow-blue-200/50 cyber-card max-w-sm mx-auto w-full h-full flex-col gap-4"
            >
              <div className="w-full relative">
                <Image
                  src="/images/janken.png"
                  alt="じゃんけんゲーム"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-400 pb-2">じゃんけんゲーム</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">シンプルで直感的な操作のじゃんけんゲームです。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">CSS</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://aizawa-quiz-app.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-animation block bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 shadow-blue-200/50 cyber-card max-w-sm mx-auto w-full h-full flex-col gap-4"
            >
              <div className="w-full relative">
                <Image
                  src="/images/quiz.png"
                  alt="クイズアプリ"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-400 pb-2">クイズアプリ</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">TypeScriptとReactで作成したクイズアプリです。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://takoyaki-portal.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-animation block bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 shadow-blue-200/50 cyber-card max-w-sm mx-auto w-full h-full flex-col gap-4"
            >
              <div className="w-full relative">
                <Image
                  src="/images/takoyaki.png"
                  alt="たこ焼き屋ポータルサイト"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-400 pb-2">たこ焼き屋ポータルサイト<br />(未完成)</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">たこ焼き屋の情報を投稿できるポータルサイトです。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Supabase</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        id="skills"
        className="sec section-hidden relative overflow-hidden min-h-screen py-20 bg-gradient-to-br from-[#222222] to-[#f5f5f5]"
      >
        <div className="absolute inset-0 z-0 cyber-lines"></div>
        <h2 className="section_title relative z-10 cyber-glitch text-white" data-text="Skills">Skills</h2>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 to-purple-500 text-transparent bg-clip-text">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            {[
              { icon: "devicon-html5-plain colored", name: "HTML" },
              { icon: "devicon-css3-plain colored", name: "CSS" },
              { icon: "devicon-javascript-plain colored", name: "JavaScript" },
              { icon: "devicon-typescript-plain colored", name: "TypeScript" },
              { icon: "devicon-react-original colored", name: "React" },
              { icon: "devicon-nextjs-original", name: "Next.js" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 flex flex-col items-center group hover:shadow-cyan-200/50 cyber-skill-card"
              >
                <i className={`${skill.icon} text-7xl mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-center mt-16 mb-8 bg-gradient-to-r from-blue-300 to-green-300 text-transparent bg-clip-text animate-gradient">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            {[
              { icon: "devicon-github-original colored", name: "GitHub" },
              { icon: "devicon-vscode-plain colored", name: "VSCode" },
              { icon: "devicon-figma-plain colored", name: "Figma" },
              { icon: "devicon-firebase-plain colored", name: "Firebase" },
              { icon: "devicon-materialui-plain colored", name: "MaterialUI" },
              { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 flex flex-col items-center group hover:shadow-cyan-200/50 cyber-skill-card"
              >
                <i className={`${tool.icon} text-7xl mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={aboutsRef}
        id="abouts"
        className="sec section-hidden relative overflow-hidden min-h-screen py-20 bg-gradient-to-br from-[#fafafa] to-[#f5f5f5]"
      >
        <div className="absolute inset-0 z-0 cyber-hexagons"></div>
        <h2 className="section_title relative z-10 cyber-glitch" data-text="Abouts">Abouts</h2>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-28">
            <div className="w-full md:w-1/2 cyber-image-container">
              <Image
                src="/images/Tomo2.png"
                alt="tomoaki image"
                width={400}
                height={400}
                className="mx-auto rounded-lg cyber-image"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 cyber-text">
              <h3 className="text-2xl font-bold cyber-heading">相澤 智明</h3>
              <p className="leading-relaxed cyber-paragraph">
                1999年生まれ<br />
                高校時代にC言語を学び、自分で入力したコードでシステムを動かせることでプログラミングに興味を持ちました。将来はwebサイトなどをつくるフロントエンドエンジニアになりたいと思っています。<br />
                高校の部活で登山部に所属し、県大会で準優勝をし、関東大会への出場や富士山登頂を達成することができました。部活動では、急な天候の変化や困難な地形に直面した際に、迅速に退避ルートの選定や安全確保の声かけを行うなどしてチームワークの大切さや問題解決能力を養うことができました。これらの経験を生かし、入社後は自己の成長とともに、お客様にも喜んでいただけるようなサービスを提供していきたいと思っています！
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </main>
  );
}
