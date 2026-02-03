import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    await signIn('credentials', { email, callbackUrl: '/' })
    router.push('/')
  }

  return (
    <main style={{padding: 24}}>
      <h1>تسجيل الدخول</h1>
      <form onSubmit={submit} style={{display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320}}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="بريدك الإلكتروني" />
        <button type="submit">دخول</button>
      </form>
      <p>أدخل بريدًا تجريبيًا (مثال: alice@example.com)</p>
    </main>
  )
}
