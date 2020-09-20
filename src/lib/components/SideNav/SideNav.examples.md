SideNav examples:

###### SideNav
```js
import { SideNav } from 'react-components';

const onClick = name => {
  alert(`Nav item ${name} clicked!`);
}

const items = [
  { name: 'Home', onClick: () => onClick('Home') },
  { name: 'Account', onClick: () => onClick('Account') },
  { name: 'Settings', onClick: () => onClick('Settings') },
  { name: 'Help', onClick: () => onClick('Help') }
];

<SideNav items={items} />
```
