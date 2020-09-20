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
  <div>
    {
      items.map(item => (
        <div key={item.name}>
          {item.name}
        </div>
      ))
    }
  </div>
)
