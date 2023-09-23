import Banner from "../Banner/Banner";
import Categorylist from "../Categorylist/Categorylist";
import Featuredjobs from "../Featuredjobs/Featuredjobs";

const Home = () => {
    return (
        <div className="space-y-4 my-5">
            <Banner></Banner>
            <Categorylist></Categorylist>
            <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;