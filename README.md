# 🛰️ SatGuard Pro v2.0

<div align="center">

![SatGuard Pro](https://img.shields.io/badge/SatGuard-Pro-blue?style=for-the-badge&logo=satellite)

**نظام إدارة أجهزة الاستقبال الفضائية والـ IPTV المتكامل**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-green.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://www.docker.com)
[![Python](https://img.shields.io/badge/python-3.8+-yellow.svg)](https://python.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Build Status](https://img.shields.io/badge/build-passing-success.svg)](https://github.com/badeer83/satguard-pro)

</div>

---

## 📖 المحتويات

- [نبذة عن المشروع](#نبذة-عن-المشروع)
- [المميزات](#المميزات)
- [لقطات الشاشة](#لقطات-الشاشة)
- [البنية المعمارية](#البنية-المعمارية)
- [التقنيات المستخدمة](#التقنيات-المستخدمة)
- [المتطلبات](#المتطلبات)
- [التثبيت](#التثبيت)
- [الاستخدام](#الاستخدام)
- [هيكل المشروع](#هيكل-المشروع)
- [API التوثيق](#api-التوثيق)
- [المساهمة](#المساهمة)
- [الترخيص](#الترخيص)
- [الدعم](#الدعم)
- [المؤلف](#المؤلف)

---

## 📋 نبذة عن المشروع

**SatGuard Pro** هو نظام متكامل ومفتوح المصدر لإدارة أجهزة الاستقبال الفضائية (STB) وأجهزة IPTV. يوفر النظام لوحة تحكم مركزية، تطبيق موبايل، وأدوات متقدمة لإدارة القنوات المشفرة، وتحليل شبكات الواي فاي، ومراقبة الأجهزة عن بعد.

### 🎯 الهدف

توفير حل شامل ومجاني لإدارة أجهزة الاستقبال الفضائية بأنواعها المختلفة (Enigma2, Android, Linux) مع دعم كامل لأنظمة التشفير المختلفة ومراقبة الأداء في الوقت الفعلي.

---

## ✨ المميزات

### 🖥️ إدارة الأجهزة
- ✅ إدارة أجهزة متعددة من لوحة تحكم واحدة
- ✅ دعم أجهزة **Enigma2, Android TV, Linux STB**
- ✅ اتصال آمن عبر **SSH**
- ✅ مراقبة لحظية للموارد (CPU, RAM, Disk, Temperature)
- ✅ تثبيت الوكيل تلقائياً على الأجهزة
- ✅ إرسال أوامر عن بعد

### 📡 القنوات والتشفير
- ✅ مسح وإدارة القنوات الفضائية
- ✅ دعم جميع أنظمة التشفير:
  - **BISS** - Basic Interoperable Scrambling System
  - **PowerVU** - Conditional Access System
  - **NDS VideoGuard** - Cisco/Kudelski
  - **Nagravision** - Merlin/Nagra3
  - **Irdeto** - Cloaked CA
  - **Viaccess** - Orca
  - **Widevine** - Google DRM
  - **PlayReady** - Microsoft DRM
  - **FairPlay** - Apple DRM
- ✅ تحديث تلقائي للمفاتيح (SoftCam.Key)
- ✅ تصدير المفاتيح بصيغ متعددة
- ✅ دمج مع **Oscam/Ncam/CCcam**

### 📶 وحدة الواي فاي المتقدمة
- ✅ مسح شامل للشبكات اللاسلكية
- ✅ تحليل متقدم للإشارة (RSSI, SNR, Noise)
- ✅ تحليل تداخل القنوات واقتراح الأفضل
- ✅ اختبار أمان الشبكات:
  - **WPS** - Pixie Dust Attack
  - **WPA/WPA2** - Handshake Capture
  - **WEP** - ARP Replay Attack
  - **PMKID** - Clientless Attack
- ✅ تحسين أداء الواي فاي تلقائياً
- ✅ إدارة تعريفات الشرائح (Chipset Drivers)
- ✅ قاعدة بيانات الهوائيات (Antenna Profiles)

### 📊 المراقبة والتقارير
- ✅ لوحة تحكم تفاعلية مع **Real-time Charts**
- ✅ نظام تنبيهات متقدم (Email, Push, Telegram)
- ✅ تقارير دورية (يومية، أسبوعية، شهرية)
- ✅ سجلات كاملة لجميع العمليات
- ✅ تصدير التقارير بصيغ **PDF, CSV, JSON**

### 📱 التطبيقات
- ✅ **Web Dashboard** - React.js مع Material-UI
- ✅ **Mobile App** - React Native (iOS & Android)
- ✅ **CLI Tools** - أدوات سطر أوامر للمطورين
- ✅ **REST API** - واجهة برمجية كاملة

### 🐳 DevOps
- ✅ دعم **Docker** و **Docker Compose**
- ✅ **CI/CD** عبر GitHub Actions
- ✅ دعم **Docker Swarm** للإنتاج
- ✅ نسخ احتياطي واستعادة تلقائية

---

## 📸 لقطات الشاشة

| لوحة التحكم | إدارة الأجهزة | تحليل الواي فاي |
|:-----------:|:------------:|:---------------:|
| 📊 Dashboard | 📡 Devices | 📶 WiFi Analyzer |

| القنوات | المفاتيح | التقارير |
|:-------:|:--------:|:--------:|
| 📺 Channels | 🔑 Keys | 📈 Reports |

---

## 🏗️ البنية المعمارية
┌─────────────────────────────────────────────────────────────┐
│                      SatGuard Pro v2.0                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Web UI   │  │ Mobile   │  │ CLI      │  │ REST     │   │
│  │ React.js │  │ React    │  │ Python   │  │ API      │   │
│  │ MUI v5   │  │ Native   │  │ Click    │  │ Express  │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       └──────────────┴─────────────┴─────────────┘         │
│                          │                                  │
│                    ┌─────▼──────┐                          │
│                    │  Backend   │                          │
│                    │  Node.js   │                          │
│                    │  Express   │                          │
│                    └─────┬──────┘                          │
│                          │                                  │
│       ┌──────────────────┼──────────────────┐              │
│       │                  │                  │              │
│  ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐        │
│  │ MySQL   │      │  Redis    │     │  MQTT     │        │
│  │ 8.0     │      │  7.0      │     │  Broker   │        │
│  └─────────┘      └───────────┘     └───────────┘        │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Agent (STB Side)                        │  │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐    │  │
│  │  │System  │  │Oscam   │  │WiFi    │  │Key     │    │  │
│  │  │Monitor │  │Control │  │Agent   │  │Manager │    │  │
│  │  └────────┘  └────────┘  └────────┘  └────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Supported Devices                       │  │
│  │  ┌─────────┐  ┌──────────┐  ┌─────────┐  ┌───────┐  │  │
│  │  │Enigma2  │  │Android   │  │Linux    │  │Raspberry│ │  │
│  │  │STB      │  │TV Box    │  │STB      │  │Pi      │  │  │
│  │  └─────────┘  └──────────┘  └─────────┘  └───────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

```

---

## 🛠️ التقنيات المستخدمة

### Backend
| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| **Node.js** | 18+ | Runtime |
| **Express.js** | 4.x | Web Framework |
| **MySQL** | 8.0 | Database |
| **Redis** | 7.x | Cache |
| **MQTT** | - | Real-time Communication |
| **SSH2** | - | Device Connection |
| **JWT** | - | Authentication |
| **Bcrypt** | - | Password Hashing |

### Frontend
| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| **React.js** | 18.x | UI Framework |
| **Material-UI** | 5.x | Design System |
| **Chart.js** | 4.x | Charts |
| **Redux Toolkit** | - | State Management |
| **Axios** | - | HTTP Client |
| **Socket.io** | - | WebSocket |

### Agent
| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| **Python** | 3.8+ | Runtime |
| **psutil** | - | System Metrics |
| **paho-mqtt** | - | MQTT Client |
| **scapy** | - | Packet Manipulation |
| **Aircrack-ng** | - | WiFi Security |

### DevOps
| التقنية | الغرض |
|---------|-------|
| **Docker** | Containerization |
| **Docker Compose** | Multi-container |
| **GitHub Actions** | CI/CD |
| **Nginx** | Reverse Proxy |

---

## 📋 المتطلبات

### الخادم (Server)
```

· Docker & Docker Compose
· 2 GB RAM (4 GB recommended)
· 20 GB Disk Space
· Linux (Ubuntu 20.04+ / Debian 11+)

```

### الأجهزة المدعومة (STB)
```

· Enigma2 (Dreambox, Vu+, Gigablue, Octagon, Zgemma)
· Android TV Box (Formuler, Amiko, Mecool)
· Linux-based STB
· Raspberry Pi 3/4/5

```

---

## 🚀 التثبيت

### ⚡ التثبيت السريع (Docker)

```bash
# استنساخ المشروع
git clone https://github.com/badeer83/satguard-pro.git
cd satguard-pro

# نسخ ملف البيئة
cp .env.example .env

# تعديل الإعدادات
nano .env

# تشغيل الخدمات
docker-compose up -d

# فتح لوحة التحكم
# http://localhost
```

📦 التثبيت اليدوي

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run build

# Agent (على كل جهاز STB)
cd agent
pip3 install -r requirements.txt
python3 agent.py
```

📱 تثبيت الوكيل على أجهزة Enigma2

```bash
# الاتصال بالجهاز
ssh root@STB_IP

# تحميل وتثبيت الوكيل
curl -sSL https://raw.githubusercontent.com/badeer83/satguard-pro/main/scripts/install.sh | bash
```

---

📖 الاستخدام

واجهة الويب

```
1. افتح المتصفح: http://your-server-ip
2. سجل الدخول
3. أضف جهازك
4. ابدأ المراقبة والإدارة
```

تطبيق الموبايل

```
1. حمل التطبيق من المتجر
2. أدخل عنوان السيرفر
3. سجل الدخول
4. تحكم بأجهزتك من أي مكان
```

CLI Tools

```bash
# تثبيت الأدوات
pip install satguard-cli

# أمثلة:
satguard devices list
satguard wifi scan
satguard keys update
satguard monitor status
```

---

📁 هيكل المشروع

```
satguard-pro/
│
├── backend/                    # الخادم الخلفي (Node.js/Express)
│   ├── api/
│   │   ├── controllers/        # متحكمات API
│   │   ├── middleware/          # Middleware (Auth, Rate Limit)
│   │   └── routes/             # مسارات API
│   ├── models/                 # نماذج قاعدة البيانات
│   ├── services/               # خدمات الأعمال
│   ├── config/                 # إعدادات
│   └── utils/                  # أدوات مساعدة
│
├── agent/                      # وكيل الأجهزة (Python)
│   ├── scripts/                # سكربتات Shell
│   ├── python/                 # وكلاء Python
│   └── config/                 # إعدادات الوكيل
│
├── frontend/                   # لوحة التحكم (React.js)
│   ├── public/                 # ملفات ثابتة
│   └── src/
│       ├── components/         # مكونات React
│       │   ├── Dashboard/
│       │   ├── DeviceManager/
│       │   ├── WiFi/
│       │   ├── KeyManager/
│       │   └── Reports/
│       ├── pages/              # صفحات
│       ├── services/           # خدمات API
│       └── hooks/              # React Hooks
│
├── mobile/                     # تطبيق الموبايل (React Native)
│   ├── android/
│   ├── ios/
│   └── src/
│
├── database/
│   ├── migrations/             # ترحيل قاعدة البيانات
│   └── seeds/                  # بيانات أولية
│
├── docker/                     # ملفات Docker
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   └── mosquitto/
│
├── docs/                       # التوثيق
│   ├── API.md
│   ├── INSTALL.md
│   ├── USER_GUIDE.md
│   └── WIFI_MODULE.md
│
├── scripts/                    # سكربتات مساعدة
├── configs/                    # ملفات التكوين
├── .github/                    # GitHub Actions
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── .env.example
├── package.json
├── LICENSE
└── README.md
```

---

📡 API التوثيق

المصادقة

```http
POST /api/auth/login
POST /api/auth/register
```

الأجهزة

```http
GET    /api/devices          # قائمة الأجهزة
POST   /api/devices          # إضافة جهاز
GET    /api/devices/:id      # تفاصيل جهاز
PUT    /api/devices/:id      # تحديث جهاز
DELETE /api/devices/:id      # حذف جهاز
```

القنوات

```http
GET    /api/channels         # قائمة القنوات
POST   /api/channels/scan    # مسح القنوات
```

المفاتيح

```http
GET    /api/keys             # قائمة المفاتيح
POST   /api/keys/update      # تحديث المفاتيح
GET    /api/keys/export      # تصدير SoftCam.Key
```

الواي فاي

```http
GET    /api/wifi/scan        # مسح الشبكات
POST   /api/wifi/connect     # الاتصال بشبكة
GET    /api/wifi/status      # حالة الواي فاي
POST   /api/wifi/optimize    # تحسين الواي فاي
POST   /api/wifi/analyze     # تحليل الشبكة
```

المراقبة

```http
GET    /api/monitor/status   # حالة النظام
GET    /api/monitor/metrics  # المقاييس
```

---

🤝 المساهمة

نرحب بجميع المساهمات! للمساهمة:

1. Fork المستودع
2. أنشئ فرعاً جديداً (git checkout -b feature/amazing-feature)
3. أضف تغييراتك (git commit -m 'Add amazing feature')
4. ارفع الفرع (git push origin feature/amazing-feature)
5. افتح Pull Request

إرشادات المساهمة

· اتبع نمط الكود الموجود
· أضف تعليقات واضحة
· اختبر تغييراتك
· حدث التوثيق

---

📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف LICENSE للتفاصيل.

```
MIT License

Copyright (c) 2024 badeer83

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software...
```

---

📞 الدعم

القناة الرابط
📧 البريد الإلكتروني newmiddleeast2026@hotmail.com
🐛 تقارير الأخطاء GitHub Issues
💡 اقتراحات GitHub Discussions
📚 الويكي GitHub Wiki

---

👤 المؤلف

 
الاسم badeer83
البريد newmiddleeast2026@hotmail.com
GitHub @badeer83

---

⭐ دعم المشروع

إذا أعجبك المشروع:

· ⭐ أعطه Star على GitHub
· 🔀 شاركه مع أصدقائك
· 🐛 أبلغ عن الأخطاء
· 💡 اقترح مميزات جديدة

---

🙏 شكر خاص

· مجتمع Enigma2 للدعم المستمر
· فريق Oscam لعملهم الرائع
· جميع المساهمين والمختبرين

---

<div align="center">

Made with ❤️ by badeer83

⬆ العودة للأعلى

</div>
