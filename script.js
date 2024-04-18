        var slider_container_res = document.querySelector('.ress');
        var slider_container_com = document.querySelector('.comm');
        var containerWidth_com = slider_container_com.offsetWidth;
        var containerWidth_res = slider_container_res.offsetWidth;
        var nxtBtn = document.querySelector('.nextbtn');
        var prevbtn = document.querySelector('.prevbtn');
        var maxLength = slider_container_res.getElementsByTagName('div').length ;
        var comLength = slider_container_com.getElementsByTagName('div').length ;
        slideNumber = 1;
        nxtBtn.addEventListener("click",()=>{
            if(slider_container_res.style.display != 'none'){
                if(slideNumber < maxLength-1){
                    slider_container_res.scrollLeft += containerWidth_res;
                    slideNumber++;
                }
                else{
                    slideNumber = 1;
                    slider_container_res.scrollLeft = 0;
                }  
            }
            else{
                if(slideNumber < comLength-1){
                    slider_container_com.scrollLeft += containerWidth_com;
                    slideNumber++;
                }
                else{
                    slideNumber = 1;
                    slider_container_com.scrollLeft = 0;
                }
            }
        });
        prevbtn.addEventListener("click",()=>{
            if(slider_container_res.style.display != 'none'){
                if(slideNumber > 1){
                    slider_container_res.scrollLeft -= containerWidth_res;
                    slideNumber--;
                }
                else{
                    slideNumber = maxLength - 1;
                    slider_container_res.scrollLeft = containerWidth_res * maxLength -1;
                }
            }
            else{
                if(slideNumber > 1){
                    slider_container_com.scrollLeft -= containerWidth_com;
                    slideNumber--;
                }
                else{
                    slideNumber = comLength - 1;
                    slider_container_com.scrollLeft = containerWidth_com * comLength - 1;
                }
            }       
        });

        
        
        var resbtn = document.getElementById("res");
        var combtn = document.getElementById("com");
        
        resbtn.addEventListener("click",()=>{
            slider_container_res.style.display = "flex";
            slider_container_com.style.display = "none";
            resbtn.style.backgroundColor = "#65399e";
            resbtn.style.color = "white";
            combtn.style.backgroundColor = "white";
            combtn.style.color = "#65399e";
        });
        combtn.addEventListener("click",()=>{
            slider_container_res.style.display = "none";
            slider_container_com.style.display = "flex";
            resbtn.style.backgroundColor = "white";
            resbtn.style.color = "#65399e";
            combtn.style.backgroundColor = "#65399e";
            combtn.style.color = "white";
            containerWidth_com = slider_container_com.offsetWidth;
        });
        
        // Filter section

        // var wrap = document.querySelector('#bh');
        // wrap.addEventListener('scroll',()=>{
        //     console.log(wrap);
        // });
        var rl_content = document.querySelector('.rl-content');
        var hl = document.querySelector('.hl');
        var sl = document.querySelector('.sl');
        console.log(window.scrollY);
        window.addEventListener("scroll",()=>{
            hl.style.opacity = '100%';
            if(window.scrollY >= 213){
                hl.style.display = 'block';
                sl.style.display = 'none';
            }   
            else{
                hl.style.display = 'none';
                sl.style.display = 'block';
            }
        });