import logo from './logo.svg';
import './App.css';

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function Header(props) {
    console.log('props', props.title);
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

function Nav(props) {
    const lis = [
        <li>
            <a href="/read/1">html</a>
        </li>,
        <li>
            <a href="/read/2">css </a>
        </li>,
        <li>
            <a href="/read/3">js</a>
        </li>,
    ];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read/+t.id'}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode(event.target.id); //이벤트 유발시킨 태그. a태그임
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }
    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

function App() {
    const topics = [
        { id: 1, title: 'html', body: 'html is...' },
        { id: 2, title: 'css', body: 'css is...' },
        { id: 3, title: 'javascript', body: 'javascript is...' },
    ];
    return (
        <div>
            <Header
                title="REACT"
                onChangeMode={() => {
                    alert('Header');
                }}
            ></Header>
            <Nav
                topics={topics}
                onChangeMode={(id) => {
                    alert(id);
                }}
            ></Nav>
            <Article title="Welcome" body="Hello,web"></Article>
        </div>
    );
}

export default App;
