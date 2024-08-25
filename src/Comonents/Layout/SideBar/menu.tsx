import { CardPos, DollarSquare, Home2, Icon, MoneyChange, MoneyRecive, Setting2, Sun, UserOctagon, Wallet1 } from "iconsax-react";
import MenuItem from "./menuItem";

type MenuProps = {
    onToggleMenu: () => void
}

type MenuItemType = {
    text: MenuItemText
    icon: Icon
    route: string
}

export type MenuItemText =
    'Dashboard' |
    'Transactions' |
    'Accounts' |
    'Investments' |
    'Credit Cards' |
    'Loans' |
    'Services' |
    'My Privileges' |
    'Setting'

const menuItems: MenuItemType[] = [
    {
        text: 'Dashboard',
        icon: Home2,
        route: '/'
    },
    {
        text: 'Transactions',
        icon: MoneyChange,
        route: '/transactions'
    },
    {
        text: 'Accounts',
        icon: UserOctagon,
        route: '/accounts'
    },
    {
        text: 'Investments',
        icon: DollarSquare,
        route: '/investments'
    },
    {
        text: 'Credit Cards',
        icon: CardPos,
        route: '/credit-cards'
    },
    {
        text: 'Loans',
        icon: MoneyRecive,
        route: '/loans'
    },
    {
        text: 'Services',
        icon: Sun,
        route: '/services'
    },
    {
        text: 'My Privileges',
        icon: Wallet1,
        route: '/my-privileges'
    },
    {
        text: 'Setting',
        icon: Setting2,
        route: '/setting'
    },
]

const Menu = ({ onToggleMenu }: MenuProps) => {

    return (
        <div>
            {menuItems.map(item => (
                <MenuItem
                    Icon={item.icon}
                    text={item.text}
                    route={item.route}
                    onToggleMenu={onToggleMenu}
                />
            ))}
        </div>
    )
}

export default Menu