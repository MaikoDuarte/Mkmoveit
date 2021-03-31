import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/46424572?s=60&v=4" alt="stark" />
            <div>
                
                <strong>Tony Stark</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                Level {level}

           </p>


            </div>


        </div>
    );

}