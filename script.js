/* =====================================================================
   NutriCycle – Product Database
   ===================================================================== */
const products = [
    {
        id: 1,
        name: 'Sıfır Atık Mutfak Sistemi',
        category: 'Mutfak Çözümleri',
        price: 24990,
        img: 'assets/product_zerowaste.png',
        shortDesc: 'Ticari mutfaklar için akıllı atık ayırma ve analitik pano ile donatılmış tam entegre sıfır atık sistemi.',
        desc: 'Endüstriyel mutfaklar için özel olarak tasarlanan bu sistem, akıllı atık ayırma üniteleri ve gerçek zamanlı gıda atığı analitik panosu ile donatılmıştır. Gıda israfını %70\'e kadar azaltırken, atıkları kompost ve biyogaz hammaddesine dönüştürerek mutfak operasyonlarınızı bir gelir modeline çevirir.',
        features: [
            'Akıllı atık ayırma sensörleri',
            'Gerçek zamanlı analitik dashboard',
            'Kompost ve biyogaz entegrasyonu',
            '%70\'e varan atık azaltımı',
            'Kurulum ve eğitim desteği',
            '7/24 teknik servis'
        ]
    },
    {
        id: 2,
        name: 'Kompost & Biyogaz Üretim Ünitesi',
        category: 'Enerji Dönüşümü',
        price: 49900,
        img: 'assets/product_compost.png',
        shortDesc: 'Gıda atığını enerji ve yüksek kaliteli komposta dönüştüren endüstriyel biyogaz reaktörü.',
        desc: 'Gıda atıklarını doğrudan enerji ve yüksek kaliteli komposta dönüştüren kompakt biyogaz reaktörü. Toplu tüketim noktaları, belediyeler, okullar ve hastaneler için ideal olan bu ünite, atık bertaraf maliyetlerini sıfıra yakın indirirken, ürettiği biyogaz ile enerji faturalarını drastik şekilde düşürür.',
        features: [
            'Günlük 500kg atık işleme kapasitesi',
            'Otomatik biyogaz üretimi',
            'Yüksek kaliteli kompost çıktısı',
            'Düşük enerji tüketimi',
            'AB Yeşil Mutabakat uyumlu',
            'Hibe ve teşvik danışmanlığı'
        ]
    },
    {
        id: 3,
        name: 'Yerel Üretici Tedarik Ağı',
        category: 'Tedarik Zinciri',
        price: 7990,
        img: 'assets/product_supply.png',
        shortDesc: 'Tarladan sofraya doğrudan erişim sağlayan yerel üretici ağı üyelik ve tedarik platformu.',
        desc: 'Yerel üreticilerle doğrudan bağlantı kuran, tarladan sofraya adil ticaret zinciri oluşturan platform üyeliği. IoT tabanlı tedarik takip sistemi, sürdürülebilir ambalajlama çözümleri ve mevsimsel ürün planlama danışmanlığı ile üreticiden tüketiciye en kısa ve en adil yolu sunar.',
        features: [
            'Doğrudan üretici erişimi',
            'IoT tedarik takip sistemi',
            'Sürdürülebilir ambalajlama',
            'Adil ticaret sertifikası',
            'Mevsimsel ürün planlama',
            'Aylık üyelik modeli'
        ]
    },
    {
        id: 4,
        name: 'Akıllı Atık Yönetim Cihazı',
        category: 'IoT Teknoloji',
        price: 12500,
        img: 'assets/product_smartwaste.png',
        shortDesc: 'Mutfak atık verilerinizi izleyen, analiz eden ve raporlayan IoT tabanlı akıllı yönetim cihazı.',
        desc: 'IoT tabanlı akıllı gıda atığı izleme ve yönetim sistemi. Yeşil LED göstergeli sensör cihazı, gerçek zamanlı atık azaltım metrikleri ve döngüsel ekonomi veri görselleştirmesi ile mutfak operasyonlarınızın sürdürülebilirlik performansını ölçülebilir hale getirir. Tüm veriler bulut tabanlı platformdan takip edilebilir.',
        features: [
            'IoT sensör teknolojisi',
            'Bulut tabanlı veri platformu',
            'Gerçek zamanlı atık metrikleri',
            'Otomatik raporlama sistemi',
            'Çoklu lokasyon desteği',
            'API entegrasyon imkanı'
        ]
    }
];

/* =====================================================================
   Pillar Data (Existing)
   ===================================================================== */
