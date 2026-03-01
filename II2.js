let r = document.getElementById("kr");
let v = document.getElementById("vip");
let q = document.getElementById("poh");
let rop = document.getElementById("block");
let ver = document.getElementById("curs");
let body11 = document.getElementById("body1");
let knop11 = document.getElementById("hoy");
let h2 = document.getElementById("h2");
let toti = document.getElementById("toti");
let tuch = document.getElementById("tuch");
let bur = document.getElementById("bur");
let bur1 = document.getElementById("bur1");
let bur2 = document.getElementById("bur2");
let burger = document.getElementById("burger");
let gyui = document.getElementById("gyui");
let input = document.getElementById("input");
let gyui1 = document.getElementById("gyui1");
let content = document.getElementById("content");
let kotm = false;
bur.style.transition = "all .3s ease";
tuch.style.transition = "all .3s ease";
knop11.style.transition = "all .3s ease";
bur1.style.transition = "all .3s ease";
bur2.style.transition = "all .3s ease";
gyui.style.transition = "all .3s ease";
gyui1.style.transition = "all .3s ease";
body11.style.transition = "all .5s ease";
let l = false;
q.addEventListener("click", () => {
    l = !l;
    if (l) {
        r.style.transform = "rotate(45deg)";
        v.style.display = "block";
        x.style.display = "none";
        z.style.transform = "rotate(0deg)";
        po.style.transform = "rotate(0deg)";
        op.style.display = "none";
        q.style.color = "#0099ff";
        up.style.color = "white";
        c.style.color = "white";
        k = false;
        j = false;}
    else{
        r.style.transform = "rotate(0deg)";
        v.style.display = "none";
        q.style.color = "white";
    }
    })
    let z = document.getElementById("kr1");
let x = document.getElementById("vip1");
let c = document.getElementById("poh1");
let k = false;
c.addEventListener("click", () => {
    k = !k;
    if (k) {
        z.style.transform = "rotate(45deg)";
        x.style.display = "block";
        v.style.display = "none";
        r.style.transform = "rotate(0deg)";
        po.style.transform = "rotate(0deg)";
        op.style.display = "none";
        q.style.color = "white";
        c.style.color = "#0099ff";
        up.style.color = "white";
        l = false;
        j = false;
    }
    else{
        z.style.transform = "rotate(0deg)";
        x.style.display = "none";
        c.style.color = "white";
    }
    })
    let po = document.getElementById("kr2");
let op = document.getElementById("vip2");
let up = document.getElementById("poh2");
let j = false;
up.addEventListener("click", () => {
    j = !j;
    if (j) {
        po.style.transform = "rotate(45deg)";
        op.style.display = "block";
        x.style.display = "none";
        z.style.transform = "rotate(0deg)";
        k = false;
        l = false;
        q.style.color = "white";
        c.style.color = "white";
        up.style.color = "#0099ff";
        r.style.transform = "rotate(0deg)";
        v.style.display = "none"
    }
    else{
        po.style.transform = "rotate(0deg)";
        op.style.display = "none";
        up.style.color = "white";
    }
    })
    ver.addEventListener("click", () => {
        kom = !kom;
        if (kom) {
            rop.style.backgroundColor = "#000";
            rop.style.color = "black";
            ver.style.background = "black";
        }
    else{
        rop.style.backgroundColor = "#fff";
        rop.style.color = "white";
    }})
    let ret = document.getElementById("block");
    let yet = document.getElementById("block1");
    let get = document.getElementById("block2");
