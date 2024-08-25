import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setSideBarOpen(prev => !prev);
    }
    
    return (
        <div className="h-full flex">
            <SideBar 
                open={sideBarOpen}
                handleToggleMenu={handleToggleMenu} />
            <div className="grow flex flex-col">
                <Header handleToggleMenu={handleToggleMenu} />
                <div className="grow bg-violet-900">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout