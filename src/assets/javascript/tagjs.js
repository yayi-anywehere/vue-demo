        window.onload = function() {  
            try {  
                TagCanvas.Start('myTag','tags',{  
                textColour: '#63cdff',  
                outlineColour: '#63cdff',  
                reverse: true,  
                depth: 0.8,  
                maxSpeed: 0.05  
                });  
            } catch(e) {  
                document.getElementById('myCloudTag').style.display = 'none';  
            }  
        };  
        function changeshape(s) {  
            var locks = { hcylinder: 'x', vcylinder: 'y', hring: 'x', vring: 'y', sphere: '' };  
            lock = locks[s] || '';  
            shape = s;  
            TagCanvas.initial = (lock == 'x' && [0,0.2]) || (lock == 'y' && [0.2,0]) || [0.2,0.2];  
            restart();  
        }  
        changeshape('vcylinder')  