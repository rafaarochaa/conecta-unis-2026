import { useState } from 'react'

interface Props {
  onBack: () => void
}

type Section = 'about' | 'skills' | 'experience' | 'education' | 'interests'

const sections: { id: Section; label: string; icon: JSX.Element }[] = [
  { id: 'about', label: 'Sobre mim', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { id: 'skills', label: 'Competências', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { id: 'experience', label: 'Experiência', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
  { id: 'education', label: 'Formação', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { id: 'interests', label: 'Interesses', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
]

export default function EditProfileScreen({ onBack }: Props) {
  const [active, setActive] = useState<Section>('about')
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name: 'Larissa Fernandes',
    headline: 'Desenvolvedora apaixonada por criar experiências digitais',
    location: 'São Paulo, SP',
    bio: 'Desenvolvedora apaixonada por criar experiências digitais. 7° semestre, buscando estágio em produto ou engenharia. Projetos em React e Python.',
    skills: 'React, TypeScript, Node.js, Python, Figma, SQL, Git',
    expTitle: 'Estagiária de Desenvolvimento',
    expCompany: 'Stefanini Group',
    expPeriod: 'Jan 2024 – Jul 2024',
    eduCourse: 'Ciência da Computação',
    eduInstitution: 'Universidade de São Paulo (USP)',
    eduPeriod: '2022 – 2026',
    interests: 'Fintech, Produto, UX, IA, Startups',
  })

  const save = () => {
    setSaved(true)
    setTimeout(() => { setSaved(false); onBack() }, 1200)
  }

  const field = (label: string, key: keyof typeof form, multiline = false) => (
    <div className="mb-4">
      <label className="block text-[11px] font-semibold text-[#6b7280] uppercase tracking-wide mb-1.5">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          value={form[key]}
          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          className="w-full px-4 py-3 rounded-2xl bg-[#f4f3ff] border border-[#ddd6fe] text-[13px] text-[#0f0d1a] outline-none focus:border-[#7c3aed] resize-none leading-relaxed"
        />
      ) : (
        <input
          value={form[key]}
          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          className="w-full px-4 py-3 rounded-2xl bg-[#f4f3ff] border border-[#ddd6fe] text-[13px] text-[#0f0d1a] outline-none focus:border-[#7c3aed]"
        />
      )}
    </div>
  )

  const renderSection = () => {
    switch (active) {
      case 'about':
        return (
          <>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#ddd6fe]">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&auto=format" alt="avatar" className="w-full h-full object-cover" />
              </div>
              <button className="px-4 py-2 rounded-xl border border-[#ddd6fe] text-[12px] font-semibold text-[#7c3aed] bg-[#ede9fe]">
                Alterar foto
              </button>
            </div>
            {field('Nome completo', 'name')}
            {field('Título profissional', 'headline')}
            {field('Cidade / Estado', 'location')}
            {field('Sobre mim', 'bio', true)}
          </>
        )
      case 'skills':
        return (
          <>
            <p className="text-[12px] text-[#6b7280] mb-4 leading-relaxed">Liste suas habilidades técnicas separadas por vírgula. Elas aparecem como tags no seu perfil.</p>
            {field('Habilidades (separadas por vírgula)', 'skills', true)}
            <div className="flex flex-wrap gap-2">
              {form.skills.split(',').map(s => s.trim()).filter(Boolean).map(s => (
                <span key={s} className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#ede9fe] text-[#7c3aed]">{s}</span>
              ))}
            </div>
          </>
        )
      case 'experience':
        return (
          <>
            {field('Cargo / Função', 'expTitle')}
            {field('Empresa', 'expCompany')}
            {field('Período', 'expPeriod')}
            <button className="w-full py-3 rounded-2xl border-2 border-dashed border-[#ddd6fe] text-[13px] font-semibold text-[#7c3aed] flex items-center justify-center gap-2 mt-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Adicionar experiência
            </button>
          </>
        )
      case 'education':
        return (
          <>
            {field('Curso', 'eduCourse')}
            {field('Instituição', 'eduInstitution')}
            {field('Período (ex: 2022 – 2026)', 'eduPeriod')}
            <button className="w-full py-3 rounded-2xl border-2 border-dashed border-[#ddd6fe] text-[13px] font-semibold text-[#7c3aed] flex items-center justify-center gap-2 mt-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Adicionar formação
            </button>
          </>
        )
      case 'interests':
        return (
          <>
            <p className="text-[12px] text-[#6b7280] mb-4 leading-relaxed">Defina suas áreas de interesse para receber vagas mais relevantes.</p>
            {field('Interesses (separados por vírgula)', 'interests', true)}
            <div className="flex flex-wrap gap-2">
              {form.interests.split(',').map(i => i.trim()).filter(Boolean).map(i => (
                <span key={i} className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#fdf4ff] text-[#a855f7] border border-[#e9d5ff]">{i}</span>
              ))}
            </div>
          </>
        )
    }
  }

  return (
    <div className="h-full flex flex-col bg-[#f4f3ff]">
      {/* Header */}
      <div className="px-5 pt-3 pb-3 bg-white border-b border-[#ddd6fe] flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-xl bg-[#f4f3ff] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f0d1a" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <h2 className="flex-1 text-[18px] font-bold text-[#0f0d1a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Editar Perfil</h2>
        <button onClick={save} className="px-4 py-1.5 rounded-xl text-[13px] font-bold text-white transition-all active:scale-95" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
          Salvar
        </button>
      </div>

      {/* Section tabs */}
      <div className="overflow-x-auto px-5 py-3 flex gap-2 shrink-0">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap transition-all shrink-0"
            style={{
              background: active === s.id ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'white',
              color: active === s.id ? 'white' : '#6b7280',
              border: active === s.id ? 'none' : '1px solid #ddd6fe',
            }}
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        {renderSection()}
      </div>

      {/* Saved toast */}
      {saved && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', zIndex: 50 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-white text-[13px] font-semibold">Perfil atualizado!</span>
        </div>
      )}
    </div>
  )
}
