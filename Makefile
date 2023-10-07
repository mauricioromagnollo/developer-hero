dev:
	@docker-compose up -d
.PHONY: dev

stop:
	@docker-compose stop
.PHONY: stop

start:
	@docker-compose start
.PHONY: start

down:
	@docker-compose down -v
.PHONY: down
