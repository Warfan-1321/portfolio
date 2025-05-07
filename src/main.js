import '../styles/modern-nomalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/feature.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/util.css';


import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark';
import lazyLoading from './utils/lazy  loading';
import initGSAP from './utils/gsap';
// import aboutGSAP from './utils/about';
// import featureGSAP from './utils/feature';
mobileNav();
darkMode();
lazyLoading();
initGSAP();
// aboutGSAP();
// featureGSAP();
