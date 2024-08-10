import startup from '../../assets/startup.mp3'
export const Startup=()=>{
    return(<>
            <audio autoPlay>
      <source src={startup} type='audio/mpeg'/>
     </audio>
    </>)
}