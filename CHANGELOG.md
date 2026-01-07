# Atualização - Carrossel de Equipamentos Implementado ✅

## 🎠 Mudanças Realizadas

### 1. Nova Seção de Fachada
- Adicionada seção dedicada para mostrar a fachada da gráfica
- Imagem: `assets/images/fachada.webp`
- Design limpo e elegante com destaque visual

### 2. Carrossel de Equipamentos/Maquinário
Substituído o grid estático por um **carrossel interativo e responsivo** com:

#### ✨ Funcionalidades
- **Navegação por botões** (anterior/próximo)
- **Indicadores de posição** (bolinhas clicáveis)
- **Suporte a touch/swipe** em dispositivos móveis
- **Navegação por teclado** (setas esquerda/direita)
- **Responsivo** - adapta quantidade de itens por tela:
  - Desktop (>992px): 3 equipamentos por vez
  - Tablet (768-992px): 2 equipamentos por vez
  - Mobile (<768px): 1 equipamento por vez

#### 🖼️ Imagens Utilizadas
O carrossel exibe todas as 8 máquinas da pasta `assets/images/`:
- maquina-1.webp
- maquina-2.webp
- maquina-3.webp
- maquina-4.webp
- maquina-5.webp
- maquina-6.webp
- maquina-7.webp
- maquina-9.webp

### 3. Melhorias de UX
- Animações suaves de transição (0.5s ease-in-out)
- Botões desabilitados quando não há mais slides
- Indicador ativo destacado visualmente
- Hover effects nos botões e cards
- Zoom suave nas imagens ao passar o mouse

### 4. Acessibilidade
- ARIA labels nos botões de navegação
- Suporte completo para navegação por teclado
- Indicadores semânticos
- Alt texts descritivos nas imagens

## 📱 Responsividade

### Desktop (>992px)
- 3 equipamentos visíveis simultaneamente
- Botões laterais grandes (3rem)
- Altura das imagens: 350px

### Tablet (768-992px)
- 2 equipamentos visíveis
- Botões médios (2.5rem)
- Layout otimizado

### Mobile (<576px)
- 1 equipamento visível por vez
- Botões compactos (2rem)
- Altura das imagens: 280px
- Swipe horizontal habilitado

## 🎨 Estilo Visual

### Cores
- Botões: Branco com borda cinza
- Hover: Laranja primário (#FF9F43)
- Indicadores ativos: Laranja com expansão animada

### Animações
- Transição suave do carrossel (0.5s)
- Zoom nas imagens ao hover (scale 1.1)
- Elevação dos cards ao hover (translateY -10px)

## 🚀 Como Funciona

### Estrutura HTML
```html
<section class="equipment section">
  <div class="equipment__carousel-wrapper">
    <button class="carousel__button--prev">←</button>
    
    <div class="equipment__carousel">
      <div class="equipment__carousel-track">
        <!-- Cards dos equipamentos -->
      </div>
    </div>
    
    <button class="carousel__button--next">→</button>
  </div>
  
  <div class="equipment__indicators">
    <!-- Indicadores gerados dinamicamente -->
  </div>
</section>
```

### JavaScript
Classe `Carousel` totalmente orientada a objetos com:
- Detecção automática do número de itens por view
- Recalculo automático no resize da janela
- Eventos de teclado, clique e touch
- Gerenciamento de estado dos botões e indicadores

### CSS
- Flexbox para o track do carrossel
- Transform translateX para animação
- Media queries para responsividade
- Transições suaves

## ✅ Checklist de Validação

- [x] Carrossel funcional no desktop
- [x] Carrossel responsivo no tablet
- [x] Carrossel responsivo no mobile
- [x] Navegação por botões funcionando
- [x] Navegação por indicadores funcionando
- [x] Swipe em touch devices funcionando
- [x] Navegação por teclado funcionando
- [x] Todas as imagens carregando corretamente
- [x] Animações suaves e performáticas
- [x] Acessibilidade implementada

## 🎯 Resultado

Agora a landing page possui:
1. ✅ Seção de fachada da gráfica
2. ✅ Carrossel interativo de equipamentos/maquinário
3. ✅ Experiência fluida em todos os dispositivos
4. ✅ Performance otimizada
5. ✅ Totalmente acessível

## 📂 Arquivos Modificados

- `index.html` - Estrutura do carrossel
- `styles.css` - Estilos do carrossel e responsividade
- `script.js` - Lógica JavaScript do carrossel

---

**Pronto para usar!** 🎉 Abra o `index.html` no navegador e veja o carrossel em ação!
