import { useState, useEffect } from 'react'

export default function Plans() {
  const [plans, setPlans] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => { fetchPlans() }, [])

  async function fetchPlans() {
    const res = await fetch('/api/plans')
    const data = await res.json()
    setPlans(data)
  }

  async function addPlan() {
    await fetch('/api/plans', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, notes }) })
    setTitle('')
    setNotes('')
    fetchPlans()
  }

  async function removePlan(id: string) {
    await fetch(`/api/plans/${id}`, { method: 'DELETE' })
    fetchPlans()
  }

  return (
    <main style={{padding: 24}}>
      <h1>خططي</h1>
      <div style={{marginBottom: 12}}>
        <input placeholder="عنوان" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="ملاحظات" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button onClick={addPlan}>إضافة</button>
      </div>
      <ul>
        {plans.map(p => (
          <li key={p.id}><strong>{p.title}</strong> — {p.notes} <button onClick={() => removePlan(p.id)}>حذف</button></li>
        ))}
      </ul>
    </main>
  )
}
