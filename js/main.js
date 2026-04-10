/* lifeHRMS — Shared JS: components, reveals, transitions */
(function(){
'use strict';

/* ── Shared Nav Component ── */
function getNav(root){
 return `
 <nav id="navbar" class="nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="flex items-center justify-between h-20">
   <a href="${root}index.html" class="flex items-center gap-3"><img src="${root}img/leanmo-logo.jpg" alt="Leanmo" class="h-11 w-11 rounded-xl object-contain"><span class="text-xl font-bold text-surface-900 tracking-tight">life<span class="text-brand-600">HRMS</span></span></a>
   <div class="hidden lg:flex items-center gap-10">
    <div class="relative group">
     <button class="text-sm font-medium text-surface-500 hover:text-brand-600 transition-colors flex items-center gap-1">Features <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></button>
     <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-[380px] grid grid-cols-2 gap-2">
       <a href="${root}product/dashboard.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 text-sm">📊</span><span class="text-sm font-medium text-surface-800">HR Dashboard</span></a>
       <a href="${root}product/attendance.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center text-accent-600 text-sm">⏱</span><span class="text-sm font-medium text-surface-800">Time & Attendance</span></a>
       <a href="${root}product/leave.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 text-sm">📋</span><span class="text-sm font-medium text-surface-800">Absence & Leave</span></a>
       <a href="${root}product/payroll.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-sm">💰</span><span class="text-sm font-medium text-surface-800">Payroll & Benefits</span></a>
       <a href="${root}product/recruitment.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 text-sm">🎯</span><span class="text-sm font-medium text-surface-800">Recruitment</span></a>
       <a href="${root}product/performance.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition"><span class="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 text-sm">⭐</span><span class="text-sm font-medium text-surface-800">Performance</span></a>
      </div>
     </div>
    </div>
    <a href="${root}about.html" class="text-sm font-medium text-surface-500 hover:text-brand-600 transition-colors">About Us</a>
    <a href="${root}why-lifehrms.html" class="text-sm font-medium text-surface-500 hover:text-brand-600 transition-colors">Why lifeHRMS</a>
   </div>
   <div class="hidden lg:flex items-center gap-4"><a href="${root}contact.html" class="btn-primary text-sm !py-2.5 !px-6">Get in touch</a></div>
   <button id="mobileToggle" class="lg:hidden p-2" aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
  </div></div>
 </nav>
 <div id="mobileMenu" class="mobile-menu"><button id="mobileClose" class="absolute top-5 right-6 text-3xl text-surface-800 font-light">&times;</button>
  <a href="${root}index.html" class="text-xl font-semibold text-surface-900 mobile-link">Home</a>
  <a href="${root}about.html" class="text-xl font-semibold text-surface-900 mobile-link">About Us</a>
  <a href="${root}why-lifehrms.html" class="text-xl font-semibold text-surface-900 mobile-link">Why lifeHRMS</a>
  <a href="${root}product/dashboard.html" class="text-xl font-semibold text-surface-900 mobile-link">Features</a>
  <a href="${root}contact.html" class="btn-primary mt-6 mobile-link">Get in touch</a>
 </div>`;
}

/* ── Shared Footer ── */
function getFooter(root){
 return `
 <section class="py-14 bg-gradient-to-r from-brand-600 to-brand-700"><div class="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">Subscribe to our Newsletter</h2><p class="text-white/70 mb-8">Get insider updates, special offers, and exclusive content.</p><div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"><input type="email" placeholder="Your email address" class="flex-1 px-5 py-3.5 rounded-xl text-sm focus:outline-none border-0"><button class="btn-accent !rounded-xl whitespace-nowrap">Subscribe</button></div></div></section>
 <footer class="bg-surface-950 text-white pt-16 pb-8"><div class="max-w-7xl mx-auto px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
   <div><a href="${root}index.html" class="flex items-center gap-3 mb-5"><img src="${root}img/leanmo-logo.jpg" alt="Leanmo" class="h-10 w-10 rounded-xl object-contain bg-white p-0.5"><span class="text-lg font-bold tracking-tight">life<span class="text-brand-400">HRMS</span></span></a><p class="text-sm text-white/50 leading-relaxed mb-5">Next Generation Human Resources Solution by Leanmo Software (Pvt) Ltd.</p><div class="space-y-2 text-sm text-white/40"><p>info@leanmo.com</p><p>+94 112 823 283</p><p>Colombo, Sri Lanka</p></div></div>
   <div><h4 class="text-sm font-semibold mb-5 text-white/70 uppercase tracking-wider">Features</h4><ul class="space-y-3 text-sm text-white/40"><li><a href="${root}product/dashboard.html" class="hover:text-white transition">HR Dashboard</a></li><li><a href="${root}product/attendance.html" class="hover:text-white transition">Time & Attendance</a></li><li><a href="${root}product/payroll.html" class="hover:text-white transition">Payroll & Benefits</a></li><li><a href="${root}product/leave.html" class="hover:text-white transition">Absence & Leave</a></li><li><a href="${root}product/performance.html" class="hover:text-white transition">Performance</a></li><li><a href="${root}product/recruitment.html" class="hover:text-white transition">Recruitment</a></li></ul></div>
   <div><h4 class="text-sm font-semibold mb-5 text-white/70 uppercase tracking-wider">Company</h4><ul class="space-y-3 text-sm text-white/40"><li><a href="${root}about.html" class="hover:text-white transition">About Us</a></li><li><a href="${root}why-lifehrms.html" class="hover:text-white transition">Why lifeHRMS</a></li><li><a href="${root}contact.html" class="hover:text-white transition">Contact</a></li></ul></div>
   <div><h4 class="text-sm font-semibold mb-5 text-white/70 uppercase tracking-wider">Legal</h4><ul class="space-y-3 text-sm text-white/40"><li><a href="${root}privacy.html" class="hover:text-white transition">Privacy Policy</a></li><li><a href="${root}terms.html" class="hover:text-white transition">Terms & Conditions</a></li><li><a href="${root}legal.html" class="hover:text-white transition">Legal Disclaimers</a></li></ul></div>
  </div>
  <div class="border-t border-white/10 pt-8 text-center"><p class="text-sm text-white/30">&copy; 2026, Leanmo Software (Pvt) Ltd. All Rights Reserved.</p></div>
 </div></footer>`;
}

/* ── Inject components ── */
const root = document.body.dataset.root || './';
const navEl = document.getElementById('site-nav');
const footEl = document.getElementById('site-footer');
if(navEl) navEl.innerHTML = getNav(root);
if(footEl) footEl.innerHTML = getFooter(root);

/* ── Scroll Reveal (Apple-style fade up) ── */
const obs = new IntersectionObserver(entries=>{
 entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible') });
},{threshold:0.08, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── Nav scroll effect ── */
const nb = document.getElementById('navbar');
if(nb) window.addEventListener('scroll',()=>{ nb.classList.toggle('scrolled',window.scrollY>20) },{passive:true});

/* ── Mobile menu ── */
setTimeout(()=>{
 const mt=document.getElementById('mobileToggle'), mm=document.getElementById('mobileMenu'), mc=document.getElementById('mobileClose');
 if(mt&&mm&&mc){
  mt.addEventListener('click',()=>mm.classList.add('open'));
  mc.addEventListener('click',()=>mm.classList.remove('open'));
  mm.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>mm.classList.remove('open')));
 }
},100);

/* ── Smooth scroll ── */
document.addEventListener('click',function(e){
 const a=e.target.closest('a[href^="#"]');
 if(!a) return;
 const t=document.querySelector(a.getAttribute('href'));
 if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'})}
});

/* ── Form handler ── */
window.handleFormSubmit=function(e){
 e.preventDefault();
 const b=e.target.querySelector('button[type="submit"]');
 const orig=b.innerHTML;
 b.innerHTML='<span class="animate-pulse">Sending...</span>';b.disabled=true;
 setTimeout(()=>{b.innerHTML='✓ Sent!';b.style.background='#2d8c3c';b.style.color='#fff';
  setTimeout(()=>{b.innerHTML=orig;b.style.background='';b.style.color='';b.disabled=false;e.target.reset()},3000);
 },1500);
 return false;
};

/* ── Tab switching (focus section) ── */
window.switchTab=function(el){
 document.querySelectorAll('.mint-tab').forEach(t=>{t.classList.remove('active');const d=t.querySelector('.tab-desc');if(d)d.classList.add('hidden')});
 el.classList.add('active');const desc=el.querySelector('.tab-desc');if(desc)desc.classList.remove('hidden');
};

/* ── Apple-style page transition ── */
document.body.style.opacity='0';
document.body.style.transition='opacity 0.4s ease';
window.addEventListener('load',()=>{document.body.style.opacity='1'});
document.addEventListener('click',function(e){
 const a=e.target.closest('a');
 if(!a||!a.href||a.href.startsWith('#')||a.href.startsWith('mailto')||a.target==='_blank') return;
 if(a.hostname!==location.hostname) return;
 e.preventDefault();
 document.body.style.opacity='0';
 setTimeout(()=>{window.location=a.href},300);
});

})();
