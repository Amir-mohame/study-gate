# Study-Gate — MVP

مشروع MVP لمساعدة المرضى على تحسين نمط حياتهم وتلقي توجيه بسيط.

## ما تم إنشاؤه ✅
- مشروع Next.js (TypeScript) بسيط
- Prisma مع نموذج `User` و `Plan` + سكربت seed
- Docker + docker-compose (Postgres + app)
- GitHub Actions CI أساسي
- صفحة بداية API للتجربة

## تشغيل محلي
1. انسخ `.env.example` إلى `.env` وعدّل القيم حسب الحاجة
2. شغّل: `docker-compose up --build` أو استخدم:
   - `npm install`
   - `npm run dev`
3. لتشغيل seed: `npm run prisma:generate && npm run prisma:migrate && npm run seed`

## خطوات مقترحة تالية
- إنشاء صفحات الملف الشخصي وخطة الحياة والمتعقبات
- كتابة اختبارات وحدات وواجهات

## المصادقة (NextAuth)
- تم إعداد **NextAuth** مع مزود Credentials بسيط (يمكنك تسجيل الدخول بإدخال بريد إلكتروني).
- تكوين البيئة المطلوب: `NEXTAUTH_SECRET` في `.env` (قم بنسخ `.env.example`).
- ملاحظات: هذا إعداد تجريبي للمصادقة؛ استبدله بمزود OAuth أو مزود بريد إلكتروني آمن في الإنتاج.

> ملاحظة: نسق هذا المشروع هو نقطة انطلاق؛ إذا توافق أستكمل تحسينات الميزات والاختبارات أو أعدّل أي جزء في الواجهة.