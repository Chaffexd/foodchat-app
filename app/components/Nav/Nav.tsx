import Link from "next/link"


const NavBar = () => {
  return (
    <nav className="h-16 flex items-center justify-end pr-16">
        <Link href={"/"} className="hover:underline">Home</Link>
        <Link href={"/recipes"} className="pl-4 hover:underline">My Recipes</Link>
        <Link href={"/login"} className="pl-4 hover:underline">Login</Link>
    </nav>
  )
}

export default NavBar