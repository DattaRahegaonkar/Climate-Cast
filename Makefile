DOCKER_COMPOSE := docker-compose

OS := $(shell uname)


build:
ifeq ($(OS),Linux)
	@echo "Building on Linux"
	docker build -t climate-cast-image .
endif

run:
ifeq ($(OS),Linux)
	@echo "Running the container on Linux"
	docker run -d --name climate-app -p 5000:5173 climate-cast-image:latest
endif

up:
	$(DOCKER_COMPOSE) up -d

down:
	 $(DOCKER_COMPOSE) down
