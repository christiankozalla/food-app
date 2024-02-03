package main

import (
	"log"

	"github.com/christiankozalla/food-app/database"
	"github.com/christiankozalla/food-app/imageutil"
	"go.mongodb.org/mongo-driver/bson"
)

func main() {
	var dbConnectionString = "mongodb://localhost:27017/off"

	dbClient := database.New(dbConnectionString)
	product, err := dbClient.FindProductByBarcode("3017620422003")
	if err != nil {
		panic(err)
	}

	images, ok := product["images"].(bson.M)
	if !ok {
		log.Fatal("Type assertion failed for images field")
	}
	imageUrls := imageutil.ConstructImageUrls(&images, "3017620422003")
	// log.Printf("Product found: %+v\n", product)

	if err != nil {
		log.Printf("Error: %+v\n", err)
		return
	}
	log.Printf("url: %s", imageUrls["image_urls"])
}
