(() => {
  const canvas = document.getElementById('cosmicCanvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  let w=0,h=0,dpr=1,particles=[],raf=0,last=0;
  const mobile=()=>window.innerWidth<700;
  const makeParticle=()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.5+.35,a:Math.random()*.55+.18,hue:[185,205,225,250,275][Math.floor(Math.random()*5)],phase:Math.random()*6.28});
  function resize(){
    const oldW=w||window.innerWidth,oldH=h||window.innerHeight;
    w=window.innerWidth;h=window.innerHeight;dpr=Math.min(window.devicePixelRatio||1,1.5);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(mobile()?48:105,Math.max(28,Math.floor(w*h/(mobile()?15000:11500))));
    particles=Array.from({length:count},(_,i)=>{const p=makeParticle();p.x*=w/oldW;p.y*=h/oldH;return p;});
  }
  function draw(t){
    raf=requestAnimationFrame(draw);if(t-last<32)return;last=t;
    ctx.clearRect(0,0,w,h);
    const scroll=window.scrollY||0;
    for(let i=0;i<particles.length;i++){
      const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.phase+=.012;
      if(p.x<-8)p.x=w+8;if(p.x>w+8)p.x=-8;if(p.y<-8)p.y=h+8;if(p.y>h+8)p.y=-8;
      const alpha=p.a*(.72+.28*Math.sin(p.phase));
      ctx.beginPath();ctx.fillStyle=`hsla(${p.hue},95%,78%,${alpha})`;ctx.shadowBlur=9;ctx.shadowColor=`hsla(${p.hue},100%,70%,.45)`;ctx.arc(p.x,p.y-scroll*.025,p.r,0,Math.PI*2);ctx.fill();
      if(!mobile())for(let j=i+1;j<particles.length;j++){
        const q=particles[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.hypot(dx,dy);
        if(dist<92){ctx.beginPath();ctx.strokeStyle=`rgba(117,166,255,${(1-dist/92)*.12})`;ctx.lineWidth=.65;ctx.moveTo(p.x,p.y-scroll*.025);ctx.lineTo(q.x,q.y-scroll*.025);ctx.stroke();}
      }
    }
    ctx.shadowBlur=0;
  }
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resize,120)},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf)}else{last=0;raf=requestAnimationFrame(draw)}});
  resize();raf=requestAnimationFrame(draw);
})();
