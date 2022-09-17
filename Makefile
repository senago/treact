DCOMPOSE:=docker-compose.yaml
DOCKER_BUILD_KIT:=COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

run: cleanup docker watch

docker: docker-down docker-build docker-up

docker-down:
	docker-compose -f ${DCOMPOSE} down --remove-orphans

docker-build:
	${DOCKER_BUILD_KIT} docker-compose -f ${DCOMPOSE} build

docker-up:
	docker-compose -f ${DCOMPOSE} up -d --remove-orphans

cleanup:
	npm run cleanup

watch:
	npm run build:watch
