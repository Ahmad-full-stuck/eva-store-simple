const PAGE = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#f5f4f1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Temporarily Unavailable</title>
  <style>
    :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif; }
    * { box-sizing: border-box; }
    html, body { width: 100%; min-height: 100%; margin: 0; }
    body {
      min-height: 100vh; display: grid; place-items: center; padding: 28px 18px;
      color: #222b35; background:
        radial-gradient(ellipse at 50% 0%, rgba(222, 190, 141, .19), transparent 48%),
        linear-gradient(145deg, #f7f6f2 0%, #efeee9 100%);
    }
    main {
      width: min(100%, 680px); padding: clamp(30px, 6vw, 58px);
      text-align: center; background: rgba(255,255,255,.91);
      border: 1px solid rgba(39,48,59,.09); border-radius: 24px;
      box-shadow: 0 24px 80px rgba(25,32,42,.09);
    }
    .mark {
      width: 64px; height: 64px; margin: 0 auto 26px; display: grid; place-items: center;
      border-radius: 20px; color: #8e6634; background: #f7f0e5;
      border: 1px solid #eadcc7;
    }
    .eyebrow { margin: 0 0 13px; color: #967345; font-size: 11px; font-weight: 700; letter-spacing: .19em; }
    h1 { margin: 0; font-size: clamp(30px, 6vw, 43px); letter-spacing: -.04em; line-height: 1.15; color: #202833; }
    .lead { margin: 21px auto 0; max-width: 510px; color: #58616b; font-size: 16px; line-height: 1.8; }
    .rule { height: 1px; max-width: 100%; margin: 29px 0; background: #e9e7e1; }
    .rtl { direction: rtl; font-family: "Segoe UI", Tahoma, Arial, sans-serif; }
    .rtl h2 { margin: 0 0 10px; color: #303945; font-size: 20px; font-weight: 700; }
    .rtl p { margin: 0 auto; max-width: 520px; color: #65707b; font-size: 15px; line-height: 1.9; }
    .owner {
      margin: 24px 0 0; padding: 17px 19px; border-radius: 14px;
      background: #f8f7f4; color: #616a74; font-size: 13px; line-height: 1.8;
    }
    .owner strong { color: #343e49; }
    footer { margin-top: 26px; color: #9299a1; font-size: 11px; line-height: 1.7; }
    @media (max-width: 480px) {
      body { padding: 16px; }
      main { border-radius: 19px; }
      .mark { width: 58px; height: 58px; border-radius: 18px; }
    }
  </style>
</head>
<body>
  <main>
    <div class="mark" aria-hidden="true">
      <svg width="31" height="31" viewBox="0 0 24 24" fill="none">
        <path d="M12 8v4.6m0 3.4h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3l-7.5-13.1a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <p class="eyebrow">SERVICE NOTICE · 503</p>
    <h1>Temporarily Unavailable</h1>
    <p class="lead">
      This website is temporarily unavailable while a pending hosting or domain renewal payment is being resolved.
    </p>
    <div class="rule"></div>
    <section class="rtl" lang="ar" dir="rtl">
      <h2>الموقع غير متاح مؤقتاً</h2>
      <p>
        تم إيقاف الخدمة مؤقتاً لحين استكمال تجديد الاستضافة أو النطاق وتسوية الدفعة المعلّقة.
      </p>
    </section>
    <div class="owner">
      <strong>If you own this website:</strong> please review your hosting provider's billing details and complete any outstanding payment or renewal to restore service.
      <div class="rtl" lang="ar" dir="rtl" style="margin-top:8px">
        إذا كنت مالك الموقع، يرجى مراجعة الفوترة لدى مزوّد الاستضافة وإكمال أي دفعة أو تجديد مستحق لإعادة الخدمة.
      </div>
    </div>
    <footer>
      This is a temporary notice. It does not delete or modify the website's project files or stored data.
      <div class="rtl" lang="ar" dir="rtl">هذا إشعار مؤقت ولا يحذف ملفات المشروع أو البيانات المخزّنة ولا يغيّرها.</div>
    </footer>
  </main>
</body>
</html>`;

const headers = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
  "pragma": "no-cache",
  "x-robots-tag": "noindex, nofollow",
  "retry-after": "3600"
};

export default {
  async fetch(request) {
    if (request.method === "HEAD") return new Response(null, { status: 503, headers });
    return new Response(PAGE, { status: 503, headers });
  }
};
