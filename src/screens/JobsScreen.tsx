import { useState } from 'react'

const jobs = [
  {
    id: 1,
    title: 'Desenvolvedora Front-End',
    company: 'Nubank',
    location: 'São Paulo, SP',
    type: 'Estágio',
    salary: 'R$ 2.800/mês',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=80&h=80&fit=crop&auto=format',
    color: '#8B5CF6',
    tags: ['React', 'TypeScript', 'CSS'],
    match: 94,
    description: 'Desenvolva interfaces que impactam milhões de usuários no maior banco digital do mundo. Trabalho remoto com mentoria técnica semanal.',
    posted: '2d atrás',
  },
  {
    id: 2,
    title: 'Analista de Dados Jr.',
    company: 'iFood',
    location: 'Campinas, SP · Híbrido',
    type: 'CLT',
    salary: 'R$ 4.200/mês',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop&auto=format',
    color: '#EC4899',
    tags: ['Python', 'SQL', 'Power BI'],
    match: 88,
    description: 'Analise grandes volumes de dados de pedidos para gerar insights estratégicos sobre o comportamento dos clientes.',
    posted: '1d atrás',
  },
  {
    id: 3,
    title: 'Designer de Produto',
    company: 'Totvs',
    location: 'Remoto',
    type: 'Estágio',
    salary: 'R$ 2.200/mês',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=80&h=80&fit=crop&auto=format',
    color: '#F59E0B',
    tags: ['Figma', 'UX Research', 'Prototipagem'],
    match: 91,
    description: 'Faça parte da equipe de design que cria soluções para mais de 50 mil empresas clientes no Brasil e na América Latina.',
    posted: '3d atrás',
  },
  {
    id: 4,
    title: 'Engenheiro de Machine Learning',
    company: 'Itaú BBA',
    location: 'São Paulo, SP',
    type: 'Trainee',
    salary: 'R$ 5.500/mês',
    logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=80&h=80&fit=crop&auto=format',
    color: '#10B981',
    tags: ['Python', 'TensorFlow', 'MLOps'],
    match: 79,
    description: 'Construa modelos de crédito e detecção de fraudes aplicando técnicas de IA em um dos maiores bancos de investimento da América Latina.',
    posted: '5d atrás',
  },
]

export default function JobsScreen() {
  const [cards, setCards] = useState(jobs)
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null)
  const [saved, setSaved] = useState<number[]>([])
  const [showMatch, setShowMatch] = useState(false)

  const topCard = cards[0]
  const nextCard = cards[1]

  const swipe = (dir: 'left' | 'right') => {
    if (!topCard) return
    if (dir === 'right') {
      setSaved(p => [...p, topCard.id])
      setShowMatch(true)
      setTimeout(() => setShowMatch(false), 1400)
    }
    setSwipeDir(dir)
    setTimeout(() => {
      setCards(p => p.slice(1))
      setSwipeDir(null)
    }, 280)
  }

  return (
    <div className="h-full flex flex-col bg-[#f4f3ff] overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-[#0f0d1a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Vagas para você</h2>
          <p className="text-[12px] text-[#6b7280]">{cards.length} oportunidades compatíveis</p>
        </div>
        <button className="relative w-10 h-10 rounded-xl bg-white border border-[#ddd6fe] flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#7c3aed] text-white text-[9px] font-bold flex items-center justify-center">3</span>
        </button>
      </div>

      {/* Cards area */}
      <div className="flex-1 relative flex items-start justify-center px-5 pt-2">
        {cards.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 mt-20">
            <div className="w-16 h-16 rounded-3xl bg-[#ede9fe] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <p className="text-[16px] font-semibold text-[#0f0d1a]">Você viu todas as vagas!</p>
            <p className="text-[13px] text-[#6b7280]">Novas oportunidades chegam todo dia</p>
          </div>
        ) : (
          <>
            {/* Background card (next) */}
            {nextCard && (
              <div className="absolute top-2 left-9 right-9 rounded-3xl bg-white shadow-md border border-[#ddd6fe] overflow-hidden" style={{ height: 380, transform: 'scale(0.95) translateY(8px)', zIndex: 1 }} />
            )}

            {/* Main card */}
            <div
              className={`absolute top-0 left-5 right-5 swipe-card ${swipeDir === 'left' ? 'swiping-left' : ''} ${swipeDir === 'right' ? 'swiping-right' : ''}`}
              style={{ zIndex: 2, height: 388 }}
            >
              <div className="w-full h-full rounded-3xl bg-white shadow-xl border border-[#ddd6fe] overflow-hidden flex flex-col">
                {/* Card header colored band */}
                <div className="h-28 relative flex items-end px-5 pb-4" style={{ background: `linear-gradient(135deg, ${topCard.color}22, ${topCard.color}44)` }}>
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: topCard.color + '22', color: topCard.color }}>
                    {topCard.match}% match
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-[#ddd6fe] overflow-hidden">
                    <img src={topCard.logo} alt={topCard.company} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-3">
                    <div className="text-[11px] font-semibold text-[#6b7280]">{topCard.company}</div>
                    <div className="text-[11px] text-[#9ca3af] flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {topCard.location}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: topCard.color + '22', color: topCard.color }}>{topCard.type}</span>
                  </div>
                </div>

                <div className="flex-1 px-5 pt-4 pb-3 flex flex-col">
                  <h3 className="text-[18px] font-bold text-[#0f0d1a] leading-tight mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{topCard.title}</h3>
                  <p className="text-[12px] text-[#6b7280] leading-relaxed mb-3">{topCard.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {topCard.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#ede9fe] text-[#7c3aed]">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[14px] font-bold text-[#0f0d1a]">{topCard.salary}</span>
                    <span className="text-[11px] text-[#9ca3af]">{topCard.posted}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Match toast */}
      {showMatch && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
          <span className="text-2xl">🎉</span>
          <span className="text-white font-bold text-[15px]">Candidatura enviada!</span>
        </div>
      )}

      {/* Action buttons */}
      {cards.length > 0 && (
        <div className="px-8 pb-4 flex items-center justify-center gap-5">
          <button
            onClick={() => swipe('left')}
            className="w-14 h-14 rounded-2xl bg-white border border-[#fecaca] shadow-md flex items-center justify-center transition-all active:scale-90 hover:bg-red-50"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <button
            className="w-12 h-12 rounded-xl bg-white border border-[#ddd6fe] shadow-sm flex items-center justify-center transition-all active:scale-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>

          <button
            onClick={() => swipe('right')}
            className="w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center transition-all active:scale-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        </div>
      )}

      {/* Swipe hints */}
      {cards.length > 0 && (
        <div className="flex justify-between px-8 pb-3 text-[10px] text-[#9ca3af]">
          <span>← Pular</span>
          <span>Candidatar →</span>
        </div>
      )}
    </div>
  )
}
