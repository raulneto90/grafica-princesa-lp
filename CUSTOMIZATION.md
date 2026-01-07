# Guia de Customização - Gráfica Premium Landing Page

## 📝 Informações para Atualizar

### 1. Informações de Contato

#### No arquivo `index.html`:

**Telefone:**
- Linha 186: `<a href="tel:+5511999999999">(11) 99999-9999</a>`
- Linha 566: `<a href="tel:+5511999999999" class="footer__contact-link">(11) 99999-9999</a>`
- Substitua `5511999999999` pelo número com DDI (55 + DDD + número)

**Email:**
- Linha 576: `<a href="mailto:contato@graficapremium.com.br">contato@graficapremium.com.br</a>`
- Substitua pelo email real da gráfica

**Endereço:**
- Linha 586: `Rua das Impressões, 1234 - Centro, São Paulo - SP`
- Atualize com o endereço completo da gráfica

**WhatsApp:**
- Linha 490: `https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento`
- Substitua pelo número correto (mesmo formato do telefone)

**CNPJ:**
- Linha 595: `CNPJ: 00.000.000/0001-00`
- Adicione o CNPJ real da empresa

**Redes Sociais:**
```html
<!-- Linhas 542-562 -->
<a href="https://instagram.com" target="_blank">Instagram</a>
<a href="https://facebook.com" target="_blank">Facebook</a>
<a href="https://linkedin.com" target="_blank">LinkedIn</a>
```
Atualize com os links reais das redes sociais.

### 2. Informações da Empresa no Schema.org

No `index.html`, linhas 33-56, atualize:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gráfica Premium",
  "url": "https://graficapremium.com.br", // Seu domínio
  "telephone": "(11) 99999-9999", // Seu telefone
  "email": "contato@graficapremium.com.br", // Seu email
  "address": {
    "streetAddress": "Rua das Impressões, 1234",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01000-000",
    "addressCountry": "BR"
  }
}
```

### 3. Meta Tags e SEO

Atualize no `<head>` do `index.html`:

```html
<!-- Linha 19-21: Open Graph URLs -->
<meta property="og:url" content="https://graficapremium.com.br/">
<meta property="og:image" content="https://graficapremium.com.br/og-image.jpg">

<!-- Linha 24-26: Twitter Cards -->
<meta property="twitter:url" content="https://graficapremium.com.br/">
<meta property="twitter:image" content="https://graficapremium.com.br/og-image.jpg">
```

### 4. Cores do Site

No arquivo `styles.css`, linhas 7-20:

```css
:root {
  --primary-color: #FF9F43;      /* Laranja principal */
  --primary-dark: #E88B2B;       /* Laranja escuro */
  --primary-light: #FFB266;      /* Laranja claro */
  
  --secondary-color: #3B5998;    /* Azul principal */
  --secondary-dark: #2D4373;     /* Azul escuro */
  --secondary-light: #4A6BAF;    /* Azul claro */
}
```

### 5. Textos Personalizados

#### Hero Section (Primeira seção):
- Linha 132: Título principal
- Linha 135: Descrição

#### Quem Somos:
- Linhas 176-191: Texto sobre a empresa

#### Estatísticas (Hero):
- Linhas 163-173: Números de destaque

### 6. Serviços

Edite ou adicione serviços na seção "Nossos Serviços" (linhas 277-368).

Exemplo de estrutura:
```html
<article class="service__card">
  <div class="service__card-icon">
    <!-- Ícone SVG aqui -->
  </div>
  <h3 class="service__card-title">Nome do Serviço</h3>
  <p class="service__card-description">Descrição do serviço</p>
</article>
```

## 🎨 Imagens Necessárias

Adicione na pasta `images/`:

### Alta Prioridade:
1. **og-image.jpg** (1200x630px) - Para compartilhamento em redes sociais
2. **logo.png** ou **logo.svg** - Logotipo da empresa (opcional, usando texto atualmente)

### Equipamentos:
3. **dtf-profissional.jpg**
4. **corte-gravacao.jpg**
5. **impressora-offset.jpg**
6. **impressora-digital.jpg**

### Portfolio:
7. **portfolio-adesivos.jpg**
8. **portfolio-embalagem.jpg**
9. **portfolio-uniformes.jpg**
10. **portfolio-camisetas.jpg**
11. **portfolio-viseira.jpg**
12. **portfolio-banner.jpg**

## 🚀 Publicação

### 1. Testar Localmente
- Abra o arquivo `index.html` em vários navegadores
- Teste em diferentes dispositivos (desktop, tablet, mobile)
- Verifique todos os links
- Teste os botões e formulários

### 2. Validação
- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- Acessibilidade: https://wave.webaim.org/

### 3. Performance
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools)

### 4. Hospedagem Recomendada

**Opções Gratuitas:**
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

**Opções Pagas (Recomendadas):**
- Hostinger
- HostGator
- Locaweb
- UOL Host

### 5. Domínio
- Registre um domínio `.com.br` ou `.com`
- Configure DNS para apontar para hospedagem
- Ative SSL/HTTPS (geralmente incluído)

## 📊 Analytics e Marketing

### Google Analytics
Adicione antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Google Tag Manager
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
```

## 🔒 LGPD (Lei Geral de Proteção de Dados)

Se você coletar dados de usuários (formulários, analytics, cookies):

1. Adicione uma página de Política de Privacidade
2. Adicione Termos de Uso
3. Implemente um banner de cookies
4. Obtenha consentimento explícito para coleta de dados

## 📱 WhatsApp Business

Configure mensagens automáticas e catálogo de produtos no WhatsApp Business para melhor atendimento.

## ✅ Checklist de Lançamento

- [ ] Todas as informações de contato atualizadas
- [ ] Todas as imagens adicionadas
- [ ] Links de redes sociais funcionando
- [ ] WhatsApp com número correto
- [ ] Testado em múltiplos dispositivos
- [ ] Testado em múltiplos navegadores
- [ ] SEO otimizado
- [ ] Analytics configurado
- [ ] Domínio registrado e DNS configurado
- [ ] SSL/HTTPS ativo
- [ ] Política de Privacidade adicionada (se aplicável)
- [ ] Performance acima de 90 no Lighthouse

## 🆘 Suporte Técnico

Para dúvidas sobre customização, consulte:
- README.md principal
- Comentários no código
- Documentação MDN Web Docs
- Stack Overflow

---

**Boa sorte com sua landing page! 🚀**
