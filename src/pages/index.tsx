import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function openModal00() {
    const modal = document.getElementById("modal-content-00");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal00() {
    const modal = document.getElementById("modal-content-00");
    if (modal) {
      modal.style.display = "none";
    }
  }

  function openModal14() {
    const modal = document.getElementById("modal-content-14");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal14() {
    const modal = document.getElementById("modal-content-14");
    if (modal) {
      modal.style.display = "none";
    }
  }

  function openModal13() {
    const modal = document.getElementById("modal-content-13");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal13() {
    const modal = document.getElementById("modal-content-13");
    if (modal) {
      modal.style.display = "none";
    }
  }

  function openModal12() {
    const modal = document.getElementById("modal-content-12");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal12() {
    const modal = document.getElementById("modal-content-12");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal11() {
    const modal = document.getElementById("modal-content-11");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal11() {
    const modal = document.getElementById("modal-content-11");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal10() {
    const modal = document.getElementById("modal-content-10");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal10() {
    const modal = document.getElementById("modal-content-10");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal9() {
    const modal = document.getElementById("modal-content-9");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal9() {
    const modal = document.getElementById("modal-content-9");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal8() {
    const modal = document.getElementById("modal-content-8");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal8() {
    const modal = document.getElementById("modal-content-8");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal7() {
    const modal = document.getElementById("modal-content-7");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal7() {
    const modal = document.getElementById("modal-content-7");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal6() {
    const modal = document.getElementById("modal-content-6");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal6() {
    const modal = document.getElementById("modal-content-6");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal5() {
    const modal = document.getElementById("modal-content-5");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal5() {
    const modal = document.getElementById("modal-content-5");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal4() {
    const modal = document.getElementById("modal-content-4");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal4() {
    const modal = document.getElementById("modal-content-4");
    if (modal) {
      modal.style.display = "none";
    }
  }

  function openModal3() {
    const modal = document.getElementById("modal-content-3");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal3() {
    const modal = document.getElementById("modal-content-3");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal2() {
    const modal = document.getElementById("modal-content-2");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal2() {
    const modal = document.getElementById("modal-content-2");
    if (modal) {
      modal.style.display = "none";
    }
  }
  function openModal1() {
    const modal = document.getElementById("modal-content-1");
    if (modal) {
      modal.style.display = "block";
    }
  }

  function closeModal1() {
    const modal = document.getElementById("modal-content-1");
    if (modal) {
      modal.style.display = "none";
    }
  }

  return (
    <div className="grid grid-wra@ mx-8 my-30" >
      <h1 style={{ margin: '15px 0 0 14px', fontSize: '36px', color: 'yellow', }}>藤崎龍也 Reactアプリ開発ポートフォリオ</h1>
      <h2 style={{ margin: '15px 0 0 14px', fontSize: '16px', color: 'white', }}>
        ※画像をクリックするとアプリのページに遷移します<br />
        ※<span style={{ margin: 0, padding: '2px 4px', cursor: 'default', height: '35px', backgroundColor: '#3498db', borderRadius: '3px' }}>説明書</span>をクリックするとアプリの説明を表示します<br />
        ※<span style={{ margin: 0, padding: '2px 4px', cursor: 'default', height: '35px', backgroundColor: '#3498db', borderRadius: '3px' }}>閉じる</span>をクリックするとアプリの説明を閉じます<br />
        ※現状本サイトはPCブラウザ(幅820px以上)でご覧頂くことのみを想定しており、<span style={{ color: 'darkred' }}>モバイル対応していません</span><br />
        ※ご了承頂けますようお願いいたします
      </h2>

      {/* flex-col→flex-wrap */}
      <div id='app' className='w-1/2 p-4' >
        <h2 style={{ margin: '0 0 0 0', fontSize: '24px', color: 'yellow', }}>これまでの学習についてのご説明</h2>
        <div id='modal-content-00'>
          <p style={{ margin: '0 0 0 14px', fontSize: '16px', color: 'white', }}>
            2023年6月6日に<span style={{ color: 'yellow' }}>オンラインメンタリングサービスMENTA</span>にて有料メンタリング契約を締結し、3か月でWEBアプリ開発のいろはを習得し
            就職に備える計画を立てました。メンターは組織化しており、独自のノウハウにより作成された<span style={{ color: 'yellow' }}>個別学習カリキュラム</span>にて3か月学習を
            行ってきました。３か月のメンタリングサービスは、週1回のオンライン面談と、スラック質問への24時間対応です。<br />
            <br />
            メンター付き学習の3か月間は、Visual Studio Code、Command Line、Git、GitHub、Google Chrome 検証ツール、
            JavaScript、JavaScript DOM、<span style={{ color: 'yellow' }}>TypeScript</span>、React、<span style={{ color: 'yellow' }}>Next.js</span>について主に
            学習してきました。ちなみに本サイトは、<span style={{ color: 'yellow' }}>Next.js</span>、<span style={{ color: 'yellow' }}>TypeScript</span>により作成しています。<br />
            <br />
            アプリ開発についてはReactも含めて、これまで独学でプロゲートやUdemyで学習を行なってきたものの、学習プラットフォームに準備
            されたアプリを操作するだけで、アプリケーションを自分のPCのローカル環境で作成する方法が全くわかりませんでした。そんな中、
            独学エンジニアというサブスクリプションで独学でアプリ開発に着手したのですが、<span style={{ color: 'yellow' }}>パッケージのバージョンの違い</span>などにより多発するエラーを自己解決することが
            できず悩んでいた時にMENTAに出会った次第です。<br />
            <br />
            パッケージ、<span style={{ color: 'yellow' }}>ライブラリ</span>、<span style={{ color: 'yellow' }}>フレームワーク</span>等のバージョン違いを解決するために、<span style={{ color: 'yellow' }}>npm
            </span>や<span style={{ color: 'yellow' }}>yarn</span>といった<span style={{ color: 'yellow' }}>パッケージマネージャー</span>が存在する
            ことを知り、それらを操作することでエラーを解決し開発環境を整えることは、アプリ開発において重要なことであることを痛感しています。<br />
            <br />
            3か月の学習後、大阪のアプリ開発会社に就職し、そこで1.5か月間の実務経験を積むことができました。
            その内容はLaravel/TypeScriptシステムのコード改修とテストですが、その間に、<span style={{ color: 'yellow' }}>GitHub</span>、<span style={{ color: 'yellow' }}>Docker</span>、
            <span style={{ color: 'yellow' }}>CodeIgniter4</span>、<span style={{ color: 'yellow' }}>PhpStorm</span>の操作方法や、<span style={{ color: 'yellow' }}>bash</span>、
            <span style={{ color: 'yellow' }}>build</span>、<span style={{ color: 'yellow' }}>npm run dev</span>などのコマンドの使い方、
            PHPアプリ、JavaScriptアプリそれぞれのブラウザへの表示方法を習得いたしました。<br />
            <br />
            その会社を退職後、<span style={{ color: 'yellow' }}>フルスタックアプリ開発</span>の習得を目的とし再度独学を開始し、2023年11月20日現在、<span style={{ color: 'yellow' }}>Next.js</span>、
            <span style={{ color: 'yellow' }}>Express(Node.js)</span>、<span style={{ color: 'yellow' }}>Prisma</span>、<span style={{ color: 'yellow' }}>AWS</span>を使用したTodoリストの開発
            （教材を見ながらのトレーニング）を完了しました(Vol.15)。現在の悩みは<span style={{ color: 'yellow' }}>実装力不足</span>です。つまり、自分で機能要件を満たすロジックを組むことができないため、オリジナルアプリの
            作成がまだできていない状況です。今後その課題解決に取り組みつつ、実務開始への準備を整えていきたいと考えています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal00}>説明書</button>
          <button onClick={closeModal00}>閉じる</button>
        </div>
      </div>

      {/* flex-col→flex-wrap */}
      <div id='app' className='w-1/2 p-4' >
        {/* className='w-1/2 p-4'を追加 */}
        <Link id="link" href="https://main.d3nkqsym2ayk8d.amplifyapp.com/" target="_blank" >
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol15.</span> Next.jsとExpressで作成したフルスタックTodoアプリ。<br />フロントをAmplify、バックエンドをApp RunnerにAWSデプロイ。
          <Image
            src="/vol15.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
        <div id='modal-content-14'>
          <p style={{ color: 'white' }} >
            一先ず、<span style={{ color: 'yellow' }}>Node.js</span>サーバーをTypeScriptベースで構築し、<span style={{ color: 'yellow' }}>Postman</span>を使って<span style={{ color: 'yellow' }}>エンドポイント</span>が正しく
            機能しているか<span style={{ color: 'yellow' }}>APIテスト</span>を実行し、<span style={{ color: 'yellow' }}>Prisma</span>でデータベースを管理（リレーショナルマッピング）。Node.jsのフレームワークである
            <span style={{ color: 'yellow' }}>Express</span>を用いてCRUDのAPIを構築し、ローカル環境で実装後、本番環境としてフロントエンドを<span style={{ color: 'yellow' }}>AWS Amplify</span>に、バックエンドを
            <span style={{ color: 'yellow' }}>AWS App Runner</span>にフルスタックデプロイ。デプロイ時の<span style={{ color: 'yellow' }}>環境変数</span>の取り扱い（App Runnerのデフォルトドメインを、AmplifyのAPI URLとして設定）について学習。
            また、Amplifyデプロイの際にビルドで失敗しましたが、これは<span style={{ color: 'yellow' }}>Next.js14</span>のNode.jsサポート範囲の変更に起因するものということで、ビルドイメージの設定を変更することにより解決しました。デプロイ後、ブラウザで
            データ更新し、バックエンドのデータ管理状態をブラウザで確認することが実現できました（App Runnerを一時停止すると、データが表示されなくなります）。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal14}>説明書</button>
          <button onClick={closeModal14}>閉じる</button>
        </div>
      </div>

      {/* flex-col→flex-wrap */}
      <div id='app' className='w-1/2 p-4' >
        {/* className='w-1/2 p-4'を追加 */}
        <Link id="link" href="https://frost-rainbow-crop.glitch.me/" target="_blank" >
          <span style={{ fontSize: '24px', color: 'yellow' }}>Vol14.</span> JavaScriptによるフォーム入力規制・ページ遷移とPHP<br />テンプレートを実装したオンラインスクールサイトモックアップ
          <Image
            src="/Vol14.png"
            alt=""
            width={500}
            height={300}
            style={{ borderRadius: '10px' }}
          />
        </Link>
        <div id='modal-content-14'>
          <p style={{ color: 'white' }} >
            <span style={{ color: 'yellow' }}>Glitch(開発用SaaS)</span>を用いたオンラインスクールサイトモックアップです。
            PHPファイル、CSSファイル、JSファイルで成り立っています。ヘッダー、フッター等の共通パーツを<span style={{ color: 'yellow' }}>PHPファイル</span>で<span style={{ color: 'yellow' }}>テンプレート化</span>し、<br />
            入力フォームのエラー表示・ページ遷移、学習日数の表示を<span style={{ color: 'yellow' }}>JavaScript</span>で、カレンダーの実装を<span style={{ color: 'yellow' }}>jQuery</span>で行なっています。Glitchのちょっとした
            設定変更によりPHPファイルの実装が容易に可能となっています。ヘッダーからは、会員登録ボタン、ログインボタンをそれぞれ押下して頂くと、会員登録、ログイン画面に遷移し、入力内容確認画面表示後、マイラーニング画面に遷移します。フッターでは、
            サイトマップのみ別タプで表示され、また、会員登録画面からは、会員規約が別タブで表示されるようになっています。これらの機能の実装は全て<span style={{ color: 'yellow' }}>JavaScript</span>によります。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal14}>説明書</button>
          <button onClick={closeModal14}>閉じる</button>
        </div>
      </div>

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
        <div id='modal-content-13'>
          <p style={{ color: 'white' }} >
            <span style={{ color: 'yellow' }}>Next.js</span>によるTODOリストです。サインアップページは<span style={{ color: 'yellow' }}>&apos;/signup&apos;</span>です。こちらでユーザー登録して頂くと、TODOリストのメインページ<span style={{ color: 'yellow' }}> &apos;/&apos; </span>に遷移し、ログアウトするとログインページ<span style={{ color: 'yellow' }}>&apos;/login&apos;</span> に遷移します。
            Next.jsの<span style={{ color: 'yellow' }}>ルーター機能</span>を活用するために<span style={{ color: 'yellow' }}>useRouterフック</span>を使用しています。これはページ間のナビゲーションやコンポーネントの表示切り替えなどのルーティング
            関連のタスクを実行するのに役立っています。また、本アプリはバージョン13の<span style={{ color: 'yellow' }}>appルーティング</span>ではなくバージョン12の<span style={{ color: 'yellow' }}>pagesルーティング</span>を利用しており、コンポーネント内でルーター情報にアクセスするためのuseRouterと、特定URLに対応するpagesルーティングの両者が連携してルーティングとナビゲーションを制御しています。
            そして<span style={{ color: 'yellow' }}>FirebaseのAuthentification</span>を導入しメールアドレスとパスワードでの認証を行なっています。
            登録ユーザーの情報は<span style={{ color: 'yellow' }}>Firebaseコンソール</span>で確認することができます。サインイン済みのユーザーをサインインページからログインページに、あるいはログアウト後のユーザーをログインページに<span style={{ color: 'yellow' }}>リダイレクト</span>するなどの制御を行っています。
            UIコンポーネントライブラリーとして<span style={{ color: 'yellow' }}>Chakura UI</span>を使用しており、UIコンポーネントのデザインに一貫性を持たせています。また、<span style={{ color: 'yellow' }}>Firebase/Firestore</span>によりクライアントでインプットされたデータをFirebaseデータベースに渡しています。
            Next.jsのアプリはホスティング時のエラー解決が困難で、ローカル環境に眠っているアプリが複数ありますが、このアプリは<span style={{ color: 'yellow' }}>npm run build</span>時に発生するエラーを解決することで<span style={{ color: 'yellow' }}>ホスティング</span>が可能になりました。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal13}>説明書</button>
          <button onClick={closeModal13}>閉じる</button>
        </div>
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
        <div id="modal-content-12">
          <p style={{ color: 'white' }} >
            Vol.11をTypeScriptで再作成しました。<span style={{ color: 'yellow' }}>interface</span>を用いて型定義しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal12}>説明書</button>
          <button onClick={closeModal12}>閉じる</button>
        </div>
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
        <div id="modal-content-11">
          <p style={{ color: 'white' }} >
            <span style={{ color: 'yellow' }}>lockファイル</span>が二つ存在している点はバージョン競合、保守性低下、共同作業の困難さの点で改善すべきところですが、未実施です。<span style={{ color: 'yellow' }}>react-beautiful-dnd</span>というライブラリからDraggableやDroppableのコンポーネントをインポートし、カードのドラッグアンドドロップを実現しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal11}>説明書</button>
          <button onClick={closeModal11}>閉じる</button>
        </div>
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
        <div id="modal-content-10">
          <p style={{ color: 'white' }} >
            <span style={{ color: 'yellow' }}>環境変数</span>を<span style={{ color: 'yellow' }}>.env</span>ファイルに分けて設定しバージョン管理から除外することで、機密情報の漏洩を防いでいます。<span style={{ color: 'yellow' }}>Firebase</span>の<span style={{ color: 'yellow' }}>Firestore</span>機能を使い、useEffectフックと<span style={{ color: 'yellow' }}>fetchData関数</span>によりFirebaseデータベースからデータを非同期に取得し、Reactコンポーネントのtodosステートに更新してデータを表示しています。
            UIコンポーネントに<span style={{ color: 'yellow' }}>Material UI</span>を使用しています。<span style={{ color: 'yellow' }}>Firebase</span>の設定は初期化、環境変数を含め慣れるまで何度も繰り返しました。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal10}>説明書</button>
          <button onClick={closeModal10}>閉じる</button>
        </div>
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
        <div id="modal-content-9">
          <p style={{ color: 'white' }} >
            filteringTodos関数内で<span style={{ color: 'yellow' }}>スイッチ文</span>を用い、filterの値によって、つまり、<span style={{ color: 'yellow' }}>フィルター</span>されたTODOがどの状態であるか（未着手、作業中、完了）によって表示するTODOを切り替える設定を行なっています。そのほか、<span style={{ color: 'yellow' }}>void</span>を用いた関数（props）の型定義や、set関数に対する<span style={{ color: 'yellow' }}>React.Dispatch</span>による型定義を実施しました。
            また、styleプロパティにより特定の要素に個別の<span style={{ color: 'yellow' }}>インラインスタイル</span>を適用しています。４つのコンポーネントに切り分け、App.tsxで呼び出しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal9}>説明書</button>
          <button onClick={closeModal9}>閉じる</button>
        </div>
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
        <div id="modal-content-8">
          <p style={{ color: 'white' }} >
            TODOの各要素（inputValue、id、checked）のオブジェクト型による型定義や、引数e、ステートなどの<span style={{ color: 'yellow' }}>お決まりの型定義方法</span>に若干慣れてきたため、TypeScriptアプリのコンポーネント化も実施できました。
            <span style={{ color: 'yellow' }}>条件演算子</span>によりTODOリストが空の場合は&apos登録されたTODOはありません&aposと文字列を返すよう設定しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal8}>説明書</button>
          <button onClick={closeModal8}>閉じる</button>
        </div>
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
        <div id="modal-content-7">
          <p style={{ color: 'white' }} >
            こちらもコンポーネント化未実施のTypeScriptによるTODOリストです。<span style={{ color: 'yellow' }}>checkedパラメータ</span>は現在のチェック状態を表し、<span style={{ color: 'yellow' }}>関数handleChecked</span>によりTODO要素のチェック状態をトグルしています。<span style={{ color: 'yellow' }}>disabled属性</span>は、todo.checkedの値がtrueの場合入力フィールドを無効にします。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal7}>説明書</button>
          <button onClick={closeModal7}>閉じる</button>
        </div>
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
        <div id="modal-content-6">
          <p style={{ color: 'white' }} >
            JavaScriptで作成したアプリケーションを<span style={{ color: 'yellow' }}>TypeScript</span>に移行する際に厳格な<span style={{ color: 'yellow' }}>型チェック</span>によるエラー続出で<span style={{ color: 'yellow' }}>エラーを解決</span>するのに相当
            苦労しました。その解決策として、TODO入力フィールド、作成ボタン、TODO表示、完了ボタンだけの最もシンプルなTODOリストをイチから作成して
            みたところ、それぞれの関数・メソッド・<span style={{ color: 'yellow' }}>フック</span>・<span style={{ color: 'yellow' }}>ステート</span>（<span style={{ color: 'yellow' }}>props</span>）の渡し方についての理解を深めながら、TypeScriptにおける型定義を
            学習することができました。また、TODOの入力フィールドが空の場合は関数を実行しないこと（<span style={{ color: 'yellow' }}>バリデーション</span>）、TODOの更新後は入力
            フィールドを初期値に戻すこと（<span style={{ color: 'yellow' }}>ステートのクリア</span>）について学習しました。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal6}>説明書</button>
          <button onClick={closeModal6}>閉じる</button>
        </div>
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
        <div id="modal-content-5">
          <p style={{ color: 'white' }}>
            未完了/完了TODOリストをそれぞれ表示するものを<span style={{ color: 'yellow' }}>TypeScript</span>で直書きで作成。エラーに対応できず、コンポーネント化は実施できませんでした。UIコンポーネントとして<span style={{ color: 'yellow' }}>Material UI</span>を用い、スタイリッシュなフォームフィールドとボタンを設置しました。
            TODOリストの各要素（inputValue、id、checked）の型を<span style={{ color: 'yellow' }}>カスタム型</span>として定義しています。こちらもエラーによりコンポーネント化が実施できませんでした。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal5}>説明書</button>
          <button onClick={closeModal5}>閉じる</button>
        </div>
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
        <div id="modal-content-4">
          <p style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>useEffectフック</span>により、データの取得、外部ライブラリとの統合、コンポーネントの状態の変更などコンポーネントの外部とやり取りする多くのタスク（<span style={{ color: 'yellow' }}>副作用</span>）を実行します。
            App.jsに各種ステート関数を定義し、InputFormとEditFormの2つのコンポーネントを設置。多くの<span style={{ color: 'yellow' }}>props</span>を渡しています。App.js内returnの冒頭で、<span style={{ color: 'yellow' }}>三項演算子</span>により、ステートisEditableがtrueなら、EditFormコンポーネント（編集要素）を出力し、
            falseなら、InputFormコンポーネント（入力要素）とSelectコンポーネント（todoステータスのプルダウンリスト）を出力するように定義しています。尚、イベントハンドラーにおいて<span style={{ color: 'yellow' }}>引数e</span>を定義し、テキスト入力フィールドの値が変更された時に<span style={{ color: 'yellow' }}>e.target.value</span>によりその値を受け取ります。
            オブジェクトとしてスタイルを定義し、それを要素の<span style={{ color: 'yellow' }}>style属性</span>に設定することで要素のスタイルを制御しています。<span style={{ color: 'yellow' }}>select要素</span>によりTODO要素のステータスを示すドロップダウンリストを作成しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal4}>説明書</button>
          <button onClick={closeModal4}>閉じる</button>
        </div>
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
        <div id="modal-content-3">
          <p style={{ color: 'white' }} >
            Twitterクローンアプリです。UIコンポーネントライブラリに<span style={{ color: 'yellow' }}>material UI</span>を使用しTwitterの各UIコンポーネントを利用しています。<span style={{ color: 'yellow' }}>Firebase/Firestore</span>により、インプットされたデータをデータベースに渡しています。
            <span style={{ color: 'yellow' }}>react-twitter-embedライブラリ</span>を活用し、Twitterのタイムライン、ツイート埋め込み、ツイートのシェアボタンなど、TwitterウィジェットをReactコンポーネントとしてアプリケーションに組み込んでいます。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal3}>説明書</button>
          <button onClick={closeModal3}>閉じる</button>
        </div>
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
        <div id="modal-content-2">
          <p style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>...prevTodos</span>は<span style={{ color: 'yellow' }}>スプレッド構文</span>を使用して前回のTODOリストの要素をコピーし、新しいTODOを追加することでprevTodos配列の要素を展開します。
            <span style={{ color: 'yellow' }}>useRefフック</span>を使用してReactコンポーネント内のDOM要素（テキスト入力フィールド）への参照を保持し現在の値を取得、そしてcurrent.valueをnullにしクリアします。尚TODO配列の要素を識別するために<span style={{ color: 'yellow' }}>uuid</span>を活用しています。これは、配列の要素を識別するための世界的に一意である可能性が極めて高い識別子です。
            <span style={{ color: 'yellow' }}>map関数</span>を使いtodos配列内の各TODO要素をループ処理し、Todoコンポーネントに渡しています。<span style={{ color: 'yellow' }}>keyプロパティ</span>にはtodo.idを指定しています。また、コンポーネント内に各関数を定義していますが、<span style={{ color: 'yellow' }}>filter関数</span>を使用してtodos配列内のTODO要素をフィルタリングし、<span style={{ color: 'yellow' }}>!todo.completed</span>（完了していないTODO要素のみを新しい配列に残しています。
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={openModal2}>説明書</button>
          <button onClick={closeModal2}>閉じる</button>
        </div>
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
        <div id="modal-content-1">
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
        <div style={{ display: 'flex' }}>
          <button onClick={openModal1}>説明書</button>
          <button onClick={closeModal1}>閉じる</button>
        </div>
      </div>
    </div >
  )
}
