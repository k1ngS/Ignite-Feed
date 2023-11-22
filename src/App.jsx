import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from './App.module.css';
import "./global.css"


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Marcos Beltrão" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae at odio distinctio voluptate nemo itaque aspernatur veniam commodi ipsam omnis, fuga quas blanditiis mollitia, dolore illo nesciunt libero aliquam." 
          />

          <Post 
            author="Marcos Beltrão" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae at odio distinctio voluptate nemo itaque aspernatur veniam commodi ipsam omnis, fuga quas blanditiis mollitia, dolore illo nesciunt libero aliquam." 
          />
        </main>
      </div>
    </div>
  )
}

