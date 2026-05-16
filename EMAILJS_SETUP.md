# 📧 EmailJS Setup — Contact Form Notification

Jab bhi koi tujhe contact form se message bheje, tujhe **Gmail pe notification** aayega uska naam, email, phone aur message ke saath. Tu directly usse reply kar sakta hai!

## Steps (5 minute ka kaam, FREE):

### 1. Account banao
→ https://www.emailjs.com par jaao → Sign Up (free mein 200 emails/month)

### 2. Email Service connect karo
- Dashboard → **Email Services** → **Add New Service**
- **Gmail** select karo
- Apni Gmail ID se connect karo: nikhilshendre008@gmail.com
- **Service ID** note kar lo (e.g. `service_abc123`)

### 3. Email Template banao
- Dashboard → **Email Templates** → **Create New Template**
- Template mein yeh likho:

```
Subject: New Portfolio Contact from {{from_name}}

Name:    {{from_name}}
Email:   {{from_email}}
Phone:   {{phone}}

Message:
{{message}}

---
Reply directly to: {{reply_to}}
```

- **Template ID** note kar lo (e.g. `template_xyz789`)

### 4. Public Key lo
- Dashboard → **Account** → **Public Key** copy karo (e.g. `aBcDeFgHiJ`)

### 5. Portfolio mein update karo
→ `src/components/Contact.jsx` file kholo, top mein yeh 3 lines update karo:

```js
const EMAILJS_SERVICE_ID  = "service_abc123";   // apna ID
const EMAILJS_TEMPLATE_ID = "template_xyz789";  // apna ID  
const EMAILJS_PUBLIC_KEY  = "aBcDeFgHiJ";       // apni key
```

### Done! 🎉
Ab jab bhi koi form submit karega, tera Gmail pe notification aayega with uska contact details. Tu directly uske email pe reply kar sakta hai!
