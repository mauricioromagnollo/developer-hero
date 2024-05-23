dev:
	@docker-compose up -d
.PHONY: dev

docs:
	@docker-compose up -d
.PHONY: docs

stop:
	@docker-compose stop
.PHONY: stop

start:
	@docker-compose start
.PHONY: start

down:
	@docker-compose down -v
.PHONY: down
