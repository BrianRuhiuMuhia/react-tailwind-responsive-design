export default function App()
{
    return (
        <div>
            <section className="h-screen flex justify-center items-center" style={{backgroundImage: "url(./img/header.jpg)",backgroundSize: "contain"}}>
<div className="flex flex-col text-white justify-center gap-y-4 items-center">
  <span className="text-lime-500">TRY UP TO ONE MONTH FREE</span>
  <img src="./img/logo.png" className="w-1/3 h-auto"></img>
  <span className="text-lg">Watch Thousands Of TV Shows And Movies</span>
  <button className="bg-white text-black pt-2 pb-2 px-20 py-20 capitalize rounded">start free trial</button>
  <span className="text-sm">Free trial for new & eligible returning subscribers only</span>
</div>
  </section>
  <section className="flex flex-col md:flex-row  bg-lime-500   h-64 md:h-32 items-center justify-evenly">
    <div className="w-1/4"><img src="img/logos.png" alt="" className=""></img></div>
    <div className="flex flex-col items-center">
      <span className="capitalize text-lime-900">BUNDLE WITH ANY HULU PLAN & SAVE</span>
      <span className="text-white">Get Hulu, Disney+, and ESPN+.</span>
      <button className="capitalize underline text-white">Details</button>
    </div>
    <div className="flex flex-col items-center" >
      <button className="uppercase border-2 border-white p-4 text-white" >get bundle</button>
      <a className="capitalize underline text-white" href="#">terms apply</a>
    </div>
  </section>
  <section className="bg-black text-white">
    <div className="flex flex-col items-center gap-y-5">
      <span className="text-green-900 text-2xl">INCLUDED IN ALL PLANS</span>
      <span className="text-3xl md:text-6xl">All The TV You Love</span>
      <span className="text-2xl w-96 md:w-3/4 text-center">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</span>
    </div>
    <div className="flex flex-col md:flex-row items gap-y-4 mt-6 md:justify-evenly">
      <div className="flex flex-col items-center">
        <div></div>
        <img src="img/cover-1.jpg" className="w-48" alt=""></img>
      </div>
      <div className="flex flex-col items-center">
        <div></div>
        <img src="img/cover-2.jpg" className="w-48" alt=""></img>
      </div>
      <div className="flex flex-col items-center">
      <div></div>
      <img src="img/cover-3.jpg" className="w-48" alt=""></img>
    </div>
    <div className="flex flex-col items-center">
      <div></div>
      <img src="img/cover-4.jpg" className="w-48" alt=""></img>
    </div>
    </div>
    <div className="border-4 rounded border-green-950 m-10 p-10 flex flex-col items-center gap-y-8">
      <span className="text-xl text-green-900">HULU + LIVE TV</span>
      <span className="text-2xl  md:text-5xl">Live TV Makes It Better</span>
      <span className="text-center">Make the switch from cable. Get 75+ top channels with your favorite live sports, news, and events - plus the entire Hulu streaming library.</span>
      <span className="text-center text-xl">Live TV plan required. Regional restrictions, blackouts and additional terms apply. See details</span>
      <span className="">VIEW CHANNELS IN YOUR AREA</span>
    </div>
  </section>
  <footer className="bg-grey-900 flex flex-col">
    <div className="flex flex-col justify-evenly md:flex-row">
      <ul className="flex gap-y-4 flex-col"><li className="text-xl font-bold">Browse</li>
        <li>streaming library</li>
        <li>live tv</li>
        <li>live news</li>
        <li>live sports</li></ul>
          <ul className="flex gap-y-4 flex-col"><li>tv shows</li>
          <li>movies</li>
          <li>originals</li>
          <li>networks</li>
          <li>kids</li>
          <li>fx on hulu</li></ul>
          <ul className="flex gap-y-4 flex-col"><li>Hulu, Disney+, And ESPN+</li>
          <li>Disney Bundle</li>
          <li>HBO Max</li>
          <li>Cinimax</li>
          <li>Showtime</li>
          <li>STARZ</li></ul>
          <ul className="flex gap-y-4 flex-col"><li className="text-lg font-medium">HELP</li>
          <li>Accounts & Billing</li>
          <li>Plans & Pricing</li>
          <li>Supported Devices</li>
          <li>Accesibility</li></ul>
          <ul className="flex gap-y-4 flex-col"><li className="text-lg font-medium">ABOUT US</li>
          <li>Press</li>
          <li>Jobs</li>
          <li>Contact</li></ul>
    </div>
</footer>
        </div>
    )
}