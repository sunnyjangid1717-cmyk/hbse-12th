/* Live subject atmosphere: animated formulas, waves, molecules, DNA and code */
(()=>{
 const canvas=document.getElementById('studyCanvas'),ctx=canvas?.getContext('2d');
 if(!canvas||!ctx)return;
 const themes={
  mathematics:{label:'MATHEMATICS · FORMULAS & THEOREMS',symbols:['∫ f(x) dx','a² + b² = c²','sin²θ + cos²θ = 1','lim x→a','dy / dx','∑ n²','det(A) = |A|','P(A∩B)','∇ · F','π ≈ 3.14159','f(x)=0','x = (−b±√D)/2a']},
  physics:{label:'PHYSICS · WAVES & FIELD LINES',symbols:['F = ma','V = IR','E = mc²','λ = h/p','v = fλ','Φ = B·A','∇ × E','P = VI','sin θ','qE = ma','c = 3×10⁸','ω = 2πf']},
  chemistry:{label:'CHEMISTRY · MOLECULES & REACTIONS',symbols:['H₂O','CO₂','C₆H₁₂O₆','pH = −log[H⁺]','Na⁺ + Cl⁻','ΔG = ΔH − TΔS','N≡N','C—C','2H₂ + O₂','NH₃','⇌','e⁻']},
  biology:{label:'BIOLOGY · CELLS & DNA',symbols:['DNA','A—T','G—C','mRNA','ATP','Cell','Nucleus','Evolution','Gene','RNA','🧬','Bio']},
  computer:{label:'COMPUTER SCIENCE · CODE & LOGIC',symbols:['0101 1010','{ }','</>','if (x)','while(true)','SQL','1010','=>','[0,1,1]','def main():','&&','return 0;']}
 };
 let theme='cosmic',items=[],w=0,h=0,dpr=1,last=0,raf=0;
 const rand=(a,b)=>Math.random()*(b-a)+a;
 function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);seed();}
 function seed(){const list=themes[theme]?.symbols||['✦','·','◌','✧','⋆'];const n=Math.min(30,Math.max(12,Math.round(w/48)));items=Array.from({length:n},()=>({x:rand(0,w),y:rand(0,h),vx:rand(-.12,.12),vy:rand(-.22,-.06),symbol:list[Math.floor(rand(0,list.length))],size:rand(11,20),alpha:rand(.12,.34),phase:rand(0,Math.PI*2)}));}
 function draw(t){if(document.hidden){raf=0;return;}ctx.clearRect(0,0,w,h);const color=getComputedStyle(document.body).getPropertyValue('--study-a').trim()||'#70dfff';
  items.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.y<-35){p.y=h+25;p.x=rand(0,w);}if(p.x<-30)p.x=w+20;if(p.x>w+30)p.x=-20;const pulse=.72+.28*Math.sin(t*.0007+p.phase);ctx.globalAlpha=p.alpha*pulse;ctx.fillStyle=color;ctx.font=`500 ${p.size}px ui-monospace,monospace`;ctx.fillText(p.symbol,p.x,p.y);if(i%3===0){ctx.globalAlpha=.10;ctx.beginPath();ctx.arc(p.x+4,p.y-5,2,0,Math.PI*2);ctx.fill();}});
  // A faint animated waveform is used for physics; molecular links for chemistry/biology.
  if(theme==='physics'){ctx.globalAlpha=.17;ctx.strokeStyle=color;ctx.lineWidth=1;ctx.beginPath();for(let x=0;x<w;x+=4){let y=h*.72+Math.sin(x*.012+t*.001)*17+Math.sin(x*.027-t*.0007)*7;x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();}
  if(theme==='chemistry'||theme==='biology'){ctx.globalAlpha=.09;ctx.strokeStyle=color;ctx.lineWidth=1;for(let i=0;i<Math.min(items.length,14);i++){const a=items[i],b=items[(i+4)%items.length];ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
  ctx.globalAlpha=1;raf=requestAnimationFrame(draw);
 }
 function setSubject(subject,topic=''){const s=(subject||'').toLowerCase();theme=s.includes('math')?'mathematics':s.includes('phys')?'physics':s.includes('chem')?'chemistry':s.includes('bio')?'biology':s.includes('computer')||s==='cs'?'computer':'cosmic';document.body.dataset.studyTheme=theme;document.body.dataset.studyTopic=topic||'';const label=themes[theme]?.label||'COSMIC LEARNING MODE';const badge=document.getElementById('studyModeText');if(badge)badge.textContent=topic?`${label} · ${topic.toUpperCase()}`:label;seed();}
 window.setStudyAtmosphere=setSubject;
 window.addEventListener('resize',resize,{passive:true});document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!raf)raf=requestAnimationFrame(draw);});
 resize();raf=requestAnimationFrame(draw);
})();
