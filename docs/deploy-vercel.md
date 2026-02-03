# نشر على Vercel + Supabase (موجه للمبتدئين)

## ملخص سريع ✅
- Repo: GitHub `Amir-mohame/study-gate` (تم رفع الكود)
- سنستخدم **Supabase** لقاعدة Postgres (free tier) و**Vercel** لنشر Next.js

## خطوات إنشاء Supabase DB
1. سجّل في https://supabase.com (أو سجل دخول).
2. أنشئ مشروع جديد واختر قاعدة بيانات Postgres (free).
3. من Dashboard → Settings → Database → Connection string انسخ `DATABASE_URL` (Postgres URL).

## إعداد Vercel
1. سجّل في https://vercel.com وادمج حساب GitHub.
2. اختر `Import Project` → `study-gate` من GitHub.
3. في إعدادات المشروع (Settings → Environment Variables) أضف:
   - `DATABASE_URL` = قيمة Supabase (انقلها من الخطوة أعلاه)
   - `NEXTAUTH_URL` = `https://<your-vercel-domain>` أو `http://localhost:3000` أثناء التجربة
   - `NEXTAUTH_SECRET` = (استخدم `openssl rand -hex 32` لإنشاء قيمة)
4. اضغط Deploy.

## تشغيل ترحيل Prisma & seed
- بعد إعداد `DATABASE_URL` في GitHub Secrets أو Vercel، شغل GitHub Actions أو نفّذ:
  ```bash
  npx prisma migrate deploy --url "$DATABASE_URL"
  node prisma/seed.js
  ```
  أو انتظر workflow `Run Prisma Migrations` الذي أضفته ليعمل عند كل دفع إلى `main` (يتطلب إعداد `secrets.DATABASE_URL`).

## ماذا ستشاهد بعد النشر
- رابط Vercel (مثل `https://study-gate-username.vercel.app`) سيكون مكان رؤية المشروع.
- صفحة تسجيل الدخول: `/auth/signin` — أدخل بريدًا مثل `alice@example.com` لتجريبيًا تسجيل الدخول.

---

إذا تريد، أستطيع أيضًا:
- إعداد GitHub Secret `DATABASE_URL` لو تمنحني إذن (أرشدك خطوة بخطوة) 🔐
- إعداد تسجيل النطاق وNginx وLet's Encrypt لاحقًا 🌐
