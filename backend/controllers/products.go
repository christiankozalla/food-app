package controllers

import (
	"fmt"
	"net/http"

	"github.com/christiankozalla/food-app/database"
	"github.com/labstack/echo/v5"
)

type ProductsController struct {
	DbClient *database.OpenFoodFacts
}

func (pc *ProductsController) GetProductByBarcode(c echo.Context) error {
	barcode := c.PathParam("barcode")
	if len(barcode) == 0 {
		return echo.NewHTTPError(http.StatusBadRequest, "Kein Barcode angegeben.")
	}

	product, err := pc.DbClient.FindProductByBarcode(barcode)

	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, fmt.Sprintf("Dein Produkt mit Barcode %s wurde nicht gefunden", barcode))
	}

	return c.JSON(http.StatusOK, product)
}
