import { Outlet } from "react-router-dom";
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>
                #include &lt;iostream&gt;
                <br />
                #include &lt;string&gt;
                </span>

                <span className='tags main-tags'>
                int main() {"{"}
                </span>
                

                    <Outlet />
                    
                <span className='tags bottom-tags'>
                {"}"}
                </span>
            </div>
        </div>
    )
}

export default Layout
