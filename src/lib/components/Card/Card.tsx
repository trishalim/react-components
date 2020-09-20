import React, { FC } from 'react'
import './styles.css'

export interface ICardProps {
  children: unknown,
}

export const Card: FC<ICardProps> = ({ children }) => (
  <div className="card">
    {children}
  </div>
)
