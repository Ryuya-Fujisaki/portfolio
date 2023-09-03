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
        <p style={{ color: 'white' }} >
          要作成
        </p>
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
        <p style={{ color: 'white' }} >
          Vol.11をTypeScriptで再作成しました。<span style={{ color: 'yellow' }}>interface</span>を用いて型定義しています。
        </p>
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
        <p style={{ color: 'white' }} >
          <span style={{ color: 'yellow' }}>lockファイル</span>が二つ存在している点はバージョン競合、保守性低下、共同作業の困難さの点で改善すべきところですが、未実施です。<span style={{ color: 'yellow' }}>react-beautiful-dnd</span>というライブラリからDraggableやDroppableのコンポーネントをインポートし、カードのドラッグアンドドロップを実現しています。
        </p>
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
        <p style={{ color: 'white' }} >
          <span style={{ color: 'yellow' }}>環境変数</span>を<span style={{ color: 'yellow' }}>.env</span>ファイルに分けて設定しバージョン管理から除外することで、機密情報の漏洩を防いでいます。<span style={{ color: 'yellow' }}>Firebase</span>の<span style={{ color: 'yellow' }}>Firestore</span>機能を使い、useEffectフックと<span style={{ color: 'yellow' }}>fetchData関数</span>によりFirebaseデータベースからデータを非同期に取得し、Reactコンポーネントのtodosステートに更新してデータを表示しています。
          UIコンポーネントに<span style={{ color: 'yellow' }}>Material UI</span>を使用しています。<span style={{ color: 'yellow' }}>Firebase</span>の設定は初期化、環境変数を含め慣れるまで何度も繰り返しました。
        </p>
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
        <p style={{ color: 'white' }} >
          filteringTodos関数内で<span style={{ color: 'yellow' }}>スイッチ文</span>を用い、filterの値によって、つまり、<span style={{ color: 'yellow' }}>フィルター</span>されたTODOがどの状態であるか（未着手、作業中、完了）によって表示するTODOを切り替える設定を行なっています。そのほか、<span style={{ color: 'yellow' }}>void</span>を用いた関数（props）の型定義や、set関数に対する<span style={{ color: 'yellow' }}>React.Dispatch</span>による型定義を実施しました。
          また、styleプロパティにより特定の要素に個別の<span style={{ color: 'yellow' }}>インラインスタイル</span>を適用しています。４つのコンポーネントに切り分け、App.tsxで呼び出しています。
        </p>
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
        <p style={{ color: 'white' }} >
          TODOの各要素（inputValue、id、checked）のオブジェクト型による型定義や、引数e、ステートなどの<span style={{ color: 'yellow' }}>お決まりの型定義方法</span>に若干慣れてきたため、TypeScriptアプリのコンポーネント化も実施できました。
          <span style={{ color: 'yellow' }}>条件演算子</span>によりTODOリストが空の場合は&apos登録されたTODOはありません&aposと文字列を返すよう設定しています。
        </p>
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
        <p style={{ color: 'white' }} >
          こちらもコンポーネント化未実施のTypeScriptによるTODOリストです。<span style={{ color: 'yellow' }}>checkedパラメータ</span>は現在のチェック状態を表し、<span style={{ color: 'yellow' }}>関数handleChecked</span>によりTODO要素のチェック状態をトグルしています。<span style={{ color: 'yellow' }}>disabled属性</span>は、todo.checkedの値がtrueの場合入力フィールドを無効にします。
        </p>
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
          みたところ、それぞれの関数・メソッド・<span style={{ color: 'yellow' }}>フック</span>・<span style={{ color: 'yellow' }}>ステート</span>（<span style={{ color: 'yellow' }}>props</span>）の渡し方についての理解を深めながら、TypeScriptにおける型定義を
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
        <p style={{ color: 'white' }}>
          未完了/完了TODOリストをそれぞれ表示するものを<span style={{ color: 'yellow' }}>TypeScript</span>で直書きで作成。エラーに対応できず、コンポーネント化は実施できませんでした。UIコンポーネントとして<span style={{ color: 'yellow' }}>Material UI</span>を用い、スタイリッシュなフォームフィールドとボタンを設置しました。
          TODOリストの各要素（inputValue、id、checked）の型を<span style={{ color: 'yellow' }}>カスタム型</span>として定義しています。こちらもエラーによりコンポーネント化が実施できませんでした。
        </p>
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
        <p style={{ color: 'white' }}>
          <span style={{ color: 'yellow' }}>useEffectフック</span>により、データの取得、外部ライブラリとの統合、コンポーネントの状態の変更などコンポーネントの外部とやり取りする多くのタスク（<span style={{ color: 'yellow' }}>副作用</span>）を実行します。
          App.jsに各種ステート関数を定義し、InputFormとEditFormの2つのコンポーネントを設置。多くの<span style={{ color: 'yellow' }}>props</span>を渡しています。App.js内returnの冒頭で、<span style={{ color: 'yellow' }}>三項演算子</span>により、ステートisEditableがtrueなら、EditFormコンポーネント（編集要素）を出力し、
          falseなら、InputFormコンポーネント（入力要素）とSelectコンポーネント（todoステータスのプルダウンリスト）を出力するように定義しています。尚、イベントハンドラーにおいて<span style={{ color: 'yellow' }}>引数e</span>を定義し、テキスト入力フィールドの値が変更された時に<span style={{ color: 'yellow' }}>e.target.value</span>によりその値を受け取ります。
          オブジェクトとしてスタイルを定義し、それを要素の<span style={{ color: 'yellow' }}>style属性</span>に設定することで要素のスタイルを制御しています。<span style={{ color: 'yellow' }}>select要素</span>によりTODO要素のステータスを示すドロップダウンリストを作成しています。
        </p>
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
        <p style={{ color: 'white' }} >
          要作成
        </p>
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
          <span style={{ color: 'yellow' }}>...prevTodos</span>は<span style={{ color: 'yellow' }}>スプレッド構文</span>を使用して前回のTODOリストの要素をコピーし、新しいTODOを追加することでprevTodos配列の要素を展開します。
          <span style={{ color: 'yellow' }}>useRefフック</span>を使用してReactコンポーネント内のDOM要素（テキスト入力フィールド）への参照を保持し現在の値を取得、そしてcurrent.valueをnullにしクリアします。尚TODO配列の要素を識別するために<span style={{ color: 'yellow' }}>uuid</span>を活用しています。これは、配列の要素を識別するための世界的に一意である可能性が極めて高い識別子です。
          <span style={{ color: 'yellow' }}>map関数</span>を使いtodos配列内の各TODO要素をループ処理し、Todoコンポーネントに渡しています。<span style={{ color: 'yellow' }}>keyプロパティ</span>にはtodo.idを指定しています。また、コンポーネント内に各関数を定義していますが、<span style={{ color: 'yellow' }}>filter関数</span>を使用してtodos配列内のTODO要素をフィルタリングし、<span style={{ color: 'yellow' }}>!todo.completed</span>（完了していないTODO要素のみを新しい配列に残しています。
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
