import Navbar from "./Navbar";

function Owner() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[44px] m-20">Toy_Tanawin_Group C_ 48</h1>
        <img src="https://fbi.dek-d.com/27/0352/8124/118425732?v=7.01" alt="" />
        <h3 className="font-bold text-[14px] m-5">Short Biography :</h3>
        <p className="text-[14px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          exercitationem repudiandae error perferendis, dolorem repellendus
          cupiditate assumenda atque ratione quos, provident laudantium labore
          nobis eum iusto aliquid? Maxime et omnis obcaecati eveniet inventore
          deserunt! Beatae aperiam sequi atque mollitia iure aliquam quos
          expedita a exercitationem quam, aut doloremque molestias corporis!
        </p>
      </div>
    </div>
  );
}

export default Owner;