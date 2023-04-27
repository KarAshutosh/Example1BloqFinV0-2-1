const checkoutBth = document.getElementById("checkout-button")

checkoutBth.addEventListener("click", () => {
//      fetch("http://bloqfin-examples.us-west-1.elasticbeanstalk.com/1/create-checkout-session", {
    fetch("http://localhost:3000/create-checkout-session", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        items: [
            { 
                id: 1, 
                quantity: 1
            }
        ],
        }),
    })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})



// make sure you are on localhost 5500
