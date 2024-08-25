import cn from "Utility/cn";

interface SideBarProps {
    open: boolean;
    handleToggleMenu: () => void;
}

const SideBar = (props: SideBarProps) => {
    return (
        <div className={`md:w-64 h-full`}>
            <div
                className={cn(
                    'fixed h-full w-full bg-black z-40 duration-300',
                    'md:hidden',
                    props.open ? 'opacity-50' : 'opacity-0 invisible'
                )}
                onClick={props.handleToggleMenu}
            />
            <div className={cn(
                'fixed duration-300 w-64 h-full bg-violet-400 z-50',
                'md:translate-x-0 md:duration-0',
                !props.open && '-translate-x-64'
            )}>I am side bar</div>
        </div>
    )
}

export default SideBar