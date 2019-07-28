import uuidv4 from 'uuid/v4'

const Product = function (value) {
    this.id = uuidv4();
    this.value = value;
}

export default Product;