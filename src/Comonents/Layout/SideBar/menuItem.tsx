import { Icon } from "iconsax-react"
import { Link, useLocation } from "react-router-dom"
import cn from "Utility/cn"
import { MenuItemText } from "./menu"

type MenuItemProps = {
    Icon: Icon,
    text: MenuItemText
    route: string
    onToggleMenu: () => void
}

const MenuItem = ({
    Icon,
    text,
    route,
    onToggleMenu,
}: MenuItemProps) => {

    const location = useLocation()
    const active: boolean = location.pathname === route;

    return (
        <Link
            to={route}
            onClick={onToggleMenu}
            className={cn(
                "flex items-center gap-6 relative h-16 duration-200 group w-full",
                active ? 'text-blue-600' : 'text-gray-400'
            )}>
            <div className={cn(
                "h-full w-[6px] rounded-r-full duration-200",
                active ? 'bg-blue-600' : 'bg-gray-400 -translate-x-2 group-hover:-translate-x-0.5'
            )} />
            <Icon variant='Bold' />
            <p className="text-lg font-medium">{text}</p>
        </Link>
    )
}

export default MenuItem