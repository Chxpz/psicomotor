var canvas,ctx,timer,isstart,count,st,col,cou,s,N,cb,jun,tx,ty,di,ba,gy,
    yc,ys,xc,xs,mc,ms,pt;

(function(){
    var a,b;
    canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');
    canvas.width=canvas.height=400;
    a=Object.getOwnPropertyNames(Math);
    for(b=0;b<a.length;b++)window[a[b]]=Math[a[b]];
    init();
    col=[0,50,105,172,240,300];
    aaa();
})();

function init(){
    var a,b,c,d,e,f,p,n,o,mae;
    cou=0;
    N=3;
    n=N-1;
    s=50;
    cb=[];
    f=N/2-0.5;
    for(a=0;a<N;a++){
        for(b=0;b<N;b++){
            for(c=0;c<N;c++){
                if(!(!a || !b || !c || a==n || b==n || c==n))continue;
                o={};
                o.m=[b-f,a-f,c-f];
                p=[];
                for(d=0;d<8;d++){
                    p[d]=[];
                    for(e=0;e<3;e++){
                        p[d][e]=((d&(1<<e))>>e)?1:-1;
                    }
                }
                o.p=p;
                cb.push(o);
            }
        }
    }
    
    jun=[];
    mae=-1;
    for(a=0;a<15;a++){
        for(c=0;c<100;c++){
            b=(random()*3)|0;
            if(b!=mae)break;
        }
        c=((random()*3)|0)-1;
        d=1;
        if(random()<0.5)d=-1;
        kaiten(b,c,d);
        jun.push([b,c,d]);
        mae=b;
    }
}

function kaiten(n,ban,gy){
    var a,b,c,d,e,f,p,x,y;
    
    b=[];
    for(a=0;a<3;a++)if(a!=n)b.push(a);
    a=b[0];b=b[1];
    
    for(c=0;c<cb.length;c++){
        d=cb[c];
        if(d.m[n]==ban){
            x=d.m[a];
            y=d.m[b];
            d.m[a]=-y*gy;
            d.m[b]=x*gy;
            p=d.p;
            for(e=0;e<8;e++){
                f=p[e];
                x=f[a];
                y=f[b];
                f[a]=-y*gy;
                f[b]=x*gy;
            }
        }
    }
}

function aaa(){
    var a,b,c,tim,spa,t,r;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(255,255,255, 0.1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tim=new Date().getTime()/400;
    
    tx=canvas.width/2;
    ty=canvas.height/2;
    di=ba=10;
    gy=1;
    
    if(jun.length){
        a=jun[jun.length-1];
        di=a[0];
        ba=a[1];
        gy=-a[2];
    }
    
    spa=50;
    t=cou/spa;
    
    t*=1.2;
    if(t<0)t=0;
    if(t>1)t=1;
    t=0.5-Math.cos(t*Math.PI)/2;
    
    r=t*PI/2*gy;
    mc=cos(r);
    ms=sin(r);
    
    r=-0.7;
    yc=Math.cos(r);
    ys=Math.sin(r);
    
    r=tim/13;
    xc=cos(r);
    xs=sin(r);
    
    pt=[];
    st=0;
    for(a=0;a<cb.length;a++){
        sik(cb[a]);
    }
    
    d=st;
    for(z=0;z<10000;z++){
        if(!st)break;
        e=d.v;
        ctx.beginPath();
        for(a=0;a<e.length;a++)ctx.lineTo(e[a][0],e[a][1]);
        
        ctx.closePath();
        c="hsla("+d.c+",100%,"+70+"%,0.93)";
        ctx.fillStyle=c;
        //ctx.strokeStyle=c;
        ctx.lineWidth=1;
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        if(!d.tugi)break;
        e=d;
        d=d.tugi;
        e.mae=e.tugi=undefined;
        
    }
    
    cou++;
    if(cou>=spa){
        cou=0;
        if(!jun.length){
            init();
        }else{
            kaiten(di,ba,gy);
            jun.pop();
        }
    }
    requestAnimationFrame(aaa);
}

function sik(o){
    var a,b,c,p,q,x,y,z;
    
    q=o.p;
    p=[];
    for(a=0;a<8;a++){
        p[a]=[];
        for(b=0;b<3;b++){
            p[a][b]=q[a][b];
        }
    }
    
    c=s/2*0.97;
    for(a=0;a<8;a++){
        b=p[a];
        b[0]=b[0]*c+o.m[0]*s;
        b[1]=b[1]*c+o.m[1]*s;
        b[2]=b[2]*c+o.m[2]*s;
        if(o.m[di]==ba)kai(b,di);
        p[a]=henkan(b);
    }
    
    a=col;
    pp([p[2],p[3],p[1],p[0]],a[0]);
    pp([p[0],p[1],p[5],p[4]],a[1]);
    pp([p[1],p[3],p[7],p[5]],a[2]);
    pp([p[3],p[2],p[6],p[7]],a[3]);
    pp([p[2],p[0],p[4],p[6]],a[4]);
    pp([p[4],p[5],p[7],p[6]],a[5]);
    
    function kai(p,n){
        var a,b,c,x,y;
        b=[];
        for(a=0;a<3;a++){
            if(a!=n)b.push(a);
        }
        
        a=b[0];b=b[1];
        x=p[a]*mc-p[b]*ms;
        y=p[a]*ms+p[b]*mc;
        p[a]=x;
        p[b]=y;
    }
    
    function pp(q,co){
        var a,b,c,d,e,f,g,h,i,ob,col;
        ob={q:q,c:co,v:q};
        a=q[0];b=q[1];c=q[2];
        d=[b[0]-a[0],b[1]-a[1],b[2]-a[2]];
        e=[c[0]-b[0],c[1]-b[1],c[2]-b[2]];
        h=d[0]*e[1]-d[1]*e[0];
        
        f=d[1]*e[2]-d[2]*e[1];
        g=d[2]*e[0]-d[0]*e[2];
        
        if(h<0)return;
        a=f+g*0.7+h*1.2;
        b=Math.abs(f)+Math.abs(h)+Math.abs(g);
        a=a/b;
        a=a*60+0;
        ob.alf=q[4];
        ob.lit=a;
        a=(q[0][2]+q[1][2]+q[2][2]+q[3][2])/4;
        
        a=q[0][2];
        for(b=1;b<4;b++)if(q[b][2]<a)a=q[b][2];
        
        ob.m=a;
        if(!st){
            st=ob;
            return;
        }
        
        b=st;
        while(1){
            if(b.m>=a){
                if(!b.mae){
                    st=ob;
                }else{
                    b.mae.tugi=ob;
                }
                ob.mae=b.mae;
                b.mae=ob;
                ob.tugi=b;
                break;
            }
            if(!b.tugi){
                b.tugi=ob;
                ob.mae=b;
                break;
            }
            b=b.tugi;
        }
    }
}

function henkan(p){
    var x,y,z,x1,y1,z1;
    x=p[0];
    y=p[1];
    z=p[2];
    x1=xc*x-xs*z;
    z1=xs*x+xc*z;
    y1=yc*y-ys*z1;
    z1=ys*y+yc*z1;
    z=Math.pow(1.4,(z1)/150);
    x1*=z;
    y1*=z;
    return [x1+tx,y1+ty,z1,z];
}

