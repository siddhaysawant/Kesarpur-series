(()=>{
 const menu=document.querySelector('.ks-menu'),theme=document.getElementById('ks-theme');
 document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.open=false});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus()}});
 const isDark=()=>document.documentElement.dataset.theme?document.documentElement.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
 const label=()=>{theme.textContent=isDark()?'Light':'Dark';theme.setAttribute('aria-label','Switch to '+(isDark()?'light':'dark')+' theme')};label();
 theme.addEventListener('click',()=>{const value=isDark()?'light':'dark';document.documentElement.dataset.theme=value;try{localStorage.setItem('kesarpur-theme',value)}catch(e){}label()});
 const progress=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('ks-progress').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%'};addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
 const checkbox=document.getElementById('ks-read');if(checkbox){let read={};try{read=JSON.parse(localStorage.getItem('kesarpur-read')||'{}')||{}}catch(e){}checkbox.checked=!!read[checkbox.dataset.story];checkbox.addEventListener('change',()=>{try{read=JSON.parse(localStorage.getItem('kesarpur-read')||'{}')||{};if(checkbox.checked)read[checkbox.dataset.story]=true;else delete read[checkbox.dataset.story];localStorage.setItem('kesarpur-read',JSON.stringify(read))}catch(e){}})}
})();
