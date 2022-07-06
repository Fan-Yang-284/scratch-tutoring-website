import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ link, toggle }: { link: NavLinkType, toggle:any }) => {
    const router = useRouter();
    return (
        <Link href={"/" + link.path} >
            <a className={"block py-2 px-4 transition-colors lg:bg-transparent hover:text-gray-500 " +
                (router.pathname.split("/")[1] == link.path ?
                    "bg-blue-700 font-bold text-gray-200" :
                    "bg-blue-900 text-gray-400"
                )}
                onClick={()=>toggle(false)}
            >
                {link.name}
            </a>
        </Link>
    );
}

export default NavLink
export interface NavLinkType {
    name: string;
    path: string;
}