import Link from "next/link"

const Footer = () => {
    return (
      <div>
        <div>
          <div>
            <div>Chat Domain</div>
            <div>
              <img alt="logo" />
            </div>
            <div>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
  
          <div>
            <div>Privacy Policy</div>   
            <div>Terms of Service</div>
            <div>Cookie Settings</div>
            <div>Security</div>
            <Link href="/contact">Contact</Link>
            <div>Support</div>
          </div>
  
          <div><div>Terms of Service</div></div>
          <div><div>Cookie Settings</div></div>
          <div><div>Security</div></div>
          <div><Link href="/contact">Contact</Link></div>
          <div><div>Support</div></div>
        </div>
  
        <div>
          <div>© 2026 Chat Domain. All rights reserved.</div>
        </div>
  
        <div>
          <div>Follow us</div>
        </div>
  
        <div>
          <div>Facebook</div>
        </div>
      </div>
    );
  };
  
  export default Footer;