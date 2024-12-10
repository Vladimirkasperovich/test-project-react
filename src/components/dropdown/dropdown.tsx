import React, { useState } from 'react'
import styles from './dropdown.module.scss'

interface Props {
  label: string
  options: { label: string; value: string }[]
  onSelect: (value: string) => void
}

export const Dropdown: React.FC<Props> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelected(value)
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
        {selected ? options.find((opt) => opt.value === selected)?.label : label}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.item} ${selected === option.value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
