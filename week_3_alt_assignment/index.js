const app = require("./stuffThatYouCanIgnore")

const styleLight = `
<style>
p {font-size: larger;}
marquee {text-decoration: underline; color: #0066CC;}
.marquee {padding-top: 25px; border: 1px solid #777; width: 300px; height: 130px;}
.marqueeL {padding-top: 25px; border: 1px solid #777; width: 500px; height: 200px; font-size: x-large;}
#square {position: absolute; left: 90vw; top: 10vh; color: #FFF;}
#square a{color: #FFF; text-decoration: none;}
.container {display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%}
</style>
`

const styleGray = `
<style>
p {font-size: larger;}
marquee {text-decoration: underline; color: #0066CC;}
.marquee {padding-top: 25px; border: 1px solid #777; width: 300px; height: 130px;}
.marqueeL {padding-top: 25px; border: 1px solid #777; width: 500px; height: 200px; font-size: x-large;}
#square {position: absolute; left: 90vw; top: 10vh; color: #FFF;}
#square a{color: #F7F7F7; text-decoration: none;}
.container {display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;}
.paragraph {border: 1px solid #AAA; padding: 20px; font-size: larger;}
</style>
`

const styleGray2 = `
<style>
p {font-size: larger;}
marquee {text-decoration: underline; color: #0066CC;}
.marquee {padding-top: 25px; border: 1px solid #777; width: 300px; height: 130px;}
.marqueeL {padding-top: 25px; border: 1px solid #777; width: 500px; height: 200px; font-size: x-large;}
#square {position: absolute; left: 90vw; top: 10vh; color: #FFF;}
#square a{color: #F7F7F7; text-decoration: none;}
.container {display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;}
.paragraphContrast {border: 1px solid #AAA; padding: 20px;}
.paragraph {border: 1px solid #FFF; padding: 20px; color: #FFF; font-size: larger;}
.buttonsCont {display: flex; flex-direction: row; gap: 20px;}
.buttonsCont a{color: #000}
</style>
`

const styleDark = `
<style>
body {background: #000; color: #FFF}
#square {position: absolute; left: 90vw; top: 10vh;}
#square a{color: #FFF; text-decoration: none;}
.container {display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;}
.paragraph {border: 1px solid #FFF; padding: 20px; color: #FFF; font-size: larger;}
.paragraphContrast {border: 1px solid #000; padding: 20px; color: #000; font-size: larger;}
.buttonsCont {display: flex; flex-direction: row; gap: 20px;}
.buttonsCont a{color: #FFF}
</style>
`

const square = `<div id="square"><a href="/fin"> I was here all the time </a></div>`

app.get("/", (req, res) => {res.send(`
${styleLight}${square}
<div class="container"> 
  <h1>Hi, stranger! </h1>
  <p>Let's get started!</p>
  <a href="/freshStart" style="font-size: x-large;"> Go-go-go! </a> 
</div>
`)})

app.get("/freshStart", (req, res) => {res.send(`
${styleLight}${square}
<div class="container"> 
  <h1>Hurry up!</h1>
  <p>The winning link have been created somewhere here... just click it!!! </p>

  <div class="marquee">
    <marquee direction="right"> Oh, I found it...</marquee> 
    <marquee> No, should be this one...</marquee> 
    <marquee direction="right"> Or that one... </marquee> 
    <marquee> Definitely this...</marquee> 
    <marquee direction="right"> No kidding - this one! </marquee> 
    <marquee> Is it real? </marquee> 
  </div>
  
  <p> All right, if you can't find it, let me <a href="/help"> HELP </a> you just a little... </p>
  </div>
`)})

app.get("/help", (req, res) => {
  res.send(`
    ${styleLight}${square}
    <div class="container"> 
    <p>May be the miss-click is an issue... lets make them larger</p>
    <p>Now they are easy targets...</p>

    <div class="marqueeL">
      <marquee direction="right"> Oh, I found it...</marquee> 
      <marquee> No, should be this one...</marquee> 
      <marquee direction="right"> Or that one... </marquee> 
      <marquee> Definitely this...</marquee> 
      <marquee direction="right"> No kidding - this one! </marquee> 
      <marquee> Is it real? </marquee> 
    </div>
  
    <p> Still having troubles? Okay... let's try different <a href="/approach/conc">approach</a></p>
    </div>
`)})

app.get("/approach/conc", (req, res) => { 
  res.send(`
    ${styleGray}${square}
    <div class="container">
    <p class="paragraph">You slowly taking a deep breath. And now slow exhale. <br>
    You concentraion is growing... <br>
    Try thinking <i>"outside the box"</i><br><br>
    Didn't help? Use a <a href="/approach/hint">hint</a></p>
    </div>
  `)
})

app.get("/approach/hint", (req, res) => {
  res.send(`
    ${styleGray}${square}
    <div class="container">
    <p class="paragraph">Check the corners. <br> 
    Truth is always hard to find... <br><br>
    Still nothing? There is only one option left <a href="/approach/dark"> ... a very dark path </a> </p>
    </div>
  `)
})

app.get("/approach/dark", (req, res) => {
  res.send(`
    ${styleGray2}${square}
    <div class="container">
    <p class="paragraphContrast"> Are you brave to let the darkness spread? <br> Gonna say <b><i>"YES"</b></i> and make it happen?</p>
    <div class="buttonsCont">
    <a href="/approach/dark?spread=yes">YES</a>
    <a href="/approach/dark?spread=no">no</a>
    </div>
    ${
      req.query["spread"] === "yes"
      ?styleDark
      :req.query["spread"] === "no"
      ?styleGray2
      :""
    }
    <p class="paragraph"> You have vanquished your fear. <br> Truth reveals itself as a light in the absolute darkness</p>  
    </div>
  `)  
})

app.get("/fin", (req, res) => {
  res.send(`
    ${styleDark}
      <div class="container">
        <p class="paragraph">
          Here is you reward... if you can "take" it ---> <b>nrlzw.htr/f/L6wZ8</b><br><br>
          <i>Hint:</i>&nbspDeciphering method is related with the name of the famous Roman general and statesman. Key is 5
        </p>
      </div>
  `)  
})

app.listen(3000);