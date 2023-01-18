import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom"
import Error from "./Error";


const Main = () => {
    const mainPath = "/localhost";

    return (
        <main>
                
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:currentId" element={<ItemListContainer render="detalle" />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </main>
    );
}

export default Main;
