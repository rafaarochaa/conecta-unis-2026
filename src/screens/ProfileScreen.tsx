interface Props {
  onEdit: () => void
}

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'SQL', 'Git']
const interests = ['Fintech', 'Produto', 'UX', 'IA', 'Startups']

export default function ProfileScreen({ onEdit }: Props) {
  return (
    <div className="h-full overflow-y-auto bg-[#f4f3ff]">
      {/* Header */}
      <div className="relative">
        <div className="h-24 w-full" style={{ background: 'linear-gradient(135deg, #1e1240, #5b21b6)' }} />
        <div className="absolute top-3 right-4 flex gap-2">
          <button onClick={onEdit} className="px-3 py-1.5 rounded-xl text-[12px] font-semibold text-white border border-white/30 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Editar
          </button>
        </div>

        <div className="px-5 pb-4">
          <div className="relative -mt-10 mb-3">
            <div className="w-20 h-20 rounded-3xl border-4 border-white shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&auto=format" alt="Larissa" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-auto left-14 w-5 h-5 rounded-full bg-green-400 border-2 border-white" />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[20px] font-bold text-[#0f0d1a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Larissa Fernandes</h2>
              <p className="text-[13px] text-[#6b7280]">Ciência da Computação · USP</p>
              <div className="flex items-center gap-1 mt-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-[11px] text-[#9ca3af]">São Paulo, SP</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[24px] font-extrabold text-[#7c3aed]" style={{ fontFamily: 'Outfit, sans-serif' }}>87</div>
              <div className="text-[9px] text-[#9ca3af] uppercase tracking-wide">Perfil score</div>
            </div>
          </div>

          <p className="mt-3 text-[13px] text-[#374151] leading-relaxed">
            Desenvolvedora apaixonada por criar experiências digitais. 7° semestre, buscando estágio em produto ou engenharia. Projetos em React e Python.
          </p>

          {/* CTA row */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 rounded-xl text-[12px] font-semibold text-white text-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
              Ver currículo
            </button>
            <button className="flex-1 py-2 rounded-xl text-[12px] font-semibold text-[#7c3aed] bg-[#ede9fe] border border-[#ddd6fe] text-center">
              Compartilhar
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mx-5 mb-4 grid grid-cols-3 gap-2">
        {[
          { value: '12', label: 'Candidaturas' },
          { value: '4', label: 'Entrevistas' },
          { value: '98%', label: 'Resposta' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-3 text-center border border-[#ddd6fe]">
            <div className="text-[18px] font-bold text-[#7c3aed]" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.value}</div>
            <div className="text-[10px] text-[#9ca3af]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Competências */}
      <div className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-[#ddd6fe]">
        <h3 className="text-[14px] font-bold text-[#0f0d1a] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Competências</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#ede9fe] text-[#7c3aed]">{s}</span>
          ))}
        </div>
      </div>

      {/* Interesses */}
      <div className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-[#ddd6fe]">
        <h3 className="text-[14px] font-bold text-[#0f0d1a] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Interesses</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map(i => (
            <span key={i} className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#fdf4ff] text-[#a855f7] border border-[#e9d5ff]">{i}</span>
          ))}
        </div>
      </div>

      {/* Experiência */}
      <div className="mx-5 mb-4 bg-white rounded-2xl p-4 border border-[#ddd6fe]">
        <h3 className="text-[14px] font-bold text-[#0f0d1a] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Experiência</h3>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#ede9fe] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#0f0d1a]">Estagiária de Desenvolvimento</p>
            <p className="text-[12px] text-[#6b7280]">Stefanini Group</p>
            <p className="text-[11px] text-[#9ca3af]">Jan 2024 – Jul 2024 · 7 meses</p>
          </div>
        </div>
      </div>

      {/* Formação */}
      <div className="mx-5 mb-6 bg-white rounded-2xl p-4 border border-[#ddd6fe]">
        <h3 className="text-[14px] font-bold text-[#0f0d1a] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Formação</h3>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#ede9fe] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#0f0d1a]">Ciência da Computação</p>
            <p className="text-[12px] text-[#6b7280]">Universidade de São Paulo (USP)</p>
            <p className="text-[11px] text-[#9ca3af]">2022 – 2026 · 7° semestre</p>
          </div>
        </div>
      </div>
    </div>
  )
}
