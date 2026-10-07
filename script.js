const nav=document.getElementById('nav'),hamb=document.getElementById('hamb'),mobile=document.getElementById('mobileNav'),topBtn=document.getElementById('top');
hamb.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);topBtn.classList.toggle('show',scrollY>500);});
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';observer.observe(el)});
const cards=[...document.querySelectorAll('.gcard img')],lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');let current=0;
function show(i){current=(i+cards.length)%cards.length;lbImg.src=cards[current].src;lb.classList.add('show');document.body.style.overflow='hidden'}
cards.forEach((img,i)=>img.parentElement.addEventListener('click',()=>show(i)));
document.getElementById('closeLightbox').onclick=()=>{lb.classList.remove('show');document.body.style.overflow=''};
document.getElementById('prev').onclick=()=>show(current-1);document.getElementById('next').onclick=()=>show(current+1);
document.addEventListener('keydown',e=>{if(!lb.classList.contains('show'))return;if(e.key==='Escape')document.getElementById('closeLightbox').click();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1)});
let startX=0;lb.addEventListener('touchstart',e=>startX=e.touches[0].clientX);lb.addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>50)show(current+(dx<0?1:-1))});
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').textContent='✓ Request received — this frontend demo does not send data to a server.';e.target.reset()});
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.desktop-nav a')];window.addEventListener('scroll',()=>{let pos=scrollY+180;let active=sections.findLast(s=>s.offsetTop<=pos);links.forEach(a=>a.classList.toggle('active',active&&a.getAttribute('href')==='#'+active.id))});
