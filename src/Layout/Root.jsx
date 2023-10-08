import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mt-4 bg-red-50">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;