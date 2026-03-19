import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    company: "Google",
    duration: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Mumbai, India",
    role: "Senior UI/UX Designer",
    pay: "$120/hr"
  },
  {
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    duration: "2 days ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    location: "Bangalore, India",
    role: "Graphic Designer",
    pay: "$90/hr"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    company: "Meta",
    duration: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Hyderabad, India",
    role: "Product Designer",
    pay: "$130/hr"
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    duration: "1 day ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    location: "Delhi, India",
    role: "UI Designer",
    pay: "$80/hr"
  },
  {
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAclBMVEUAAACxBg/lCRSTBQu1Bg+uBg/oCRSkBQ05AgWpBg/rCRTWCBInAQMdAQKYBA6gBQ6JAw2RBA6EAw28BxA3AAbfCBPPCBIiAAAxAQN8Ag0uAQTxCRUZAQPEBxFaAggOAABIAgZiAwhrAwpyAwo+AgNTAwYG/eJrAAAE/0lEQVR4nO3c25KiMBAGYCAEBnVzclCDZ915/1dcAjozSP6d2toqui/oW7n4Kp10mpAySeaYY4455phjjjl4xXYVj/P40V/xOEygrJbxOI2e3KkyGmYCpVoUsdir0ZNvVR4NMYHSLossEkU9VpZ5GolJlOIYVWb7UcpJlXkdVS4kK6XcxAezblgp13Fl4Tkpcx1XLtKXkkmrVJtFfJVfOCmrKqrMFi8pp1Wmqo7mfLHhpUQlc8tJqSVQDndoYqUUy6iy2AxWObEytSDl9ZWTUot9fJUPGiNqZeXiq7zYfN8lqZXS5qBkfnBSahFFDhsjamVa2nhjVGSclBVM+Y2RUioLeuGckTLVDqR8eeGktPrHxoheWSkHVvn681CAXim1O4LB/CzsDJSlAS8WX40RB6Uw4PhgyUcZJiZojLILH6XURoB3yZKRsrQeNEbHho0ypBzsksWVkVIb8/eUv5Ux5NRKgXbJR2P0rumVslQOvUten0pJrqyUEaAxWjNSagtSni13vVLSK0PKS7DKDRdlmJgGNUZ5aIx2SsaYEyvblPt4Y9QfEu5UxUPpFGjfTK+syJV9yv/SGO1EFRvM6ZXWgUP2/XtQlhyUYfvR8fUTPqXtrI4xp1eGlEeV4ZCwV9KPZdmuctAYZbdeOWZOrexSbsAq18nK6NhgTqzsapG5g1W+aR7KVyaBUlkv44O5v22dapn0yq4WoROj9ByUDMYyTEyDGqOs8VZFUj618ply8GLh7lYpDkrZKp2Jp7xY361QelSLCJRlW9hBY5TV7ZxV41o0ufKx/ej4d5WiclaM1w+N0hpfgJLpjB0Xdgplu0kav0ZdpmkHk4EyTEyLGqNF6s24ZFIou5TDQ0JvwiqnVoaUq7ZkogsnKqxyBspuMJ0CyrXvCzsHpTAepbxdP6+DSaQMhT0FvbDuCju1sqtFYf2AWrT25vW9gkrZlkx0SFj4PuXUypByYV0F3ni1MwyUj5TDXvgYCvtgYhIpwyq3d1AyaxPWD72yL+x3Bw4JK/8yMcmUoWNvosiuMRKDikmifJRMdwYls+uFSwbKMii3N3DHSL6knGwsW6ZZNej2wb0t7OTK9KFM0O0D4wYTk0wZOvZdcouvn0XuB5sklVL2yjP6rjLcfoiViYqvn7YxEvTKjila5Tt44113tYiBsgrKBFy+DimnV4b1o4ISdZnt689XyumUslde0OVrz0MpO+UBHbJ/TzmZMhy+vYcf4e0D97WV0ytX6LvKt4lJr0zAiVEtjGKgTB/KKyiZ0n1OTDpl+lQmGTokbLcfemX51v8Mbx8YBsr8qbyCVZ47xUjZxO/oFbW3j4nJQQlTLoxmpLxEkVlxfKachTKBh4SiTzkPpQElUxtOyga0b0enGSkPYJfMHhOThzLx6PaB1YyUF3T7wHFSJqAXrq2SjJQ3kPLcVoyUsDGyJScluHCSiVCL2Cg/YMo5KdEhYe0qRsoEXMvcC81JeQUXTo6WkxIeEgrJSAkbI6k5KbdAeVSclOiQsOalRI1RVXFSwkNCxUmJPqUVmpMy8ejCieSkbEBh37BSosaoZpXx5IRK5qTK4Z9hVSNlUi++RfhvrV65tJMoQ6Th070wxt9Ol7dmG/mbtC4Oq9+X0920r7jr42ZZZ8G71xMojWpp14/LDtLicWh+n26+BR/Lnx/+7zgc/k33Gudf258fmmOOOeaYY4455pg0/gBjo3KOSNhd5wAAAABJRU5ErkJggg==",
    company: "Netflix",
    duration: "7 days ago",
    tag1: "Contract",
    tag2: "Senior Level",
    location: "Pune, India",
    role: "UX Researcher",
    pay: "$110/hr"
  },
  {
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAt1BMVEX///9/uQICpO//uQHzUSP///3+/f9+uwD1//////r3TyL8//////YBpPH///j///LL7vbr8ccAltrXQQDz2ob23tVyqQDvUyX6/+WQuD///+0AkdPwsQDT36Tsv6zdRxLXsaH787/iSSJ8qwD1+NWS0Nfy/vWm2OrQbkaEzOYAmuj46+L245747NuSz9z//9LCNABrmgDmycG/akLbtrOIsELZ47f279e63+/578oAf73eqwDw36I82ML9AAACuElEQVR4nO2cD3PSMBiHAyOhaUI7UbG2TOqGTFdB5382v//nMmm3E++m5E2QlvF77tYdt3Z58nub7a55gTEAAAAAAABA5+Ak6vO77si55PSJ7X9OHXe8H1W4XyII5/57VEekrA/Bo1IdaWebW1IaSwKhtea8ek6hqoyjnj+hkFtJT1F7n0j+6uNTCqUpdn49IXB9ljDhu3DuHGcvCJyXCU+yix6Bi7NEBDsO4sEgduS81HKRTZwFh8PexORIvOsfcDTEAyfiWam5pjuG5+juOJiVkkma445qHVMcBc8mQzd6w53lGLvnaNcMb6PWroKNIyM67mxd/19H5Hg8OR6CI2p9PI6o9fE4otbIEY6oNRxRa+QIR9Qajqg1cjzUHA/BEbU+HkfUuvUchZ1fs4fk7qg1xbFX7xfygC4MYTQ/vaXw+UuSi+zrSwrf6i1s711s48irpaX6K8tN1pVQkfw+p5DXHRj+vQN1rwNhiubWihYpuUPC3JAB/Q1KEOFcJ6ppVtjafSFsX4ONIMSRK6VkREDJNBciy91I64OW/rW2FVPs9B2JH0kmls9IrAPWjLDXqcviikCxihbsw/TEEXvi9H1a91f5OSpzoboc90f90aj+2kp/bByFu+NJ49jEEeJohnYGjofv6Kp5KDkS1vXOHPuUHN9ECz7veI7GUcIRjkfu6LyokSMc4QhHOMLxkTrifyEc4UhzxJqBIxwfnyPWNRy759iI3h3/eNHf+Lnv80fvveEH1sxoy7diFWlOfo7rvT3zO0f3UrfnuPGseVuO43Ycr1w2uO5pK0fK3/BipTR9XyHY8aYYF87crJhm89spgdufAY4N0SmJyEwsXb+m0PQqhDgyRYIp22OiKez9UxiY/3vSA0alwuqeGwp7l/T41eGOdDySD4NWNsXa+XQcAAAAAAAAwI75BR8HQj1A//ioAAAAAElFTkSuQmCC",
    company: "Microsoft",
    duration: "3 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Noida, India",
    role: "Interaction Designer",
    pay: "$100/hr"
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
    company: "Adobe",
    duration: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Mumbai, India",
    role: "Senior Graphic Designer",
    pay: "$115/hr"
  },
  {
    logo: "data:image/png;base64,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",
    company: "Uber",
    duration: "4 days ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    location: "Chennai, India",
    role: "UI Designer",
    pay: "$95/hr"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    company: "Tesla",
    duration: "8 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    location: "Gurgaon, India",
    role: "Product UI Designer",
    pay: "$125/hr"
  },
  {
    logo: "https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/airbnb-logo-history/Color-Airbnb-Logo.jpg",
    company: "Airbnb",
    duration: "9 days ago",
    tag1: "Contract",
    tag2: "Mid Level",
    location: "Kolkata, India",
    role: "UX Designer",
    pay: "$105/hr"
  }
];

  //const arr = [10, 20, 30, 40]

  // const obj=[
  //   {
  //     name:"Ram",
  //     age:20
  //   },
  //   {
  //     name:"Sam",
  //     age:21
  //   }, 
  //   {
  //     name:"Hari",
  //     age:22
  //   }
  // ]

  // obj.map(function(elem2){
  //   console.log(elem2.name)
  // })


  return (
    <div className='parent'>
       
   {jobs.map(function(elem, idx){   
    return <div key = {idx} >
      <Card logo= {elem.logo} company={elem.company} duration= {elem.duration} 
    tag1 = {elem.tag1} tag2={elem.tag2} location={elem.location} role={elem.role} 
    pay={elem.pay} />
    </div>                                 
    })}
    
    {/* {jobs.map(function(elem){   
    return elem;                   // Cannot print object as a child              
    })} */}
    
    {/* {arr.map(function(elem){
      return <h1> {elem*2} </h1>
    })} */}

    {/* {arr.map(function(elem){
      return elem/2;
    })} */}


    {/* {arr.map(function(elem){
      return elem*2;
    })} */}


    {/* Passing array as using index */}
    {/* <User name={arr} />
    <User name={arr[0]} />
    <User name={arr[1]} />
    <User name={arr[2]} /> 

    {/* Pasisng name as String */}
    {/* <User name='Ram' />
    <User name='Sam' />
    <User name='Hari' /> */}


    {/* Card calling */}
     {/* <Card />
     <Card />
     <Card /> */}

    </div>
  )
}

export default App