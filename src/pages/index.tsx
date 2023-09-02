import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className=
      "flex flex-col mx-8 my-10 lineCustom"
    >
      <Link id="link" href="https://my-login-app-modification.vercel.app/">
        Vol13. FirebaseのAuthentificationとFirestoreを活用したTODOリスト
        <Image
          src="/vol13.png"
          alt=""
          width={500}
          height={300}
        />
      </Link>
      <Link id="link" href="https://my-own-todo-app-10.vercel.app/">
        Vol12. trello風TODOアプリ（TypeScript, Material UI）
      </Link>
      <Link id="link" href="https://master.d30n4n13k6fn7q.amplifyapp.com/">
        Vol11. trello風TODOアプリ（JavaScript, Material UI）
      </Link>
      <Link id="link" href="https://master.d17vt2q5quk7jx.amplifyapp.com/">
        Vol10. FIrebase/Firestore TODOアプリ（TypeScript, Material UI）
      </Link>
      <Link id="link" href="https://my-own-todo-app-7.vercel.app/">
        Vol9. 各学習事項を意識しながらイチから作るTODOアプリ（TypeScript）
      </Link>
      <Link id="link" href="https://master.d36sqrx8bz2p6e.amplifyapp.com/">
        Vol8. コンポーネント化を実施したTODOアプリ（TypeScript）
      </Link>
      <Link id="link" href="https://master.d2nbkk8ucu5sqh.amplifyapp.com/">
        Vol7. コンポーネント化前のTODOアプリ（TypeScript）
      </Link>
      <Link id="link" href="https://easytodolist.vercel.app/">
        Vol6. TypeScriptで初めてコンポーネント化に成功したTODOアプリ
      </Link>
      <Link id="link" href="https://my-own-todo-app-4.vercel.app/">
        Vol5. 未完了/完了リストを表示するTODOリスト（TypeScript, Material UI）
      </Link>
      <Link id="link" href="https://todolistprototype.vercel.app/">
        Vol4. コンポーネント化を実施したTODOアプリ（JavaScript）
      </Link>
      <Link id="link" href="https://twitter-clone-pi-mauve.vercel.app/">
        Vol3. ReactとFirebaseを接続したTwitterクローン
      </Link>
      <Link id="link" href="https://react-tutorial-youtube.vercel.app/">
        Vol2. React TODOリスト（JavaScript）
      </Link>
      <Link id="link" href="https://boisterous-churros-b7ffc7.netlify.app/">
        Vol1. Vite, React TODOリスト（JavaScript）
      </Link>
    </div>
  )
}
