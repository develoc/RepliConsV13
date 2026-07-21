.PHONY: help install dev build test clean docker-up docker-down docker-logs db-migrate db-seed

help:
	@echo 'RepliCons Development Commands'
	@echo ''
	@echo 'Setup:'
	@echo '  make install       - Install dependencies'
	@echo '  make dev           - Start development environment'
	@echo '  make build         - Build for production'
	@echo ''
	@echo 'Database:'
	@echo '  make db-migrate    - Run database migrations'
	@echo '  make db-seed       - Seed database'
	@echo ''
	@echo 'Docker:'
	@echo '  make docker-up     - Start Docker containers'
	@echo '  make docker-down   - Stop Docker containers'
	@echo '  make docker-logs   - View Docker logs'

install:
	cd backend && npm install
	cd ../frontend && npm install

dev: docker-up db-migrate
	@echo '🚀 Development environment started!'

build:
	cd backend && npm run build
	cd ../frontend && npm run build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f

db-migrate:
	cd backend && npm run prisma:migrate

db-seed:
	cd backend && npm run prisma:seed

test:
	cd backend && npm test

lint:
	cd backend && npm run lint

clean:
	rm -rf backend/dist backend/node_modules
	rm -rf frontend/build frontend/node_modules