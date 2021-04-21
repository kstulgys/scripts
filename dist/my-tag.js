const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

let domContainer = document.querySelector('#like_button_container');

if (!domContainer) {
    const body = document.getElementsByTagName('BODY')[0]
    domContainer = document.createElement('div')
    domContainer.setAttribute('id', 'like_button_container')
    body.append(domContainer)
    console.log(domContainer)
}

ReactDOM.render(e(LikeButton), domContainer);

// // ((window) => {
// console.log("hello world from git repo")
// const header = document.getElementById("shopify-section-header")
// header.style.backgroundColor = "green"
// console.log({ header })


// //   <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.2/antd.min.js" integrity="sha512-gzSgIZOTyFwBSIX3ezCnuPyUgKGsJ/tGXLZ1uF7En1I+/FTuaz7iJmazu3N+J0PkpHmSZ4Q+AmoOxkbjhi4Y7A==" crossorigin="anonymous"></script>
// {/* <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script> */}

// const head = document.getElementsByTagName('HEAD')[0]

// // const reactTag = document.createElement('script')
// // reactTag.setAttribute('src','https://unpkg.com/react@17/umd/react.production.min.js')
// // reactTag.setAttribute('crossorigin')

// const reactTag = document.createElement('script')
// reactTag.setAttribute('src', 'https://unpkg.com/react@17/umd/react.production.min.js')
// reactTag.setAttribute('crossorigin', 'crossorigin')
// reactTag.setAttribute('defer', 'defer')
// reactTag.setAttribute('type', 'text/javascript');

// const reactDomTag = document.createElement('script')
// reactDomTag.setAttribute('src', 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js')
// reactDomTag.setAttribute('crossorigin', 'crossorigin')
// reactDomTag.setAttribute('defer', 'defer')
// reactDomTag.setAttribute('type', 'text/javascript');

// const antTag = document.createElement('script')
// antTag.setAttribute('src', 'https://unpkg.com/@babel/standalone/babel.min.js')
// antTag.setAttribute('crossorigin', 'anonymous')
// antTag.setAttribute('defer', 'defer')
// antTag.setAttribute('type', 'text/javascript');

// console.log({ head })
// head.append(reactTag)
// head.append(reactDomTag)
// head.append(antTag)

// const cartLinks = [...document.querySelectorAll("a[href='/cart']")]

// console.log({ cartLinks })

// cartLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//         window.alert("Cart clicked")
//     })
// })



// const body = document.getElementsByTagName('BODY')[0]
// const rootElement = document.createElement("div");
// rootElement.setAttribute('id', 'my-id')
// rootElement.style.height = '20px'
// rootElement.style.backgroundColor = 'pink'

// body.prepend(rootElement)

// function App() {
//     return (
//         <div>
//             <p>Hello world, this is from JSX</p>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('my-id'));