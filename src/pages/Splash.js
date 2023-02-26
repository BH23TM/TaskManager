import './Splash.css';
import step1 from './images/step1.png';
import step2 from './images/step2.png';
import step3 from './images/step3.png';
const Splash = () => {
    return (
        <div>
            <div className = 'Title'> <h>Task-Manager-Online</h> </div>
            
            <div className = 'Description'> <h>A more functional way to improve your productivity</h> </div>

            <div className="Instructions">
                <div className = "Step1"> <img className='step1' src = {step1}/><p>1. Create tasks in a task list</p> </div>
                <div className='Step2'><img className='step2' src = {step2}/> <p>2. Group tasks & set a deadline</p> </div>
                <div className='Step3'> <img className='step3' src = {step3}/> <p>3. Mark your tasks as done before your deadline with reminders</p> </div>
            </div>
        </div>
    )
}

export default Splash;