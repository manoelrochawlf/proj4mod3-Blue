import './Navbar.css'
import { ActionMode } from 'constants/index';

function Navbar({ createRolex, updateRolex, mode, deleteRolex}) {
    return (
        <header>
        <nav className="logo-rolex">
            <img src="assets/images/rolex.png" alt="Logo Rolex"/>
        </nav>

            <div className="relogioicon">
            <button 
                type='button' 
                className={`buttonclock Modelo ${mode === ActionMode.DELETAR && 'rolexdeletar'}`} onClick={()=> deleteRolex()}
                >
                    <img
                    className="iconupdate"
                    src="assets/icons/lixeira.png"
                    width="40px"
                    alt="Deletar"
                    />
                </button>  
                <button 
                type='button' 
                className={`buttonclock Modelo ${mode === ActionMode.ATUALIZAR && "rolexativo"}`} onClick={()=> updateRolex()}
                >
                    <img
                    className="iconupdate"
                    src="assets/icons/atualizar.png"
                    width="40px"
                    alt="Atualizar"
                    />
                </button>   
                <button type='button' className='buttonclock Modelo' onClick={()=> createRolex()}>
                    <img
                    src="assets/icons/cadastrar.png"
                    width="40px"
                    alt="Relógio"
                    />
                </button>            
                
            </div>    
    </header>  
    )
}

export default Navbar;