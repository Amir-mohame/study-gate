import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()
  return (
    <header style={{display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ddd'}}>
      <h2 style={{margin: 0}}>Study-Gate</h2>
      <nav style={{display: 'flex', gap: 8, alignItems: 'center'}}>
        <Link href="/">الرئيسية</Link>
        <Link href="/profile">الملف الشخصي</Link>
        <Link href="/plans">خططي</Link>
      </nav>
      <div style={{marginLeft: 'auto'}}>
        {session?.user ? (
          <>
            <span style={{marginRight: 8}}>{session.user.email}</span>
            <button onClick={() => signOut()} style={{padding: '6px 10px'}}>تسجيل خروج</button>
          </>
        ) : (
          <button onClick={() => signIn()} style={{padding: '6px 10px'}}>تسجيل دخول</button>
        )}
      </div>
    </header>
  )
}
