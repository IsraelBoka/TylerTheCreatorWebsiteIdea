import React from 'react'

function deliverydesign2() {
  return (
<div>

        <div className="bg-[#876445]">
  <div className="flex items-center text-white md:px-20 md:pl-20">
    <div className="flex-1 h-full cursor-pointer">
      <img  src="https://upload.wikimedia.org/wikipedia/commons/d/d4/ROCKET_logo.svg" alt="DELIVEY " />
    </div>
    <div className="flex justify-end">
      <a href="#" className="transition duration-75 hover:scale-110 hover:ease-in">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>
      <a href="#" className="transition duration-75 ease-in hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </a>
      <a href="#" className="transition duration-75 ease-in hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
  <div className="mt-10 grid grid-cols-2 pl-20">
    <div className="mb-10 grid text-white">
      <p className="text-center text-3xl">UN SERVICE FIABLE</p>
      <p className="text-center">Nullam ac aliquam purus. Donec tempor, metus sed porttitor posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec metus. Donec tempor rhoncus convallis.</p>
      <form action="" className="mt-10 text-center">
        <input type="text" className="mb-10 rounded border-2 border-black py-1 text-3xl text-black" name="" id="" />
        <input type="submit" className="cursor-pointer bg-[#CA965C] py-1 px-1 font-[BebasNeue] text-3xl shadow-[6px_4px_0px_#000000] hover:scale-105" value="ENVOYER" />
      </form>
    </div>
    <div className="ml-16 hidden rounded-3xl pl-5 md:grid lg:w-96">
      <img className="object-fill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cartoon_Delivery_Guy_Pushing_A_Cart_With_Packages.svg/924px-Cartoon_Delivery_Guy_Pushing_A_Cart_With_Packages.svg.png" alt="" />
    </div>
  </div>

  <div className="bg-[#F4DFBA] text-black">
    <div className="flex flex-nowrap">
      <div className="m-3 border-2 border-[#CA965C] text-center shadow-[6px_4px_0px_#EEC373]">
        <h1 className="font-[BebasNeue] text-2xl text-[#247881] underline">LIVRAISON SOUS 24H</h1>
        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod quasi reiciendis quaerat exercitationem eum nam aperiam ratione aliquam, sit alias deleniti aspernatur nemo omnis possimus velit voluptate dolore beatae!</p>
      </div>

      <div className="m-3 border-2 border-[#CA965C] text-center shadow-[6px_4px_0px_#EEC373]">
        <h1 className="font-[BebasNeue] text-2xl text-[#247881] underline">LIVRAISON SOUS 24H</h1>
        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod quasi reiciendis quaerat exercitationem eum nam aperiam ratione aliquam, sit alias deleniti aspernatur nemo omnis possimus velit voluptate dolore beatae!</p>
      </div>

      <div className="m-3 border-2 border-[#CA965C] text-center shadow-[6px_4px_0px_#EEC373]">
        <h1 className="font-[BebasNeue] text-2xl text-[#247881] underline">LIVRAISON SOUS 24H</h1>
        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod quasi reiciendis quaerat exercitationem eum nam aperiam ratione aliquam, sit alias deleniti aspernatur nemo omnis possimus velit voluptate dolore beatae!</p>
      </div>
    </div>
  </div>

  <div className="bg-[#CA965C] text-center text-black">
    <div className="flex justify-center">
      <div className="m-3">
        <p className="text-center text-2xl">Vous voulez nous rejoindre en tant que livreur ?</p>
        <p className="text-gray-100">Renseignez vos informations en cliquant ici :</p>
        <button className="cursor-pointer bg-[#EEC373] py-1 px-1 font-[BebasNeue] text-2xl shadow-[6px_4px_0px_#247881] hover:scale-105">REJOIGNEZ-NOUS</button>
      </div>
    </div>
  </div>
  <div className="bg-[#D7A86E]">
    <p className="text-center text-2xl">Contactez-Nous :</p>
    <form action="" className="grid justify-center">
      <input type="email" className="m-3 border-2 border-[#EEC373] text-2xl" name="" id="" placeholder="Votre email..." />
      <input type="text" className="m-3 border-2 border-[#EEC373] text-2xl" name="" id="" placeholder="Objet du mail "/>
      <textarea type="text" className="m-3 border-2 resize-y border-[#EEC373] text-2xl" name="" id="" placeholder="Contenu du mail "></textarea>
      <button className="m-3  border-2 border-black font-[BebasNeue] shadow-[6px_4px_0px_#000] hover:scale-105">OK</button>
    </form>
  </div>
  <div className="bg-[#247881] text-white text-right p-3">Copyright @DABWEB </div>
</div>

</div>
  )
}

export default deliverydesign2