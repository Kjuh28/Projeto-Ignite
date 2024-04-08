import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id : 1,
    author: {
      name: 'Kerley Jr',
      role: 'Web Developer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/33602289?v=4',      
    }, 
    content: [
      { type:'text', content:'Fala galeraa 👋', },
      { type:'text', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type:'link', content:'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2024-04-01 12:14:30'),
  },
  {
    id : 2,
    author: {
      name: 'David Guetta',
      role: 'DJ',
      avatarUrl: 'https://www.cdnlogo.com/logos/d/13/david-guetta.svg',      
    }, 
    content: [
      { type:'text', content:'Fala galeraa 👋', },
      { type:'text', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type:'link', content:'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2024-04-03 12:14:30'),
  }
]

export function App() {
  return (
    <div >
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map( (post) => {
              return(
                <Posts
                  key={post.id} 
                  author={post.author} 
                  content={post.content}
                  publishedAt={post.publishedAt}  
              />
              )

            })
          }
           
        </main>
      </div>
    </div>
    
  )
}

