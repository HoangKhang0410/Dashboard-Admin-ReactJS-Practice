import "./newProduct.css";
import {useState} from 'react';
import {useGlobalContext} from '../../context';

export default function NewProduct() {

  const {addProduct} = useGlobalContext();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && stock && active ){
      const newProduct = {
        id: new Date().getTime().toString(),
        name,
        stock,
        status: active ? 'active' : 'passive',
        img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price: '$120.00',
      }
      addProduct(newProduct);
      setName('');
      setStock('');
      setActive(true);
    }else{
      alert('you must fill out the form');
    }
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" value={stock} onChange={(e)=>setStock(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active" value={active} onChange={(e)=>setActive(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}