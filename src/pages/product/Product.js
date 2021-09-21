import {useParams} from 'react-router-dom';
import {useState} from 'react';
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import {useGlobalContext} from '../../context';

export default function Product() {

    const {products, updateProduct} = useGlobalContext();
    const {productId} = useParams();
    const productTarget = products.find(item => parseInt(item.id) === parseInt(productId));
    const {name, status} = productTarget;
    const [productStatus, setProductStatus] = useState(status);
    const [productName, setProductName] = useState(name);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName && productStatus){
            const newProduct = {
                id: productId,
                name: productName,
                img:
                "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                stock: 123,
                status: productStatus,
                price: "$120.00",
            }
            updateProduct(productId, newProduct);
            setProductName('');
            setProductStatus('active');
        }
        else{
            alert('you must fill out the form');
        }
    }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm" onSubmit={handleSubmit}>
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active" value={productStatus} onChange={(e)=>setProductStatus(e.target.value)}>
                      <option value="active">Yes</option>
                      <option value="passive">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" type="submit">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}