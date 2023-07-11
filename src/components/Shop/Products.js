import ProductItem from './ProductItem';
import classes from './Products.module.css';
const items=[
  { id:'1',
     title:'Test1',
  price:6,
  description:'This is a first product - amazing!'},
  { id:'2', 
    title:'Test2',
  price:5,
  description:'This is a second product - amazing!'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       { items.map(item=><ProductItem
         key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          id={item.id}
        />)}
      </ul>
    </section>
  );
};

export default Products;
