import {t} from './i18n.js';

// Native fullscreen where supported; a distraction-free layout on other browsers.
export function installFocusMode(host){
  let active=false,nativeEntered=false,returnFocus=null;
  const bar=document.createElement('div');
  bar.className='training-focus-toolbar';
  bar.hidden=true;
  bar.setAttribute('role','toolbar');
  bar.setAttribute('aria-label',t('Commandes du training'));
  bar.innerHTML=`<span class="focus-title">${t('Training uniquement')}</span><div><kbd>Esc</kbd><button type="button" class="secondary" data-focus-exit>${t('Quitter le plein écran')}</button></div>`;
  document.body.append(bar);
  const announce=document.createElement('div');announce.className='sr-only';announce.setAttribute('role','status');document.body.append(announce);
  function refresh(){document.documentElement.classList.toggle('training-focus',active);bar.hidden=!active;document.querySelectorAll('[data-focus-enter]').forEach(b=>b.setAttribute('aria-pressed',String(active)));}
  function finishExit(){if(!active)return;active=false;nativeEntered=false;refresh();announce.textContent=t('Interface complète rétablie.');const target=returnFocus?.isConnected?returnFocus:host.querySelector('[data-focus-enter]')||host;target.focus({preventScroll:true});}
  async function exit(){if(document.fullscreenElement&&nativeEntered){try{await document.exitFullscreen()}catch{}}finishExit();}
  async function enter(button){if(active)return;returnFocus=button;active=true;refresh();if(document.fullscreenEnabled&&document.documentElement.requestFullscreen){try{await document.documentElement.requestFullscreen();nativeEntered=true}catch{/* Keep the focus layout when native fullscreen is unavailable. */}}if(!active)return;bar.querySelector('button').focus({preventScroll:true});announce.textContent=t('Mode training activé. Échap permet de sortir.');}
  document.addEventListener('click',e=>{const enterButton=e.target.closest('[data-focus-enter]');if(enterButton)void enter(enterButton);if(e.target.closest('[data-focus-exit]'))void exit();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&active&&!document.querySelector('dialog[open]')){e.preventDefault();void exit();}});
  document.addEventListener('fullscreenchange',()=>{if(nativeEntered&&!document.fullscreenElement)finishExit();});
  new MutationObserver(()=>{if(active&&!host.querySelector('.course-content,.studio-container,.practice-grid'))void exit();}).observe(host,{childList:true});
}
