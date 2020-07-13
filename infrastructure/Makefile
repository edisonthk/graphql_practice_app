gql-gen:
	docker-compose exec backend go run github.com/99designs/gqlgen
gql-serve:
	docker-compose exec backend go run server.go
xo-gen:
	docker-compose exec backend mkdir -p ./models \
	&& xo mysql://docker:docker@db/react_go_development -o models
gb-develop:
	docker-compose exec frontend gatsby develop -H 0.0.0.0
