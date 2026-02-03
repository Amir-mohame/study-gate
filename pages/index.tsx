import React from 'react'

export default function Home() {
  return (
    <main style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <h1>مرحبا بك في Study-Gate</h1>
      <p>هذا مشروع MVP لمتابعة نمط حياة المرضى وتقديم توجيه مبسّط.</p>
      <ul>
        <li>الدخول / التسجيل (NextAuth)</li>
        <li>الملف الشخصي وخطة الحياة اليومية</li>
        <li>تذكيرات وتتبع بسيط</li>
      </ul>
      <p>ابدأ بتشغيل: <code>npm install</code> ثم <code>npm run dev</code></p>
    </main>
  )
}
