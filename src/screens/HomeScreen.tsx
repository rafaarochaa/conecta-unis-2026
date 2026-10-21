import { FormEvent, useState } from 'react'

interface Props {
  onEnter: () => void
}

export default function HomeScreen({ onEnter }: Props) {
  const [mode, setMode] = useState<'welcome' | 'signup' | 'login'>('welcome')
  const [showPassword, setShowPassword] = useState(false)

  const openAuth = (nextMode: 'signup' | 'login') => {
    setShowPassword(false)
    setMode(nextMode)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onEnter()
  }

  if (mode !== 'welcome') {
    const isSignup = mode === 'signup'

    return (
      <div
        className="h-full flex flex-col overflow-y-auto text-white"
        style={{ background: 'linear-gradient(160deg, #1e1240 0%, #3b0764 50%, #5b21b6 100%)' }}
      >
        <div className="px-6 pt-4 pb-8 flex-1 flex flex-col">
          <button
            type="button"
            onClick={() => setMode('welcome')}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 bg-white/10 transition-all active:scale-95"
            aria-label="Voltar para a tela inicial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mt-8 mb-8">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10 mb-5">
              <svg width="27" height="27" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <circle cx="22" cy="22" r="14" stroke="white" strokeWidth="2.5" />
                <path d="M16 22H28M22 16V28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="34" cy="10" r="4" fill="#a78bfa" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-violet-200 mb-2">
              {isSignup ? 'Comece sua jornada' : 'Que bom ter você de volta'}
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-tight">
              {isSignup ? 'Crie sua conta' : 'Entre na sua conta'}
            </h1>
            <p className="text-sm text-white/55 mt-3 leading-relaxed">
              {isSignup
                ? 'Monte seu perfil e encontre oportunidades que combinam com você.'
                : 'Acesse suas vagas, conversas e conexões.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isSignup && (
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-white/70">Nome completo</span>
                <span className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 focus-within:border-violet-300/70 focus-within:bg-white/15 transition-colors">
                  <svg className="text-white/45 shrink-0" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4.5 20C5.4 16.5 8.1 14.5 12 14.5C15.9 14.5 18.6 16.5 19.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Como você quer ser chamado?"
                    className="w-full py-4 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
                  />
                </span>
              </label>
            )}

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white/70">E-mail</span>
              <span className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 focus-within:border-violet-300/70 focus-within:bg-white/15 transition-colors">
                <svg className="text-white/45 shrink-0" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 7L10.2 12.1C11.25 12.95 12.75 12.95 13.8 12.1L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="voce@universidade.edu.br"
                  className="w-full py-4 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
                />
              </span>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white/70">Senha</span>
              <span className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 focus-within:border-violet-300/70 focus-within:bg-white/15 transition-colors">
                <svg className="text-white/45 shrink-0" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 10V7.5C8 5.01 9.79 3 12 3C14.21 3 16 5.01 16 7.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  required
                  minLength={6}
                  placeholder={isSignup ? 'Mínimo de 6 caracteres' : 'Digite sua senha'}
                  className="min-w-0 flex-1 py-4 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(value => !value)}
                  className="text-xs font-semibold text-violet-200 shrink-0"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </span>
            </label>

            {!isSignup && (
              <button type="button" className="self-end text-xs font-semibold text-violet-200 -mt-1">
                Esqueci minha senha
              </button>
            )}

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-950/40 transition-all active:scale-[0.98]"
            >
              {isSignup ? 'Criar conta e continuar' : 'Entrar'}
            </button>
          </form>

          <p className="mt-auto pt-7 text-center text-xs text-white/45">
            {isSignup ? 'Já tem uma conta?' : 'Ainda não tem conta?'}{' '}
            <button
              type="button"
              onClick={() => openAuth(isSignup ? 'login' : 'signup')}
              className="font-bold text-violet-200"
            >
              {isSignup ? 'Entrar' : 'Criar agora'}
            </button>
          </p>
        </div>
        <div className="h-1 shrink-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600" />
      </div>
    )
  }

  return (
    <div
      className="h-full flex flex-col overflow-y-auto"
      style={{ background: 'linear-gradient(160deg, #1e1240 0%, #3b0764 50%, #5b21b6 100%)' }}
    >
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8 pb-4 text-center">
        {/* Logo mark */}
        <div className="mb-6 relative">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M22 8C14.27 8 8 14.27 8 22C8 29.73 14.27 36 22 36C29.73 36 36 29.73 36 22C36 14.27 29.73 8 22 8Z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 22H28M22 16V28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="34" cy="10" r="4" fill="#a78bfa"/>
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#a78bfa] border-2 border-[#3b0764]" />
        </div>

        <h1 className="text-[36px] font-extrabold leading-[1.1] text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Conecta<span className="text-[#c4b5fd]">Unis</span>
        </h1>

        <p className="text-[15px] text-white/70 leading-relaxed mb-2 max-w-[280px]">
          O elo entre o seu talento universitário e as melhores oportunidades do mercado.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 justify-center mt-6 mb-8">
          {['Estágios', 'Trainee', 'Júnior', 'Freelance'].map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full text-[12px] font-semibold text-white border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-3 mb-10">
          {[
            { value: '12k+', label: 'Vagas ativas' },
            { value: '840+', label: 'Empresas' },
            { value: '98k', label: 'Estudantes' },
          ].map(stat => (
            <div key={stat.label} className="rounded-2xl p-3" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
              <div className="text-[20px] font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.value}</div>
              <div className="text-[10px] text-white/50 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => openAuth('signup')}
            className="w-full py-4 rounded-2xl text-[15px] font-bold text-white transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 8px 24px rgba(124,58,237,0.5)' }}
          >
            Criar minha conta
          </button>
          <button
            onClick={() => openAuth('login')}
            className="w-full py-4 rounded-2xl text-[15px] font-semibold border border-white/20 text-white transition-all active:scale-95"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            Já tenho conta — Entrar
          </button>
        </div>

        <p className="mt-5 text-[11px] text-white/30">
          Ao continuar, você aceita nossos Termos de Uso
        </p>
      </div>

      {/* Bottom decoration */}
      <div className="h-1 shrink-0" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed)' }} />
    </div>
  )
}
