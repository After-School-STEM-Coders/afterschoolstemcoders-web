import { Header } from "../components/organisms/Header";
import { Advice } from "../components/organisms/Advice";

const advice = () => {

    return (
        <div >
            <Header />
            <div className="h-screen bg-gray-900 flex justify-center items-center">
                <Advice />
            </div>
        </div>
    );
    
}

export default advice;