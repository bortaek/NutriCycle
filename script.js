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

document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
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

    // Modal Logic
    const modal = document.getElementById('pillarModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalIcon = document.getElementById('modalIcon');
    const modalImg = document.getElementById('modalImg');
    const closeModalBtn = document.getElementById('closeModal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    const cards = document.querySelectorAll('.card');

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

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = ''; }, 400); // Wait for transition
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Video Modal Logic
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
    
    // Close on backdrop click for video modal
    const videoBackdrop = videoModal.querySelector('.modal-backdrop');
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideoModal);

    // Escape key for video modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideoModal();
    });

    // Lightbox Gallery Logic
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
        setTimeout(() => { lightboxImg.src = ''; }, 400); // Clear source after animation
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item.src);
        });
    });

    if (closeLightboxModalBtn) closeLightboxModalBtn.addEventListener('click', closeLightbox);
    
    // Close on backdrop click for lightbox modal
    if (lightboxModal) {
        const lightboxBackdrop = lightboxModal.querySelector('.modal-backdrop');
        if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    // Escape key for lightbox modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
    });
});
