;(function() {
  const harmonySelect = document.querySelector("#harmony")

  const canvas = document.getElementById("myCanvas")
  const sequence = document.getElementById("sequence")
  const ctx = canvas.getContext("2d")
  const seq = sequence.getContext("2d")
  // Horizontal strings
  const stings = [
    [10, 20, 300, 1],
    [10, 50, 300, 2],
    [10, 80, 300, 2.2],
    [10, 110, 300, 2.5],
    [10, 140, 300, 2.7],
    [10, 170, 300, 3]
  ]
  // Vertical fret
  const fret = [
    [20, 10, 2, 170],
    [70, 10, 2, 170],
    [120, 10, 2, 170],
    [170, 10, 2, 170],
    [220, 10, 2, 170],
    [270, 10, 2, 170]
  ]
  const harmony = {
    minor: [
      [95, 20, 6, 0, 2 * Math.PI],
      [195, 20, 6, 0, 2 * Math.PI],
      [245, 20, 6, 0, 2 * Math.PI],
      [245, 50, 6, 0, 2 * Math.PI],
      [145, 50, 6, 0, 2 * Math.PI],
      [95, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [95, 80, 6, 0, 2 * Math.PI],
      [195, 80, 6, 0, 2 * Math.PI],
      [95, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [95, 140, 6, 0, 2 * Math.PI],
      [195, 140, 6, 0, 2 * Math.PI],
      [245, 140, 6, 0, 2 * Math.PI],
      [95, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI],
      [245, 170, 6, 0, 2 * Math.PI]
    ],
    major: [
      [95, 20, 6, 0, 2 * Math.PI],
      [145, 20, 6, 0, 2 * Math.PI],
      [245, 20, 6, 0, 2 * Math.PI],
      [145, 50, 6, 0, 2 * Math.PI],
      [245, 50, 6, 0, 2 * Math.PI],
      [95, 80, 6, 0, 2 * Math.PI],
      [195, 80, 6, 0, 2 * Math.PI],
      [245, 80, 6, 0, 2 * Math.PI],
      [95, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [245, 110, 6, 0, 2 * Math.PI],
      [95, 140, 6, 0, 2 * Math.PI],
      [145, 140, 6, 0, 2 * Math.PI],
      [245, 140, 6, 0, 2 * Math.PI],
      [145, 170, 6, 0, 2 * Math.PI],
      [245, 170, 6, 0, 2 * Math.PI]
    ],
    dorijsky: [
      [45, 20, 6, 0, 2 * Math.PI],
      [145, 20, 6, 0, 2 * Math.PI],
      [195, 20, 6, 0, 2 * Math.PI],
      [45, 50, 6, 0, 2 * Math.PI],
      [145, 50, 6, 0, 2 * Math.PI],
      [195, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [145, 80, 6, 0, 2 * Math.PI],
      [45, 110, 6, 0, 2 * Math.PI],
      [145, 110, 6, 0, 2 * Math.PI],
      [245, 110, 6, 0, 2 * Math.PI],
      [45, 140, 6, 0, 2 * Math.PI],
      [145, 140, 6, 0, 2 * Math.PI],
      [245, 140, 6, 0, 2 * Math.PI],
      [45, 170, 6, 0, 2 * Math.PI],
      [145, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI]
    ],
    frigijsky: [
      [45, 20, 6, 0, 2 * Math.PI],
      [95, 20, 6, 0, 2 * Math.PI],
      [45, 50, 6, 0, 2 * Math.PI],
      [95, 50, 6, 0, 2 * Math.PI],
      [195, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [145, 80, 6, 0, 2 * Math.PI],
      [45, 110, 6, 0, 2 * Math.PI],
      [145, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [45, 140, 6, 0, 2 * Math.PI],
      [145, 140, 6, 0, 2 * Math.PI],
      [195, 140, 6, 0, 2 * Math.PI],
      [45, 170, 6, 0, 2 * Math.PI],
      [95, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI]
    ],
    lidijsky: [
      [45, 20, 6, 0, 2 * Math.PI],
      [95, 20, 6, 0, 2 * Math.PI],
      [95, 50, 6, 0, 2 * Math.PI],
      [195, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [145, 80, 6, 0, 2 * Math.PI],
      [245, 80, 6, 0, 2 * Math.PI],
      [45, 110, 6, 0, 2 * Math.PI],
      [145, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [45, 140, 6, 0, 2 * Math.PI],
      [145, 140, 6, 0, 2 * Math.PI],
      [195, 140, 6, 0, 2 * Math.PI],
      [95, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI]
    ],
    lokrijsky: [
      [45, 20, 6, 0, 2 * Math.PI],
      [95, 20, 6, 0, 2 * Math.PI],
      [95, 50, 6, 0, 2 * Math.PI],
      [195, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [145, 80, 6, 0, 2 * Math.PI],
      [195, 80, 6, 0, 2 * Math.PI],
      [45, 110, 6, 0, 2 * Math.PI],
      [145, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [45, 140, 6, 0, 2 * Math.PI],
      [95, 140, 6, 0, 2 * Math.PI],
      [195, 140, 6, 0, 2 * Math.PI],
      [45, 170, 6, 0, 2 * Math.PI],
      [95, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI]
    ],
    miksolidijsky: [
      [95, 20, 6, 0, 2 * Math.PI],
      [195, 20, 6, 0, 2 * Math.PI],
      [95, 50, 6, 0, 2 * Math.PI],
      [195, 50, 6, 0, 2 * Math.PI],
      [245, 50, 6, 0, 2 * Math.PI],
      [45, 80, 6, 0, 2 * Math.PI],
      [145, 80, 6, 0, 2 * Math.PI],
      [195, 80, 6, 0, 2 * Math.PI],
      [45, 110, 6, 0, 2 * Math.PI],
      [95, 110, 6, 0, 2 * Math.PI],
      [195, 110, 6, 0, 2 * Math.PI],
      [45, 140, 6, 0, 2 * Math.PI],
      [95, 140, 6, 0, 2 * Math.PI],
      [195, 140, 6, 0, 2 * Math.PI],
      [95, 170, 6, 0, 2 * Math.PI],
      [195, 170, 6, 0, 2 * Math.PI]
    ]
  }

  sequenceArr = [
    [20, 30, 6, 0, 2 * Math.PI],
    [50, 30, 3, 0, 2 * Math.PI],
    [80, 30, 3, 0, 2 * Math.PI],
    [110, 30, 6, 0, 2 * Math.PI],
    [140, 30, 3, 0, 2 * Math.PI],
    [170, 30, 6, 0, 2 * Math.PI],
    [200, 30, 3, 0, 2 * Math.PI],
    [230, 30, 6, 0, 2 * Math.PI],
    [260, 30, 6, 0, 2 * Math.PI]
  ]

  harmonySelect.addEventListener("change", e => {
    e.preventDefault()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawingRect(stings, "#30415d")
    drawingRect(fret, "#c38d39")
    drawCirle(harmony[e.target.value], "#941f15")
    console.log(e.target.value)
  })

  function drawingRect(arr, color) {
    ctx.fillStyle = color
    arr.forEach(item => {
      ctx.fillRect(...item)
    })
  }

  function drawCirle(arr, color) {
    ctx.fillStyle = color
    ctx.strokeStyle = color
    arr.forEach(dot => {
      ctx.beginPath()
      ctx.arc(...dot)
      ctx.fill()
      ctx.stroke()
    })
  }

  drawingRect(stings, "#30415d")
  drawingRect(fret, "#c38d39")
  drawCirle(harmony["minor"], "#941f15")

  seq.fillStyle = "#30415d"
  seq.fillRect(20, 30, 300, 2)
  seq.fillStyle = "#30415d"
  sequenceArr.forEach((dot, index) => {
    seq.beginPath()
    seq.arc(...dot)
    seq.fill()
    seq.stroke()
  })
  seq.font = "32px serif"
  seq.fillText("m", 10, 70)
  seq.fillText("M", 100, 70)
  seq.fillText("D", 160, 70)
  seq.fillText("F", 220, 70)
  seq.fillText("L", 250, 70)
  seq.font = "24px serif"
  seq.fillText("1", 15, 20)
  seq.fillText("4", 105, 20)
  seq.fillText("6", 165, 20)
  seq.fillText("8", 225, 20)
  seq.fillText("9", 255, 20)
})()
