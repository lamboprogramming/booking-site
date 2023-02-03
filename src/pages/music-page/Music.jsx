import Sounds from '../music-page/Sounds'
import Cards from '../music-page/Cards'
import Mixes from '../music-page/Mixes'
import Footer from '../Footer';


const Music = () => {
   
    return (
      <div className="h-screen bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <div className=" bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <Sounds  />
      <Cards />
      <Mixes />
      <Footer />
  </div>
    </div>
    );
   
}

export default Music;
