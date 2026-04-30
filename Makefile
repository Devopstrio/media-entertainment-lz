.PHONY: help build up down test lint migrate ingest-content transcode-media distribute-content analytics-report

help:
	@echo "Media & Entertainment Landing Zone - Management Commands"
	@echo "------------------------------------------------------"
	@echo "build              : Build all containers"
	@echo "up                 : Start all services"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "ingest-content     : Simulate media ingestion into the pipeline"
	@echo "transcode-media    : Trigger ABR transcoding for ingested assets"
	@echo "distribute-content : Orchestrate multi-region CDN distribution"
	@echo "analytics-report   : Generate streaming and viewer behavior report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-content:
	docker-compose exec api python scripts/ingest/push_media.py

transcode-media:
	docker-compose exec api python scripts/transcode/run_ffmpeg.py

distribute-content:
	docker-compose exec api python scripts/distribute/cdn_sync.py

analytics-report:
	docker-compose exec api python scripts/analyze/viewer_stats.py
