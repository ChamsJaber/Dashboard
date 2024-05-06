import { SiYamahamotorcorporation } from "react-icons/si";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-56 p-3 flex flex-col text-white " >
        <div className="flex items-center gap-2 py-3">
        <SiYamahamotorcorporation fontSize={24} className="cursor-pointer ml-7 "/>
            <span className="text-orange-400 cursor-pointer text-2xl ">GearFox</span>
        </div>
        <hr/>
        <div className="flex-1 py-8 flex flex-col gap-2">
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item} />
            ))}
        </div>
        <hr/>
        <div className="flex flex-col gap-2 pt-1">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item} />
            ))}
            < div  className={classNames( 'text-red-500 cursor-pointer',linkClasses)}
             >
                <span className="text-2xl">
                    <HiOutlineLogout/>
                    </span>
            Logout
            </div>
        </div>
    </div>
  )
}

function SidebarLink ({ item }) {
    const { pathname} = useLocation()
    return(
        <Link 
        to={item.path} 
        className={classNames( 
            pathname === item.path ?'bg-orange-500 text-white': 'text-neutral-400',
             linkClasses
             )}
             >
            <span className="text-2xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
