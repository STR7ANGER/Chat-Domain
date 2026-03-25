import { Button } from "../ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"



const Navbar = () => {
  return (
    <div>
        <div>
        <img/>
        <div>Chat Domain</div>
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Button>Theme Toggle</Button>
            <Link href="/app"><Button>App <ArrowRightIcon/></Button></Link>
        </div>
    </div>
  )
}

export default Navbar