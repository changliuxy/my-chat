package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/my-chat/backend/config"
	"github.com/my-chat/backend/routes"
)

func main() {
	cfg := config.LoadConfig()
	r := gin.Default()
	routes.SetupRoutes(r)

	err := r.Run(fmt.Sprintf(":%d", cfg.Server.Port))
	if err != nil {
		panic("Failed to start server: " + err.Error())
	}
}
