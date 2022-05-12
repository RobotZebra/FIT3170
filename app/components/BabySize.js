

canvas class = "progressCanvas">
      </canvas>
      <script>
        const canvas = document.querySelector('.progressCanvas');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(50, 50, 100, 150);
      </script>