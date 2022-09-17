DCOMPOSE:=docker-compose.yaml
DOCKER_BUILD_KIT:=COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

run: docker build
watch: docker build-watch
docker: docker-down cleanup docker-build docker-up

docker-down:
	docker-compose -f ${DCOMPOSE} down --remove-orphans

docker-build:
	${DOCKER_BUILD_KIT} docker-compose -f ${DCOMPOSE} build

docker-up:
	docker-compose -f ${DCOMPOSE} up -d --remove-orphans

cleanup:
	npm run cleanup

build:
	npm run build

build-watch:
	npm run build:watch
