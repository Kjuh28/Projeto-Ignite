
import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            />
            
            <div className={styles.profile}>
                <Avatar hasBorder src={'https://avatars.githubusercontent.com/u/33602289?v=4'} />

                <strong>Kerley Sousa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    )
}