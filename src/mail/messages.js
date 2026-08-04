const { renderEmailTemplate } = require('./template');

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderParagraphs(value) {
    return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function createAdminEmail({ name, email, message, hasAttachment }) {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    return renderEmailTemplate(`
      <tr><td class="mobile-padding" style="padding:48px 40px 16px;"><h1 class="headline" style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:40px; line-height:46px; font-weight:700; color:#111827;">Nowa wiadomość z formularza</h1></td></tr>
      <tr><td class="mobile-padding" style="padding:12px 40px 48px; font-family:Arial,Helvetica,sans-serif; font-size:16px; line-height:26px; color:#374151;">
        <p style="margin:0 0 10px;"><strong>Imię:</strong> ${safeName}</p>
        <p style="margin:0 0 10px;"><strong>E-mail:</strong> <a href="mailto:${safeEmail}" style="color:#2563eb; text-decoration:underline;">${safeEmail}</a></p>
        <p style="margin:0 0 10px;"><strong>Załącznik:</strong> ${hasAttachment ? 'tak' : 'nie'}</p>
        <p style="margin:24px 0 8px;"><strong>Wiadomość:</strong></p>
        <p style="margin:0; padding:18px; background-color:#f8fafc;">${renderParagraphs(message)}</p>
      </td></tr>`);
}

function createCustomerEmail({ name }) {
    const safeName = escapeHtml(name);

    return renderEmailTemplate(`
      <tr><td class="mobile-padding" style="padding:48px 40px 16px;"><h1 class="headline" style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:40px; line-height:46px; font-weight:700; color:#111827;">Cześć ${safeName},</h1></td></tr>
      <tr><td class="mobile-padding" style="padding:12px 40px 0; font-family:Arial,Helvetica,sans-serif; font-size:17px; line-height:28px; color:#374151;"><p style="margin:0 0 14px;">Dziękuję za wiadomość i zainteresowanie współpracą.</p><p>Projektuję i wdrażam nowoczesne strony WordPress, sklepy WooCommerce oraz aplikacje webowe. Dbam o czytelną strukturę, dobry UX, wydajność i rozwiązania dopasowane do celu biznesowego.</p></td></tr>
      <tr><td class="mobile-padding" style="padding:28px 40px 48px;"><a href="https://webcode.com.pl/oferta/" target="_blank" style="display:inline-block; padding:15px 26px; border-radius:5px; background-color:#2563eb; font-family:Arial,Helvetica,sans-serif; font-size:16px; line-height:20px; font-weight:700; color:#ffffff; text-align:center;">Zobacz ofertę</a></td></tr>`);
}

module.exports = { createAdminEmail, createCustomerEmail };
