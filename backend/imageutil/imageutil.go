package imageutil

import (
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
)

func ConstructImageUrls(images *bson.M, barcode string) bson.M {
	imageUrls := bson.M{"image_urls": bson.M{}}
	for imageName := range *images {
		image := (*images)[imageName].(bson.M)
		url, err := constructSingleImageUrl(&image, imageName, barcode)
		if err != nil {
			fmt.Printf("ConstructImageUrls Error %v\n", err)
			continue // In production code, you might want to handle this error differently
		}
		imageUrls["image_urls"].(bson.M)[imageName] = url
	}

	return imageUrls
}

// OpenFoodFacts Docs - How to download product images
// https://openfoodfacts.github.io/openfoodfacts-server/api/how-to-download-images/
func constructSingleImageUrl(image *bson.M, imageName, barcode string) (string, error) {
	rev, ok := (*image)["rev"].(string)
	if !ok {
		return "", fmt.Errorf("invalid or missing rev field")
	}

	resolution := "400"

	// Barcode: "301 762 042 2003" -> 301/762/042/2003
	// resolutions are 100, 200, 400 or full
	// https://openfoodfacts-images.s3.eu-west-3.amazonaws.com/data/301/762/042/2003/<image_name>.<rev>.<resolution>.jpg
	if len(barcode) == 13 {
		return fmt.Sprintf("https://images.openfoodfacts.org/images/products/%s/%s/%s/%s/%s.%s.%s.jpg", barcode[0:3], barcode[3:6], barcode[6:9], barcode[9:13], imageName, rev, resolution), nil
	} else {
		return fmt.Sprintf("https://images.openfoodfacts.org/images/products/%s/%s.%s.%s.jpg", barcode, imageName, rev, resolution), nil
	}
}
