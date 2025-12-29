const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  const $sprite = document.querySelector('#sprite')
  const $bricks = document.querySelector('#bricks')

  canvas.width = 448
  canvas.height = 400

  /* Variables de nuestro juego */

  /* VARIABLES DE LA PELOTA */
  const ballRadius = 3;
  // posicion de la pelota
  let x = canvas.width / 2
  let y = canvas.height - 30
  // velocidad de la pelota
  let dx = -3
  let dy = -3
  let score = 0
  let level = 1
  let lives = 3

  /* VARIABLES DEL JEFE */
  const boss = {
    x: 0,
    y: 40,
    width: 100,
    height: 60,
    hp: 0,
    maxHp: 0,
    dx: 2,
    active: false
  }

  /* VARIABLES DE LA PALETA */
  const PADDLE_SENSITIVITY = 8

  const paddleHeight = 10;
  const paddleWidth = 50;

  let paddleX = (canvas.width - paddleWidth) / 2
  let paddleY = canvas.height - paddleHeight - 10

  let rightPressed = false
  let leftPressed = false

  /* VARIABLES DE LOS LADRILLOS */
  const brickRowCount = 6;
  const brickColumnCount = 13;
  const brickWidth = 32;
  const brickHeight = 16;
  const brickPadding = 0;
  const brickOffsetTop = 80;
  const brickOffsetLeft = 16;
  const bricks = [];

  const BRICK_STATUS = {
    ACTIVE: 1,
    DESTROYED: 0
  }

  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [] // inicializamos con un array vacio
    for (let r = 0; r < brickRowCount; r++) {
      // calculamos la posicion del ladrillo en la pantalla
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
      // Asignar un color aleatorio a cada ladrillo
      const random = Math.floor(Math.random() * 8)
      // Guardamos la información de cada ladrillo
      bricks[c][r] = {
        x: brickX,
        y: brickY,
        status: BRICK_STATUS.ACTIVE,
        color: random
      }
    }
  }


  function drawBall() {
    ctx.beginPath() // iniciar el trazado
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = '#f39c12'
    ctx.shadowColor = '#f39c12'
    ctx.shadowBlur = 10
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.closePath() // terminar el trazado
  }

  function drawPaddle() {
    ctx.drawImage(
      $sprite, // imagen
      29, // clipX: coordenadas de recorte
      174, // clipY: coordenadas de recorte
      paddleWidth, // el tamaño del recorte
      paddleHeight, // tamaño del recorte
      paddleX, // posición X del dibujo
      paddleY, // posición Y del dibujo
      paddleWidth, // ancho del dibujo
      paddleHeight // alto del dibujo
    )
  }

  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const currentBrick = bricks[c][r]
        if (currentBrick.status === BRICK_STATUS.DESTROYED) continue;

        const clipX = currentBrick.color * 32

        ctx.drawImage(
          $bricks,
          clipX,
          0,
          brickWidth, // 31
          brickHeight, // 14
          currentBrick.x,
          currentBrick.y,
          brickWidth,
          brickHeight
        )
      }
    }
  }

  function drawBoss() {
    if (!boss.active) return
    // Cuerpo del jefe
    ctx.fillStyle = '#e74c3c'
    ctx.fillRect(boss.x, boss.y, boss.width, boss.height)
    // Ojos
    ctx.fillStyle = '#fff'
    ctx.fillRect(boss.x + 20, boss.y + 20, 15, 15)
    ctx.fillRect(boss.x + 65, boss.y + 20, 15, 15)
    // Barra de vida
    ctx.fillStyle = '#c0392b'
    ctx.fillRect(boss.x, boss.y - 10, boss.width, 5)
    ctx.fillStyle = '#2ecc71'
    ctx.fillRect(boss.x, boss.y - 10, (boss.hp / boss.maxHp) * boss.width, 5)
  }

  function drawUI() {
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 16px sans-serif'
    ctx.fillText(`Score: ${score}`, 8, 20)
    ctx.fillText(`Level: ${level}`, canvas.width - 80, 20)
    ctx.fillText(`Vidas: ${lives}`, canvas.width - 80, 40)
  }

  function collisionDetection() {
    // Colisión con el Jefe
    if (boss.active) {
      if (
        x > boss.x && x < boss.x + boss.width &&
        y > boss.y && y < boss.y + boss.height
      ) {
        dy = -dy
        boss.hp--
        score += 50
        if (boss.hp <= 0) initLevel(level + 1)
      }
      return // En nivel de jefe no verificamos ladrillos
    }

    let activeBricks = 0
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const currentBrick = bricks[c][r]
        if (currentBrick.status === BRICK_STATUS.DESTROYED) continue;

        const isBallSameXAsBrick =
          x > currentBrick.x &&
          x < currentBrick.x + brickWidth

        const isBallSameYAsBrick =
          y > currentBrick.y &&
          y < currentBrick.y + brickHeight

        if (isBallSameXAsBrick && isBallSameYAsBrick) {
          dy = -dy
          currentBrick.status = BRICK_STATUS.DESTROYED
          score += 10
        } else {
          activeBricks++
        }
      }
    }

    if (activeBricks === 0) {
      initLevel(level + 1)
    }
  }

  function ballMovement() {
    // rebotar las pelotas en los laterales
    if (
      x + dx > canvas.width - ballRadius || // la pared derecha
      x + dx < ballRadius // la pared izquierda
    ) {
      dx = -dx
    }

    // rebotar en la parte de arriba
    if (y + dy < ballRadius) {
      dy = -dy
    }

    // la pelota toca la pala
    const isBallSameXAsPaddle =
      x > paddleX &&
      x < paddleX + paddleWidth

    const isBallTouchingPaddle =
      y + dy > paddleY

    if (isBallSameXAsPaddle && isBallTouchingPaddle) {
      dy = -dy // cambiamos la dirección de la pelota
    } else if ( // la pelota toca el suelo
      y + dy > canvas.height - ballRadius || y + dy > paddleY + paddleHeight
    ) {
      lives--
      if (lives === 0) {
        gameOver = true
        showGameOver()
      } else {
        resetBall()
      }
    }

    // mover la pelota
    x += dx
    y += dy
  }

  function bossMovement() {
    if (!boss.active) return
    boss.x += boss.dx
    if (boss.x + boss.width > canvas.width || boss.x < 0) {
      boss.dx = -boss.dx
    }
  }

  function paddleMovement() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += PADDLE_SENSITIVITY
    } else if (leftPressed && paddleX > 0) {
      paddleX -= PADDLE_SENSITIVITY
    }
  }

  function cleanCanvas() {
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  function initEvents() {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    function keyDownHandler(event) {
      const { key } = event
      if (key === 'Right' || key === 'ArrowRight' || key.toLowerCase() === 'd') {
        rightPressed = true
      } else if (key === 'Left' || key === 'ArrowLeft' || key.toLowerCase() === 'a') {
        leftPressed = true
      }
    }

    function keyUpHandler(event) {
      const { key } = event
      if (key === 'Right' || key === 'ArrowRight' || key.toLowerCase() === 'd') {
        rightPressed = false
      } else if (key === 'Left' || key === 'ArrowLeft' || key.toLowerCase() === 'a') {
        leftPressed = false
      }
    }
  }

  function resetBall() {
    x = canvas.width / 2
    y = canvas.height - 30
    const speed = 3 + (level * 0.5)
    dx = speed * (Math.random() > 0.5 ? 1 : -1)
    dy = -speed
    paddleX = (canvas.width - paddleWidth) / 2
  }

  function initLevel(newLevel) {
    level = newLevel
    resetBall()
    
    // Cada 2 niveles sale un jefe
    if (level % 2 === 0) {
      boss.active = true
      boss.hp = level * 5
      boss.maxHp = boss.hp
      boss.x = (canvas.width - boss.width) / 2
      // Ocultar ladrillos
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          bricks[c][r].status = BRICK_STATUS.DESTROYED
        }
      }
    } else {
      boss.active = false
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          bricks[c][r].status = BRICK_STATUS.ACTIVE
        }
      }
    }
  }

  function resetGame() {
    score = 0
    lives = 3
    initLevel(1)
  }

  /* UI OVERLAY (BOTONES) */
  const $overlay = document.createElement('div')
  $overlay.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; display: none; z-index: 100;'
  $overlay.innerHTML = `
    <h1 style="color: #fff; font-family: sans-serif; font-size: 3rem; text-shadow: 0 0 10px #f39c12; margin-bottom: 20px;">GAME OVER</h1>
    <button id="btn-restart" style="background: #f39c12; border: none; padding: 12px 24px; color: #fff; font-size: 1.2rem; cursor: pointer; border-radius: 5px; margin: 0 10px; font-family: sans-serif;">Reiniciar Nivel</button>
  `
  document.body.appendChild($overlay)

  const btnRestart = document.getElementById('btn-restart')

  btnRestart.addEventListener('click', () => {
    $overlay.style.display = 'none'
    lives = 3
    gameOver = false
    initLevel(level) // Reinicia el nivel actual
    draw()
  })

  function showGameOver() {
    $overlay.style.display = 'block'
  }

  // a que velocidad de fps queremos que renderice nuestro juego
  const fps = 60
  
  let msPrev = window.performance.now()
  let msFPSPrev = window.performance.now() + 1000;
  const msPerFrame = 1000 / fps
  let frames = 0
  let framesPerSec = fps;

  let gameOver = false;

  function draw() {
    if (gameOver) return
    
    window.requestAnimationFrame(draw)

    const msNow = window.performance.now()
    const msPassed = msNow - msPrev

    if (msPassed < msPerFrame) return

    const excessTime = msPassed % msPerFrame
    msPrev = msNow - excessTime

    frames++

    if (msFPSPrev < msNow)
    {
      msFPSPrev = window.performance.now() + 1000
      framesPerSec = frames;
      frames = 0;
    }

    // ... render code
    cleanCanvas()
    // hay que dibujar los elementos
    drawBall()
    drawPaddle()
    drawBricks()
    drawBoss()
    drawUI()

    // colisiones y movimientos
    collisionDetection()
    ballMovement()
    paddleMovement()
    bossMovement()

  }

  draw()
  initEvents()