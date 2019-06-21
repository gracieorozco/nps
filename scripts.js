var form = document.getElementById("frm1");
form.onsubmit = function(e) {
  e.preventDefault();
  console.log(form.state.value);
  var request = new XMLHttpRequest()

request.open('GET', 'https://developer.nps.gov/api/v1/parks?stateCODE=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
  request.onload = function() {
    var data = JSON.parse(this.response)
    for (var i = 0; i < data.total; i++) {
      console.log(data.data[i].parkCode)

      const div = document.createElement('div')
      div.setAttribute('class', 'result')

      const p = document.createElement('p')
      p.textContent = data.data[i].parkCode

      body.appendChild(div)
      div.appendChild(p)
    }
  }
    request.send()
}
