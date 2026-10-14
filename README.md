# XobazJr Portfolio

พอร์ตโฟลิโอนี้สร้างด้วย Next.js แบบ JavaScript ล้วน และ export เป็น static site ได้

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## คำสั่งที่ใช้บ่อย

- `npm run dev` — รัน development server
- `npm run build` — build และ export ไฟล์ static ไปที่ `out/`
- `npm start` — รัน production server

## Routes

- `/` — หน้าแรก
- `/projects` — รวมโปรเจกต์และตัวกรองประเภท
- `/projects/[slug]` — รายละเอียดโปรเจกต์

โค้ดทั้งหมดใช้ `.js` และไม่มี TypeScript หรือ `react-router-dom`
