import React, { FC } from 'react'
import './styles.css'

export interface ISideNavItem {
  name: string,
  onClick: () => void,
}

export interface ISideNavProps {
  items: ISideNavItem[];
}

export const SideNav: FC<ISideNavProps> = ({ items }) => (
  <div className="side-nav">
    {
      items.map(item => (
        <button
          type="button"
          className="side-nav__item"
          key={item.name}
          onClick={item.onClick}
        >
          {item.name}
        </button>
      ))
    }
  </div>
)
