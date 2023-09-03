import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className=
      "flex flex-wrap mx-8 my-30"
    >
      <h1 style={{ margin: '15px 0 0 26px', fontSize: '36px', color: 'yellow', }}>藤崎龍也 アプリ開発ポートフォリオサイト</h1>
      {/* flex-col→flex-wrap */}
      <div id='app' className='w-1/2 p-4' >
        {/* className='w-1/2 p-4'を追加 */}
        <Link id="link" href="https://my-login-app-modification.vercel.app/" target="_blank" >
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol13.</span> FirebaseのAuthentificationとFirestoreを活用したTODOリスト
          <Image
            src="/vol13.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://my-own-todo-app-10.vercel.app/" target="_blank" >
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol12.</span> trello風TODOアプリ（TypeScript, Material UI）
          <Image
            src="/vol12.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://master.d30n4n13k6fn7q.amplifyapp.com/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol11.</span> trello風TODOアプリ（JavaScript, Material UI）
          <Image
            src="/vol11.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://master.d17vt2q5quk7jx.amplifyapp.com/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol10.</span> FIrebase/Firestore TODOアプリ（TypeScript, Material UI）
          <Image
            src="/vol10.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://my-own-todo-app-7.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol9.</span> 各学習事項を意識しながらイチから作るTODOアプリ（TypeScript）
          <Image
            src="/vol9.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://master.d36sqrx8bz2p6e.amplifyapp.com/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol8.</span> コンポーネント化を実施したTODOアプリ（TypeScript）
          <Image
            src="/vol8.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://master.d2nbkk8ucu5sqh.amplifyapp.com/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol7.</span> コンポーネント化前のTODOアプリ（TypeScript）
          <Image
            src="/vol7.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://easytodolist.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol6.</span> TypeScriptで初めてコンポーネント化に成功したTODOアプリ
          <Image
            src="/vol6.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
        <p style={{ color: 'white' }} >
          JavaScriptで作成したアプリケーションを<span style={{ color: 'yellow' }}>TypeScript</span>に移行する際に厳格な<span style={{ color: 'yellow' }}>型チェック</span>によるエラー続出で<span style={{ color: 'yellow' }}>エラーを解決</span>するのに相当
          苦労しました。その解決策として、TODO入力フィールド、作成ボタン、TODO表示、完了ボタンだけの最もシンプルなTODOリストをイチから作成して
          みたところ、それぞれの関数、メソッド、<span style={{ color: 'yellow' }}>フック</span>、<span style={{ color: 'yellow' }}>ステート</span>・<span style={{ color: 'yellow' }}>props</span>の渡し方についての理解を深めながら、TypeScriptにおける型定義を
          学習することができました。また、TODOの入力フィールドが空の場合は関数を実行しないこと（<span style={{ color: 'yellow' }}>バリデーション</span>）、TODOの更新後は入力
          フィールドを初期値に戻すこと（<span style={{ color: 'yellow' }}>ステートのクリア</span>）について学習しました。
        </p>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://my-own-todo-app-4.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol5.</span> 未完了/完了リストを表示するTODOリスト（TypeScript, Material UI）
          <Image
            src="/vol5.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://todolistprototype.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol4.</span> コンポーネント化を実施したTODOアプリ（JavaScript）
          <Image
            src="/vol4.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4'>
        <Link id="link" href="https://twitter-clone-pi-mauve.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol3.</span> ReactとFirebaseを接続したTwitterクローン
          <Image
            src="/vol3.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://react-tutorial-youtube.vercel.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol2.</span> React TODOリスト（JavaScript）
          <Image
            src="/vol2.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
        <p style={{ color: 'white' }}>

        </p>
      </div>

      <div id='app' className='w-1/2 p-4' >
        <Link id="link" href="https://boisterous-churros-b7ffc7.netlify.app/" target="_blank">
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol1.</span> Vite, React TODOリスト（JavaScript）
          <Image
            src="/vol1.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
        <p style={{ color: 'white' }}>
          高速動作が可能といわれるビルドツールViteで<span style={{ color: 'yellow' }}>Reactライブラリ</span>を用いてTODOアプリを作成しました。
          Reactプロジェクトはindex.htmlの<span style={{ color: 'yellow' }}>div要素(ID:root)</span>をエントリーポイントとし、App.jsxが
          documentGetElementByIdメソッドでそのDOM要素を取得し、そこにコンポーネントツリーをレンダリングします。
          TODO入力用のInputFormと編集用のEditFormに<span style={{ color: 'yellow' }}>コンポーネント</span>を分け、App.jsxで呼び出しています。
          <span style={{ color: 'yellow' }}>useStateフック</span>（第一引数に現在の状態、第二引数に状態を管理する関数、そして初期値を設定）により、
          TODOに変更があった際に再レンダリングします。各コンポーネントはinputとbutton要素で構成され、その中に
          onChangeやonClick属性を定義しボタンクリックや入力内容更新に基づくイベントハンドラーを実行し、TODOの
          <span style={{ color: 'yellow' }}>CRUD操作</span>（create, read, update, delete）を可能にしています。
        </p>
      </div>
    </div>
  )
}
