// usage in docker
// docker exec -i food-mongodb mongo < findProduct.js > product-3017620422003.json 
use off;
printjson(db.products.findOne({_id:"3017620422003"}));
