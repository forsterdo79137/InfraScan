FROM nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y \
    python3.10 python3.10-venv python3-pip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY apps/worker/requirements.txt requirements.txt
RUN python3 -m venv .venv && . .venv/bin/activate && \
    pip install --upgrade pip && pip install -r requirements.txt

COPY apps/worker/app app

EXPOSE 8000
CMD ["/bin/bash", "-lc", ". .venv/bin/activate && uvicorn app.main:app --host 0.0.0.0 --port 8000"]


