# 🎨 Nova Paleta de Cores - Baseada no Logo

## Cores Identificadas no Logo (Color Picker)

### Cores Originais do Logo:
1. **Cinza**: `#5e6066` - Base neutra
2. **Amarelo Puro**: `#ffff00` - Destaque vibrante
3. **Cyan Puro**: `#00ffff` - Secundária vibrante
4. **Magenta**: `#ff03ea` - Acento vibrante

---

## 🎨 Paleta Profissional Aplicada no Site

### 🔘 Cinza (Base Neutra)
```css
--brand-gray: #5e6066         /* Cinza do logo - textos principais */
--brand-gray-dark: #404348    /* Versão escura */
--brand-gray-light: #7a7c82   /* Versão clara */
```
**Uso:**
- ✓ Textos principais e títulos de cards
- ✓ Cor de texto médio
- ✓ Bordas e divisores

---

### 💛 Amarelo/Dourado (Cor Principal)
```css
--brand-yellow-pure: #ffff00  /* Amarelo puro do logo (uso pontual) */
--primary-color: #FFD700      /* Dourado - mais profissional ⭐ */
--primary-dark: #E6C200       /* Versão escura para hover */
--primary-light: #FFE44D      /* Versão clara para backgrounds */
```
**Uso:**
- ✓ Botões de ação (CTAs)
- ✓ Badges e destaques
- ✓ Hover effects
- ✓ Indicadores ativos
- ✓ Ícones de features e serviços
- ✓ Destaques em títulos

**Por que Dourado (#FFD700) em vez de Amarelo Puro?**
- Mais elegante e profissional
- Melhor contraste com texto escuro
- Menos cansativo visualmente
- Mantém a essência do amarelo do logo

---

### 🔵 Cyan (Cor Secundária)
```css
--brand-cyan-pure: #00ffff    /* Cyan puro do logo (uso pontual) */
--secondary-color: #00B8D4    /* Cyan profissional ⭐ */
--secondary-dark: #008BA3     /* Versão escura */
--secondary-light: #00D4E8    /* Versão clara */
```
**Uso:**
- ✓ Background do Hero
- ✓ Background do CTA final
- ✓ Background do Footer
- ✓ Estrutura principal do site
- ✓ Links de navegação (estados)

**Por que Cyan Profissional (#00B8D4)?**
- Mantém a identidade cyan do logo
- Tom mais suave e profissional
- Ótimo para grandes áreas de fundo
- Contraste adequado com textos brancos

---

### 💗 Magenta/Rosa (Cor de Acento)
```css
--brand-magenta-pure: #ff03ea /* Magenta puro do logo (uso pontual) */
--accent-color: #E91E8C       /* Magenta suave ⭐ */
--accent-dark: #C41673        /* Versão escura */
--accent-light: #FF4DA6       /* Versão clara */
```
**Uso:**
- ✓ Categoria do portfólio
- ✓ Acentos em elementos especiais
- ✓ Overlays sutis em backgrounds
- ✓ Detalhes visuais únicos

**Por que Magenta Suave (#E91E8C)?**
- Tom mais equilibrado
- Funciona bem como acento
- Não compete com as cores principais
- Adiciona personalidade ao design

---

## 📊 Distribuição das Cores no Site

### Hierarquia de Uso:

1. **60% - Branco/Cinza Claro**
   - Fundos principais
   - Espaçamento
   - Cards

2. **25% - Cyan (Secundária)**
   - Hero
   - Footer
   - CTA final
   - Estrutura

3. **12% - Dourado (Principal)**
   - CTAs
   - Destaques
   - Botões
   - Ícones

4. **3% - Magenta (Acento)**
   - Detalhes especiais
   - Categorias
   - Acentos sutis

---

## 🎯 Onde Cada Cor Está Sendo Usada

### 💛 Dourado (#FFD700) - COR PRINCIPAL
| Elemento | Localização |
|----------|-------------|
| Botões primários | Hero, CTA |
| Badge "10+ anos" | Hero |
| Subtítulos de seção | Todas as seções |
| Destaques em títulos | Spans destacados |
| Ícones de features | Seção Quem Somos |
| Ícones de serviços | Seção Serviços |
| Indicadores do carrossel | Equipamentos |
| Hover dos links | Navegação |
| Bordas em hover | Cards |

### 🔵 Cyan (#00B8D4) - COR SECUNDÁRIA
| Elemento | Localização |
|----------|-------------|
| Background Hero | Seção inicial |
| Background CTA | Penúltima seção |
| Background Footer | Rodapé |
| Gradientes | Hero e CTA |

### 💗 Magenta (#E91E8C) - COR DE ACENTO
| Elemento | Localização |
|----------|-------------|
| Categoria | Itens do portfólio |
| Overlays sutis | Gradientes de fundo |
| Elementos especiais | Futuros destaques |

### 🔘 Cinza (#5e6066) - COR NEUTRA
| Elemento | Localização |
|----------|-------------|
| Títulos de cards | Serviços e Features |
| Textos principais | Corpo do conteúdo |
| Bordas | Divisores e cards |

---

## ✅ Vantagens da Nova Paleta

1. **Identidade Visual Forte**
   - ✓ Cores fiéis ao logo
   - ✓ Profissional e moderna
   - ✓ Memorável

2. **Acessibilidade**
   - ✓ Contraste adequado (WCAG AA)
   - ✓ Tons ajustados para conforto visual
   - ✓ Legibilidade mantida

3. **Versatilidade**
   - ✓ Funciona em diferentes contextos
   - ✓ Cores puras disponíveis para uso pontual
   - ✓ Tons profissionais como padrão

4. **Hierarquia Clara**
   - ✓ Dourado para ações
   - ✓ Cyan para estrutura
   - ✓ Magenta para acentos
   - ✓ Cinza para neutralidade

---

## 🎨 Comparação: Antes vs Depois

| Elemento | Antes | Depois |
|----------|-------|--------|
| **Cor Principal** | Laranja #FF9F43 | Dourado #FFD700 |
| **Cor Secundária** | Azul #2B4C8C | Cyan #00B8D4 |
| **Cor de Acento** | - | Magenta #E91E8C |
| **Base Neutra** | - | Cinza #5e6066 |

---

## 💡 Uso das Cores Puras (Opcional)

As cores puras do logo estão disponíveis para casos especiais:
```css
--brand-yellow-pure: #ffff00   /* Amarelo puro */
--brand-cyan-pure: #00ffff     /* Cyan puro */
--brand-magenta-pure: #ff03ea  /* Magenta puro */
```

**Quando usar:**
- Logos e ícones especiais
- Elementos que precisam máxima vibração
- Destaques muito pontuais
- Efeitos de hover extremos

**⚠️ Atenção:** Use com moderação! As cores puras são muito vibrantes.

---

## 📝 Quick Reference

```css
/* DOURADO - Principal - Use para CTAs e destaques */
--primary-color: #FFD700

/* CYAN - Secundária - Use para estrutura */
--secondary-color: #00B8D4

/* MAGENTA - Acento - Use para detalhes especiais */
--accent-color: #E91E8C

/* CINZA - Neutra - Use para textos e bordas */
--brand-gray: #5e6066
```

---

**Status**: ✅ Paleta aplicada com sucesso
**Data**: 7 de janeiro de 2026
**Baseado em**: Cores identificadas no logo oficial
