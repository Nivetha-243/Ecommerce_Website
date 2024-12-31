import axios from 'axios';
import React, { useState } from 'react';
import './admin.css';
import { Link } from 'react-router';

const Admin = () => {
    const [product_name, setproductname] = useState('');
    const [category, setcategory] = useState('');
    const [price, setprice] = useState('');
    const [product_image, setimage] = useState({});
    const [top_view, settopview] = useState(null);
    const [right_side_view, setrightsideview] = useState(null);
    const [left_side_view, setleftsideview] = useState(null);
    const [video, setvideo] = useState(null);
    const [product_color1, setcolor1] = useState('');
    const [product_color2, setcolor2] = useState('');
    const [product_color3, setcolor3] = useState('');
    const [product_color4, setcolor4] = useState('');
    const [product_id, setproductid] = useState('');
    const [about_product, setaboutproduct] = useState('');
    const [adminname, setadminname] = useState('');
    const [adminpassword, setadminpassword] = useState('');




    const AdminCredential = (e) => {
        e.preventDefault();
        if (adminname !== "" && adminpassword !== "") {
            if (adminname === "admin" && adminpassword === "password") {
                alert("Login Sucess...")
                const formData = new FormData();
                formData.append('product_id', product_id);
                formData.append('product_name', product_name);
                formData.append('category', category);
                formData.append('price', price);
                formData.append('product_image', product_image);
                formData.append('top_view', top_view);
                formData.append('right_side_view', right_side_view);
                formData.append('left_side_view', left_side_view);
                formData.append('video', video);
                formData.append('product_color1', product_color1);
                formData.append('product_color2', product_color2);
                formData.append('product_color3', product_color3);
                formData.append('product_color4', product_color4);
                formData.append('about_product', about_product);
                axios.post('http://127.0.0.1:8000/api/products/uploads/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        alert('Data uploaded successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error uploading data:', error.message);
                    });
            }
            else {
                alert("Please check admin credentials...")
            }
        }

        else {
            alert("Please fill admin details")
        }
    }
    return (
        <div className='coloradmin'>
        <div className='adminform'>
            <form onSubmit={AdminCredential}>
                <div>
                    <h1>Admin Page</h1>
                    <h3>This page can only access by the admins</h3>
                </div>
                <div>
                    <label>Admin Username:</label>
                    <input type="text" value={adminname} onChange={(e) => setadminname(e.target.value)}></input>
                </div>
                <div>
                    <label>Admin Password:</label>
                    <input type="password" value={adminpassword} onChange={(e) => setadminpassword(e.target.value)}></input>
                </div>
                <div>
                    <label>Product ID: </label>
                    <input type="text" value={product_id} onChange={(e) => setproductid(e.target.value)}></input>
                </div>
                <div>
                    <label>Product Name: </label>
                    <input type="text" value={product_name} onChange={(e) => setproductname(e.target.value)}></input>
                </div>
                <div>
                    <label>Product Category: </label>
                    <select value={category} onChange={(e) => setcategory(e.target.value)}>
                        <option>Mobiles</option>
                        <option>Gift Cards</option>
                        <option>Clothing</option>
                        <option>Health</option>
                        <option>Pet Corner</option>
                        <option>Books</option>
                        <option>Beauty</option>
                        <option>Kitchen</option>
                        <option>Bed Room</option>
                        <option>Sport</option>
                        <option>Bags</option>
                    </select>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" value={price} onChange={(e) => setprice(e.target.value)}></input>
                </div>
                <div>
                    <label>Upload Product Photo: </label>
                    <input type="file" onChange={(e) => setimage(e.target.files[0])} accept="image/*"></input>
                </div>
                <div>
                    <label>Top View: </label>
                    <input type="file" onChange={(e) => settopview(e.target.files[0])} accept="image/*"></input>
                </div>
                <div>
                    <label>Right Side View: </label>
                    <input type="file" onChange={(e) => setrightsideview(e.target.files[0])} accept="image/*"></input>
                </div>
                <div>
                    <label>Left Side View: </label>
                    <input type="file" onChange={(e) => setleftsideview(e.target.files[0])} accept="image/*"></input>
                </div>
                <div>
                    <label>Video: </label>
                    <input type="file" onChange={(e) => setvideo(e.target.files[0])} accept="video/*"></input>
                </div>
                <div>
                    <label>Available Colors: </label>
                    <input type="color" value={product_color1} onChange={(e) => setcolor1(e.target.value)}></input>
                    <input type="color" value={product_color2} onChange={(e) => setcolor2(e.target.value)}></input>
                    <input type="color" value={product_color3} onChange={(e) => setcolor3(e.target.value)}></input>
                    <input type="color" value={product_color4} onChange={(e) => setcolor4(e.target.value)}></input>
                </div>
                <div>
                    <label>About Product: </label><br></br>
                    <textarea type="text" value={about_product} onChange={(e) => setaboutproduct(e.target.value)}></textarea>
                </div>
                <div id='adminbutton'>
                    <button>Add</button><br></br>
                    <button><Link to="/Home" className='adminbutton'>Logout</Link></button>

                </div>


            </form>

        </div>
        </div>

    )
}

export default Admin;
