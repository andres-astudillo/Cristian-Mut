/**
 * Cristian Mut SA - Shared Components
 * This script injects the Navbar and Footer into all HTML pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    setupMobileMenu();
});

function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navbarContainer.innerHTML = `
    <header class="bg-brand-blue/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg transition-all duration-300 w-full">
        <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2">
                <div class="h-10 text-white">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.02 37.83" class="h-full w-auto">
                        <defs><style>.cls-1 { fill: currentColor; }</style></defs>
                        <g>
                            <path class="cls-1" d="M19.81,21.76v-8.17c0-1.26.34-2.24,1.03-2.95.69-.71,1.64-1.07,2.86-1.07,1.15,0,2.06.37,2.73,1.1.67.73,1.01,1.73,1.01,2.99v1.53h-2.55v-1.75c0-.55-.11-.96-.32-1.24-.22-.28-.54-.41-.96-.41s-.74.14-.96.41c-.22.28-.32.69-.32,1.24v8.89c0,.55.11.97.32,1.24.21.28.54.42.96.42s.74-.14.96-.42c.21-.28.32-.69.32-1.24v-2.17h2.55v1.67c0,1.4-.33,2.47-1,3.23-.66.76-1.61,1.14-2.83,1.14s-2.2-.37-2.84-1.12c-.64-.75-.96-1.85-.96-3.31Z" />
                            <path class="cls-1" d="M32.04,19.15v6.7h-2.48v-15.94h3.64c1.37,0,2.36.36,2.96,1.09.61.73.91,1.9.91,3.52,0,1-.12,1.81-.37,2.42-.24.62-.64,1.11-1.2,1.5l1.83,7.41h-2.57l-1.53-6.7h-1.18ZM32.04,12.22v4.63h.98c.57,0,.97-.17,1.19-.51.22-.34.34-.98.34-1.9,0-.84-.12-1.42-.35-1.74-.24-.32-.66-.48-1.27-.48h-.89Z" />
                            <path class="cls-1" d="M39.09,25.85v-15.94h2.53v15.94h-2.53Z" />
                            <path class="cls-1" d="M43.35,21.8l2.37-.35c.04.81.2,1.4.47,1.79.27.39.66.58,1.18.58.45,0,.82-.14,1.1-.42.28-.28.42-.66.42-1.12,0-.83-.67-1.9-2-3.22-.1-.1-.18-.18-.23-.23-1.31-1.29-2.14-2.29-2.52-2.98-.37-.69-.55-1.43-.55-2.21,0-1.12.37-2.07,1.12-2.84.75-.77,1.66-1.15,2.73-1.15s1.9.35,2.57,1.06c.67.71,1.05,1.67,1.15,2.88l-2.43.34c-.04-.72-.17-1.22-.38-1.53-.21-.31-.54-.46-.97-.46-.4,0-.72.13-.96.4-.24.27-.36.63-.36,1.08,0,.92.78,2.13,2.34,3.63.06.06.1.1.14.14,1.14,1.1,1.89,2,2.25,2.7.36.7.54,1.48.54,2.35,0,1.16-.37,2.11-1.09,2.86-.73.75-1.65,1.12-2.76,1.12-1.23,0-2.21-.39-2.93-1.17-.72-.78-1.11-1.86-1.17-3.24Z" />
                            <path class="cls-1" d="M51.63,12.22v-2.31h7.64v2.31h-2.58v13.63h-2.48v-13.63h-2.57Z" />
                            <path class="cls-1" d="M60.42,25.85v-15.94h2.53v15.94h-2.53Z" />
                            <path class="cls-1" d="M64.29,25.85l2.65-15.94h3.24l2.64,15.94h-2.55l-.5-3.45h-2.5l-.53,3.45h-2.44ZM67.58,20.14h1.89l-.85-6.66h-.16l-.89,6.66Z" />
                            <path class="cls-1" d="M74.25,25.85v-15.94h2.22l3.15,9.52c.06.18.13.43.22.73.09.3.17.63.26.97-.08-.46-.15-.89-.2-1.28-.05-.39-.08-.68-.08-.87v-9.07h2.33v15.94h-2.33l-3.03-8.81s-.03-.09-.06-.17c-.21-.6-.36-1.12-.47-1.56.09.56.16,1.02.21,1.4.05.37.07.64.07.81v8.33h-2.3Z" />
                            <path class="cls-1" d="M89.32,25.85v-15.94h3.31l1.62,8.83c.07.35.11.73.15,1.14.03.4.05.82.05,1.25,0-.37.02-.75.06-1.13.04-.39.1-.8.17-1.23l1.55-8.85h3.35v15.94h-2.33v-10.06c0-.29.02-.67.05-1.16.03-.48.08-1.02.14-1.62-.04.21-.08.51-.14.88-.12.71-.2,1.17-.25,1.38l-2.03,10.58h-1.24l-1.94-10.59c-.07-.43-.15-.89-.24-1.4-.09-.51-.14-.79-.15-.85.05.54.1,1.05.12,1.52.03.47.04.89.04,1.25v10.06h-2.31Z" />
                            <path class="cls-1" d="M101.92,9.91h2.54v12.34c0,.46.12.83.36,1.11.24.28.56.42.95.42s.7-.14.92-.41c.22-.27.33-.64.33-1.11v-12.34h2.53v11.91c0,1.4-.33,2.48-.98,3.23-.65.75-1.6,1.13-2.82,1.13s-2.19-.38-2.85-1.14c-.66-.75-.98-1.85-.98-3.29v-11.85Z" />
                            <path class="cls-1" d="M110.55,12.22v-2.31h7.64v2.31h-2.58v13.63h-2.48v-13.63h-2.57Z" />
                        </g>
                        <polygon class="cls-1" points="137.02 35.68 109.56 35.68 109.56 33.5 134.82 33.5 134.82 2.18 2.2 2.18 2.2 33.5 27.45 33.5 27.45 35.68 0 35.68 0 0 137.02 0 137.02 35.68" />
                    </svg>
                </div>
            </a>

            <!-- Navegación Desktop -->
            <nav class="hidden md:flex space-x-6">
                <a href="index.html" class="text-sm font-bold ${currentPage === 'index.html' ? 'text-white border-b-2 border-white' : 'text-brand-light hover:text-white hover:border-b-2 hover:border-white'} py-2 transition">INICIO</a>
                <a href="products.html" class="text-sm font-bold ${currentPage === 'products.html' ? 'text-white border-b-2 border-white' : 'text-brand-light hover:text-white hover:border-b-2 hover:border-white'} py-2 transition">PRODUCTOS</a>
               <!-- <a href="projects.html" class="text-sm font-bold ${currentPage === 'projects.html' ? 'text-white border-b-2 border-white' : 'text-brand-light hover:text-white hover:border-b-2 hover:border-white'} py-2 transition">PROYECTOS</a> -->
                <a href="about.html" class="text-sm font-bold ${currentPage === 'about.html' ? 'text-white border-b-2 border-white' : 'text-brand-light hover:text-white hover:border-b-2 hover:border-white'} py-2 transition">QUIÉNES SOMOS</a>
                <a href="contact.html" class="text-sm font-bold ${currentPage === 'contact.html' ? 'text-white border-b-2 border-white' : 'text-brand-light hover:text-white hover:border-b-2 hover:border-white'} py-2 transition">CONTACTO</a>
            </nav>

            <!-- CTA Header -->
            <div class="flex items-center gap-4">
                <a href="https://wa.me/5492616544130" class="bg-[#25D366] text-white p-2 md:px-5 md:py-2 text-sm font-bold uppercase rounded-full shadow hover:bg-[#128C7E] transition flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span class="hidden md:inline">WhatsApp</span>
                </a>
                <!-- Mobile Menu Icon (Generic ID) -->
                <button id="mobile-menu-btn" class="md:hidden p-2 text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu (Generic ID) -->
        <div id="mobile-menu" class="hidden md:hidden fixed inset-0 top-20 left-0 w-full z-40 bg-brand-blue/95 backdrop-blur-md">
            <nav class="bg-brand-blue/95 w-full border-b border-white/10 shadow-xl flex flex-col p-6 space-y-4">
                <a href="index.html" class="text-white hover:text-blue-200 font-bold ${currentPage === 'index.html' ? 'underline decoration-2' : ''}">INICIO</a>
                <a href="products.html" class="text-white hover:text-blue-200 font-bold ${currentPage === 'products.html' ? 'underline decoration-2' : ''}">PRODUCTOS</a>
                <a href="projects.html" class="text-white hover:text-blue-200 font-bold ${currentPage === 'projects.html' ? 'underline decoration-2' : ''}">PROYECTOS</a>
                <a href="about.html" class="text-white hover:text-blue-200 font-bold ${currentPage === 'about.html' ? 'underline decoration-2' : ''}">QUIÉNES SOMOS</a>
                <a href="contact.html" class="text-white hover:text-blue-200 font-bold ${currentPage === 'contact.html' ? 'underline decoration-2' : ''}">CONTACTO</a>
            </nav>
        </div>
    </header>
    `;
}

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer class="bg-brand-dark text-blue-200 py-16 border-t-8 border-brand-red w-full">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div class="col-span-1 md:col-span-1">
                <div class="w-48 text-white mb-6">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.02 37.83" class="h-auto w-full">
                        <defs><style>.cls-1 { fill: currentColor; }</style></defs>
                        <g>
                            <path class="cls-1" d="M19.81,21.76v-8.17c0-1.26.34-2.24,1.03-2.95.69-.71,1.64-1.07,2.86-1.07,1.15,0,2.06.37,2.73,1.1.67.73,1.01,1.73,1.01,2.99v1.53h-2.55v-1.75c0-.55-.11-.96-.32-1.24-.22-.28-.54-.41-.96-.41s-.74.14-.96.41c-.22.28-.32.69-.32,1.24v8.89c0,.55.11.97.32,1.24.21.28.54.42.96.42s.74-.14.96-.42c.21-.28.32-.69.32-1.24v-2.17h2.55v1.67c0,1.4-.33,2.47-1,3.23-.66.76-1.61,1.14-2.83,1.14s-2.2-.37-2.84-1.12c-.64-.75-.96-1.85-.96-3.31Z" />
                            <path class="cls-1" d="M32.04,19.15v6.7h-2.48v-15.94h3.64c1.37,0,2.36.36,2.96,1.09.61.73.91,1.9.91,3.52,0,1-.12,1.81-.37,2.42-.24.62-.64,1.11-1.2,1.5l1.83,7.41h-2.57l-1.53-6.7h-1.18ZM32.04,12.22v4.63h.98c.57,0,.97-.17,1.19-.51.22-.34.34-.98.34-1.9,0-.84-.12-1.42-.35-1.74-.24-.32-.66-.48-1.27-.48h-.89Z" />
                            <path class="cls-1" d="M39.09,25.85v-15.94h2.53v15.94h-2.53Z" />
                            <path class="cls-1" d="M43.35,21.8l2.37-.35c.04.81.2,1.4.47,1.79.27.39.66.58,1.18.58.45,0,.82-.14,1.1-.42.28-.28.42-.66.42-1.12,0-.83-.67-1.9-2-3.22-.1-.1-.18-.18-.23-.23-1.31-1.29-2.14-2.29-2.52-2.98-.37-.69-.55-1.43-.55-2.21,0-1.12.37-2.07,1.12-2.84.75-.77,1.66-1.15,2.73-1.15s1.9.35,2.57,1.06c.67.71,1.05,1.67,1.15,2.88l-2.43.34c-.04-.72-.17-1.22-.38-1.53-.21-.31-.54-.46-.97-.46-.4,0-.72.13-.96.4-.24.27-.36.63-.36,1.08,0,.92.78,2.13,2.34,3.63.06.06.1.1.14.14,1.14,1.1,1.89,2,2.25,2.7.36.7.54,1.48.54,2.35,0,1.16-.37,2.11-1.09,2.86-.73.75-1.65,1.12-2.76,1.12-1.23,0-2.21-.39-2.93-1.17-.72-.78-1.11-1.86-1.17-3.24Z" />
                            <path class="cls-1" d="M51.63,12.22v-2.31h7.64v2.31h-2.58v13.63h-2.48v-13.63h-2.57Z" />
                            <path class="cls-1" d="M60.42,25.85v-15.94h2.53v15.94h-2.53Z" />
                            <path class="cls-1" d="M64.29,25.85l2.65-15.94h3.24l2.64,15.94h-2.55l-.5-3.45h-2.5l-.53,3.45h-2.44ZM67.58,20.14h1.89l-.85-6.66h-.16l-.89,6.66Z" />
                            <path class="cls-1" d="M74.25,25.85v-15.94h2.22l3.15,9.52c.06.18.13.43.22.73.09.3.17.63.26.97-.08-.46-.15-.89-.2-1.28-.05-.39-.08-.68-.08-.87v-9.07h2.33v15.94h-2.33l-3.03-8.81s-.03-.09-.06-.17c-.21-.6-.36-1.12-.47-1.56.09.56.16,1.02.21,1.4.05.37.07.64.07.81v8.33h-2.3Z" />
                            <path class="cls-1" d="M89.32,25.85v-15.94h3.31l1.62,8.83c.07.35.11.73.15,1.14.03.4.05.82.05,1.25,0-.37.02-.75.06-1.13.04-.39.1-.8.17-1.23l1.55-8.85h3.35v15.94h-2.33v-10.06c0-.29.02-.67.05-1.16.03-.48.08-1.02.14-1.62-.04.21-.08.51-.14.88-.12.71-.2,1.17-.25,1.38l-2.03,10.58h-1.24l-1.94-10.59c-.07-.43-.15-.89-.24-1.4-.09-.51-.14-.79-.15-.85.05.54.1,1.05.12,1.52.03.47.04.89.04,1.25v10.06h-2.31Z" />
                            <path class="cls-1" d="M101.92,9.91h2.54v12.34c0,.46.12.83.36,1.11.24.28.56.42.95.42s.7-.14.92-.41c.22-.27.33-.64.33-1.11v-12.34h2.53v11.91c0,1.4-.33,2.48-.98,3.23-.65.75-1.6,1.13-2.82,1.13s-2.19-.38-2.85-1.14c-.66-.75-.98-1.85-.98-3.29v-11.85Z" />
                            <path class="cls-1" d="M110.55,12.22v-2.31h7.64v2.31h-2.58v13.63h-2.48v-13.63h-2.57Z" />
                        </g>
                        <polygon class="cls-1" points="137.02 35.68 109.56 35.68 109.56 33.5 134.82 33.5 134.82 2.18 2.2 2.18 2.2 33.5 27.45 33.5 27.45 35.68 0 35.68 0 0 137.02 0 137.02 35.68" />
                    </svg>
                </div>
                <p class="mb-6 leading-relaxed">Soluciones de alta calidad para construcción y refrigeración.</p>
                <div class="flex gap-3">
                    <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition backdrop-blur-sm">IG</a>
                    <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition backdrop-blur-sm">LI</a>
                    <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition backdrop-blur-sm">FB</a>
                </div>
            </div>
            <div>
                <h4 class="text-white font-heading font-bold uppercase mb-6 tracking-wider">Navegación</h4>
                <ul class="space-y-3">
                    <li><a href="index.html" class="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition">Inicio</a></li>
                    <li><a href="products.html" class="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition">Productos</a></li>
                    <!-- <li><a href="projects.html" class="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition">Proyectos</a></li> -->
                    <li><a href="about.html" class="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition">Quiénes Somos</a></li>
                    <li><a href="contact.html" class="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition">Contacto</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-heading font-bold uppercase mb-6 tracking-wider">Legal</h4>
                <ul class="space-y-3">
                    <li><a href="#" class="hover:text-white transition">Política de Privacidad</a></li>
                    <li><a href="#" class="hover:text-white transition">Términos y Condiciones</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-heading font-bold uppercase mb-6 tracking-wider">Contacto</h4>
                <ul class="space-y-3">
                    <li class="flex items-center gap-2"><span>📞</span> +54 9 2616 54-4130</li>
                    <li class="flex items-center gap-2"><span>📧</span> contacto@cristianmut.com</li>
                    <li class="flex items-center gap-2"><span>📍</span> Mendoza, Argentina</li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-blue-900 text-xs text-center text-blue-300">
            &copy; 2026 Cristian Mut SA. Todos los derechos reservados.
        </div>
    </footer>
    `;
}

function setupMobileMenu() {
    // Standard Mobile Menu (Header)
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Special handling for products page sidebar mobile menu
    const navMobileBtn = document.getElementById('nav-mobile-menu-btn');
    const navMobileMenu = document.getElementById('nav-mobile-menu');
    if (navMobileBtn && navMobileMenu) {
        navMobileBtn.addEventListener('click', () => {
            navMobileMenu.classList.toggle('hidden');
        });
    }
}
