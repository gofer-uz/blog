'use client'

import { useState } from 'react'

export default function ArticlesCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(0, 173, 216, 0.1) 0%, rgba(93, 201, 226, 0.1) 100%)',
        borderRadius: '12px',
        border: '2px solid rgba(0, 173, 216, 0.2)',
        textAlign: 'center',
        margin: '2rem 0',
      }}
    >
      <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Barcha Go darsliklar</h3>
      <div style={{ margin: '0 0 1.5rem 0', opacity: 0.8 }}>
        Go dasturlash tili bo'yicha to'liq qo'llanmalar va amaliy misollar
      </div>
      <a
        href="/posts"
        style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          background: isHovered ? '#0099C0' : '#00ADD8',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: isHovered
            ? '0 6px 12px rgba(0, 173, 216, 0.4)'
            : '0 4px 6px rgba(0, 173, 216, 0.3)',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Maqolalarni ko&apos;rish →
      </a>
    </div>
  )
}
