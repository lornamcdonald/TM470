import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" className="site-title" >Time to Reflect</Link>
        <ul>
            <NavLink to= "/">Home</NavLink>
            <NavLink to= "/NewReflection">Reflections</NavLink>
        </ul>
    </nav>
}

function NavLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to= {to} {...props}>{children}</Link>
        </li>
    )
}