import Link from "next/link";
import ShowDate from "./date";

export default function Header() {
    
  return (
    <header className="header">
      <div className="logo">
      <Link href="/">
  <img src="./websiteAssets/logo.png" alt="Cantor College Logo" className="logo-image" />
</Link>
         <div> <p>Cantor College</p> <ShowDate /></div>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/learning">Learning Resources</Link></li>
          <li><Link href="/staff">Staff</Link></li>
          <li><Link href="/student">Student</Link></li>
          <li><Link href="/business">Business</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
