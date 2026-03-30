import Link from 'next/link'

export default function Nav(){
  return (
    <nav className="max-w-4xl mx-auto py-6 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