let vet = document.getElementById("curs");
let ket = false;
vet.addEventListener("click", () => {
    ket = !ket;
    if (!ket) {
        ret.style.backgroundColor = "white";
        ret.style.color = "black";
        vet.style.background = "white";
        vet.style.color = "black";
        get.style.backgroundColor = "white";
        get.style.color = "black";
        yet.style.backgroundColor = "white";
        yet.style.color = "black";
        ret.style.transition = "2s";
        yet.style.transition = "2s";
        get.style.transition = "2s";

    }
else{
    ret.style.backgroundColor = "transparent";
    ret.style.color = "white";
    vet.style.background = "black";
    vet.style.color = "white";
    yet.style.backgroundColor = "transparent";
    yet.style.color = "white";
    get.style.backgroundColor = "transparent";
    get.style.color = "white";
    ret.style.transition = "2s";
    yet.style.transition = "2s";
    get.style.transition = "2s";
}})
let body = document.getElementById("body1");
let knop = document.getElementById("hoy");
let lamp = document.getElementById("lamp");
let siga = document.getElementById("siga");
let lamp1 = document.getElementById("lamp1");
let siga1 = document.getElementById("siga1");
let lamp2 = document.getElementById("lamp2");
let siga2 = document.getElementById("siga2");
let lamp3 = document.getElementById("lamp3");
let vn1 = document.getElementById("vn1");
let vn2 = document.getElementById("vn2");
let vn3 = document.getElementById("vn3");
let vn4 = document.getElementById("vn4");
let vn5 = document.getElementById("vn5");
let vn6 = document.getElementById("vn6");
let sb1 = document.getElementById("sb1");
let sb2 = document.getElementById("sb2");
let sb3 = document.getElementById("sb3");
let sb4 = document.getElementById("sb4");
let sb5 = document.getElementById("sb5");
let sb6 = document.getElementById("sb6");
let rty1 = document.getElementById("rty1");
let rty2 = document.getElementById("rty2");
let rty3 = document.getElementById("rty3");
let rty4 = document.getElementById("rty4");
let rty5 = document.getElementById("rty5");
let rty6 = document.getElementById("rty6");
let h = false;
knop.addEventListener("click", () => {
    h = !h
    if (h) {
        body.style.backgroundColor="white";
    body.style.background="linear-gradient(rgb(255, 255, 255), rgb(0, 0, 0)";
h2.style.color="black";
toti.style.color = "black";
toti.style.borderColor = "black";
tuch.style.float = "right";
tuch.style.backgroundImage = "url(картинки/free-icon-clouds-7776261.png)";
lamp.style.display="none";
siga.style.display="inline-block";
lamp1.style.display="none";
bur.style.background="black"
bur1.style.background="black"
bur2.style.background="black"
siga1.style.display="inline-block";
lamp2.style.display="none";
siga2.style.display="inline-block";
lamp3.style.display="none";
siga3.style.display="inline-block";
vn1.style.border= "2px solid white";
vn1.style.borderStyle="dashed";
vn1.style.color="white";
vn1.style.background="black";
rty1.style.color="white";
sb1.style.background="black";
sb1.style.border="1px solid white";
vn2.style.border= "2px solid white";
vn2.style.borderStyle="dashed";
vn2.style.color="white";
vn2.style.background="black";
rty2.style.color="white";
sb2.style.background="black";
sb2.style.border="1px solid white";
vn3.style.border= "2px solid white";
vn3.style.borderStyle="dashed";
vn3.style.color="white";
vn3.style.background="black";
rty3.style.color="white";
sb3.style.background="black";
sb3.style.border="1px solid white";
vn4.style.border= "2px solid white";
vn4.style.borderStyle="dashed";
vn4.style.color="white";
vn4.style.background="black";
rty4.style.color="white";
sb4.style.background="black";
sb4.style.border="1px solid white";
vn5.style.border= "2px solid white";
vn5.style.borderStyle="dashed";
vn5.style.color="white";
vn5.style.background="black";
rty5.style.color="white";
sb5.style.background="black";
sb5.style.border="1px solid white";
vn6.style.border= "2px solid white";
vn6.style.borderStyle="dashed";
vn6.style.color="white";
vn6.style.background="black";
rty6.style.color="white";
sb6.style.background="black";
sb6.style.border="1px solid white";
ket = true;
    ret.style.backgroundColor = "transparent";
    ret.style.color = "white";
    vet.style.background = "black";
    vet.style.color = "white";
    yet.style.backgroundColor = "transparent";
    yet.style.color = "white";
    get.style.backgroundColor = "transparent";
    get.style.color = "white";
    ret.style.transition = "2s";
        yet.style.transition = "2s";
        get.style.transition = "2s";
}
        else{
            body.style.background="linear-gradient(rgb(27,255,243), rgb(174,255,174))";
            h2.style.color="white";
            toti.style.color = "white";
toti.style.borderColor = "white";
tuch.style.float = "left";
tuch.style.backgroundImage = "url(картинки/free-icon-sun-5497397.png)";
lamp.style.display="inline-block";
siga.style.display="none";
lamp1.style.display="inline-block";
siga1.style.display="none";
lamp2.style.display="inline-block";
bur.style.background="white"
bur1.style.background="white"
bur2.style.background="white"
siga2.style.display="none";
lamp3.style.display="inline-block";
siga3.style.display="none";
vn1.style.border= "2px solid brown";
vn1.style.borderStyle="dashed";
vn1.style.color="black";
vn1.style.background="white";
rty1.style.color="black";
sb1.style.background="white";
sb1.style.border="none";
vn2.style.border= "2px solid brown";
vn2.style.borderStyle="dashed";
vn2.style.color="black";
vn2.style.background="white";
rty2.style.color="black";
sb2.style.background="white";
sb2.style.border="none";
vn3.style.border= "2px solid brown";
vn3.style.borderStyle="dashed";
vn3.style.color="black";
vn3.style.background="white";
rty3.style.color="black";
sb3.style.background="white";
sb3.style.border="none";
vn4.style.border= "2px solid brown";
vn4.style.borderStyle="dashed";
vn4.style.color="black";
vn4.style.background="white";
rty4.style.color="black";
sb4.style.background="white";
sb4.style.border="none";
vn5.style.border= "2px solid brown";
vn5.style.borderStyle="dashed";
vn5.style.color="black";
vn5.style.background="white";
rty5.style.color="black";
sb5.style.background="white";
sb5.style.border="none";
vn6.style.border= "2px solid brown";
vn6.style.borderStyle="dashed";
vn6.style.color="black";
vn6.style.background="white";
rty6.style.color="black";
sb6.style.background="white";
sb6.style.border="none";
ket = false;
        ret.style.backgroundColor = "white";
        ret.style.color = "black";
        vet.style.background = "white";
        vet.style.color = "black";
        get.style.backgroundColor = "white";
        get.style.color = "black";
        yet.style.backgroundColor = "white";
        yet.style.color = "black";
        ret.style.transition = "2s";
        yet.style.transition = "2s";
        get.style.transition = "2s";
      }
    })

    burger.addEventListener("click", () => {
        kotm = !kotm;
        if(kotm){
        bur.style.transform="rotate(45deg)";
        bur1.style.transform="rotate(-45deg)";
        bur2.style.display="none";
        bur.style.marginBottom="-3px";
        bur1.style.marginTop="-7px";
        gyui.style.display="none";
        gyui1.style.display="block";

        body11.style.background="linear-gradient(45deg, rgb(59, 220, 92), rgb(10, 198, 205) ) ";
        }
        else{
        bur.style.transform="rotate(0deg)";
        bur1.style.transform="rotate(0deg)";
        bur2.style.display="block";
        bur.style.marginBottom="3px";
        bur1.style.marginTop="3px";
        gyui.style.display="block";
        gyui1.style.display="none";
        body11.style.background="linear-gradient(rgb(27,255,243), rgb(174,255,174))";
        body.style.background="linear-gradient(rgb(27,255,243), rgb(174,255,174))";
                    h2.style.color="white";
                    toti.style.color = "white";
        toti.style.borderColor = "white";
        tuch.style.float = "left";
        tuch.style.backgroundImage = "url(картинки/free-icon-sun-5497397.png)";
        lamp.style.display="inline-block";
        siga.style.display="none";
        lamp1.style.display="inline-block";
        siga1.style.display="none";
        lamp2.style.display="inline-block";
        bur.style.background="white"
        bur1.style.background="white"
        bur2.style.background="white"
        siga2.style.display="none";
        lamp3.style.display="inline-block";
        siga3.style.display="none";
        vn1.style.border= "2px solid brown";
        vn1.style.borderStyle="dashed";
        vn1.style.color="black";
        vn1.style.background="white";
        rty1.style.color="black";
        sb1.style.background="white";
        sb1.style.border="none";
        vn2.style.border= "2px solid brown";
        vn2.style.borderStyle="dashed";
        vn2.style.color="black";
        vn2.style.background="white";
        rty2.style.color="black";
        sb2.style.background="white";
        sb2.style.border="none";
        vn3.style.border= "2px solid brown";
        vn3.style.borderStyle="dashed";
        vn3.style.color="black";
        vn3.style.background="white";
        rty3.style.color="black";
        sb3.style.background="white";
        sb3.style.border="none";
        vn4.style.border= "2px solid brown";
        vn4.style.borderStyle="dashed";
        vn4.style.color="black";
        vn4.style.background="white";
        rty4.style.color="black";
        sb4.style.background="white";
        sb4.style.border="none";
        vn5.style.border= "2px solid brown";
        vn5.style.borderStyle="dashed";
        vn5.style.color="black";
        vn5.style.background="white";
        rty5.style.color="black";
        sb5.style.background="white";
        sb5.style.border="none";
        vn6.style.border= "2px solid brown";
        vn6.style.borderStyle="dashed";
        vn6.style.color="black";
        vn6.style.background="white";
        rty6.style.color="black";
        sb6.style.background="white";
        sb6.style.border="none";
        !ket == ket;
        ret.style.transform = "rotateY(90deg)";
                ret.style.backgroundColor = "white";
                ret.style.color = "black";
                vet.style.background = "white";
                vet.style.color = "black";
                get.style.transform = "rotateY(90deg)";
                get.style.backgroundColor = "white";
                get.style.color = "black";
                yet.style.transform = "rotateY(90deg)";
                yet.style.backgroundColor = "white";
                yet.style.color = "black";
                h=false;
        }
        })
        document.addEventListener('DOMContentLoaded', function() {
            let blocks = document.querySelectorAll('.block');
                        blocks.forEach(block => {
                block.style.opacity = "0";
                block.style.transform = "translateY(30px)";
                block.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                blocks.forEach(block => {
                    let blockPosition = block.getBoundingClientRect().top;
                    
                    if (blockPosition < windowHeight - 100) {
                        block.style.opacity = "1";
                        block.style.transform = "translateY(0)";
                    } else {
                        block.style.opacity = "0";
                        block.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });
        

        document.addEventListener('DOMContentLoaded', function() {
            let run = document.querySelectorAll('.run');
            
            run.forEach(run => {
                run.style.opacity = "0";
                run.style.transform = "translateY(30px)";
                run.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                run.forEach(run => {
                    let runPosition = run.getBoundingClientRect().top;
                    
                    if (runPosition < windowHeight - 100) {
                        run.style.opacity = "1";
                        run.style.transform = "translateY(0)";
                    } else {
                        run.style.opacity = "0";
                        run.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            let stop = document.querySelectorAll('.stop');
            
            stop.forEach(stop => {
                stop.style.opacity = "0";
                stop.style.transform = "translateY(30px)";
                stop.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                stop.forEach(stop => {
                    let stopPosition = stop.getBoundingClientRect().top;
                    
                    if (stopPosition < windowHeight - 100) {
                        stop.style.opacity = "1";
                        stop.style.transform = "translateY(0)";
                    } else {
                        stop.style.opacity = "0";
                        stop.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            let stop1 = document.querySelectorAll('.stop1');
                        stop1.forEach(stop1 => {
                stop1.style.opacity = "0";
                stop1.style.transform = "translateY(30px)";
                stop1.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                stop1.forEach(stop1 => {
                    let stop1Position = stop1.getBoundingClientRect().top;
                    
                    if (stop1Position < windowHeight - 100) {
                        stop1.style.opacity = "1";
                        stop1.style.transform = "translateY(0)";
                    } else {
                        stop1.style.opacity = "0";
                        stop1.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
                        let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            let stop3 = document.querySelectorAll('.stop3');
                        stop3.forEach(stop3 => {
                stop3.style.opacity = "0";
                stop3.style.transform = "translateY(30px)";
                stop3.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                stop3.forEach(stop3 => {
                    let stop3Position = stop3.getBoundingClientRect().top;
                    
                    if (stop3Position < windowHeight - 100) {
                        stop3.style.opacity = "1";
                        stop3.style.transform = "translateY(0)";
                    } else {                        stop3.style.opacity = "0";
                        stop3.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
                        let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            let stop4 = document.querySelectorAll('.stop4');
                        stop4.forEach(stop4 => {
                stop4.style.opacity = "0";
                stop4.style.transform = "translateY(30px)";
                stop4.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                stop4.forEach(stop4 => {
                    let stop4Position = stop4.getBoundingClientRect().top;
                    
                    if (stop4Position < windowHeight - 100) {
                        stop4.style.opacity = "1";
                        stop4.style.transform = "translateY(0)";
                    } else {
                        stop4.style.opacity = "0";
                        stop4.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
                        let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            let osn = document.querySelectorAll('.osn');
            
            osn.forEach(osn => {
                osn.style.opacity = "0";
                osn.style.transform = "translateY(30px)";
                osn.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                osn.forEach(osn => {
                    let osnPosition = osn.getBoundingClientRect().top;
                    
                    if (osnPosition < windowHeight - 100) {
                        osn.style.opacity = "1";
                        osn.style.transform = "translateY(0)";
                    } else {
                        osn.style.opacity = "0";
                        osn.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
            let sb = document.querySelectorAll('.sb');
                        sb.forEach(sb => {
                sb.style.opacity = "0";
                sb.style.transform = "translateY(30px)";
                sb.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                sb.forEach(sb => {
                    let sbPosition = sb.getBoundingClientRect().top;
                    
                    if (sbPosition < windowHeight - 100) {
                        sb.style.opacity = "1";
                        sb.style.transform = "translateY(0)";
                    } else {
                        sb.style.opacity = "0";
                        sb.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });
        


        document.addEventListener('DOMContentLoaded', function() {
            let information = document.querySelectorAll('.information');
                        information.forEach(information => {
            information.style.opacity = "0";
                information.style.transform = "translateY(30px)";
                information.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        
            function checkBlocksVisibility() {
                let windowHeight = window.innerHeight;
                
                information.forEach(information => {
                    let informationPosition = information.getBoundingClientRect().top;
                    
                    if (informationPosition < windowHeight - 70) {
                        information.style.opacity = "1";
                        information.style.transform = "translateY(0)";
                    } else {
                        information.style.opacity = "0";
                        information.style.transform = "translateY(30px)";
                    }
                });
            }
            
            checkBlocksVisibility();
            let isScrolling = false;
            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    window.requestAnimationFrame(function() {
                        checkBlocksVisibility();
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        });
window.addEventListener('load', function() {
    const preloader = document.getElementById('content');
    const workingArea = document.getElementById('input'); 
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none'; 
        workingArea.style.display = 'block'; 
        body.style.background="linear-gradient(rgb(27,255,243), rgb(174,255,174))";
    }, 1000);

});

