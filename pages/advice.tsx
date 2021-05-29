import { Header } from "../components/organisms/Header";
import { Advice } from "../components/organisms/Advice";

const advice = () => {

    return (

        <div >
            
            {/*keeps header at top*/}
            <Header />
            
            {/*centers text*/}
            <div className="h-screen bg-blue-900 flex justify-center items-center">
                <Advice />
            </div>
        
        </div>
    );
    
}

export default advice;