const pillarData = {
    'ekonomi': {
        title: 'Ekonomik Entegrasyon',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        img: 'assets/pillar_economy.png',
        text: 'Tarladan sofraya uzanan süreçte, atığı bir maliyet kalemi olmaktan çıkarıyoruz. Kompost, biyogaz ve benzeri yöntemlerle atıkları enerji ve hammadde olarak geri kazandırıyor, mutfak ekosistemi içinde kapalı devre, sürdürülebilir yeni bir gelir modeli yaratıyoruz.'
    },
    'toplum': {
        title: 'Toplumsal Etki',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        img: 'assets/pillar_community.png',
        text: 'Sadece ekonomik değil, sosyal bir dönüşüm de hedefliyoruz. Üreticiden şefe, tedarikçiden son tüketiciye kadar uzanan zincirde; adil ticaret uygulamalarını teşvik ediyor, bilinçli tüketim alışkanlıkları kazandırıyor ve sağlıklı, temiz gıdaya erişimi lüks olmaktan çıkarıp standart hale getiriyoruz.'
    },
    'kamu': {
        title: 'Kamusal Alan Dönüşümü',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
        img: 'assets/pillar_public.png',
        text: 'Değişime en çok ihtiyaç duyulan ve en büyük etkinin yaratılabileceği alanlar toplu tüketim noktalarıdır. Belediyeler, okul kantinleri ve hastane mutfakları gibi alanlarda "Sıfır Atık Mutfak" prensiplerini uygulayarak, sadece çevreyi korumakla kalmıyor, kamusal kaynakların verimli kullanımıyla bütçeye doğrudan katkı sağlıyoruz.'
    },
    'finans': {
        title: 'Finansal Sürdürülebilirlik',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        img: 'assets/pillar_finance.png',
        text: 'Geleceğin ekonomisi yeşil olacak. Avrupa Birliği Yeşil Mutabakatı (Green Deal) fonları, karbon kredilendirme sistemleri, ulusal yeşil teşvikler ve hibe mekanizmalarını projelerimize entegre ediyoruz. Bu sayede iş modelimizin hem finansal dayanıklılığını artırıyor hem de yatırım çekiciliğini maksimize ediyoruz.'
    }
};

/* =====================================================================
   Cart State
   ===================================================================== */
let cart = JSON.parse(localStorage.getItem('nutricycle_cart') || '[]');

function saveCart() {
    localStorage.setItem('nutricycle_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    if (total > 0) {
        badge.textContent = total;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: product.id, qty: 1 });
    }
    saveCart();
    showToast(product.name + ' sepete eklendi!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function formatPrice(price) {
    return '₺' + price.toLocaleString('tr-TR');
}

/* =====================================================================
   Toast Notification
   ===================================================================== */
