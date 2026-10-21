import { useState } from 'react'

const conversations = [
  {
    id: 1,
    company: 'Nubank',
    recruiter: 'Ana Cardoso',
    role: 'Recruiter Senior',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    lastMsg: 'Olá! Adorei seu perfil. Você teria disponibilidade para uma conversa amanhã às 14h?',
    time: '14:32',
    unread: 2,
    status: 'online',
    color: '#8B5CF6',
    messages: [
      { from: 'them', text: 'Oi, tudo bem? Vi sua candidatura para Dev Front-End!', time: '13:10' },
      { from: 'me', text: 'Oi Ana! Tudo ótimo, obrigada pelo contato 😊', time: '13:45' },
      { from: 'them', text: 'Adorei seu perfil. Você teria disponibilidade para uma conversa amanhã às 14h?', time: '14:32' },
    ]
  },
  {
    id: 2,
    company: 'iFood',
    recruiter: 'Carlos Mendes',
    role: 'Tech Recruiter',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    lastMsg: 'Segue o link para o teste técnico. Prazo de 3 dias.',
    time: 'Ontem',
    unread: 0,
    status: 'offline',
    color: '#EC4899',
    messages: [
      { from: 'them', text: 'Parabéns, você passou para a próxima etapa!', time: 'Ontem 09:00' },
      { from: 'me', text: 'Que ótima notícia! Muito obrigada!', time: 'Ontem 09:15' },
      { from: 'them', text: 'Segue o link para o teste técnico. Prazo de 3 dias.', time: 'Ontem 09:20' },
    ]
  },
  {
    id: 3,
    company: 'Totvs',
    recruiter: 'Mariana Rocha',
    role: 'People & Culture',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    lastMsg: 'Sua entrevista está agendada para sexta, 10h. Confirma?',
    time: 'Seg',
    unread: 1,
    status: 'online',
    color: '#F59E0B',
    messages: [
      { from: 'them', text: 'Sua entrevista está agendada para sexta, 10h. Confirma?', time: 'Seg 16:00' },
    ]
  },
]

export default function MessagesScreen() {
  const [active, setActive] = useState<number | null>(null)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState(conversations)

  const conv = msgs.find(c => c.id === active)

  const send = () => {
    if (!input.trim() || !active) return
    setMsgs(prev => prev.map(c =>
      c.id === active
        ? { ...c, messages: [...c.messages, { from: 'me', text: input, time: 'Agora' }], lastMsg: input, time: 'Agora' }
        : c
    ))
    setInput('')
  }

  if (active && conv) {
    return (
      <div className="h-full flex flex-col bg-[#f4f3ff]">
        {/* Chat header */}
        <div className="px-4 py-3 bg-white border-b border-[#ddd6fe] flex items-center gap-3">
          <button onClick={() => setActive(null)} className="w-8 h-8 rounded-xl bg-[#f4f3ff] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f0d1a" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="relative">
            <img src={conv.avatar} alt={conv.recruiter} className="w-9 h-9 rounded-full object-cover" />
            {conv.status === 'online' && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />}
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold text-[#0f0d1a]">{conv.recruiter}</div>
            <div className="text-[11px] text-[#6b7280]">{conv.company} · {conv.role}</div>
          </div>
          <button className="w-8 h-8 rounded-xl bg-[#f4f3ff] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>

        {/* Vaga chip */}
        <div className="mx-4 my-3 px-3 py-2 rounded-xl bg-white border border-[#ddd6fe] flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: conv.color + '22' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={conv.color} strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
          <span className="text-[11px] text-[#6b7280]">Referente à vaga em <span className="font-semibold text-[#0f0d1a]">{conv.company}</span></span>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 overflow-y-auto flex flex-col gap-2 pb-2">
          {conv.messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${m.from === 'me' ? 'text-white rounded-br-sm' : 'text-[#0f0d1a] bg-white border border-[#ddd6fe] rounded-bl-sm'}`}
                style={m.from === 'me' ? { background: 'linear-gradient(135deg, #7c3aed, #a855f7)' } : {}}>
                {m.text}
                <div className={`text-[10px] mt-1 ${m.from === 'me' ? 'text-white/60 text-right' : 'text-[#9ca3af]'}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-2 bg-white border-t border-[#ddd6fe] flex items-center gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Escreva uma mensagem..."
            className="flex-1 px-4 py-2.5 rounded-2xl bg-[#f4f3ff] text-[13px] text-[#0f0d1a] outline-none border border-[#ddd6fe] focus:border-[#7c3aed]"
          />
          <button
            onClick={send}
            className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all active:scale-90"
            style={{ background: input.trim() ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#ddd6fe' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-[#f4f3ff] overflow-hidden">
      <div className="px-5 pt-3 pb-4">
        <h2 className="text-[22px] font-bold text-[#0f0d1a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Mensagens</h2>
        <p className="text-[12px] text-[#6b7280]">{msgs.reduce((a, c) => a + c.unread, 0)} não lidas</p>
      </div>

      {/* Search */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 border border-[#ddd6fe]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input placeholder="Buscar conversas..." className="flex-1 text-[13px] text-[#0f0d1a] outline-none bg-transparent" />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-2">
        {msgs.map(conv => (
          <button
            key={conv.id}
            onClick={() => setActive(conv.id)}
            className="w-full flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-[#ddd6fe] text-left transition-all hover:border-[#a78bfa] active:scale-[0.98]"
          >
            <div className="relative shrink-0">
              <img src={conv.avatar} alt={conv.recruiter} className="w-12 h-12 rounded-2xl object-cover" />
              {conv.status === 'online' && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[14px] font-semibold text-[#0f0d1a]">{conv.recruiter}</span>
                <span className="text-[11px] text-[#9ca3af] shrink-0 ml-2">{conv.time}</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-medium" style={{ color: conv.color }}>{conv.company}</span>
                <span className="text-[#ddd6fe]">·</span>
                <span className="text-[11px] text-[#9ca3af]">{conv.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-[#6b7280] truncate">{conv.lastMsg}</p>
                {conv.unread > 0 && (
                  <span className="shrink-0 ml-2 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center" style={{ background: conv.color }}>{conv.unread}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
