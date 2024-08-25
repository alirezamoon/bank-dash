import Button from "Comonents/common/button";
import { HambergerMenu, Notification, Setting2, User } from "iconsax-react";
import SearchPanel from "./searchPanel";

interface HeaderProps {
    handleToggleMenu: () => void;
}

const Header = (props: HeaderProps) => {

    return (
        <div className="h-36 md:h-20 lg:h-24">
            <div className="fixed bg-white h-36 w-full md:w-[calc(100%-16rem)] md:h-20 lg:h-24 px-6 flex flex-col justify-center gap-5">
                <div className="flex justify-between items-center">
                    <button
                        className="md:hidden"
                        onClick={props.handleToggleMenu}
                    >
                        <HambergerMenu
                            className="text-indigo-900 w-8 h-8"
                            variant="Broken"
                        />
                    </button>
                    <p className="text-indigo-800 font-semibold text-2xl">Overview</p>
                    <div className="flex gap-6 lg:gap-7 items-center">
                        <div className="hidden md:block w-64">
                            <SearchPanel />
                        </div>
                        <Button variant="header" className="hidden md:flex">
                            <Setting2 className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500" />
                        </Button>
                        <Button variant="header" className="hidden md:flex focus:ring-rose-100">
                            <Notification className="w-6 h-6 lg:w-8 lg:h-8 text-rose-500" />
                        </Button>
                        <Button variant="header" size="medium" className="flex">
                            <User className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-blue-500" />
                        </Button>
                    </div>
                </div>
                <div className="md:hidden">
                    <SearchPanel />
                </div>
            </div>
        </div>
    )
}

export default Header