function showToast(message) {
    // Remove existing
    document.querySelectorAll('.cart-toast').forEach(t => t.remove());
    
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

/* =====================================================================
   SPA Routing
   ===================================================================== */
const homeSections = ['header', 'glass-hero', 'vision-section', 'video-showcase-section', 
    'pillars-section', 'gallery-section', 'cta-section'];

function showPage(pageId) {
    // Hide all page views
    document.querySelectorAll('.page-view').forEach(p => p.style.display = 'none');
    
    // Show/Hide home content
    const mainContent = document.querySelector('.hero');
    const allSections = document.querySelectorAll('body > section, body > footer, body > .hero');
    
    if (pageId === 'home') {
        allSections.forEach(el => el.style.display = '');
        document.querySelector('footer').style.display = '';
        // Show home nav links
        document.querySelectorAll('.nav-home-link').forEach(el => el.style.display = '');
    } else {
        allSections.forEach(el => el.style.display = 'none');
        document.querySelector('footer').style.display = 'none';
        // Hide home nav links on shop/checkout pages
        document.querySelectorAll('.nav-home-link').forEach(el => el.style.display = 'none');
        
        const page = document.getElementById(pageId);
        if (page) page.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =====================================================================
   Render Functions
   ===================================================================== */
function renderProductGrid() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(p => `
        <div class="product-card" data-product-id="${p.id}">
            <div style="overflow:hidden;">
                <img src="${p.img}" alt="${p.name}" class="product-card-img">
            </div>
            <div class="product-card-body">
                <span class="product-card-category">${p.category}</span>
                <h3 class="product-card-title">${p.name}</h3>
                <p class="product-card-desc">${p.shortDesc}</p>
                <div class="product-card-footer">
                    <span class="product-card-price">${formatPrice(p.price)}</span>
                    <span class="product-card-cta">Detayları Gör →</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Attach click listeners
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.getAttribute('data-product-id'));
            openProductModal(id);
        });
    });
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModalImg').src = product.img;
    document.getElementById('productModalCategory').textContent = product.category;
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productModalPrice').textContent = formatPrice(product.price);
    document.getElementById('productModalDesc').textContent = product.desc;
    
    const featuresEl = document.getElementById('productModalFeatures');
    featuresEl.innerHTML = product.features.map(f => `
        <div class="feature-item">
            <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span>${f}</span>
        </div>
    `).join('');
    
    // Update add to cart button
    const addBtn = document.getElementById('addToCartBtn');
    addBtn.onclick = () => {
        addToCart(product.id);
    };
    
    const modal = document.getElementById('productModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderCartPanel() {
    const itemsEl = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        // Keep empty state visible
        itemsEl.innerHTML = `
            <div class="cart-empty" id="cartEmpty">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:64px;height:64px;color:rgba(255,255,255,0.2);margin-bottom:16px;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <p>Sepetiniz boş</p>
            </div>
        `;
        footerEl.style.display = 'none';
        return;
    }
    
    itemsEl.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        return `
            <div class="cart-item">
                <img src="${product.img}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <span class="cart-item-name">${product.name}</span>
                    <span class="cart-item-price">${formatPrice(product.price * item.qty)}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn remove-btn" data-id="${item.id}" data-action="minus">−</button>
                    <span class="cart-qty">${item.qty}</span>
                    <button class="cart-qty-btn" data-id="${item.id}" data-action="plus">+</button>
                </div>
            </div>
        `;
    }).join('');
    
    footerEl.style.display = 'block';
    totalEl.textContent = formatPrice(getCartTotal());
    
    // Attach qty button listeners
    itemsEl.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const action = btn.getAttribute('data-action');
            updateQty(id, action === 'plus' ? 1 : -1);
            renderCartPanel();
        });
    });
}

function renderCheckoutSummary() {
    const itemsEl = document.getElementById('checkoutItems');
    const totalEl = document.getElementById('checkoutTotal');
    
    itemsEl.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        return `
            <div class="checkout-item">
                <img src="${product.img}" alt="${product.name}" class="checkout-item-img">
                <span class="checkout-item-name">${product.name}</span>
                <span class="checkout-item-qty">x${item.qty}</span>
                <span class="checkout-item-price">${formatPrice(product.price * item.qty)}</span>
            </div>
        `;
    }).join('');
    
    totalEl.textContent = formatPrice(getCartTotal());
}

/* =====================================================================
   DOM Ready – Initialize Everything
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Header Scroll Effect --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    /* --- Pillar Modal Logic --- */
    const modal = document.getElementById('pillarModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalIcon = document.getElementById('modalIcon');
    const modalImg = document.getElementById('modalImg');
    const closeModalBtn = document.getElementById('closeModal');
    const modalBackdrop = document.querySelector('#pillarModal .modal-backdrop');
    
    const cards = document.querySelectorAll('.card[data-pillar]');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pillarType = card.getAttribute('data-pillar');
            const data = pillarData[pillarType];
            
            if (data) {
                modalTitle.textContent = data.title;
                modalText.textContent = data.text;
                modalIcon.innerHTML = data.icon;
                modalImg.src = data.img;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closePillarModal = () => {
        modal.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400);
    };

    closeModalBtn.addEventListener('click', closePillarModal);
    modalBackdrop.addEventListener('click', closePillarModal);
    
    /* --- Video Modal Logic --- */
    const playVideoBtn = document.getElementById('playVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoModalBtn = document.getElementById('closeVideoModal');
    const fullVideo = document.getElementById('fullVideo');

    const openVideoModal = () => {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        fullVideo.currentTime = 0;
        fullVideo.play();
    };

    const closeVideoModal = () => {
        videoModal.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400);
        fullVideo.pause();
    };

    if (playVideoBtn) playVideoBtn.addEventListener('click', openVideoModal);
    if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
    
    const videoBackdrop = videoModal.querySelector('.modal-backdrop');
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideoModal);

    /* --- Lightbox Gallery Logic --- */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightboxModalBtn = document.getElementById('closeLightboxModal');

    const openLightbox = (src) => {
        lightboxImg.src = src;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightboxModal.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400);
        setTimeout(() => { lightboxImg.src = ''; }, 400);
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', () => openLightbox(item.src));
    });

    if (closeLightboxModalBtn) closeLightboxModalBtn.addEventListener('click', closeLightbox);
    
    if (lightboxModal) {
        const lightboxBackdrop = lightboxModal.querySelector('.modal-backdrop');
        if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    /* --- Global Escape Key Handler --- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) closePillarModal();
            if (videoModal.classList.contains('active')) closeVideoModal();
            if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
            
            const productModal = document.getElementById('productModal');
            if (productModal.classList.contains('active')) closeProductModal();
            
            const cartPanel = document.getElementById('cartPanel');
            if (cartPanel.classList.contains('active')) closeCart();
        }
    });

    /* ===================================================================
       E-COMMERCE LOGIC
       =================================================================== */
    
    // Initialize cart badge
    updateCartBadge();
    
    // Render product grid
    renderProductGrid();
    
    /* --- Navigation: Shop Button --- */
    const navShopBtn = document.getElementById('navShopBtn');
    navShopBtn.addEventListener('click', () => {
        showPage('shopPage');
    });
    
    /* --- Logo: back to home --- */
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('home');
    });
    
    /* --- Shop Back Button --- */
    document.getElementById('shopBackBtn').addEventListener('click', () => {
        showPage('home');
    });
    
    /* --- Product Modal --- */
    const productModal = document.getElementById('productModal');
    const closeProductModalBtn = document.getElementById('closeProductModal');
    const productModalBackdrop = productModal.querySelector('.modal-backdrop');
    
    const closeProductModal = () => {
        productModal.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400);
    };
    
    closeProductModalBtn.addEventListener('click', closeProductModal);
    productModalBackdrop.addEventListener('click', closeProductModal);
    
    // Make closeProductModal available outside
    window.closeProductModal = closeProductModal;
    
    /* --- Cart Panel --- */
    const cartPanel = document.getElementById('cartPanel');
    const navCartBtn = document.getElementById('navCartBtn');
    const closeCartPanelBtn = document.getElementById('closeCartPanel');
    const cartPanelBackdrop = cartPanel.querySelector('.cart-panel-backdrop');
    
    const openCart = () => {
        renderCartPanel();
        cartPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeCart = () => {
        cartPanel.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400);
    };
    
    window.closeCart = closeCart;
    
    navCartBtn.addEventListener('click', openCart);
    closeCartPanelBtn.addEventListener('click', closeCart);
    cartPanelBackdrop.addEventListener('click', closeCart);
    
    /* --- Checkout Button (inside cart) --- */
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return;
        closeCart();
        setTimeout(() => {
            showPage('checkoutPage');
            renderCheckoutSummary();
        }, 500);
    });
    
    /* --- Checkout Back Button --- */
    document.getElementById('checkoutBackBtn').addEventListener('click', () => {
        showPage('shopPage');
    });
    
    /* --- Payment Form --- */
    const paymentForm = document.getElementById('paymentForm');
    const cardInput = document.getElementById('payCard');
    const expiryInput = document.getElementById('payExpiry');
    const cvcInput = document.getElementById('payCVC');
    
    // Card number formatting
    cardInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.substring(0, 16);
        let formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = formatted;
    });
    
    // Expiry formatting
    expiryInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.substring(0, 4);
        if (val.length >= 2) {
            val = val.substring(0, 2) + '/' + val.substring(2);
        }
        e.target.value = val;
    });
    
    // CVC - numbers only
    cvcInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });
    
    // Form submission
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const fields = paymentForm.querySelectorAll('input[required]');
        fields.forEach(field => {
            field.classList.remove('invalid');
            if (!field.value.trim()) {
                field.classList.add('invalid');
                isValid = false;
            }
        });
        
        // Card number: must be 19 chars (16 digits + 3 spaces)
        if (cardInput.value.replace(/\s/g, '').length < 16) {
            cardInput.classList.add('invalid');
            isValid = false;
        }
        
        // Expiry: must be 5 chars (MM/YY)
        if (expiryInput.value.length < 5) {
            expiryInput.classList.add('invalid');
            isValid = false;
        }
        
        // CVC: must be 3 digits
        if (cvcInput.value.length < 3) {
            cvcInput.classList.add('invalid');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Generate order number
        const orderNum = '#NC-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('orderNumber').textContent = orderNum;
        
        // Clear cart
        cart = [];
        saveCart();
        
        // Reset form
        paymentForm.reset();
        
        // Show success
        showPage('orderSuccessPage');
    });
    
    /* --- Success Home Button --- */
    document.getElementById('successHomeBtn').addEventListener('click', () => {
        showPage('home');
    });
});
