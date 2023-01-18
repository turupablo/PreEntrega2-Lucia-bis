import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom"
import Error from "./Error";


const Main = () => {
    const mainPath = "/localhost";

    return (
        <main>
                <ItemListContainer greeting="Proximamente tus productos favoritos" />
            <Routes>
                <Route path={mainPath} element={<ItemListContainer />} />
                <Route path={mainPath + "/productos/:categoria"} element={<ItemListContainer render="categoria"/>} />
                <Route path="/item/:currentId" element={<ItemListContainer render="detalle" />} />

                <Route path="*" element={<Error />} />
            </Routes>

        </main>
    );
}

export default Main;
