import React from 'react';

import logo from "./img/avatar-removebg-preview.png";
import Image from 'antd/es/image';
import { Profil } from './Components/Profil';
import { TimelineCours } from './Components/TimelineCours';
import { LastProject } from './Components/LastProjet';

function App(): JSX.Element {


  return (

    <div>
      <div className="grid grid-cols-2 mt-10">
        <div className="flex justify-center">
         <Image src={logo} preview={false} height={200} className="logo " style={{borderRadius: "50%"
         , filter: "contrast(99%) brightness(95%)"}}></Image>
        </div>
        <div className='flex text-white jusitfy-center text-center'>
          <div className='m-auto'>
            <p className="text-3xl font-bold">GAUTIER Romain</p> 
            <p className="text-xl">Etudiant en licence professionelle MIAR à l'I.U.T de Nantes </p>
           </div>
        </div>
      </div>
      <div className='whoami'>
        <div className='pl-16 pr-16 pt-10'>
        <Profil />
        <div className='grid grid-cols-3 pt-6 '>
        <TimelineCours/>
        <LastProject />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
