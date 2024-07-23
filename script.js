const container = document.getElementById('container');
        const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'];

        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            
            square.addEventListener('mouseenter', () => setColor(square));
            square.addEventListener('mouseleave', () => removeColor(square));
            
            container.appendChild(square);
        }

        function setColor(element) {
            const color = getRandomColor();
            element.style.backgroundColor = color;
        }

        function removeColor(element) {
            setTimeout(() => {
                element.style.backgroundColor =  "#1D1D1D";
            }, 1000);
        }

        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }