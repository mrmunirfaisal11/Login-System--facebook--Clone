
const SUPABASE_URL = `https://uunkmqhydyskkrsemmrs.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bmttcWh5ZHlza2tyc2VtbXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NDUxNTksImV4cCI6MjA5NjMyMTE1OX0.en5auSomvyY5fReE28n6pWGILp_Hc3n5pK24sxp3GcQ`;


const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// HUM HTML KAY ELEMENT KO SELECT KAR RAHY HAIN---------------------
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')
const signupBtn = document.getElementById('signupBtn')
const message = document.getElementById('message')

// ab hum login function banayegay -------------------------------

async function handleLogin() {

  // e.prevantDefault()

  const email = emailInput.value
  const password = passwordInput.value



  if (!email || !password) {
    message.innerText = 'Email aur Password likho'
    
  }
  message.innerText = 'Login ho raha hai'
alert('Login ho raha hai')
  const { data: error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    message.style.color = 'red'
    message.innerText = 'Error' + error.message
  } else {
    message.style.color = 'green'
    message.innerText = 'Login Success! Welcome' + data.user.email


    // login kay baad home page pe bhejo===============
    setTimeout(() => {
      window.location.href = 'home.html'
    }, 1000)

  }
}


//  ab hum sign up functtion banaye gay-------------------------

async function handleSignup() {

  // e.prevantDefault()

  const email = emailInput.value
  const password = passwordInput.value

  // ab hum conditions lagarahy han ---------------------

  if (!email || !password) {
    message.style.color = 'red';
    message.innerText = 'Email aur Password likho';
    return;


    if (password.length < 6) {
        message.style.color = 'red';
      message.innerText = 'Passward 6 character se bara hona chahiye';
      return;
    }
  }

  message.innerText = 'Account ban raha hai...'

  const { data: error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  // phir sy conditions lagy gi -------------------

  if (error) {
    message.style.color = 'red'
    message.innerText = 'Error' + error.message

  } else {
    message.style.color = 'green'
    message.innerText = 'Account ban gaya! ab Login karo'
  }

}


// CHECK KARO USER PHELY SY LOGIN HAN YA NHI -------------


async function checkUser() {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    // agar login han seedha login page pay bhejdo---
    window.location.href = 'home.html'

  }
}

// button pe click pe click event lagao------

loginBtn.addEventListener('click', handleLogin)
signupBtn.addEventListener('click', handleSignup)

// page load hote hi check karo----
checkUser()



























// const SUPABASE_URL = `https://uunkmqhydyskkrsemmrs.supabase.co`;
// const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bmttcWh5ZHlza2tyc2VtbXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NDUxNTksImV4cCI6MjA5NjMyMTE1OX0.en5auSomvyY5fReE28n6pWGILp_Hc3n5pK24sxp3GcQ`;




// const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// // HUM HTML KAY ELEMENT KO SELECT KAR RAHY HAIN---------------------
// const emailInput = document.getElementById('email')
// const passwordInput = document.getElementById('password')
// const loginBtn = document.getElementById('loginBtn')
// const signupBtn = document.getElementById('signupBtn')
// const message = document.getElementById('message')

// // ab hum login function banayegay -------------------------------

// async function handleLogin() {

//   // e.prevantDefault()

//   const email = emailInput.value
//   const password = passwordInput.value



//   if (!email || !password) {
//     message.innerText = 'Email aur Password likho'
//     return
//   }
//   message.innerText = 'Login ho raha hai'

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email,
//     password: password,
//   })

//   if (error) {
//     message.style.color = 'red'
//     message.innerText = 'Error' + error.message
//   } else {
//     message.style.color = 'green'
//     message.innerText = 'Login Success! Welcome' + data.user.email


//     // login kay baad home page pe bhejo===============
//     setTimeout(() => {
//       window.location.href = 'home.html'
//     }, 1000)

//   }
// }


// //  ab hum sign up functtion banaye gay-------------------------

// async function handleSignup() {

//   // e.prevantDefault()

//   const email = emailInput.value
//   const password = passwordInput.value

//   // ab hum conditions lagarahy han ---------------------

//   if (!email || !password) {
//     message.innerText = 'Email aur Password likho'
//     return


//     if (password.length < 6) {

//       message.innerText = 'Passward 6 character se bara hona chahiye'
//       return
//     }
//   }

//   message.innerText = 'Account ban raha hai...'

//   const { data, error } = await supabase.auth.signUp({
//     email: email,
//     password: password,
//   })

//   // phir sy conditions lagy gi -------------------

//   if (error) {
//     message.style.color = 'red'
//     message.innerText = 'Error' + error.message

//   } else {
//     message.style.color = 'green'
//     message.innerText = 'Account ban gaya! ab Login karo'
//   }

// }


// // CHECK KARO USER PHELY SY LOGIN HAN YA NHI -------------


// async function checkUser() {
//   const { data: { user } } = await supabase.auth.getUser()
//   if (user) {
//     // agar login han seedha login page pay bhejdo---
//     window.location.href = 'home.html'

//   }
// }

// // button pe click pe click event lagao------

// loginBtn.addEventListener('click', handleLogin)
// signupBtn.addEventListener('click', handleSignup)

// // page load hote hi check karo----
// checkUser()



