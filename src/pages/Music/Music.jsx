import Sounds from '../Music/Sounds'
import Cards from '../Music/Cards'
import Mixes from '../Music/Mixes'


const Music = () => {
   
    return (
      <div className="h-screen bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <div className=" bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <Sounds  />
      <Cards />
      <Mixes />
  </div>
    </div>
    );
   
}

export default Music;
