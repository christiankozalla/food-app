package database

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type OpenFoodFacts struct {
	db *mongo.Database
}

func New(uri string) *OpenFoodFacts {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		cancel() // Cancel the context on error to ensure cleanup
		panic(err)
	}

	// Ensure the connection is established within the timeout by pinging the database
	ctxPing, cancelPing := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancelPing()
	if err = client.Ping(ctxPing, nil); err != nil {
		cancel() // Cancel the original context on ping failure
		panic("database connection timed out - is the database running?")
	}

	db := client.Database("off")
	OpenFoodFacts := OpenFoodFacts{
		db: db,
	}

	return &OpenFoodFacts
}

var projection = bson.M{
	"product_quantity_unit":              1,
	"product_name_de":                    1,
	"product_name_en":                    1,
	"ingredients_text_de":                1,
	"ingredients_text_en":                1,
	"ingredients_text_with_allergens_de": 1,
	"images.front_de":                    1,
	"images.front_en":                    1,
	"nutriscore_data":                    1,
	"nutrition_data_per":                 1,
	"nutriments":                         1,
}

func (off *OpenFoodFacts) FindProductByBarcode(id string) (bson.M, error) {
	var product bson.M
	collection := off.db.Collection("products")
	filter := bson.M{"_id": id}
	options := options.FindOne().SetProjection(projection)
	err := collection.FindOne(context.Background(), filter, options).Decode(&product)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, nil
		}
		return nil, err
	}
	return product, nil
}
