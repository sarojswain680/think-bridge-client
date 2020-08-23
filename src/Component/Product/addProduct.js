import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { IMAGE_UPLOAD_URL } from '../../Constant/index';
import { createProduct } from '../../Redux/Action/index';


class CreateProductScreens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desdcription: '',
            image: '',
            url: '',
            price: ''
        }
    }

    CreatePost = (e) => {
        const { name, description, image, price } = this.state;
        e.preventDefault()
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Onicare")
        data.append("cloud_name", "dlrmn0ttw")

        fetch(IMAGE_UPLOAD_URL, {
            method: "POST",
            body: data
        })
            .then((res) => res.json())
            .then((datafinal) => {
                console.log("ndsvnkd", datafinal.url)
                this.props.createProduct(name, description, price, datafinal.url)
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { name, description, price } = this.state;
        return (
            <div className="card input-filed" style={{ margin: "150px auto", maxWidth: "500px", padding: "20px", textAlign: 'center' }}>
                <input type="text"
                    placeholder="title"
                    value={name}
                    name="title"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    style={{ margin: "10px auto" }}
                />
                <input type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    style={{ margin: "10px auto" }}

                />
                <input type="text"
                    placeholder="price"
                    name="price"
                    value={price}
                    onChange={(e) => this.setState({ price: e.target.value })}
                    style={{ margin: "10px auto" }}

                />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload Image</span>
                        <input
                            type="file"
                            name="file"
                            style={{ margin: "10px auto" }}
                            onChange={(e) => this.setState({ image: e.target.files[0] })} />
                    </div>
                </div>
                <Button className="btn" type="submit" onClick={(e) => this.CreatePost(e)}>{"Add"}</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ Product }) => {
    const { loading, product } = Product;
    return { loading, product };
}
const mapDispatchToProps = dispatch => {
    return {
        createProduct: (name, description, price, photo) => {
            dispatch(createProduct(name, description, price, photo));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductScreens)  