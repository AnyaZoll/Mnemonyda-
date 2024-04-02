import './CreateTestButton.css'
import { useNavigate } from 'react-router-dom';
export function CreateTestButton() {
    
    const navigate = useNavigate();

    const handleNext = () => {
        const route = '/create-test';
        navigate(route);
      };
    
    return (
        <div className="btnTest_wrapper">
            <button className="btn" onClick={handleNext}>Создать тест</button>
    </div>
    );
}