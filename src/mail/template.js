const path = require('path');

const ASSETS_DIRECTORY = path.resolve(__dirname, '../img');

const inlineIconAttachments = [
    { filename: 'icon-website.png', path: path.join(ASSETS_DIRECTORY, 'icon-website.png'), cid: 'webcode-icon-website' },
    { filename: 'icon-store.png', path: path.join(ASSETS_DIRECTORY, 'icon-store.png'), cid: 'webcode-icon-store' },
    { filename: 'icon-speed.png', path: path.join(ASSETS_DIRECTORY, 'icon-speed.png'), cid: 'webcode-icon-speed' },
];

function renderService(cid, title, description) {
    return `<td class="stack-column-center" valign="top" style="width:33.33%; padding:0 12px; text-align:center;">
      <div class="mobile-spacer" style="height:0; line-height:0; font-size:0;">&nbsp;</div>
      <img src="cid:${cid}" width="44" alt="${title}" style="width:44px; height:auto; margin:0 auto;">
      <h3 style="margin:14px 0 8px; font-family:Arial,Helvetica,sans-serif; font-size:17px; line-height:24px; font-weight:700; color:#111827;">${title}</h3>
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:14px; line-height:23px; color:#4b5563;">${description}</p>
    </td>`;
}

function renderEmailTemplate(content) {
    return `<!doctype html>
<html lang="pl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <title>Webcode — wiadomość</title>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <style>
    html, body { margin:0 !important; padding:0 !important; width:100% !important; height:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0 !important; mso-table-rspace:0 !important; border-collapse:collapse !important; }
    table { border-spacing:0 !important; table-layout:fixed; margin:0 auto; }
    img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; display:block; }
    a { text-decoration:none; }
    p { margin:0; }
    .email-container { width:100%; max-width:640px; }
    .stack-column, .stack-column-center { display:table-cell; }
    @media screen and (max-width:640px) {
      .email-container { width:100% !important; }
      .mobile-padding { padding-left:24px !important; padding-right:24px !important; }
      .mobile-padding-small { padding-left:16px !important; padding-right:16px !important; }
      .stack-column, .stack-column-center { display:block !important; width:100% !important; max-width:100% !important; }
      .stack-column-center { text-align:center !important; }
      .mobile-spacer { height:24px !important; line-height:24px !important; }
      .mobile-hide { display:none !important; max-height:0 !important; overflow:hidden !important; }
      .headline { font-size:32px !important; line-height:38px !important; }
      .service-card { padding:24px 20px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6;">
  <center role="article" aria-roledescription="email" lang="pl" style="width:100%; background-color:#f3f4f6;">
    <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">Dziękuję za kontakt z Webcode.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; background-color:#f3f4f6;">
      <tr><td align="center" style="padding:32px 12px;">
        <!--[if mso]><table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
        <table role="presentation" class="email-container" width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:640px; background-color:#ffffff;">
          <tr><td class="mobile-padding" style="padding:28px 40px 24px; border-bottom:1px solid #e5e7eb;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td class="stack-column-center" valign="middle" style="width:50%; text-align:left;"><a href="https://webcode.com.pl/" target="_blank"><img src="https://webcode.com.pl/logo.png" width="190" alt="Webcode" style="width:190px; max-width:100%; height:auto;"></a></td>
            <td class="stack-column-center mobile-hide" valign="middle" style="width:50%; text-align:right; font-family:Arial,Helvetica,sans-serif; font-size:14px; line-height:20px; color:#4b5563;">Tworzę strony, które działają.</td>
          </tr></table></td></tr>

          ${content}

          <tr><td class="mobile-padding-small" style="padding:0 40px 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;"><tr><td class="service-card" style="padding:28px 30px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td class="stack-column-center" valign="top" style="width:90px; padding-right:24px;"><img src="cid:webcode-icon-website" width="72" alt="Strony internetowe" style="width:72px; height:auto;"></td>
            <td class="stack-column" valign="top" style="font-family:Arial,Helvetica,sans-serif;"><div class="mobile-spacer" style="height:0; line-height:0; font-size:0;">&nbsp;</div><h2 style="margin:0 0 10px; font-size:21px; line-height:28px; color:#111827; font-weight:700;">Strona dopasowana do Twojego biznesu</h2><p style="font-size:16px; line-height:26px; color:#4b5563;">Łączę estetykę z funkcjonalnością, dbając o responsywność, wydajność, SEO i wygodną edycję treści.</p></td>
          </tr></table></td></tr></table></td></tr>
          <tr><td class="mobile-padding" align="center" style="padding:10px 40px 28px;"><h2 style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:28px; line-height:36px; font-weight:700; color:#111827;">Co mogę dla Ciebie zrobić</h2></td></tr>
          <tr><td class="mobile-padding-small" style="padding:0 28px 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            ${renderService('webcode-icon-website', 'Strony internetowe', 'Nowoczesne strony firmowe dopasowane do branży, oferty i celów.')}
            ${renderService('webcode-icon-store', 'Sklepy WooCommerce', 'Funkcjonalne sklepy online oparte na sprawdzonych rozwiązaniach.')}
            ${renderService('webcode-icon-speed', 'Optymalizacja', 'Poprawa szybkości, SEO, UX i technicznej jakości strony.')}
          </tr></table></td></tr>
          <tr><td class="mobile-padding" style="padding:32px 40px; border-top:1px solid #e5e7eb;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td class="stack-column-center" valign="top" style="width:50%; text-align:left;"><a href="https://webcode.com.pl/" target="_blank"><img src="https://webcode.com.pl/logo.png" width="170" alt="Webcode" style="width:170px; max-width:100%; height:auto;"></a><p style="margin:14px 0 0; font-family:Arial,Helvetica,sans-serif; font-size:14px; line-height:22px; color:#6b7280;">Projektuję i wdrażam strony, które mają wyglądać nowocześnie, działać szybko i prowadzić do kontaktu.</p></td>
            <td class="stack-column-center" valign="top" style="width:50%; text-align:right; font-family:Arial,Helvetica,sans-serif;"><div class="mobile-spacer" style="height:0; line-height:0; font-size:0;">&nbsp;</div><p style="margin:0 0 10px; font-size:14px; line-height:22px;"><a href="mailto:webcode.kontakt@gmail.com" style="color:#111827; text-decoration:underline;">webcode.kontakt@gmail.com</a></p><p style="font-size:14px; line-height:22px;"><a href="https://webcode.com.pl/" target="_blank" style="color:#111827; text-decoration:underline;">webcode.com.pl</a></p></td>
          </tr></table></td></tr>
          <tr><td class="mobile-padding" align="center" style="padding:20px 40px 24px; background-color:#f8fafc; font-family:Arial,Helvetica,sans-serif; font-size:12px; line-height:20px; color:#6b7280;">© ${new Date().getFullYear()} Webcode. Wszystkie prawa zastrzeżone.</td></tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td></tr>
    </table>
  </center>
</body>
</html>`;
}

module.exports = { inlineIconAttachments, renderEmailTemplate };
