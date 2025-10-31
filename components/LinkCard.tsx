'use client'

import { useState } from 'react'

interface LinkCardProps {
  href: string
  icon: string
  title: string
  subtitle: string
  color: string
}

export default function LinkCard({ href, icon, title, subtitle, color }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div
        style={{
          padding: '2rem',
          border: `2px solid ${color}`,
          borderRadius: '12px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          background: `linear-gradient(135deg, ${color}0D 0%, ${color}0D 100%)`,
          boxShadow: isHovered ? `0 8px 15px ${color}4D` : '0 4px 6px rgba(0, 0, 0, 0.1)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ margin: '0.5rem 0', color, fontSize: '1.3rem', fontWeight: '600' }}>
          {title}
        </h3>
        <div style={{ margin: 0, opacity: 0.7, fontSize: '0.95rem' }}>{subtitle}</div>
      </div>
    </a>
  )
}
