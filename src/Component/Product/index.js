
import Grid from '@material-ui/core/Grid';
import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getAllProduct } from '../../Redux/Action/index';
import Layout from "../CustomModules/layout";
import ReviewCard from '../CustomModules/Card';


class ProductScreens extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.getAllProduct()
    }

    render() {
        const { loading, product } = this.props;
        console.log("niervnaerionvoeir", product)
        return (
            <div className="company">
                {
                    loading && (product && product.length === 0) ?
                        <Spinner animation="grow" variant="secondary" />
                        :
                        <Layout>
                            <div className={{ flexGrow: 1 }}>
                                <Grid container>
                                    <Grid item xs={15} sm={12} md={12}>
                                        <Grid container>
                                            {
                                                this.props.product && this.props.product.map((item, index) => {
                                                    return (
                                                        <Grid item xs={5} sm={5} md={3} className="marginBottom40 marginRight40">
                                                            <ReviewCard data={item} />
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Layout>
                }
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
        getAllProduct: () => {
            dispatch(getAllProduct());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductScreens)  