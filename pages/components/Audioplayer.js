import {React, useState,useRef} from 'react'
import {Play, Pause} from 'heroicons-react'


function Audioplayer({sourceFile, title}) {
                // state
    const [Isplaying, setIsplaying] = useState(false);
                //references
                const audioplayer  = useRef()
    const pausetoplay = () =>{
        setIsplaying(!Isplaying)
        if(!Isplaying){
            audioplayer.current.play()
        }
        else{
            audioplayer.current.pause()
        }

    }

  return (
      <div className='ml-5'>

        <audio ref={audioplayer} hidden className='text-2xl hover:scale-105' preload="metadata" controls src={sourceFile}/>
        <button onClick={pausetoplay}>
            { Isplaying ? <Pause/> : <Play/>}
        </button>
        <div>{title}</div>
        <div className=''>
        <input id="large-range" type="range" className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer range-lg dark:bg-white"/>

        </div>
      </div>
  )
}

export default Audioplayer