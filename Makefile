dev:
	@docker-compose up -d
.PHONY: dev

down:
	@docker-compose down
.PHONY: down
