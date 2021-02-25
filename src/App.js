import logo from './logo.svg';
import './App.css';
import productImage from './product-image.png'; 
import { useEffect, useState } from 'react';


const App = () => {
  const {name, age, village} = {
    name: "Rakib",
    age: 32,
    village: "shibpur"
  }
  const tshirts = [
    {name:'Tshirt-1', price:"$10"}, 
    {name:'Tshirt-2', price:"$35"}, 
    {name:'Tshirt-3', price:"$45"}
  ]
  const bags = [
    {name:"Lather Bag", price:"$140"},
    {name:"Geans Bag", price:"$130"},
    {name:"School Bag", price:"$281"},
    {name:"Side Bag", price:"$199"},
    {name:"Laptop Bag", price:"$449"},
    {name:"Spiderman Bag", price:"$100"}
  ]

  return (
    <div className="App">
      <header className="App-header mt-10">
        <Counter></Counter>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Person Details= {name} age: {age} Village{village}</p>
      </header>
      {/* tshirt container */}
      <div className="shopping-cart-container">
      <ShoppingCart cartDetails = {tshirts[0]}></ShoppingCart>
      <ShoppingCart cartDetails = {tshirts[1]}></ShoppingCart>
      <ShoppingCart cartDetails = {tshirts[2]}></ShoppingCart>
      </div>
      {/* bags shopping card container */}
      <div className="shopping-cart-container">
      {bags.map(bag => <BagsCart bagsDetails = {bag}></BagsCart>)}
      </div>

      {/* Users Details Container */}
        <Posts></Posts>
    </div>
  );
}

// Learned How to create component

function ShoppingCart(props) {
  const {name, price} = props.cartDetails;
  return (
    <div className="shopping-cart">
      <h3>{name}</h3>
      <img src={productImage} alt="product"/>
      <h3>Buy Now and 20% off</h3>
      <h4 style={{fontWeight:"700"}}> Price: {price}</h4>
      <button>BUY NOW</button>
    </div>
  );
}

function BagsCart(props2) {
  const {name, price} = props2.bagsDetails;
  // console.log(name, price);
  return (
    <div className="shopping-cart">
      <h3>{name}</h3>
      <img src={productImage} alt="product"/>
      <h3>Buy Now and 20% off</h3>
      <h4 style={{fontWeight:"700"}}> Price: {price}</h4>
      <button>BUY NOW</button>
    </div>
  );
}


// Learned uses of useState and React eventhandler
function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


// Learned useEffect, useState

const Posts = () => {
  const [posts, setPosts] = useState([0]);
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, []);

  return (
    <div className="shopping-cart-container">
      {
        posts.map(post =>
        <div className="post-card">
          <h5>title: {post.title}</h5> 
          <p>{post.body}</p>
        </div>
        )
      }
    </div>
  )
}






export default App;
